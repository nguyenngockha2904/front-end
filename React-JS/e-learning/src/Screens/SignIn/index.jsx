import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/user';
class SignInScreen extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: ''
                }}
                onSubmit={(values) => {
                    this.props.dispatch(login(values));
                }}
                render={({ handleChange }) => (
                    <Form className="w-25 m-auto">
                        <h1 className="text-center">Đăng nhập</h1>
                        <div className="form-group">
                            <label>Tài khoản : </label>
                            <Field type="text" className="form-control" name="taiKhoan"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu : </label>
                            <Field type="password" className="form-control" name="matKhau"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type='button' className="btn btn-success">Đăng nhập</button>
                        </div>
                    </Form>
                )} />
        );
    }
}

export default connect()(SignInScreen);