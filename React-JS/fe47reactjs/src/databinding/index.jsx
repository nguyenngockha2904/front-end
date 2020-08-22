import React, { Component } from 'react';

class Databinding extends Component {
    name = 'nguyễn ngọc kha';
    isnull=true;
    showMessage(){
        console.log('ha');
    }
    render() {
        return (
            <div>
                <h1>Demo Databinding ReactJs</h1>
                <h3>Name: {this.name}</h3>
                <h3>Check: {this.isnull?'true':'false'}</h3>
                <button onClick={this.showMessage}></button>
            </div>
        );
    }
}

export default Databinding;