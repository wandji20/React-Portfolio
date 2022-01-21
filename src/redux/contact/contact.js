import { CONTACT, API_RESPONSE_MESSAGE, API_RESPONSE_ERROR } from './contactAction';

const initialState = {
  message: '',
  error: '',
  sender: {
    message: '',
    name: '',
    email: '',
    website: '',
  },
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT: {
      return {
        ...state, sender: action.payload,
      };
    }
    case API_RESPONSE_MESSAGE: {
      return {
        ...state, ...action.payload,
      };
    }
    case API_RESPONSE_ERROR: {
      return {
        ...state, ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default contactReducer;
