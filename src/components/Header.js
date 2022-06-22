import { Container } from "react-bootstrap";
import classes from "./Header.module.css";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <Container className={classes.header}>
      <NavItems />
    </Container>
  );
};

export default Header;
