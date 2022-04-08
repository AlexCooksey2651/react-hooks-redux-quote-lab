import { v4 as uuid } from "uuid";

const id = uuid();
// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return { type: "quotes/add", payload: quote }
}

export const removeQuote = (quoteId) => {
  return { type: "quotes/remove", payload: quoteId}
}

export const upvoteQuote = (quoteId) => {
  return { type: "quotes/upvote", payload: quoteId}
}

export const downvoteQuote = (quoteId) => {
  return { type: "quotes/downvote", payload: quoteId}
} 

// Reducer
const initialState = [{id: 1, content: "I love Cheese", author: "Alex", votes: 5}]

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload)
    
    case "quotes/upvote":
      const upvote = state.map(quote => {
        if (quote.id === action.payload) {
          return {...quote, votes: parseInt(quote.votes) + 1}
        } else {
          return quote
        }
      })
      return upvote
    
    case "quotes/downvote":
      const downvote = state.map(quote => {
        if (quote.id === action.payload) {
          return {...quote, votes: parseInt(quote.votes) - 1}
        } else {
          return quote
        }
      })
      return downvote

    default:
      return state;
  }  
}
