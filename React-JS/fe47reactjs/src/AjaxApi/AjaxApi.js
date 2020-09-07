import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { FET_DATA_MOVIE } from '../user-managerment/Redux/actions/type';
import { layDanhSachPhimAction } from '../user-managerment/Redux/actions/QuanLyPhimAction';
class AjaxApi extends Component {
    state = {
        danhSachPhim: [],
    }
    renderPhim = () => {
        return this.props.danhSachPhim.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card text-left">
                        <img className="card-img-top" src={item.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>

                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className='row'>
                    {this.renderPhim()}
                </div>
            </div>

        );
    }
    componentDidMount() {
        // Axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13',
        //     method: 'get'
        // }).then(res => {
        //     console.log(res.data);
        //     this.props.dispatch({
        //         type: FET_DATA_MOVIE,
        //         payload: res.data,
        //     });
        // }).catch(err => {
        //     console.log(err);
        // })
        this.props.dispatch(layDanhSachPhimAction());
    }
}
const mapStateToProps = state => {
    return {
        danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
    }
};
export default connect(mapStateToProps)(AjaxApi);