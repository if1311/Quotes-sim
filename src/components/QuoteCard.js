import React from "react";
import "./QuoteCard.css";

function QuoteCard({ quotes }) {
  return (
    <div>
      <h1>{quotes.character}</h1>
      <img src={quotes.image} alt="" />
      <p>{quotes.quote}</p>
    </div>
  );
}

export default QuoteCard;
