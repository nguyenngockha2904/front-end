import React, { Component } from 'react';
import Footer from '../../Layouts/Footer';
import Header from '../../Layouts/Header';
import Categories from '../../Components/Categories';
import Products from '../../Components/Products';
import Model from '../../Components/model';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <Categories />
                                <Products />
                            </div>
                            <div className="col-6">
                                <Model />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;