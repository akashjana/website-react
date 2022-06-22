import classes from './Connect.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faInstagramSquare,
  faFacebook,
  faLinkedin,
  faTelegram,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
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
    <span>
      <FontAwesomeIcon
        onClick={openWhatsAppHandler}
        icon={faWhatsappSquare}
        className={classes.whatsApp}
        size="2x"
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
        size="2x"
      />{" "}
      <FontAwesomeIcon
        onClick={openFacebookHandler}
        icon={faFacebook}
        className={classes.facebook}
        size="2x"
      />{" "}
      <FontAwesomeIcon
        onClick={openLinkedinHandler}
        icon={faLinkedin}
        className={classes.linkedIn}
        size="2x"
      />{" "}
      <FontAwesomeIcon
        onClick={openGithubHandler}
        icon={faGithubSquare}
        className={classes.github}
        size="2x"
      />{" "}
      <FontAwesomeIcon
        onClick={openTelegramHandler}
        icon={faTelegram}
        className={classes.telegram}
        size="2x"
      />
    </span>
  );
};

export default Connect;
