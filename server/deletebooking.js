var db = require("./../database-mysql/index");
const nodemailer = require ('nodemailer')
exports.deletebooking = function(req,res){
    const booking_id = req.body.booking_id;
    var email = req.body.email;
     var emailowner = req.body.emailowner;
    let sql = "DELETE FROM bookingdata WHERE booking_id= ?" ;
    db.connection.query(sql,[booking_id],function (error, results, fields) {
        if (error) {
          return res.send(error)
        } else {
          res.send({
            "code":200,
            "success":"deleted"
              });
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
                text: 'THE USER WITH THIS EMAIL ' + email + '  DELETE THE BOOKING'
            };
            
            // Step 3
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return console.log(err);
                }
                return console.log('Email sent!!!');
            });
                
            
          }
      });
      
}