import React, { Component } from 'react';
import './App.css';

type Props = {
  foo: number
};

type State = {
  count: number
};

function MyComponent(props: Props) {
  // props.doesNotExist;
  return <div>{props.foo}</div>;
}

MyComponent.defaultProps = {
  foo: 1993
};

class App extends Component<Props, State> {
  static defaultProps = {
    foo: 42
  };

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

  handleClick = (event: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <div>{this.props.foo}</div>
        <div>Count: {this.state.count}</div>
        <MyComponent foo={20} />
        <MyComponent />
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default App;
