var db = require("./../database-mysql/index");
exports.getbooking = function(req,res){
    const email = req.body.email;
    console.log(email)
    
    let sql = "SELECT * FROM bookingdata WHERE emailowner = ?" ;
    db.connection.query(sql,[email],function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            
            "success":results
              });
              
          }
          console.log(results)
      });
      
}