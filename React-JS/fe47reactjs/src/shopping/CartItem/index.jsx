import React, { Component } from 'react';

class CartItem extends Component {
    state = {
        quantity: this.props.item.quantity,
        product: this.props.item.product
    }
    total = (price, quantity) => {
        this.props.calTotal(price * quantity);
    }
    handleDeleteitem = (id) => () => {
        this.props.deleteItemCart(id);
    }
    render() {
        const { id, img, name, price } = this.props.item.product;
        const { quantity } = this.props.item;
        return (
            <tr>
                <td><img style={{ width: '200px' }} src={img} /></td>
                <td style={{ fontSize: '25px' }}>{name}</td>
                <td>{new Intl.NumberFormat('vi-VI', {
                    style: 'currency',
                    currency: 'VND',
                }).format(price)}</td>
                <td>
                    {quantity}

                </td>
                <td>{new Intl.NumberFormat('vi-VI', {
                    style: 'currency',
                    currency: 'VND',
                }).format(price * quantity)}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleDeleteitem(id)}>x</button>
                </td>
            </tr>
        );
    }
}

export default CartItem;