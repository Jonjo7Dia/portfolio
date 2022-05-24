import classes from "./LinkButton.module.css";

function LinkButton(props) {
    let buttonClass;
    if(props.mobile){
        buttonClass = classes.linkButton;
    }
    else {
        buttonClass = classes.gone;
    }
  return (
    <div className={classes.center}>
      <button className={buttonClass}>
          <a href={props.link} target="_blank" rel="noreferrer">

        <svg width="180px" height="60px" viewBox="0 0 180 60">
          <polyline points="179,1 179,59 1,59 1,1 179,1" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" />
        </svg>
        <span>VIEW LIVE</span>
        </a>

      </button>
      {!props.mobile && <p>Unfortunately no mobile version available </p>}

    </div>
  );
}

export default LinkButton;
