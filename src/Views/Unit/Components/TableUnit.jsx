import React, { useEffect, useState } from "react";
import Axios from "axios";
import cache from "../../../Helpers/cache";
import { API, sub } from "../../../Constants/global";
//Import Styles
import "./../assets/table.css";

const TableUnit = () => {

  const [data,setData] = useState([]);

  //Get Token
  const token = cache.getItem("user").token;

  const unitsData = async () => {
    await Axios.get(API + sub + "get-units/", {
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(response.data);
    })
  };

  useEffect(() => {
    async function fetchData() {
      await unitsData();
    }
    fetchData();
  });


  return(
    <div className="row layout-top-spacing">
      <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
        <div className="statbox widget box box-shadow">
          <div className="widget-header">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Lista de Unidades</h4>
              </div>
            </div>
          </div>
          <div className="widget-content widget-content-area">
            <div className="table-responsive">
              <table className="table table-bordered table-striped mb-4">
                <thead>
                  <tr>
                    <th>Placa</th>
                    <th>Operador logístico</th>
                    <th>Proveedor</th>
                    <th>Tipo de Servicio</th>
                    <th>Usuario</th>
                    <th>Fecha de Creación</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (
                  data.map(unit => {
                    const { license_plate, logistic_operator, provider, service_type, username, created } = unit;
                    return(
                      <tr key={license_plate}>
                      <td>{license_plate}</td>
                      <td>{logistic_operator}</td>
                      <td>{provider}</td>
                      <td>{service_type}</td>
                      <td>{username}</td>
                      <td>{created}</td>
                      <td className=" text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                    </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td>No data</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TableUnit;