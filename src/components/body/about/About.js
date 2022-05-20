import classes from "./About.module.css";
import AboutHeader from './aboutComponents/AboutHeader'
function About() {
    return <div className={classes.about}>
        <AboutHeader />
    </div>
}

export default About;