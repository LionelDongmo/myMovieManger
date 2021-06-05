// Store/Reducers/avatarReducer.js
import {icons} from '../../constants'
const initialState = { avatar: icons.avatar}

function setAvatar(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SET_AVATAR':
      nextState = {
        ...state,
        avatar: action.value
      }
      return nextState || state
  default:
    return state
  }
}

export default setAvatar
