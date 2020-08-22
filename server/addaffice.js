var db = require("./../database-mysql/index");
exports.addoff = function (req, res) {
  console.log(req.body);

  if (req.body.Discription === "" || req.body.location === "" || req.body.price === "" || req.body.imgUrl === "") {
    res.send("error")
    console.log("errrrrr")
  } else {
    let sql = "INSERT INTO officedata SET ?";
    let post = {
      Discription: req.body.Discription,
      location: req.body.location,
      price: req.body.price,
      Vip_wifi: req.body.Vip_wifi,
      ele: req.body.ele,
      water: req.body.water,
      conditioning: req.body.conditioning,
      coffeeandtea: req.body.coffeeandtea,
      email: req.body.email,
      imgUrl: req.body.imgUrl,
      phoneowner : req.body.phoneowner,
      rating :0
    }
    db.connection.query(sql, post, function (error, results, fields) {
      if (error) {
        return res.send(error)
      } else {
        res.send({
          "code": 200,
          "success": "added"
        });

      }
    });

  }
}