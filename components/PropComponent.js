import React from 'react';
import ReactDOM from 'react-dom';

export default class PropComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>PropComponent: </h1>
        <h3>prop cat: {this.props.cat}</h3>
        <h3>prop txt: {this.props.txt}</h3>
        <h4>default: {this.props.defprop}</h4>
      </div>
    );
  }
}

PropComponent.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

PropComponent.defaultProps = {
  defprop: "this is a default prop on the PropComponent component"
};

ReactDOM.render(<PropComponent cat={5} txt="this is the prop txt" />, document.getElementById('prop-component'));
