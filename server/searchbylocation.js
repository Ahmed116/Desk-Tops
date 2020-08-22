var db = require("./../database-mysql/index");
exports.search =function(req,res){

    var location= req.body.location;
    
    db.connection.query('SELECT * FROM officedata WHERE location = ?',[location],function (error, results, fields) {
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