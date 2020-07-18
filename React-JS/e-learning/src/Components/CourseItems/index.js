import React, { Component } from 'react';
import CourseDetailScreen from '../../Screens/Detail'; 
class CourseItem extends Component {
    state = { 
        item: this.props.item,
     }
     onEventHandle=()=>(
        <div className="">
        <CourseDetailScreen maKhoaHoc={this.state.item.maKhoaHoc}/>
        </div>
     )
        
    render() { 
        return ( 
            <div className="card p-3">
                <img className="img-fluid" src={this.props.item.hinhAnh} style={{height:200}}/>
                <p className="lead font-weight-bold">{this.state.item.tenKhoaHoc}</p>
                <p className="lead">Instructor: {this.state.item.nguoiTao.hoTen}</p>
                <p className="lead">Rating: 5.0</p>
                <button className="btn btn-success" onClick={this.onEventHandle}>Go To Detail</button>
            </div>
         );
    }
}
 
export default CourseItem;