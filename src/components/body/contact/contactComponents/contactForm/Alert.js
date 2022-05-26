import classes from "./Alert.module.css";

function Alert(props){
    let color;
    if (props.good ? color = classes.good : color = classes.bad)
    return <div className={classes.alert}>
        <div className={`${classes.alertBody} ${color}`}>
           { props.good && <p>thank you for your message! I will reply asap!</p>}
           { !props.good && <p>oops! it seems some required information is missing or is incorrect</p>}
            <div className={classes.close} onClick={()=>{
                props.onClick();
            }}>X</div>
        </div>

    </div>
}

export default Alert;