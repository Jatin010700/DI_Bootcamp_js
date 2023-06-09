import React from "react";

import  Form  from "./form";

export default class ContainerForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            nutsFree: false,
            lactoseFree: false,
            isVegan: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { value, name, type, checked } = e.target;

        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render() {
        return <Form handleChange={this.handleChange} {...this.state}/>
    }
}