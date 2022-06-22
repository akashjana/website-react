import { Nav, Fade } from "react-bootstrap";
import { Fragment, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Connect from "./Connect";

const NavItems = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  const AboutOpenHandler = () => {
    setOpenAbout(!openAbout);
    setOpenExperience(false);
    setOpenConnect(false);
  };
  const ExperinceOpenHandler = () => {
    setOpenAbout(false);
    setOpenExperience(!openExperience);
    setOpenConnect(false);
  };
  const ConnectOpenHandler = () => {
    setOpenAbout(false);
    setOpenExperience(false);
    setOpenConnect(!openConnect);
  };

  return (
    <Fragment>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link
            onClick={AboutOpenHandler}
            aria-controls="example-fade-text"
            aria-expanded={openAbout}
          >
            <h1>About Me</h1>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={ExperinceOpenHandler}
            aria-controls="example-fade-text"
            aria-expanded={openExperience}
          >
            <h1>Experience</h1>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={ConnectOpenHandler}
            aria-controls="example-fade-text"
            aria-expanded={openAbout}
          >
            <h1>Connect With Me</h1>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {openAbout && (
          <Fade in={openAbout}>
            <About id="example-fade-text"></About>
          </Fade>
        )}
        {openExperience && (
          <Fade in={openExperience}>
            <Experience id="example-fade-text"></Experience>
          </Fade>
        )}
        {openConnect && <Connect></Connect>}
      </div>
    </Fragment>
  );
};

export default NavItems;
