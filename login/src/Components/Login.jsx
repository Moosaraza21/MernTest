import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [username, SetUserName] = useState('');
  const [password, SetPassword] = useState('');
  const [value, SetValue] = useState('');

  const navigate = useNavigate();
  const CallHome = async () => {
    

  }
  const PostData = async(e) => {
    e.preventDefault();
    if (!username || !password) {
      SetValue("updated1")
      console.log("moosa")


    } else {
      if (username === "Moosa12" && password === "123") {
        SetValue("updated")
        navigate("/home")

      } else {
        SetValue("Not")
      }

    }

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
       username,password
      })

    });
    const data = await res.json();



  }
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item lg={12} md={5} sm={4} xs={3} mt={3} >
        <Box bgcolor='white' p={5} textAlign='center'>
          <Box textAlign='center'>
            <Avatar sx={{ textAlign: "center", bgcolor: "blue", textAlign: "Center", width: "150px", height: "70px", fontSize: "230%" }} variant="square">
              Q-HUB
            </Avatar>
          </Box>

        </Box>
      </Grid>
      <Grid item lg={12} md={5} sm={4} xs={3} mt={2} >
        <Box bgcolor='white' p={5} textAlign='center' >
          <Box height="450px" bgcolor="white" width="450px" borderRadius="10px" boxShadow={5}>
            {value === "Not" && (<div> <Alert severity="error">invalid data</Alert></div>)}
            {value === "updated" && (<div> <Alert severity="success">Saved sucessfully</Alert></div>)}
            {value === "updated1" && (<div> <Alert severity="error">Feild Cant Be Empty</Alert></div>)}
            <h2>Log In</h2>
            <TextField onChange={(e) => SetUserName(e.target.value)} sx={{ margin: "5px", width: "370px" }} id="outlined-basic" label="Email or Username" variant="outlined" />
            <TextField type="password" onChange={(e) => SetPassword(e.target.value)} sx={{ margin: "5px", width: "370px" }} id="outlined-basic" label="Password" variant="outlined" />
            <Button onClick={PostData} sx={{ mt: "50px" }} variant="contained">Login</Button>
            <h5>Or</h5>

            <Link sx={{ textDecoration: "none" }} href="/Register">Create a Q-HUB Account</Link> <br />
            <Link sx={{ textDecoration: "none" }} href="#">Forgot Password?</Link>



          </Box>

        </Box>
      </Grid>
    </Grid>

  )
}

export default Login