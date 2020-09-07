import React, { Component, memo } from 'react';
import { PureComponent } from 'react';

class DemoChildComponent extends PureComponent {
    render() {
        console.log('child component');
        return (
            <div className="container">

                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.prod.name}</h4>
                        <p className="card-text">{this.props.prod.like}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default DemoChildComponent;