import React from 'react';
import { carinfo } from '../App';

import Garage from './Garage';

//--------PART 2--------//
import Events from './Events';


class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state ={color: 'red'}
    }
    
//--------PART 2---------//

    render() {
       return (
            <div>
            <h1>Mandatory</h1>
            <h1>This car is a {this.state.color} {carinfo.model}</h1>
            <Garage/>
            <Events/>
            </div>
        ) 
    }
}

export default Car