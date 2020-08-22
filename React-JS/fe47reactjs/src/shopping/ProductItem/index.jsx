import React, { Component } from 'react';
import classes from './style.module.css';
class ProductItem extends Component {
    state = {
        isShowDesc: true
    }
    handleToggleDescription = () => {
        this.setState({ isShowDesc: !this.state.isShowDesc }, () => { });
    }
    handleViewDetail = (data) => () => {
        this.props.getProduct(data);
    }
    render() {
        const { name, desc, img } = this.props.item;
        return (
            <div className="card ">
                <img src={img} alt="" className={classes.img} />
                <div className="card-body">
                    <h4>{name}</h4>
                    {/*{this.isShowDesc ? <p>{desc}</p> : null}*/}
                    {this.state.isShowDesc && <p>{desc}</p>}
                    <button className="btn btn-outline-success mr-5" onClick={this.handleViewDetail(this.props.item)}>Xem chi tiết</button>
                    <button className="btn btn-outline-primary" onClick={this.handleToggleDescription}>{this.state.isShowDesc ? 'Ẩn mô tả' : 'Hiện mô tả'}</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;