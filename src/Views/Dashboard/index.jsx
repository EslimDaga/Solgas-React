import React, { Component } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2"
//Style
import "./assets/css/dashboard.css";

const data = {
  labels: ['Eventos', 'Checkpoint', 'Conductores', 'Unidades'],
  datasets: [
    {
      label: 'Resultados Solgas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#1b55e2',
        '#3cba92',
        '#f09819',
        '#c71d6f'
      ],
      borderColor: [
        '#1b55e2',
        '#3cba92',
        '#f09819',
        '#c71d6f'
      ],
      borderWidth: 1,
    },
  ],
}

const dataPie = {
  labels: ['Eventos', 'Checkpoint', 'Conductores', 'Unidades'],
  datasets: [
    {
      label: 'Resultados Solgas',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#1b55e2',
        '#3cba92',
        '#f09819',
        '#c71d6f'
      ],
      borderColor: [
        '#1b55e2',
        '#3cba92',
        '#f09819',
        '#c71d6f'
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container" id="container">
          <div className="overlay"></div>
          <div className="search-overlay"></div>
          <Sidebar />
          <div id="content" className="main-content">
            <div className="layout-px-spacing">
              <div className="page-header">
                <div className="page-title">
                  <h3>Dashboard</h3>
                </div>
              </div>
              <div className="row layout-top-spacing">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <div className="w-content">
                        <div className="w-info">
                          <h6 className="value">210</h6>
                          <p className="">Eventos</p>
                        </div>
                        <div className="">
                          <div className="w-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-gradient-primary" role="progressbar" style={{width: "15%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <div className="w-content">
                        <div className="w-info">
                          <h6 className="value">150</h6>
                          <p className="">Checkpoints</p>
                        </div>
                        <div className="">
                          <div className="w-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-gradient-success" role="progressbar" style={{width: "57%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <div className="w-content">
                        <div className="w-info">
                          <h6 className="value">150</h6>
                          <p className="">Conductores</p>
                        </div>
                        <div className="">
                          <div className="w-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-gradient-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <div className="w-content">
                        <div className="w-info">
                          <h6 className="value">300</h6>
                          <p className="">Unidades</p>
                        </div>
                        <div className="">
                          <div className="w-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-gradient-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <Doughnut data={dataPie} />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                  <div className="widget widget-card-four">
                    <div className="widget-content">
                      <Bar data={data} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
};

export default index