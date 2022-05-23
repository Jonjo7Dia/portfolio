import classes from "./LinkButton.module.css";

function LinkButton(props) {
  return (
    <div class={classes.center}>
      <button class={classes.linkButton}>
          <a href="">

        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>VIEW LIVE</span>
        </a>

      </button>
    </div>
  );
}

export default LinkButton;
