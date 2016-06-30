import React from 'react';
import ReactDOM from 'react-dom';

export default class StateComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "This is a state called txt"
    }
    this.update = this.update.bind(this);
  }
  update(event) {
    this.setState({
      txt: event.target.value
    })
  }
  render() {
    return (
      <div>
      <h1>Composite Component using state: </h1>
      <h3>Stateless child components: </h3>
      <Widget txt={this.state.txt} update={this.update}/>
      <Widget txt={this.state.txt} update={this.update}/>
      <Widget txt={this.state.txt} update={this.update}/>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div id="widget">
    <input type="text" placeholder="update state txt property..." onChange={props.update} />
    <h5>state txt: {props.txt}</h5>
    </div>
  );
}

StateComponent.propTypes = {
};

StateComponent.defaultProps = {
};

ReactDOM.render(<StateComponent />, document.getElementById('state-component'));
