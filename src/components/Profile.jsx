import { Component, } from "react";


class Profile extends Component {
    render () {
        return (
          <>
          
            <div className="container-fluid p-0 bg-dark min-vh-100">
              <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-center mw-100">
                <div className="container-fluid p-0 mb-2 px-5 ">
                  <a className="navbar-brand" href="index.html">
                    <img style={{}} width="130px" src="" alt="..."
                    />
                  </a>
                </div>
              </nav>
              <div className="container d-flex align-items-center text-light p-0 mb-3">
                <div className="container w-50">
                  <h1 className="display-4 fw-semibold m-0">Edit Profile</h1>
                  <hr className="border border-secondary border-1 opacity-50" />
                  <div className="row">
                    <div className="col-xxl-2 col-lg-2 col-xl-2 col-xxl-2 p-0 ps-2 position-relative">
                      <img src="..." alt="avatar" />
                      <span className="position-absolute top-10 start-40 translate-middle px-2 py-1 bg-dark border border-light rounded-circle">
                        <i className="bi bi-pencil-fill" />
                      </span>
                    </div>
                    <div className="col-xxl-8 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 col-xxl-8 offset-xxl-1">
                      <div className="border border-1 border-dark p-2 bg-secondary fw-semibold mb-4">
                        Strive student
                      </div>
                      <div>
                        <h4 className="text-light opacity-75 mb-3">
                          Language:
                        </h4>
                      </div>
                      <div>
                        <div className="dropend me-auto">
                        </div>
                      </div>
                      <hr className="border border-secondary border-1 opacity-50 mt-4" />
                      <h4 className="text-light opacity-75 mt-5">
                        Maturity Settings:
                      </h4>
                      <div className="d-grid gap-2">
                        <div className="row">
                          <div className="col-8">
                            <button
                              className="text-center fw-semibold w-100 btn btn-secondary opacity-75 text-light opacity-100 p-0 py-1 px-3 mt-3 mb-3"
                              type="button"
                            >
                              ALL MATURITY RATINGS
                            </button>
                          </div>
                        </div>
                        <p>
                          Show Titles of <strong>All maturity ratings</strong>{" "}
                          for this profile
                        </p>
                        <div className>
                          <button
                            type="button"
                            className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
                          >
                            E D I T
                          </button>
                        </div>
                      </div>
                      <hr className="border border-secondary border-1 opacity-50" />
                      <h4 className="text-light opacity-75 mt-4">
                        Autoplay controls
                      </h4>
                      <div className="d-flex align-items-center">
                        <input
                          className="display-6 form-check-input bg-dark text-secondary align-items-center m-0 me-3"
                          type="checkbox"
                          defaultValue
                          id="firstCheckbox"
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor="firstCheckbox"
                        >
                          Autoplay next episode in a series on all devices.
                        </label>
                      </div>
                      <div className="d-flex align-items-center mt-2 mb-5">
                        <input
                          className="display-6 form-check-input bg-dark text-secondary align-items-center m-0 me-3"
                          type="checkbox"
                          defaultValue
                          id="firstCheckbox1"
                        />
                        <label
                          className="form-check-label fw-semibold"
                          htmlFor="firstCheckbox1"
                        >
                          Autoplay previews while browsing on all devices.
                        </label>
                      </div>
                    </div>
                    <hr className="border border-secondary border-1 opacity-50 mb-4" />
                    <div className="d-flex justify-content-around">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
                      >
                        S A V E
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-25 py-3 me-3 fw-semibold"
                      >
                        C A N C E L
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-50 py-3 fw-semibold"
                      >
                        D E L E T E &nbsp;&nbsp; P R O F I L E
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

    }
}

export default Profile