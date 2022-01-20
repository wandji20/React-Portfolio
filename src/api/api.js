/* eslint-disable */
const sendEmail = async (data) => {
  // const URL = 'http://localhost:3001/api/v1/portfolio/';
  const URL = 'https://email-api-wandji.herokuapp.com/';

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
    // console.log(response);
  } catch (e) {
    // console.log(e);
  }
};

export default sendEmail;
