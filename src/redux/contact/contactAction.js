export const API_RESPONSE_MESSAGE = 'contact/response/message';
export const API_RESPONSE_ERROR = 'contact/response/error';
export const CONTACT = 'contact/email';

export const responseMessageAction = (message) => ({
  type: API_RESPONSE_MESSAGE, payload: message,
});

export const responseErrorAction = (error) => ({
  type: API_RESPONSE_ERROR, payload: error,
});

export const emailAction = (data) => ({
  type: CONTACT, payload: data,
});

export const postEmailAction = (data) => async (dispatch) => {
  // const URL = 'http://localhost:3001/api/v1/portfolio/';
  const URL = 'https://email-api.fly.dev/api/v1/portfolio/';
  const payload = {
    name: '', email: '', website: '', message: '',
  };
  dispatch(emailAction(data));
  try {
    const server = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
      },
      body: JSON.stringify({ sender: data }),
    });
    const response = await server.json();
    if (response.message) {
      dispatch(emailAction(payload));
      dispatch(responseMessageAction(response));
      setTimeout(() => {
        dispatch(responseMessageAction({ message: '' }));
      }, 5000);
    } else {
      dispatch(responseErrorAction(response));
      setTimeout(() => {
        dispatch(responseErrorAction({ error: '' }));
      }, 5000);
    }
  } catch (e) {
    dispatch(responseErrorAction({ error: e.message }));
    setTimeout(() => {
      dispatch(responseErrorAction({ error: '' }));
    }, 5000);
  }
};
