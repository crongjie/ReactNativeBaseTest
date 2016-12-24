/*
 * action types
 */

export const SET_NAME = 'SET_NAME'

/*
 * other constants
 */
export const INITIAL_STATE = {
    name : ''
}


/*
 * action creators
 */
export function setName(name) {
  return { type: SET_NAME, name: name }
}