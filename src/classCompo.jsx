import { Component } from "react";
import { Child } from "./Child";

export default class Naresh extends Component {
    constructor() {
        super()
        this.state = {
            name: "Doddy Naresh",
            job: "Self employment",
            goal: "Banknifty scalper"
        }
    }
    render() {
        return <div>
            <button onClick={()=>{this.setState({name:"NARESH RAKESHHHHHH"})}}>change name</button>
            <button onClick={()=>{this.setState({job:"nooooooooooooooo"})}}>change name</button>
            <button onClick={()=>{this.setState({goal:"funckerrrrrrrrrrrr"})}}>change name</button>
            <Child
                n={this.state.name}
                j={this.state.job}
                g={this.state.goal} />
        </div>
    }
}