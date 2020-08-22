import React, { Component } from 'react';
import ProductItem from '../ProductItem';

class ProductList extends Component {
    renderList = () => {
        return this.props.item.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem item={item} getProduct={this.props.getProduct} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <p className="h1 display-4 text-center">Danh sách sản phẩm</p>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default ProductList;