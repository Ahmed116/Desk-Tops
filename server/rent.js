var db = require("./../database-mysql/index");
exports.addbooking = function(req,res){
    console.log(req.body);
    let sql = "INSERT INTO bookingdata SET ?";
    let post = {
    startdate :req.body.startdate,
    enddate :req.body.enddate,
    emailuser :req.body.emailuser,
    emailowner :req.body.emailowner

    }
    db.connection.query(sql,post, function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":"added"
              });
              
          }
      });
      
}