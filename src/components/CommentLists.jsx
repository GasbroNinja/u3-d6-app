import { Badge } from "react-bootstrap";
import "../Scroll.css"

const CommentLists = (props) => (
  <div>
    {props.comment.slice(0, 4).map((p) => (
      <div className="">
        <div className="mb-0">
          Author: {p.author} <Badge className="mb-2">{p.rate}</Badge>
        </div>

        <div
          className=".styled-scrollbars mb-0"
          style={{
            maxWidth: "100%",
            minHeight: "46px",
            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          Comment: {p.comment}
        </div>
        <hr />
      </div>
    ))}
  </div>
);

export default CommentLists;
