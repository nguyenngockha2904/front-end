import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHOOSE_CLOTHES } from '../../Redux/actions/type';
class ProductItem extends Component {
    render() {
        const { name, imgSrc_jpg, type, imgSrc_png } = this.props.item;
        return (
            <div className="card p-2 my-2">
                <img src={imgSrc_jpg} alt="hình sp" className="img-fluid" />
                <p>{name}</p>
                <button className="btn btn-success"
                    onClick={this._chooseclot({ type: type, img: imgSrc_png })}
                >Thử đồ</button>
            </div>
        );
    }
    _chooseclot = (cloth) => () => {
        const action = {
            type: CHOOSE_CLOTHES,
            payload: cloth
        }
        this.props.dispatch(action);
    }
}

export default connect()(ProductItem);