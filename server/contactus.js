var db = require("./../database-mysql/index");
const nodemailer = require ('nodemailer')
exports.contactus = function(req,res){
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    let sql = "INSERT INTO contactus SET ?";
    let post = {
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    }
    db.connection.query(sql,post, function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":"added"
              });
              const log = console.log;
            
          // Step 1
          let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL || 'bookingfinder5by5team@gmail.com', // TODO: your gmail account
                  pass: process.env.PASSWORD || 'book@123456' // TODO: your gmail password
              }
          });
          
          // Step 2
          let mailOptions = {
              from: 'bookingfinder5by5team@gmail.com', // TODO: email sender
              to: 'walaasbaih@gmail.com', // TODO: email receiver
              subject: 'WELECOME IN BOOKING FINDER APP ',
              text: "YOU RESEVE MESSAGE FROM " + name + "WITHE EMAIL" + "this is the message " + message 
          };
          
          // Step 3
          transporter.sendMail(mailOptions, (err, data) => {
              if (err) {
                  return log('Error occurs');
              }
              return log('Email sent!!!');
          });
              
        }
          
    });
    
          
}