import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import myApp from './reducers';

let store = createStore(myApp);
function newRender(){
  ReactDOM.render(<App store ={store}/>, document.getElementById('root'));

}
store.subscribe(newRender);
newRender();
// store.subscribe(ReactDOM.render);
store.subscribe(()=> console.log(store.getState()))
