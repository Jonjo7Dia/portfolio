import classes from "./LinkButton.module.css";

function LinkButton(props) {
  return (
    <div className={classes.center}>
      <button className={classes.linkButton}>
          <a href={props.link} target="_blank" rel="noreferrer">

        <svg width="180px" height="60px" viewBox="0 0 180 60">
          <polyline points="179,1 179,59 1,59 1,1 179,1" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" />
        </svg>
        <span>VIEW LIVE</span>
        </a>

      </button>
    </div>
  );
}

export default LinkButton;
