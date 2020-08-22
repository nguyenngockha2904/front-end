import React, { Component } from 'react';
import CourseDetailScreen from '../../Screens/Detail';
import { Link } from 'react-router-dom';
class CourseItem extends Component {
    state = {
        item: this.props.item,
    }

    render() {
        return (
            <div className="card p-3">
                <img className="img-fluid" src={this.props.item.hinhAnh} style={{ height: 200 }} />
                <p className="lead font-weight-bold">{this.state.item.tenKhoaHoc}</p>
                <p className="lead">Instructor: {this.state.item.nguoiTao.hoTen}</p>
                <p className="lead">Rating: 5.0</p>
                <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-success">Go To Detail</Link>
            </div>
        );
    }
}

export default CourseItem;