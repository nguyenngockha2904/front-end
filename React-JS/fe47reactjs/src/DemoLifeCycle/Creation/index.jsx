import React, { Component } from 'react';

class Creation extends Component {

    i = 0;
    // 1 contrucstor chạy thứ nhất
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    // 2 componentWillMount chạy thứ 2 
    componentWillMount() {
        console.log("componentWillMount");
    }
    render() {
        return (
            <div>

            </div>
        );
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
}

export default Creation;
