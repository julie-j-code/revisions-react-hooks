
import React from 'react';


class Clickme extends React.Component {

    
    handleClick(){
        console.log(this.props.value)

    }

    render(){

     return   <button onClick={this.handleClick.bind(this)}>{this.props.value}</button>
    }
}

  

// ReactDOM.render(
//     <Clickme value={1}/>,
//     document.getElementById('main')
// )


export default Clickme;