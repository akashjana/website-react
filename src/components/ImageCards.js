import { Card, Col } from "react-bootstrap";
import classes from "./ImageCards.module.css";

const ImageCards = (props) => {
  return (
    <Col sm={12} md={6} lg={4} className={classes.margin}>
      <Card>
        <Card.Img
          variant="top"
          className={classes.imageFit}
          src={props.url.toString()}
        />
        <Card.Body>
          <Card.Text>{props.event.toString()}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ImageCards;
