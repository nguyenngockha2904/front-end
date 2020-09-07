import React, { Component } from 'react';
import classes from './style.module.css';
import { connect } from 'react-redux';
class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contain: 'images/background/background_998.jpg',
            body: 'images/allbody/bodynew.png',
            model: 'images/model/1000new.png',
            bikinitop: 'images/allbody/bikini_branew.png',
            bikinibottom: 'images/allbody/bikini_pantsnew.png',
            feetleft: 'images/allbody/feet_high_leftnew.png',
            feetright: 'images/allbody/feet_high_rightnew.png'
        }
    }
    render() {
        return (
            <div className="col-lg-6 col-sm-6">
                <div className={classes.contain} style={{ background: `URL(${this.props.model.background ? this.props.model.background : this.state.contain})` }}>
                    <div className={classes.body} style={{ background: `URL(${this.state.body})` }}>
                    </div>
                    <div className={classes.model} style={{ background: `URL(${this.state.model})` }}>
                    </div>
                    <div className={classes.bikinitop} style={{ background: `URL(${this.state.bikinitop})` }}>
                    </div>
                    <div className={classes.bikinibottom} style={{ background: `URL(${this.state.bikinibottom})` }}>
                    </div>
                    <div className={classes.feetleft} style={{ background: `URL(${this.state.feetleft})` }}>
                    </div>
                    <div className={classes.feetright} style={{ background: `URL(${this.state.feetright})` }}>
                    </div>
                    <div className={classes.bikinitop} style={{ backgroundImage: `URL(${this.props.model.topclothes})`, backgroundSize: 'cover' }}>
                    </div>
                    <div className={classes.bikinibottom} style={{ backgroundImage: `URL(${this.props.model.botclothes})`, backgroundSize: 'cover' }}>
                    </div>
                    <div className={classes.feetStyle} style={{ backgroundImage: `URL(${this.props.model.shoes})`, backgroundSize: 'cover' }}>
                    </div>
                    <div className={classes.handbagStyle} style={{ backgroundImage: `URL(${this.props.model.handbags})`, backgroundSize: 'cover' }}>
                    </div>
                    <div className={classes.hairStyle} style={{ backgroundImage: `URL(${this.props.model.hairstyle})`, backgroundSize: 'cover' }}>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        model: state.model
    }
}

export default connect(mapStatetoProps)(Model);   