import React, { Component } from 'react';
import { data } from './data';
class MovieExercise extends Component {
    state = {
        movies: data,
    }
    renderCard = () => {
        return this.state.movies.map((item,index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card">
                        <img src={item.hinhAnh} alt="movie" className="w-100 img-fluid" />
                        <div className="p-3">
                            <h4>{item.tenPhim}</h4>
                            <p className="">{item.moTa.substr(0,80)+'....'}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                <h1 className="display-3">Danh sách phim</h1>
                <div className="container">
                    <div className="row">
                        {this.renderCard()}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieExercise;