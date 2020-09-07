import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ReactlifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            num: 0,
        }
    }
    componentWillMount() {
        console.log('componentwillmount');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    render() {
        console.log('render');
        return (
            <div>
                <button className="btn btn-success"
                    onClick={() => {
                        this.setState({ num: this.state.num + 1 }, () => {
                            console.log(this.state.num);
                        })
                    }}
                >{this.state.num}</button>
                {this.state.num < 5 && <ChildComponent />}
            </div>
        );
    }
    componentDidMount() {
        console.log('componentDidMouth');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

}

export default ReactlifeCycle;