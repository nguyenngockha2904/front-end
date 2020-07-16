import React, { Component } from 'react';

class CourseItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card p-3">
                <img/>
                <p className="lead font-weight-bold">ReactJS Bootstrap</p>
                <p className="lead">Instructor: Kha Nguyen</p>
                <p className="lead">Rating: 5.0</p>
                <button className="btn btn-success">Go To Detail</button>
            </div>
         );
    }
}
 
export default CourseItem;