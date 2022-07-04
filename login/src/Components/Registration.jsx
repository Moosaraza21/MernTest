import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";

const Registration = () => {
  const [username, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  const [value, SetValue] = useState("");

  const PostData = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      SetValue("updated1");
      console.log("moosa");
    }
    const res = await fetch("/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();

    if(res.status===400){
        SetValue("Not")
    }else{
        SetValue("updated")
    }
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item lg={12} md={5} sm={4} xs={3} mt={3}>
        <Box bgcolor="white" p={5} textAlign="center">
          <Box textAlign="center">
            <Avatar
              sx={{
                textAlign: "center",
                bgcolor: "blue",
                textAlign: "Center",
                width: "150px",
                height: "70px",
                fontSize: "230%",
              }}
              variant="square"
            >
              Q-HUB
            </Avatar>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={12} md={5} sm={4} xs={3} mt={2}>
        <Box bgcolor="white" p={5} textAlign="center">
          <Box
            height="450px"
            bgcolor="white"
            width="450px"
            borderRadius="10px"
            boxShadow={5}
          >
            {value === "Not" && (
              <div>
                {" "}
                <Alert severity="error">User Already Registered</Alert>
              </div>
            )}
            {value === "updated" && (
              <div>
                {" "}
                <Alert severity="success">Saved sucessfully</Alert>
              </div>
            )}
            {value === "updated1" && (
              <div>
                {" "}
                <Alert severity="error">Feild Cant Be Empty</Alert>
              </div>
            )}
            <h2>Register Your Self</h2>
            <TextField
              onChange={(e) => SetUserName(e.target.value)}
              sx={{ margin: "5px", width: "370px" }}
              id="outlined-basic"
              label="Email or Username"
              variant="outlined"
            />
            <TextField
              type="password"
              onChange={(e) => SetPassword(e.target.value)}
              sx={{ margin: "5px", width: "370px" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button onClick={PostData} sx={{ mt: "50px" }} variant="contained">
              Sign up
            </Button>
            <h5>Or</h5>
            <Link sx={{ textDecoration: "none" }} href="#">
              Sign in
            </Link>{" "}
            <br />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Registration;
