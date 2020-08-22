import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../../services/index';
import { signupUserSchema } from '../../services/user';

class SignUpScreen extends Component {
    handleSubmit = values => {
        // console.log(values);
        userService.signUp(values).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">
                    Đăng kí
                </h1>
                <Formik
                    initialValues={{
                        taiKhoan: '',
                        matKhau: '',
                        hoTen: '',
                        soDT: '',
                        maLoaiNguoiDung: '',
                        maNhom: 'GP01',
                        email: ''
                    }}
                    validationSchema={signupUserSchema}
                    onSubmit={this.handleSubmit}

                    render={(formikProps) => (
                        <Form action="">
                            <div className="form-group">
                                <label htmlFor="">Tài khoản: </label>
                                <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                                <ErrorMessage name="taiKhoan">
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mật khẩu: </label>
                                <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                                <ErrorMessage name="matKhau" >
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Họ tên: </label>
                                <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                                <ErrorMessage name="hoTen" >
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">email: </label>
                                <Field type="email" className="form-control"
                                    name="email"
                                    onChange={formikProps.handleChange} />
                                <ErrorMessage name="email" >
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Số điện thoại: </label>
                                <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} />
                                <ErrorMessage name="soDT" >
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mã nhóm: </label>
                                <Field as="select" className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                                    <option value="">GP01</option>
                                    <option value="">GP02</option>
                                    <option value="">GP03</option>
                                    <option value="">GP04</option>
                                    <option value="">GP05</option>
                                    <option value="">GP06</option>
                                    <option value="">GP07</option>
                                    <option value="">GP08</option>
                                    <option value="">GP09</option>
                                    <option value="">GP10</option>
                                </Field>
                                <ErrorMessage name="maNhom" >
                                    {(meg) => <div className="alert alert-danger">{meg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="text-center"><button className="btn btn-success">Submit</button></div>
                        </Form>
                    )} />
            </div>
        );
    }
}

export default SignUpScreen;