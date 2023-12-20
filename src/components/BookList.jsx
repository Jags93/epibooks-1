import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { books } = this.props;
    const { searchTerm } = this.state;

    const filteredBooks = searchTerm
      ? books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : books;

    return (
      <div>
        <input type="text" placeholder="Search by title" value={searchTerm} onChange={this.handleSearchChange} />
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          {filteredBooks.map((book) => (
            <SingleBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
