import classes from "./Layout.module.css";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";
import {useState } from "react";

function Layout() {
  const [currentBody, setCurrentBody]=useState('About')

  return (
    <div className={classes.layout}>
      <NavBar currentView={currentBody}></NavBar>
      <main>
        <Body onView={(string) => {
          setCurrentBody(string)
        }}></Body>
      </main>
      <div className={classes.rotate}>Please rotate device</div>
    </div>
  );
}

export default Layout;
