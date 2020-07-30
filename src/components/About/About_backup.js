import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./about.scss";

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container center">
      <div className="image-inner-container center">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%"
          }}
        >
          <div className="ratio-inner center">
            <img src={src} class="goggles-img" alt="A VR headset" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      <h2>About Katabi</h2>
      {/* <a href="https://bit.ly/382KSdo">
        divjoy.com
      </a> */}
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: "⚡️ Katabi closes the distance ⚡️",
    description:
      "Katabi enables close collaboration through a WebVR experience that closes the distance between remote teams. It is a virtual world space, accessible through a browser or virtual reality headset, with ready-made meeting and social spaces and an easy-to-learn interface. 'Katabi ko' means 'beside me' in Tagalog, the Filipino language. In quarantine, social distancing no longer allows us to feel the camaraderie of sitting beside someone. Sit next to someone safely in Katabi",
    image:
      "https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fvr-headset-removebg.png?v=1592856275884",
    imageRatio: 784 / 1016
  }
];

function About() {
  return (
    <div className="main">
      <div className="container">
        <Info />
        <div className="row">
          {cards.map((card, i) => (
            <div className="column">
              <Card>
                <div className="card-title center">{card.title}</div>
                <div className="card-body">{card.description}</div>
                <Image ratio={card.imageRatio} src={card.image} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;