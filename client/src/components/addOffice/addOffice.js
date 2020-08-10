import React, { useState ,useEffect} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField, Link  } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PhotoCamera } from "@material-ui/icons"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';
import Navbar from "../../navbar/navbar";

import jwt_decode from 'jwt-decode';
//const nodemailer = require('nodemailer');
var imgUrl="";
var email ="";
export default function AddOffice() {

    useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);
    console.log(decoded);
    email =decoded.email;
    console.log(email);
	});
	const [add, setadd] = useState({
		Discription: '',
		location: '',
		price : 0
	});
	const [addch, setaddch] = useState({
		Vip_wifi: false,
		conditioning: false,
		ele: false,
		water: false,
		coffeeandtea: false,
	});

	const handleChange = event => {
		setadd({ ...add, [event.target.name]: event.target.value });
	};
	const handleChange2 = event => {
		setaddch({ ...addch, [event.target.name]: true });
	};

	const handleSubmit = e => {
		e.preventDefault();
		let office = {
			...add,
			...addch,
		};
     office["email"]=email;
     office["imgUrl"]=imgUrl;
		console.log(office);
  
		console.log(addch);
		axios.post(`http://localhost:5000/addoffice`, office)
		  .then(function (response) {
		      console.log(response)
		  })
		  .catch(function (error) {
		      console.log(error)
		  })
	};
    const [location, setlocation, imageUrl, imageAlt] = useState('');
    const usemYStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = usemYStyles();

    // const handleChange = (event) => {
    //     setlocation(event.target.value);
    // }
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
const uploadImage = (e)=> {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "dbimage");
      setLoading(true);
      axios
        .post("https://api.cloudinary.com/v1_1/dwwkrlpkl/image/upload", data)
        .then((response) => {
           imgUrl = response.data["secure_url"];
          console.log(imgUrl)
          setImage(imgUrl);

          // handleUrlChangeT(imgUrl);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (
        <div>
			<Navbar/>
         <Grid container style={{ minHeight: '100vh' }}>
				<Grid
					container
					item
					xs={12}
					sm={6}
					alignItems='center'
					direction='coulumn'
					justify='space-between'
					style={{ padding: 10 }}
				>
					<div />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							maxWidth: 400,
							minWidth: 300,
						}}
					>
						<TextField
							name='Discription'
							value={add.Discription}
							onChange={handleChange}
							label='Discription'
							margin='normal'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'></InputAdornment>
								),
							}}
						/>
						{/* <TextField
                        value={add.location}
                        onChange={handleChange}
							id='standard-number'
							label='Number'
							type='number'
							InputLabelProps={{ shrink: true }}
						/> */}
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Location</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								name='location'
								value={add.location}
								onChange={handleChange}
							>
								<MenuItem value={'gaza'}>Gaza</MenuItem>
								<MenuItem value={'KhanYounes'}>KhanYounes</MenuItem>
								<MenuItem value={'Rafah'}>Rafah</MenuItem>
								<MenuItem value={'Dair AlBalah'}>Dair AlBalah</MenuItem>
								<MenuItem value={'Beit Lahia'}>Beit Lahia</MenuItem>
								<MenuItem value={'Jabalia'}>Jabalia</MenuItem>
							</Select>
                            <TextField
                            name='price'
                            type = "number"
							value={add.price}
							onChange={handleChange}
							label='price'
							margin='normal'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'></InputAdornment>
								),
							}}
						/>
						</FormControl>{' '}
						<div style={{ hight: 20 }} />
						<FormControlLabel
							control={
								<Checkbox
									name='Vip_wifi'
									value={add.Vip_wifi}
									onChange={handleChange2}
									icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
									checkedIcon={<CheckBoxIcon fontSize='small' />}
								/>
							}
							label='VIP WIFI'
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='conditioning'
									value={add.conditioning}
									onChange={handleChange2}
									icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
									checkedIcon={<CheckBoxIcon fontSize='small' />}
								/>
							}
							label='conditioning'
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='ele'
									value={add.ele}
									onChange={handleChange2}
									icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
									checkedIcon={<CheckBoxIcon fontSize='small' />}
								/>
							}
							label='24 hours electricity'
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='water'
									value={add.water}
									onChange={handleChange2}
									icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
									checkedIcon={<CheckBoxIcon fontSize='small' />}
								/>
							}
							label='ًWater'
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='coffeeandtea'
									value={add.coffeeandtea}
									onChange={handleChange2}
									icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
									checkedIcon={<CheckBoxIcon fontSize='small' />}
								/>
							}
							label='Coffe AND Tea'
						/>
						<div style={{ height: 20 }} />
						<div className={classes.root}>
							{/* <input
                            value ={"hhjjjjjjj"}
                            onChange={handleChange}
								accept='image/*'
								className={classes.input}
								id='contained-button-file'
								multiple
								type='file'
							/>
							<label htmlFor='contained-button-file'>
								<Button variant='contained' color='primary' component='span'>
									Upload Office Photo
								</Button>
							</label> */}
							{/* <input
                              name =
								value={'hhjjjjjjj'}
								onChange={handleChange}
								accept='image/*'
								className={classes.input}
								id='icon-button-file'
								type='file'
							/>
							<label htmlFor='icon-button-file'>
								<IconButton
									color='primary'
									aria-label='upload picture'
									component='span'
								>
									<PhotoCamera />
								</IconButton>
							</label> */}
							<Link href='/ownerPage' onClick={console.log('kk')}>
							<Button
								color='primary'
								variant='contained'
								onClick={handleSubmit}
							>
								Add One
							</Button>
							</Link>
						</div>
					
      <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
                 </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
						}
// const nodemailer = require('nodemailer');
// function sendEmail(email, number) {
//   console.log('Number:   ' + number);

//   // the function that sends the email

//   nodemailer.createTestAccount((err, account) => {
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'bookingfinder5by5@gmail.com', // generated ethereal user
//         pass: 'book@123456', // generated ethereal password
//       },
//     });

//     // send mail with defined transport object
//     transporter.sendMail(
//       {
//         from: 'bookingfinder5by5@gmail.com', // sender address
//         to: email, // list of receivers
//         text: 'Dear customer', // plain text body
//         html: `<h2>Dear customer</h2><p>your office is added  : </p> `, // html body
//       },
//       (err, info) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log('Message sent: %s', info.messageId);
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//       }
//     );
//   });
// }

// module.exports = sendEmail;