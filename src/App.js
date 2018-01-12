import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Member from './Components/Member';
import MemberList from './Components/MemberList';
import Image from './Components/Image';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    members: props.members,
  }
}

infoClick = (e, member) => {
  e.stopPropagation()
  const index = this.state.members.indexOf(member)
  let newInfo = this.state.members.slice(0)
  newInfo[index].display = true
  this.setState({members: newInfo})

}

  render(){
    return (
      <div className="App">
        <div>
          <Image />
          <MemberList members={this.state.members} infoClick={this.infoClick}/>
        </div>
      </div>
    );
  }
}

export default App;
