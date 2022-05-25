import classes from "./Layout.module.css";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";

function Layout() {
  return (
    <div className={classes.layout}>
      <NavBar></NavBar>
      <main>
        <Body></Body>
      </main>
    </div>
  );
}

export default Layout;
