import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import React, { useState } from "react";
import DrowerHeader from "./DrowerHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = ["Home", "About", "Contact"];
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ background: "#63012f" }}>
          <Toolbar>
            <AutoAwesomeMotionIcon />
            <Typography sx={{ paddingLeft: "4%", fontSize: "1.5rem" }}>
              MY APP
            </Typography>

            {isMatch ? (
              <>
                <DrowerHeader menus={PAGES} />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "20px" }}
                  textColor="inherit"
                  value={value}
                  indicatorColor="secondary"
                  onChange={(e, value) => {
                    setValue(value);
                  }}
                >
                  {PAGES.map((page, index) => (
                    <Tab label={page} key={index} />
                  ))}
                </Tabs>
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  color="warning"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  color="secondary"
                >
                  SignUp
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default Header;
