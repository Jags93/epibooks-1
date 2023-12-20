import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <Welcome />
        <BookList books={fantasyBooks} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
