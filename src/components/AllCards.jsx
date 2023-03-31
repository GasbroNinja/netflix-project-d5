import { Component } from "react";
import SingleCard from "./SingleCard";

import {
  Alert, Spinner,
} from "react-bootstrap";


class AllCards extends Component {
  state = {
    HarryPotter: [],
    LOR: [],
    ResidentE: [],
    isLoading: true
  };

  requestServer = async (endpoint, status) => {
    try {
      const response = await fetch(endpoint);


    if (response.ok) {
        const data = await response.json();
        this.setState({ [status]: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }

  };

  componentDidMount() {
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=harry%20potter",
      "HarryPotter"
    );
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Lord%20Of%20Rings",
      "LOR"
    );
    this.requestServer(
      "http://www.omdbapi.com/?apikey=b4f56189&s=Resident%20Evil",
      "ResidentE"
    );

  }

  render() {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="container-fluid mb-2 p-0">
            <h2 className="text-light">Trending now</h2>
          </div>
          <div id="carouselExample" className="carousel slide d-lg-block">
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="container-fluid px-0 mt-3">
                  <div className="row row-cols-6 justify-content-between g-1">
                    {this.state.isLoading && !this.state.error && (
                      <Spinner animation="border" variant="light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                    {this.state.error && !this.state.isLoading && (
                      <Alert variant="danger">
                        {this.state.errorMsg
                          ? this.state.errorMsg
                          : "Errore nel reperire i dati"}
                      </Alert>
                    )}
                    ;
                    {this.state.HarryPotter.slice(0, 5).map((HarryPotter) => (
                      <SingleCard
                        key={HarryPotter.imdbID}
                        src={HarryPotter.Poster}
                        alt={HarryPotter.Title}
                        HarryPotter={HarryPotter}
                      />
                    ))}
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mb-2 p-0">
            <h2 className="text-light">Watch it Again</h2>
          </div>
          <div id="carouselExample" className="carousel slide d-lg-block">
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="container-fluid px-0 mt-3">
                  <div className="row row-cols-6 justify-content-between g-1">
                    {this.state.isLoading && !this.state.error && (
                      <Spinner animation="border" variant="light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                    {this.state.error && !this.state.isLoading && (
                      <Alert variant="danger">
                        {this.state.errorMsg
                          ? this.state.errorMsg
                          : "Errore nel reperire i dati"}
                      </Alert>
                    )}
                    ;
                    {this.state.LOR.slice(0, 5).map((LOR) => (
                      <SingleCard
                        key={LOR.imdbID}
                        src={LOR.Poster}
                        alt={LOR.Title}
                        LOR={LOR}
                      />
                    ))}
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mb-2 p-0">
            <h2 className="text-light">New Releases</h2>
          </div>
          <div id="carouselExample" className="carousel slide d-lg-block">
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="container-fluid px-0 mt-3">
                  <div className="row row-cols-5 justify-content-between g-1">
                    {this.state.isLoading && !this.state.error && (
                      <Spinner animation="border" variant="light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                    {this.state.error && !this.state.isLoading && (
                      <Alert variant="danger">
                        {this.state.errorMsg
                          ? this.state.errorMsg
                          : "Errore nel reperire i dati"}
                      </Alert>
                    )}
                    ;
                    {this.state.ResidentE.slice(0, 5).map((ResidentE) => (
                      <SingleCard
                        key={ResidentE.imdbID}
                        src={ResidentE.Poster}
                        alt={ResidentE.Title}
                        ResidentE={ResidentE}
                      />
                    ))}
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AllCards;