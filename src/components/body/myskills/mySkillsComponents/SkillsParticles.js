import classes from "./SkillsParticles.module.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useMemo, useState } from "react";
function SkillsParticles() {
  const [mobileDevice, setMobileDevice] = useState(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
  useEffect(()=>{
    setMobileDevice(false);

  },[mobileDevice])
  let limit;
  if (!mobileDevice) {
    limit = 200;
  }
  if (mobileDevice) {
    limit = 20;
  }


  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onHover: {
            enable: !mobileDevice,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: 'push',
          }
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
        },
        size: {
          random: {
            enable: false,
          },
          value: 20,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            sync: true,
            destroy: "none",
            startValue: "random",
            minimumValue: 10,
          },
        },
        number: {
          limit: limit,
        },
        fpsLimit: 50,
        shape: {
          options: {
            image: [
              {
                src: "https://cdn.svgporn.com/logos/html-5.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/css-3.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/javascript.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/typescript-icon.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/nodejs.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/react.svg",
                replaceColor: false,
              },
              {
                src: "https://cdn.svgporn.com/logos/express.svg",

                replaceColor: false,
              }
            ],
          },
          type: "image",
        },
      },
    };
  }, [mobileDevice, limit]);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    //loadFull(engine);
  }, []);

  return (
    <div className={classes.skillsParticles}>
      <Particles id={"tsparticles"} init={particlesInit} options={options} />
    </div>
  );
}

export default SkillsParticles;
