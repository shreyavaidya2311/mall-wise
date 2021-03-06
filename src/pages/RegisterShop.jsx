import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import logo from "../assets/logo-dark.png";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterShop = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const handleRegister = () => {
    if (name === "" || category === "" || link === "") {
      alert("Please fill all values");
    } else {
      let shopowner_ID = localStorage.getItem("shopowner_ID");
      var body = {
        name: name,
        category: category,
        shopowner_id: shopowner_ID,
        shop_img: link,
      };
      axios
        .post("http://localhost:5000/shop/register-shop", body)
        .then((res) => {
          window.location.replace("http://localhost:3000/myshops");
        })
        .catch((e) => console.log(e));
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/");
  };
  return (
    <>
      <AppBar style={{ boxShadow: "none" }} color="primary">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between" spacing={4}>
                <Grid item>
                  <Link
                    to="/myshops"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button color="secondary" size="large">
                      <b>My Shops</b>
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/sregister"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button color="secondary" size="large">
                      <b>Register Shop</b>
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    size="large"
                    onClick={handleLogout}
                    variant="outlined"
                  >
                    <b>LOGOUT</b>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div
        style={{
          marginTop: "3em",
        }}
      >
        <Grid justify="center" container>
          <Card variant="outlined" style={{ margin: "2rem", width: "35rem" }}>
            <CardContent>
              <form>
                <Typography
                  style={{ fontSize: "1rem" }}
                  variant="overline"
                  display="block"
                >
                  Register a Shop
                </Typography>
                <hr />
                <br />
                <TextField
                  name="shopName"
                  variant="outlined"
                  required
                  fullWidth
                  id="shopName"
                  label="Shop Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <br />
                <Select
                  name="shopCategory"
                  variant="outlined"
                  required
                  fullWidth
                  id="shopCategory"
                  label="Shop Category"
                  placeholder="Shop Category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <MenuItem value={"Grocery"}>Grocery</MenuItem>
                  <MenuItem value={"Stationary and Novelties"}>
                    Stationary and Novelties
                  </MenuItem>
                  <MenuItem value={"Pharmacy"}>Pharmacy</MenuItem>
                  <MenuItem value={"Clothing and Accessories"}>
                    Clothing and Accessories
                  </MenuItem>
                  <MenuItem value={"Cosmetics"}>Cosmetics</MenuItem>
                </Select>
                <br />
                <br />
                <TextField
                  name="shopImage"
                  variant="outlined"
                  required
                  fullWidth
                  id="shopImage"
                  label="Shop Image Link"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
                <br />
                <br />
                <Grid justify="center" spacing={3} container>
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<CheckBox color="secondary" />}
                      color="secondary"
                      onClick={handleRegister}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>
  );
};

export default RegisterShop;
