import classes from "./Body.module.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import ImageCards from "./ImageCards";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../assets/firebase";

const Body = () => {
  const [bodyImage, setbodyImage] = useState([]);
  const bodyImageRef = ref(storage, "BodyImage/");

  const [gallaryImages, setGallaryImages] = useState([]);
  const gallaryImagesRef = ref(storage, "LifeEvents/");

  const getImages = (reference, set) => {
    listAll(reference)
      .then((response) => {
        let promises = response.items.map((imageRef) =>
          getDownloadURL(imageRef)
        );
        Promise.all(promises).then((urls) => {
          set(urls);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getImages(bodyImageRef, setbodyImage);
    getImages(gallaryImagesRef, setGallaryImages);
  }, []);
  // const url =
  //   "https://photographylife.com/wp-content/uploads/2020/03/Nikon-Z50-Sample-Image-44.jpg";

  return (
    <Fragment>
      <Container fluid>
        <Row className={classes.margin}>
          <Col md={8} lg={9}>
            {bodyImage.length > 0 && (
              <Image
                className={classes.images}
                fluid
                src={bodyImage[0]}
                alt=""
              />
            )}
          </Col>
          <Col>
            <h1 className={classes.centerAlign}>Akash Jana</h1>
            <h2 className={classes.centerAlign}>Full Stack Developer</h2>
            <p>Hello welcome to my page. Explore to know more about me.</p>
          </Col>
        </Row>

        <Row className={classes.margin}>
          <h1>Life Event Gallary</h1>
          <h3>Some of the memorable life moment of my life.</h3>
        </Row>

        {gallaryImages.length > 0 && (
          <div>
            <Row>
              <ImageCards
                url={gallaryImages[0]}
                event="Staring at Uttam-Suchitra"
              ></ImageCards>
              <ImageCards
                url={gallaryImages[1]}
                event="Sun Meets horizon"
              ></ImageCards>
              <ImageCards
                url={gallaryImages[2]}
                event="Working Fisherman"
              ></ImageCards>
            </Row>
            <Row>
              <ImageCards
                url={gallaryImages[3]}
                event="Friendship"
              ></ImageCards>
              <ImageCards
                url={gallaryImages[4]}
                event="Morning Sea View"
              ></ImageCards>
              <ImageCards
                url={gallaryImages[5]}
                event="Rakshabandhan"
              ></ImageCards>
            </Row>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default Body;
