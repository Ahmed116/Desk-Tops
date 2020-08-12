var db = require("./../database-mysql/index");
const nodemailer = require ('nodemailer')
exports.addbooking = function(req,res){
    console.log(req.body);
    var emailuser = req.body.emailuser;
     var emailowner = req.body.emailuser;
    let sql = "INSERT INTO bookingdata SET ?";
    let post = {
    startdate :req.body.startdate,
    enddate :req.body.enddate,
    emailuser :req.body.emailuser,
    emailowner :req.body.emailuser

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
              to: emailowner, // TODO: email receiver
              subject: 'WELECOME IN BOOKING FINDER APP ',
              text: 'THE USER WITH THIS EMAIL ' + emailuser + '  booking the office'
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