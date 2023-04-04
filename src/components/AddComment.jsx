import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
  };
  postComment = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify({
            comment: this.state.comment,
            rate: this.state.rate,
            elementId: id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMjRlYTBlNzg3MDAwMTRkODkxZTMiLCJpYXQiOjE2ODA1NDkwOTksImV4cCI6MTY4MTc1ODY5OX0.wZNhhXeC4pLpWKZ9WtjZw4t7oG5_9akjS-5YIWSviJg",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ comment: "" });
        alert("Commnent send successfully", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.comment || !this.state.rate) {
      return;
    }
    this.postComment(this.props.id);
  };
  render() {
    return (
      <>
        <Form className="mb-3" onSubmit={this.onSubmit} onClick={(e) => e.stopPropagation()}>
          <Form.Control
          className="border border-success"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
          <select
          className="my-3"
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option>Rate 1 - 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <Button type="submit" variant="success">SEND</Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
