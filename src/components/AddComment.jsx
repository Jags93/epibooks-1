import React, { Component } from "react";

class AddComment extends Component {
  state = {
    commentText: "",
    rate: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNjhmN2ZlMDMxZTAwMTliYTFhZjkiLCJpYXQiOjE3MDMxNzE5MjYsImV4cCI6MTcwNDM4MTUyNn0.qQd02KIRKnKNDMnY-TQLaOWZaxQwHanvq6fa-REsBlA",
        },
        body: JSON.stringify({
          comment: this.state.commentText,
          rate: this.state.rate,
          elementId: this.props.bookId,
        }),
      });

      if (response.ok) {
        this.setState({ commentText: "", rate: "1" });
        this.props.onCommentAdded();
      } else {
        throw new Error("Errore nell'invio del commento");
      }
    } catch (error) {
      console.error("Errore nell'invio del commento:", error);
    }
  };

  render() {
    return (
      <div>
        <h3>Aggiungi una recensione</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Commento:
            <textarea name="commentText" value={this.state.commentText} onChange={this.handleChange} required />
          </label>
          <label>
            Voto:
            <select name="rate" value={this.state.rate} onChange={this.handleChange} required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <button type="submit">Invia recensione</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
