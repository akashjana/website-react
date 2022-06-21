import classes from "./Body.module.css";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import { Fragment } from "react";

const Body = () => {
  const url="https://photographylife.com/wp-content/uploads/2020/03/Nikon-Z50-Sample-Image-44.jpg"
  return (
    <Fragment>
      <Container fluid>
        <Row className={classes.margin}>
          <Col md={8} lg={9}>
            <Image
              className={classes.images}
              fluid
              src={url}
              alt=""
            />
          </Col>
          <Col>
            <h1 className={classes.centerAlign}>Akash Jana</h1>
            <h2 className={classes.centerAlign}>Full Stack Developer</h2>
            <p>Hello welcome to my page. Explore to know more about me.</p>
          </Col>
        </Row>

        <Row>
            <h1>Life Event Gallary</h1>
            <h3>Some of the memorable life moment of my life.</h3>
        </Row>
        <Row>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                  Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={classes.margin}>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} md={6} className={classes.margin}>
            <Card>
              <Card.Img
                variant="top"
                src={url}
              />
              <Card.Body>
                <Card.Text>
                Life event
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Body;
