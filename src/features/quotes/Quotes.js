import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import QuoteCard from "./QuoteCard";

function Quotes() {
  const quotes = useSelector((state) => state.quotes)

  const dispatch = useDispatch()

  function deleteQuote(quote) {
    dispatch(removeQuote(quote.id))
  }

  function upvote(quote) {
    dispatch(upvoteQuote(quote.id))
  }

  function downvote(quote) {
    dispatch(downvoteQuote(quote.id))
  }

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.map(quote => {
              return <QuoteCard quote={quote} key={quote.id} deleteQuote={deleteQuote} upvote={upvote} downvote={downvote} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
