import request from 'superagent';

const requestSuccessful = (payload) => {
  return {
    type: 'ACTION_TYPE',
    payload,
  };
};

export const makeRequest = () => {
  return async (dispatch) => {
    const {text} = await request('/api/');
    console.log(text);
    dispatch(requestSuccessful(text));
  };
};
