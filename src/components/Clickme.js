
import React, {Component} from 'react';


class Clickme extends Component {

  // variante on bind le this dans le constructeur

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    console.log(this.props.value)

  }

  render() {

    // return <button onClick={this.handleClick.bind(this)}>{this.props.value}</button>
    return <button onClick={this.handleClick}>{this.props.value}</button>

  }
}



export default Clickme;