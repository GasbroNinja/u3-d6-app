import { Component } from "react";
import { Col, Card, Badge } from "react-bootstrap";
import CommentsPerBook from "./CommentsPerBook";



class SingleBook extends Component {
  state = {
    selected: false,
    
  }





  render() {
   

   return (
     <>
       <Col xs={12} className="m-2">
         <Card
           className={
             this.state.selected ? "border border-danger border border-5" : null
           }
           onClick={() => this.setState({ selected: !this.state.selected })}
           style={{ marginBottom: "600px" }}
         >
           <Card.Img
             src={this.props.fantasy.img}
             alt="Card image"
             style={{ objectFit: "cover", maxHeight: "500px" }}
           />
           <Card.ImgOverlay className="d-flex flex-column align-items-baseline">
             <Card.Title
               className="justify-content-center"
               style={{ color: "#ff8cbc" }}
             >
               {this.props.fantasy.title}
             </Card.Title>
             <Badge
               bg="dark"
               className="fs-5 border border-3 border-success mb-1"
             >
               <Card.Text className="text-success">
                 {this.props.fantasy.price} €
               </Card.Text>
             </Badge>
             <Badge
               bg="dark"
               className="fs-5 border border-3 border-danger mb-1 d-flex align-self"
               style={{ marginBottom: "440px" }}
             >
               <Card.Text
                 className="text-uppercase fs-4"
                 style={{ color: "#ff8cbc" }}
               >
                 {this.props.fantasy.category}
               </Card.Text>
             </Badge>
             <Badge
               bg="dark"
               className="fs-5 border border-3 border-success"
               style={{ marginTop: "370px", minWidth:"500px" }}
             >
               {this.state.selected && (
                 <CommentsPerBook id={this.props.fantasy.asin} />
               )}
             </Badge>
           </Card.ImgOverlay>
         </Card>
       </Col>
     </>
   );
};
};


export default SingleBook