import { Component } from "react";
import { Container, Row, Col, Card, Badge  } from "react-bootstrap";
import romance from "../data/romance.json";
import fantasy from "../data/fantasy.json";
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
    render(){

        return (
          <Container>
            <Row className="text-center">
              <Col md={12} lg={4} className="my-3">
                <Badge bg="secondary" className="fs-5">
                  <span className="text-decoration-none fw-bold text-light">
                    Fantasy
                  </span>
                </Badge>
                <Container>
                  <Row>
                    {fantasy.map((fantasy, asin) => (
                      <Col xs={12} className="m-2" key={`Book-${asin}`}>
                        <Card className="bg-dark text-white">
                          <Card.Img src={fantasy.img} alt="Card image" />
                          <Card.ImgOverlay className="d-flex flex-column align-items-baseline">
                            
                            <Card.Title
                              className="justify-content-center"
                              style={{ color: "#ff8cbc" }}
                            >
                              {fantasy.title}
                            </Card.Title>
                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-success mb-3"
                            >
                              <Card.Text className="text-success">
                                {fantasy.price} €
                              </Card.Text>
                            </Badge>
                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-danger"
                            >
                              <Card.Text
                                className="text-uppercase fs-4"
                                style={{ color: "#ff8cbc" }}
                              >
                                {fantasy.category}
                              </Card.Text>
                            </Badge>
                          </Card.ImgOverlay>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
              <Col md={12} lg={4} className="my-3">
                <Badge bg="secondary" className="fs-5">
                  <span className="text-decoration-none fw-bold text-light">
                    Romance
                  </span>
                </Badge>
                <Container>
                  <Row>
                    {romance.map((romance, asin) => (
                      <Col xs={12} className="m-2" key={`Book-${asin}`}>
                        <Card className="bg-dark text-white">
                          <Card.Img src={romance.img} alt="Card image" />
                          <Card.ImgOverlay className="d-flex flex-column align-items-baseline">
                            <Card.Title style={{ color: "#ff8cbc" }}>
                              {romance.title}
                            </Card.Title>
                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-success mb-3"
                            >
                              <Card.Text className="text-success">
                                {romance.price} €
                              </Card.Text>
                            </Badge>
                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-danger"
                            >
                              <Card.Text
                                className="text-uppercase fs-4"
                                style={{ color: "#ff8cbc" }}
                              >
                                {romance.category}
                              </Card.Text>
                            </Badge>
                          </Card.ImgOverlay>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
              <Col md={12} lg={4} className="my-3">
                <Badge bg="secondary" className="fs-5">
                  <span className="text-decoration-none fw-bold text-light">
                    Sci-Fi
                  </span>
                </Badge>
                <Container>
                  <Row>
                    {scifi.map((scifi, asin) => (
                      <Col xs={12} className="m-2" key={`Book-${asin}`}>
                        <Card className="bg-dark text-white">
                          <Card.Img src={scifi.img} alt="Card image" />

                          <Card.ImgOverlay className="d-flex flex-column align-items-baseline">
                            <Card.Title style={{ color: "#ff8cbc" }}>
                              {scifi.title}
                            </Card.Title>

                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-success mb-3"
                            >
                              <Card.Text className="text-success">
                                {scifi.price} €
                              </Card.Text>
                            </Badge>
                            <Badge
                              bg="dark"
                              className="fs-5 border border-3 border-danger"
                            >
                              <Card.Text
                                className="text-uppercase fs-4"
                                style={{ color: "#ff8cbc" }}
                              >
                                {scifi.category}
                              </Card.Text>
                            </Badge>
                          </Card.ImgOverlay>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        );
    };
}

export default AllTheBooks