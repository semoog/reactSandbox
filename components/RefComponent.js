import React from 'react';
import ReactDOM from 'react-dom';

export default class RefComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128
    }
    this.update = this.update.bind(this);
  }
  update(event) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value
    })
  }
  render() {
    return (
      <div>
      <h1>Composite Component using refs: </h1>
      R <Slider update={this.update} ref="red"/>
      {this.state.red}
      <br />
      G <Slider update={this.update} ref="green"/>
      {this.state.green}
      <br />
      B <Slider update={this.update} ref="blue"/>
      {this.state.blue}
      <br />
      <ColorBlock />
      </div>
    );
  }
}

class Slider extends React.Component {
  render(){
    return (
      <div>
      <input ref="input" type="range" name="slider" min="0" max="255" onChange={this.props.update} />
      </div>
    );
  }
}

class ColorBlock extends React.Component {
  render(){
    return (
      <div id="color-block">
      </div>
    );
  }
}

RefComponent.propTypes = {
};

RefComponent.defaultProps = {
};

ReactDOM.render(<RefComponent />, document.getElementById('ref-component'));
