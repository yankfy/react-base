import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {createStore } from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

// import APP from './App.jsx';
// import LikeButton from './Aan.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Content from './Content';


// function createStore(reducer) {
//   let state = null;
//   const listeners = [];
//   const subscribe = (listener) => listeners.push(listener);
//   const getState = () => state;
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((listener) => listener());
//   };
//   dispatch({}); // 初始化 state
//   return { getState, dispatch, subscribe };
// }

const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: 'red'
    };
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

class Index extends Component {  
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}><Index /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// <APP />
//         <LikeButton
//           likedText="已赞"
//           unlikedText="赞"
//           onClick={() => {
//             console.log('被点击了');
//           }}
//         />
