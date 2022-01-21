const initialState = {
  message: '',
  sender: {
    message: '',
    name: '',
    email: '',
    website: '',
  },
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
};

export default contactReducer;
