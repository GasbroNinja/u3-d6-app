import { Component } from "react";
import { Card, Spinner } from "react-bootstrap";
import CommentLists from "./CommentLists";
import AddComment from "./AddComment";
import "../Scroll.css";
// Table riceve selected NON più dal proprio stato,
// ma da una prop con lo stesso nome (prop.selected) che arriva da fuori (componente App)

// Table riceve due prop:
// selected <-- il valore salvato nello stato di App ("First", "Second", "Third")
// setSelected <-- il metodo che permette a Table di cambiare lo stato di App (nel livello superiore)

class CommentsPerBook extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    console.log("didMount()");
    this.fetchComments(this.props.id);
  };

  fetchComments = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMjRlYTBlNzg3MDAwMTRkODkxZTMiLCJpYXQiOjE2ODA1NDkwOTksImV4cCI6MTY4MTc1ODY5OX0.wZNhhXeC4pLpWKZ9WtjZw4t7oG5_9akjS-5YIWSviJg",
          },
        }
      );
      if (response.ok) {
        const posts = await response.json();
        console.log("data retrived");
        this.setState({ comments: posts }, () =>
          console.log("setState() successfully")
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, PrevState) {
    console.log("didUpdate()");
    if (prevProps.id !== this.props.id) {
      this.fetchComments();
    } else {
      console.log("Component didUpdate without fetch");
    }
  }

  render() {
    return (
      <div>
        <>
          {this.state.comments.length > 0 ? (
            <Card className="bg-dark d-flex justify-content-center">
              <Card.Body
                className="bg-dark d-flex justify-content-center flex-column"
                style={{ maxWidth: "800px", minWidth: "200px" }}
              >
                <AddComment id={this.props.id} />
                <CommentLists
                  comment={this.state.comments}
                  style={{ overflowX: "scroll", overflowY: "hidden" }}
                />
              </Card.Body>
            </Card>
          ) : (
            <Spinner variant="success" animation="grow" />
          )}
        </>
      </div>
    );
  }
}
export default CommentsPerBook;