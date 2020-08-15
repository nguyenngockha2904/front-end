import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                    <div>
                      {/*Begin Header */}
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                          </ul>
                          <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>
                      {/* End Header */}
                      {/* Carousel */}
                      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src="https://picsum.photos/1349/315/?image=973" alt="First slide" />
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/1349/315/?image=973" alt="Second slide" />
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://picsum.photos/1349/315/?image=973" alt="Third slide" />
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true" />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true" />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      {/* End Carousel */}
                      {/* Contnet */}
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-8">
                            <h1>What We Do</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                              doloribus fugiat,
                              qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                              consequatur
                              praesentium blanditiis?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                              doloribus fugiat,
                              qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                              consequatur
                              praesentium blanditiis?</p>
                          </div>
                          <div className="col-sm-4">
                            <h1>Contact US</h1>
                            <p>CyberSoft</p>
                            <p>Su Van Hanh, quận 10, Tp.HCM</p>
                            <p>website: cybersoft.edu.vn</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{width: '18rem'}}>
                              <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                              <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                  the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{width: '18rem'}}>
                              <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                              <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                  the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{width: '18rem'}}>
                              <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                              <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                  the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Content */}
                      {/* Footer */}
                      <div className="footer" style={{backgroundColor: 'green', textAlign: 'center', padding: '15px 0', color: 'white'}}>
                        Copyright by Mr.Nguyen
                      </div>
                    </div>
            </div>
        );
    }
}

export default Home;