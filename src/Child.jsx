import { Component } from "react";

export class Child extends Component {
    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return <div>
            <h2>{this.props.n}</h2>
            <h2>{this.props.j}</h2>
            <h2>{this.props.g}</h2>
        </div>
    }
}