import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Card style={{ border: selected ? "2px solid red" : "2px solid transparent" }} onClick={this.toggleSelected}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea bookId={this.props.book.id} />}
      </div>
    );
  }
}

export default SingleBook;
