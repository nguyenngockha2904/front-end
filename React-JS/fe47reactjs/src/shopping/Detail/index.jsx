import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const { name, screen, img, backCamera, frontCamera, price } = this.props.prodItem;
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-4">
                        <p className="h3 text-center">{name}</p>
                        <img src={img} alt="" className="w-100 img-fluid" />
                    </div>
                    <div className="col-8">
                        <p className="h3">Thông số kĩ thuật</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{screen}</td>
                                </tr>
                                <tr>
                                    <td>Cammera sau</td>
                                    <td>{backCamera}</td>
                                </tr>
                                <tr>
                                    <td>Cammera trước</td>
                                    <td>{frontCamera}</td>
                                </tr>
                                <tr>
                                    <td>Giá tiền</td>
                                    <td>{price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;