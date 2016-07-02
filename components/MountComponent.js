import React from 'react';
import ReactDOM from 'react-dom';

class MountComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    console.log("mounting MountComponent");
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  render() {
    console.log("rendering MountComponent");
    return (
      <button id="mount-component--button" onClick={this.update}>{this.state.val}</button>
    )
  }
  componentDidMount() {
    console.log("mounted MountComponent");
  }
  componentWillUnmount() {
    console.log("unmounting MountComponent");
  }
}

export default class MountComponentWrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<MountComponent />, document.getElementById('mount-component--button_container'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('mount-component--button_container'));
  }
  render() {
    return (
      <div>
        <h1>Mount Component Lifecycle: </h1>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="mount-component--button_container"></div>
      </div>
    );
  }
}

ReactDOM.render(<MountComponentWrapper />, document.getElementById('mount-component'));
