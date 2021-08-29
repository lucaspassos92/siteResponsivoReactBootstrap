import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => this.setState({ photos: json }))
  }

  render() {
    return (
      <div className="container-fluid p-0">
        {/* ----------------Menu Nav fixed ----------------*/}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  fixed-top">

          <a className="navbar-brand" href="#home">LOGOSITE</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link mt-md-3" href="#">Home</a>
              <a className="nav-item nav-link mt-md-3" href="#">Channel</a>
              <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">Login</a>
            </div>
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input className="form-control mr-3" placeholder="UserName" />
                <button className="btn btn-outline-success" type="button">Login</button>
              </div>
            </form>
          </section>
        </nav>
        {/* ----------------SLIDE ----------------*/}
        <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="3000">
          <ol className="carousel-indicators">
            <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
            <li data-target="#carouselSection" data-slide-to="1" ></li>
            <li data-target="#carouselSection" data-slide-to="2" ></li>
          </ol>
          <div className="caroulsel-inner align-content-center">
            <div className="carousel-item active">
              <img src="http://via.placeholder.com/600/92c52" alt="inagem 1" className="d-block w-100 image-fluid" ></img>
            </div>
            <div className="carousel-item">
              <img src="http://via.placeholder.com/600/771796" alt="inagem 2" className="d-block w-100 image-fluid"></img>
            </div>
            <div className="carousel-item">
              <img src="http://via.placeholder.com/600/24f355" alt="inagem 3" className="d-block w-100 image-fluid"></img>
            </div>
          </div>
          <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </div>
          <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </div>
        </section>
        {/* ----------------Body-MapImages ----------------*/}
        <section className="container p-3 mt-5 mb-5">
          <ul className="list-unstyled p-2">
            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      {photo.albumId} <br />
                      {photo.id}
                      {photo.title}
                      {photo.url}
                      {photo.thumbnailUrl}
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </section>
        {/* ----------------FOOTER ----------------*/}
        <footer className="container col-12  pt-3  footer bg-dark text-light text-center">
          <container className="container col-8 col-md-4 d-flex justify-content-around">
            < i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-instagram"></i>
          </container>


        </footer>
      </div>
    );
  }

}

export default App;
