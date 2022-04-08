import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux"
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    // set up a controlled form with internal state
    content: "",
    author: ""
    // look at the form to determine what keys need to go here
  });

  function handleChange(event) {
    // Handle Updating Component State
    const name = event.target.id
    const value = event.target.value
    setFormData({
      ...formData, 
      [name]: value,
    })
  }

  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault();
    const newQuote = {
      ...formData,
      id: uuid(), 
      votes: 0
    }
    console.log(newQuote)
    // Pass quote object to action creator
    dispatch(addQuote(newQuote))
    // Update component state to return to default state
    setFormData({
      content: "",
      author: ""
    }) 
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      value={formData.content}
                      onChange={(event) => handleChange(event)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      value={formData.author}
                      onChange={(event) => handleChange(event)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default" >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
