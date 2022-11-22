import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

import Image from './assets/CN.png';

const Auth = () => {
  
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item lg={3} xs={12}>
        <Box height={500} style={{backgroundImage: 'url(./assets/CN.png)', backgroundRepeat: 'no-repeat'}}/>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Box>
        {/* <div>
          <img src={Image}/>
        </div> */}
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography
              variant="h2"
              padding={3}
              textAlign="center"
              color={"black"}
            >
              {isSignup ? "Cadastro" : "Login"}
            </Typography>

            {isSignup && (
              <TextField
                onChange={handleChange}
                name="name"
                value={inputs.name}
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
            )}

            <TextField
              onChange={handleChange}
              name="email"
              value={inputs.email}
              margin="normal"
              type={"email"}
              variant="outlined"
              placeholder="Email"
            />

            <TextField
              onChange={handleChange}
              name="password"
              value={inputs.password}
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />

            <Button
              endIcon={
                isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
              type="submit"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
            >
              {isSignup ? "Cadastre-se" : "Login"}
            </Button>

            <Button
              endIcon={
                isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
              }
              sx={{ marginTop: 3, borderRadius: 3 }}
              onClick={resetState}
            >
              Mudar para o {isSignup ? "Login" : "Cadastro"}
            </Button>
          </Box>
        </form>
      </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
