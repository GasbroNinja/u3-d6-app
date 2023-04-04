import { Badge } from "react-bootstrap";

const CommentLists = (props) => (
  <div>
    {props.comment.slice(0, 3).map((p) => (
      <div className="">
        <div className="mb-0">
          Author: {p.author} <Badge className="mb-2">{p.rate}</Badge>
        </div>

        <div
          className="mb-0"
          style={{
            maxWidth: "400px",
            minHeight: "46px",
            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          Comment: {p.comment}
        </div>
      </div>
    ))}
  </div>
);

export default CommentLists;
