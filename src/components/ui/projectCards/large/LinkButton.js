import classes from "./LinkButton.module.css";

function LinkButton(props) {
  let buttonClass = classes.linkButton;
  return (
    <div className={classes.center}>
      {props.mobile && (
        <button className={buttonClass}>
          <a href={props.link} target="_blank" rel="noreferrer">
            <svg width="180px" height="60px" viewBox="0 0 180 60">
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
            </svg>
            <span>VIEW LIVE</span>
          </a>
        </button>
      )}
      {!props.mobile && (
        <button className={buttonClass}>
          <a href={props.link} target="_blank" rel="noreferrer">
            <svg width="180px" height="60px" viewBox="0 0 180 60">
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
            </svg>

            <span className={classes.noMobile}>NO MOBILE AVAILABLE</span>
            <span className={classes.yesMobile}>VIEW LIVE</span>
          </a>
        </button>
      )}
    </div>
  );
}

export default LinkButton;
