import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHome from "./components/MyHome"
import MyFooter from "./components/MyFooter";
import Bookslist from "./components/Booklist";
import { Component } from "react";

class App extends Component() {



  render() {
    return (
      <>
        <MyHome>
          <MyNav />
          <Bookslist />
          <MyFooter />
        </MyHome>
      </>
    );
  }
}

export default App;
