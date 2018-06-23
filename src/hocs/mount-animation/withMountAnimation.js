// @flow
import * as React from 'react';

const withMountAnimation = WrappedComponent =>
  class extends React.Component {
    state = {
      mounted: false,
    };

    componentDidMount() {
      requestAnimationFrame(() => {
        this.setState({ mounted: true });
      });
    }

    render() {
      return <WrappedComponent mounted={this.state.mounted} {...this.props} />;
    }
  };

export default withMountAnimation;
