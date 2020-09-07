import React, { Component } from 'react';
import FormSinhVien from '../formSinhVien';
import { connect } from 'react-redux';
import { XOA_SV, SHOW_SV } from '../../user-managerment/Redux/actions/type';
class BaiTapQuanLySinhVien extends Component {
    handleDeleteSinhVien = () => {

    }
    renderSv = () => {
        return this.props.mangsinhvien.map((sv, index) => {
            return <tr key={index}>
                <td className="">{sv.masv}</td>
                <td className="">{sv.tensv}</td>
                <td className="">{sv.email}</td>
                <td className="">{sv.sdt}</td>
                <td className="">
                    <button className="btn btn-info" onClick={() => this.props.dispatch({
                        type: SHOW_SV,
                        payload: sv
                    })}>Edit</button>
                    <button className="btn btn-danger" onClick={() => this.props.dispatch({
                        type: XOA_SV,
                        payload: sv
                    })}>Delete</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <FormSinhVien />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Số điện thoại</th>
                            <th>Phone Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSv()}
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props.mangsinhvien);
    }
}
const mapStateToProps = state => {
    return {
        mangsinhvien: state.baiQuanLySinhVienReducer.mangSinhVien,
    }
}


export default connect(mapStateToProps)(BaiTapQuanLySinhVien);