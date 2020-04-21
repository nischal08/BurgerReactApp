import React from "react";
import classes from "./Toolbar.css";
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "./../../../components/Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/* <div  onClick={props.toggle} >MENU</div> */}
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
