import { Component } from "react";
import {
  Container,
} from "react-bootstrap";

import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import Booklist from "./Booklist";

class MyHome extends Component {

    state = {

        selectedBook: null
    }

    render() {
        return (
          <Container
            fluid
            className="px-0"
            style={{
              minHeight: "100vh",
              backgroundColor: "#e0a1c0",
            }}
          >
            <Container fluid className="px-0">
              <MyNav />
            </Container>
            {/*MI SECCAVO CREARE UN ALTRO COMPONENT*/}
            <Container
              className="p-3 my-5 border border-3"
              style={{ maxHeight: "300px", backgroundColor: "#c29ec7" }}
            >
              <h1>Welcome in my personal Library</h1>
              <p>checkout some books on our page</p>
              <hr className="my-3 px-3"></hr>
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
            </Container>

            <Booklist />

            <Container fluid className="px-0 mb-3">
              <MyFooter />
            </Container>
          </Container>
        );

    }


}



export default MyHome;
