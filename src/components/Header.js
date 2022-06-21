import { useState } from "react";
import { Container, Nav, Fade } from "react-bootstrap";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faInstagramSquare,
  faFacebook,
  faLinkedin,
  faTelegram,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
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

  const openWhatsAppHandler = () => {
    window.open("https://wa.me/+918250286942", "_blank", "noopener,noreferrer");
  };
  const openFacebookHandler = () => {
    window.open(
      "https://www.facebook.com/akas.jana.3",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openInstagramHandler = () => {
    window.open(
      "https://www.instagram.com/__janaakash",
      "_blank",
      "noopener,noreferrer"
    );
  };
  // const openGmailHandler = () => {
  //   window.open("https://wa.me/+918250286942", "_blank", "noopener,noreferrer");
  // };
  const openGithubHandler = () => {
    window.open(
      "https://www.github.com/akashjana",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openTelegramHandler = () => {
    window.open(
      "https://telegram.me/akash_jana",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const openLinkedinHandler = () => {
    window.open(
      "https://www.linkedin.com/in/akashjana7748931a3",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Container className={classes.header}>
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
            <p id="example-fade-text">
              Hey, this is my website, so I have to say something about myself.
              Sometimes it is hard to introduce yourself because you know
              yourself so well that you do not know where to start with. Let me
              give a try to see what kind of image you have about me through my
              self-description.
              <br />I am Indian by nationality and bengali from culture. I am a
              person who is positive about every aspect of life. To see, and to
              experience.This is a brief introduction of myself. If you are
              interested in knowing more,connect with me . Do not expect too
              much, and keep your sense of humor.
            </p>
          </Fade>
        )}
        {openExperience && (
          <Fade in={openExperience}>
            <p id="example-fade-text">
              I completed my schooling in 2017 and then opted for Bachalor of
              technology in Computer Science and Engineering. I completed 4
              years in engineering college and then joined Cognizant in 2021.
              Currently I am working there.
              <br />I have specialization in C#, JavaScript, Html, CSS, Dot Net
              Core, Asp .Net MVC, Entity Framework, Angular, React, SQL,
              MongoDB, Azure Cloud.
            </p>
          </Fade>
        )}
        {openConnect && (
          <span>
            <FontAwesomeIcon
              onClick={openWhatsAppHandler}
              icon={faWhatsappSquare}
              className={classes.whatsApp}
              size="lg"
            />{" "}
            {/* <FontAwesomeIcon
              onClick={openGmailHandler}
              icon={faEnvelope}
              className={classes.gmail}
              size="lg"
            />{" "} */}
            <FontAwesomeIcon
              onClick={openInstagramHandler}
              icon={faInstagramSquare}
              className={classes.instagram}
              size="lg"
            />{" "}
            <FontAwesomeIcon
              onClick={openFacebookHandler}
              icon={faFacebook}
              className={classes.facebook}
              size="lg"
            />{" "}
            <FontAwesomeIcon
              onClick={openLinkedinHandler}
              icon={faLinkedin}
              className={classes.linkedIn}
              size="lg"
            />{" "}
            <FontAwesomeIcon
              onClick={openGithubHandler}
              icon={faGithubSquare}
              className={classes.github}
              size="lg"
            />{" "}
            <FontAwesomeIcon
              onClick={openTelegramHandler}
              icon={faTelegram}
              className={classes.telegram}
              size="lg"
            />
          </span>
        )}
      </div>
    </Container>
  );
};

export default Header;
