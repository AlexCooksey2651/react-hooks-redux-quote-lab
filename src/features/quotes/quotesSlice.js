import { v4 as uuid } from "uuid";

const id = uuid();// Action Creators
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
const initialState = []

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload.id)
    
    case "quotes/upvote":
      return state.filter(quote => {
        if (quote.id === action.payload) {
          quote.votes = quote.votes += 1
        }
      })
    
    case "quotes/downvote":
      return state.filter(quote => {
        if (quote.id === action.payload) {
          quote.votes = quote.votes -= 1
        }
      })
    default:
      return state;
  }  
}
