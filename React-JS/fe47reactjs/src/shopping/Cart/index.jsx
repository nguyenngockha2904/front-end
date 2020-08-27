import React, { Component } from 'react';
import CartItem from '../CartItem';
class Cart extends Component {
    renderCart = () => {
        if (this.props.cartList.length === 0) {
            return (
                <td colSpan="100%" className='text-center'>ko có sản phẩm</td>
            )
        } else
            return this.props.cartList.map((item, index) => {
                return (
                    <CartItem item={item} key={index} deleteItemCart={this.props.deleteItemCart} />
                )
            })
    }
    calTotal = () => {
        return this.props.cartList.reduce((total, item) => {
            return item.product.price * item.quantity + total;
        }, 0);
    }
    render() {
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document" style={{
                            maxWidth: '960px', width: '100%'
                        }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Hình Ảnh</th>
                                                <th>Sản Phẩm</th>
                                                <th>Giá</th>
                                                <th>Số Lượng</th>
                                                <th>Tổng Cộng</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderCart()}
                                            {this.props.cartList.length > 0 && <tr>
                                                <td />
                                                <td />
                                                <td />
                                                <td style={{ fontSize: '15px' }} className="font-weight-bold">Tổng Tiền</td>
                                                <td style={{ fontSize: '15px' }} className="font-weight-bold">{new Intl.NumberFormat('vi-VI', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(this.calTotal())}</td>
                                                <td>
                                                    <button style={{ fontSize: '15px' }} className="btn btn-info">Thanh Toán</button>
                                                </td>
                                            </tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Cart;