const CommentLists = (props) => (
  <div>
    {props.comment.slice(0, 3).map((p) => (
      <div className="">
        <div className="mb-0">Author: {p.author}</div>

        <div
          className="mb-0"
          style={{
            maxWidth: "400px",
            minHeight:"46px",
            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          Comment: {p.comment}
        </div>

        <div className="mb-2">Rate: {p.rate}</div>
        
      </div>
    ))}
  </div>
);

export default CommentLists;
