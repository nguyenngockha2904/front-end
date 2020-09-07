import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHOOSE_CATEGORIES } from '../../Redux/actions/type';
class Categories extends Component {
    handleClickCategory = (name) => () => {
        const action = {
            type: CHOOSE_CATEGORIES,
            payload: name
        }
        this.props.dispatch(action);
    }
    render() {
        return (
            <div className="btn-group">
                {this.props.categories.map((item, index) => {
                    return (
                        <button key={index} className="btn btn-secondary"
                            onClick={this.handleClickCategory(item.type)}
                            className={this.props.filterProducts === item.type ? 'btn btn-primary' : 'btn btn-secondary'}
                        >
                            {item.showName}
                        </button>
                    )
                })}

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories,
        filterProducts: state.filterProducts
    }
}
export default connect(mapStateToProps)(Categories);