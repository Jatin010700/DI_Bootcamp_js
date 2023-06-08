import React from "react";

class Color extends React.Component{
    constructor(){
        super()
        this.state = {color: 'Red'}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({color:'Yellow'})
        }, 5000)
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }

    render() {
        return(
            <div>
                <h1>My Favourite Color is {this.state.color}</h1>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}
export default Color