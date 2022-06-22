import React from "react";

const Experience = React.forwardRef((props, ref) => {
  return (
    <p ref={ref} id={props.id.toString()}>
      I completed my schooling in 2017 and then opted for Bachalor of technology
      in Computer Science and Engineering. I completed 4 years in engineering
      college and then joined Cognizant in 2021. Currently I am working there.
      <br />I have specialization in C#, JavaScript, Html, CSS, Dot Net Core,
      Asp .Net MVC, Entity Framework, Angular, React, SQL, MongoDB, Azure Cloud.
    </p>
  );
});
export default Experience;
