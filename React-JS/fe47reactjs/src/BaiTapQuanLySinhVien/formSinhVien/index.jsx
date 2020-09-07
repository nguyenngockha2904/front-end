import React, { Component } from 'react';
import { THEM_SV, SUA_SV } from '../../user-managerment/Redux/actions/type';
import { connect } from 'react-redux';
import _ from 'lodash';
class FormSinhVien extends Component {
    state = {
        masv: '',
        tensv: '',
        email: '',
        sdt: '',
    }
    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: THEM_SV,
            payload: this.state
        });
    }
    componentDidUpdate(prevProps, prevState) { //setstate hay nhận props mới đều chạy ==> 2 tham số props cũ và state cũ để setstate dc trong component này thì phải có if nếu k có if thì sẽ trở thành vòng lặp vô tận
        if (!_.isEqual(this.props.sinhVienSua.masv, this.state.masv)) { //nếu như props trước khi render !== state hiện tại thì 
            // =>setState = props đó
            this.setState(prevProps.sinhVienSua);
        }

    }
    // componentWillReceiveProps(newProps) { //hàm lifecycle chạy sau khi props thay đổi và trước khi render
    //     this.setState(newProps.sinhVienSua);
    // }

    render() {
        const { masv, tensv, sdt, email } = this.state;
        return (
            <div className="card text-left">
                <div className="card-header  bg-dark text-light">Thông tin sinh viên</div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Mã sinh viên</p>
                                <input type="text" className="form-control" name="masv" onChange={this.handleChange}
                                    value={masv}
                                />
                            </div>
                            <div className="form-group">
                                <p>Tên sinh viên</p>
                                <input type="text" className="form-control" name="tensv" onChange={this.handleChange}
                                    value={tensv}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Email</p>
                                <input type="email" className="form-control" name="email" onChange={this.handleChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input type="text" className="form-control" name="sdt" onChange={this.handleChange}
                                    value={sdt}
                                />
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-success">Thêm sv</button>
                            <button type="button" className="btn btn-success"
                                onClick={() => {
                                    this.props.dispatch({
                                        type: SUA_SV,
                                        payload: this.state,
                                    })
                                }}
                            >Cập nhật</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        sinhVienSua: state.baiQuanLySinhVienReducer.sinhVienSua
    }
}
export default connect(mapStateToProps)(FormSinhVien);