import { INITIAL_STATE, SET_NAME } from '../actions/test.js'

export default function test(state = INITIAL_STATE, action) {
  if(action.type === "SET_NAME") {
    return Object.assign({}, state, {
        name: action.name
      })
  }
  return state
}