import React from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import quoteList from "./quoteList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sim: quoteList[0],
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data[0])
      .then((data) => this.setState({ sim: data }));
  }

  render() {
    return (
      <div className="App">
        <QuoteCard quotes={this.state.sim} />
        <button type="button" onClick={this.getQuote}>
          Change
        </button>
      </div>
    );
  }
}
export default App;
