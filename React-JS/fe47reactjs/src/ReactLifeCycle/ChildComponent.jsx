import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log('construtor Child');
    }
    componentWillMount() {
        console.log('componentWillMount Child');
    }
    render() {
        console.log('component render child');
        return (
            <div>
                <h1 className="display-4">Component child</h1>
            </div>
        );
    }
    componentDidMount() {
        console.log('componentdidmount child ');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount_Child');
    }
}

export default ChildComponent;