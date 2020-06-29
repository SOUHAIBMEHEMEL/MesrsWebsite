import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      let header = 'Ecrire au ministre';
      if (this.state.username) {
        header = <h1>Hello {this.state.username}</h1>;
      } else {
        header = 'Ecrire au ministre';
      }
      return (
        <form>
        {header}
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
 