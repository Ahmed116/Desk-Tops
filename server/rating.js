var db = require("./../database-mysql/index");
exports.rating = function(req,res){
    var id = req.body.id;
    var rating = req.body.rating;
    console.log(req.body)
    let sql = `SELECT rating FROM officedata WHERE office_id= ?`;
    let sql2 = `UPDATE officedata SET rating = ? WHERE office_id = ?`;
    var data = 0;
    db.connection.query(sql,id,function (error, result, fields) {
      if (error) {
        return res.send(error)
      } else {
        if(result[0]["rating"]===0){
          data = rating
        }
        else {
         data = (rating +result[0]["rating"])/2}
       var a = [data,id]
          db.connection.query(sql2,a,function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
          
            "success" :"done"
              });
            
          }
      });
      
      
        }

    });
    
   
}

// db.connection.query(sql2,results.success.rating,function (error,result,fields) {

             
//   if (error) {
//     return res.send(error)
//   } else {
//     res.send({
//       "code":200,
      
//       "success" : result
//         });
      
//     }
// })