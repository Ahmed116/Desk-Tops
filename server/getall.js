var db = require("./../database-mysql/index");
exports.getoff = function(req,res){
    let sql = "SELECT * FROM officedata ORDER BY price";
    db.connection.query(sql, function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":results
              });
              
          }
      });
      
}