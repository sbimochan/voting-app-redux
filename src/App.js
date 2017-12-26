import React, { Component } from 'react';
import './App.css';
import * as voter from './actions/index';
// import { voteAngular,voteReact,voteVue} from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;

  }
  handleVoteAngular =()=>{
   this.store.dispatch(voter.voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voter.voteReact());
  }
  handleVoteVue = () => {
    this.store.dispatch(voter.voteVue());
  }
  render() {
    return (
      <div>
        <div>
          <h2>select buttons</h2>
        </div>
        <button onClick={this.handleVoteAngular}>vote angular</button>
        <button onClick={this.handleVoteReact}>vote react</button>

        <button onClick={this.handleVoteVue}>vote vue</button>
        
        </div>
    );
  }
}

export default App;
