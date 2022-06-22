import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <p ref={ref} id={props.id.toString()}>
      Hey, this is my website, so I have to say something about myself.
      Sometimes it is hard to introduce yourself because you know yourself so
      well that you do not know where to start with. Let me give a try to see
      what kind of image you have about me through my self-description.
      <br />I am Indian by nationality and bengali from culture. I am a person
      who is positive about every aspect of life. To see, and to experience.This
      is a brief introduction of myself. If you are interested in knowing
      more,connect with me . Do not expect too much, and keep your sense of
      humor.
    </p>
  );
});
export default About;
