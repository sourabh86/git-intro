import React, { Component } from 'react';
import employeeData from "./employeeData.json";

export default class Employee extends Component{
    render(){
        const employee = employeeData[this.props.match.params.id];
        const name = employee?employee.name:"No name";
        const imageUrl = employee?employee.image:"";
        return(
            <div>
                <h1>{name}</h1>
                <img src={imageUrl} />
            </div>
        )
    }
}