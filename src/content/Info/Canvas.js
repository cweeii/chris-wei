import * as React from 'react';

import throttle from '../../lib/throttle';

import { canvas } from './Canvas-emotion';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.world = 'world';
  }

  componentDidMount() {
    this.canvasRef.current.height = document.body.clientHeight;
    this.canvasRef.current.width = document.body.clientWidth;
    requestAnimationFrame(this.draw);

    window.addEventListener(
      'resize',
      throttle(() => {
        this.canvasRef.current.height = document.body.clientHeight;
        this.canvasRef.current.width = document.body.clientWidth;
        requestAnimationFrame(this.draw);
      }, 100)
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  draw = () => {
    const context = this.canvasRef.current.getContext('2d');
    context.fillRect(0, 0, 500, 500);
  };

  log = () => console.log('hi', this.world);

  render() {
    return <canvas className={canvas} ref={this.canvasRef} />;
  }
}
export default Canvas;
