import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numero: this.props.numeroInicial };
  }

  add = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  render() {
    console.log("render Contador");
    return (
      <div>
        <p>{this.state.numero}</p>
        <button onClick={this.add}> Add </button>
      </div>
    );
  }
}

export default Contador;
