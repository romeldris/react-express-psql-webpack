const initialState = {
  text: '',
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return {...state, text: action.payload};
    default:
      return state;
  }
}
