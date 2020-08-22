var db = require("./../database-mysql/index");
exports.deletoff = function(req,res){
    const office_id = req.body.office_id;
    console.log(office_id )
    let sql = "DELETE FROM officedata WHERE office_id= ?" ;
    db.connection.query(sql,[office_id],function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":"deleted"
              });
              
          }
      });
      
}