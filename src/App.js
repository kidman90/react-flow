import React, { Component } from 'react';
import './App.css';

type Props = {
  foo: number
};

type State = {
  count: number
};

class App extends Component<Props, State> {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>{this.props.foo}</div>
        <div>Count: {this.state.count}</div>
      </div>
    );
  }
}

export default App;
