import classes from "./Layout.module.css";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";
import { useEffect, useState } from "react";

function Layout() {
  const [currentBody, setCurrentBody]=useState('About')
  const currentBodyHandler = (string) => {
    setCurrentBody(string);
  }
  useEffect(()=>{

  })
  return (
    <div className={classes.layout}>
      <NavBar currentView={currentBody}></NavBar>
      <main>
        <Body onView={(string) => {
          setCurrentBody(string)
        }}></Body>
      </main>
    </div>
  );
}

export default Layout;
