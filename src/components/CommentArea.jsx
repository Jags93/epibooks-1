// CommentArea.js
import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    await this.fetchComments();
  }

  fetchComments = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNjhmN2ZlMDMxZTAwMTliYTFhZjkiLCJpYXQiOjE3MDMxNzE5MjYsImV4cCI6MTcwNDM4MTUyNn0.qQd02KIRKnKNDMnY-TQLaOWZaxQwHanvq6fa-REsBlA",
        },
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments, loading: false });
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { comments, loading, error } = this.state;

    return (
      <div>
        <h2>Recensioni</h2>
        {loading && <p>Caricamento...</p>}
        {error && <p>Errore: {error.message}</p>}
        {!loading && !error && <CommentsList comments={comments} />}
        {!loading && !error && <AddComment bookId={this.props.bookId} onCommentAdded={this.fetchComments} />}
      </div>
    );
  }
}

export default CommentArea;
