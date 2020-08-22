import axios from 'axios';
import store from '../reducers/store';
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      // TODO AXIOS REQUEST TO THE SERVER TO RETURN THE NUMBER OF OFFICES
      // SET THE STATE VALUE TO THE RETURN NUMBER
      axios
        .get('http://localhost:5000/getall')
        .then((result) => {
          console.log('walaaaa', result.data.success.length);
          console.log(store.getState().counter);
          store.getState().counter = result.data.success.length;
          console.log(store.getState().counter);
         return state = store.getState().counter;
        })
        .catch((err) =>
          console.log('gettign the number of offices error: ', err)
        );
      
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
