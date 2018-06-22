import * as React from 'react';

import Button from './components/button/Button';

import {
  hiButton,
  layout,
  container,
  name,
  description,
  links,
} from './App-emotion';

class App extends React.Component {
  state = {
    isButtonPressed: false,
  };

  componentDidMount() {}

  onClick = () => {
    this.setState({
      isButtonPressed: true,
    });
  };

  render() {
    return (
      <div className={layout}>
        {!this.state.isButtonPressed ? (
          <Button className={hiButton} onClick={this.onClick}>
            Hi there!
          </Button>
        ) : (
          <div className={container}>
            <span className={name}>christopher wei</span>
            <span className={description}>
              I like javascript, video games, and cats
            </span>
            <span className={links} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
