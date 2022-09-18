import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const DrowerHeader = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // console.log(props);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {props.menus.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ListItemButton key="login">
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton key="SignUp">
            <ListItemIcon>
              <ListItemText>SignUp</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrowerHeader;
