import "./App.css";
import React from "react";

const QUOTES = [
  {
    quote: "1",
    author: "1",
  },
  {
    quote: "2",
    author: "2",
  },
  {
    quote: "3",
    author: "3",
  },
  {
    quote: "4",
    author: "4",
  },
  {
    quote: "5",
    author: "5",
  },
  {
    quote: "6",
    author: "6",
  },
  {
    quote: "7",
    author: "7",
  },
  {
    quote: "8",
    author: "8",
  },
  {
    quote: "9",
    author: "9",
  },
  {
    quote: "10",
    author: "10",
  },
];

function App() {
  return (
    <div id="quote-box" className="App">
      <QuoteMachine />
    </div>
  );
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    let val = Math.random() * 100;
    let index = 9;
    for (let i = 0; i < 9; i++) {
      if (val < 90 - i * 10) {
        index = 8 - i;
      }
    }
    this.setState({
      quote: QUOTES[index].quote,
      author: QUOTES[index].author,
    });
    console.log(val);
  }

  render() {
    return (
      <>
        <h1 id="text">{this.state.quote}</h1>
        <h3 id="author">{this.state.author}</h3>
        <button id="new-quote" onClick={this.handleClick}>
          NEW QUOTE!
        </button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          Tweet This!
        </a>
      </>
    );
  }
}

export default App;
