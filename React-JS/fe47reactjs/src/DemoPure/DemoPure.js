import React, { Component } from 'react';
import DemoChildComponent from './DemoChildComponent';

class DemoPure extends Component {
    state = {
        number: 1,
        cout: 1,
        prod: {
            id: 1, name: 'iphone', like: 0
        }
    }
    render() {
        return (
            <div>
                <DemoChildComponent prod={this.state.prod} />
                <h1>{this.state.number}</h1>
                <button className="btn btn-success"
                    onClick={() => {
                        this.setState({ prod: this.state.number + 1 })
                    }}
                >+</button>
                <button className="btn btn-success"
                    onClick={() => {
                        this.setState({ cout: this.state.cout + 1 })
                    }}
                >{this.state.cout}</button>
                <h1>{this.state.prod.like}</h1>
                <button className="btn btn-success"
                    onClick={() => {
                        let newP = { ...this.state.prod };
                        newP.like += 1;
                        this.setState({ prod: newP })
                    }}
                >Like</button>
            </div>
        );
    }
}

export default DemoPure;