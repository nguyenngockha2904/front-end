import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import { connect } from 'react-redux';
class Products extends Component {
    renderProductItem = () => {
        return this.props.filter ? this.props.products.filter(item => item.type === this.props.filter).map((item, index) => {
            return (
                <div className="col-4" key={index} >
                    <ProductItem item={item} />
                </div>
            )
        }) : this.props.products.map((item, index) => {
            return (
                <div className="col-4" key={index} >
                    <ProductItem item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
        filter: state.filterProducts
    }
}
export default connect(mapStateToProps)(Products);