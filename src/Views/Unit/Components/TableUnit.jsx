import React, { useEffect, useState } from "react";
import Axios from "axios";
import cache from "../../../Helpers/cache";
import { API, sub } from "../../../Constants/global";
import { MDBDataTable } from 'mdbreact';
//Import Styles
import "./../assets/table.css";
import { Modal,Button } from "react-bootstrap";

const TableUnit = () => {

  //Get Token
  const token = cache.getItem("user").token;

  const [data,setData] = useState([]);
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [modalEditar, setModalEditar]=useState(false);

  const handleCloseAdd = () => setShow(false);
  const handleShowAdd = () => setShow(true);


  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    license_plate : "",
    logistic_operator: "",
    provider: "",
    service_type: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setConsolaSeleccionada(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const unitsDelete = async() => {
    await Axios.delete(API + sub + `delete-unit/` + consolaSeleccionada.license_plate + "/",{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(data.filter((item) => item.license_plate !== consolaSeleccionada.license_plate));
      abrirCerrarModalEliminar()
    })
  }

  const unitsAdd = async () => {
    await Axios.post(API + sub + "create-unit/",consolaSeleccionada,{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(data.concat(response.data))
      handleCloseAdd();
    })
  }


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

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setSmShow(!smShow);
  }

  const seleccionarConsola=(consola, caso)=>{
    setConsolaSeleccionada(consola);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

  useEffect(() => {
    async function fetchData() {
      await unitsData();
    }
    fetchData();
  },[]);

  const useUnits = data.map(item => {
    const container = {};
    const license_plate = "license_plate";
    const logistic_operator = "logistic_operator";
    const provider = "provider";
    const service_type = "service_type";
    const username = "username";
    const created = "created";
    const actions = "actions";
    container[license_plate] = item.license_plate;
    container[logistic_operator] = item.logistic_operator;
    container[provider] = item.provider;
    container[service_type] = item.service_type;
    container[username] = item.username;
    container[created] = item.created;
    container[actions] = <button onClick={()=>seleccionarConsola(item, 'Eliminar')} className="btn btn-danger">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    </button>
    return container;
  })

  const table = {
    columns: [
      {
        label: 'Placa',
        field: 'license_plate',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Operador logístico',
        field: 'logistic_operator',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Proveedor',
        field: 'provider',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Tipo de Servicio',
        field: 'service_type',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Usuario',
        field: 'username',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Fecha de Creación',
        field: 'created',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Acciones',
        field: 'actions',
        sort: 'asc',
        width: 100
      }
    ],
    rows: useUnits
  };

  return(
    <div className="row layout-top-spacing">
      <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
        <div className="statbox widget box box-shadow">
          <div className="widget-header">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12 col-12">
                <h4>Lista de Unidades</h4>
              </div>
              <div className="col-xl-6 col-md-12 col-sm-12 col-12">
                <div className="d-flex flex-row-reverse bd-highlight">
                  <button onClick={handleShowAdd}  className="btn btn-primary">
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-content widget-content-area">
            <div className="table-responsive">
              <MDBDataTable
                responsive
                striped
                bordered
                small
                data={table}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title style={{color : "#0b2266"}}>Agregar Unidades</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group mb-3">
            <div className="mb-2">
              <strong>Número de placa</strong>
            </div>
            <input
              type="text"
              class="form-control"
              name="license_plate"
              placeholder="Ingrese su número de placa"
              onChange = {handleChange}
              required
            />
          </div>
          <div class="form-group mb-3">
            <div className="mb-2">
              <strong>Operador Logístico</strong>
            </div>
            <input
              type="text"
              class="form-control"
              name="logistic_operator"
              placeholder="Ingrese su operador logístico"
              onChange = {handleChange}
              required
            />
          </div>
          <div class="form-group mb-3">
            <div className="mb-2">
              <strong>Proveedor</strong>
            </div>
            <input
              type="text"
              class="form-control"
              name="provider"
              placeholder="Ingrese su proveedor"
              onChange = {handleChange}
              required
            />
          </div>
          <div class="form-group mb-3">
            <div className="mb-2">
              <strong>Tipo de servicio</strong>
            </div>
            <input
              type="text"
              class="form-control"
              name="service_type"
              placeholder="Ingrese su tipo de servicio"
              onChange = {handleChange}
              required
            />
          </div>
          <button onClick={unitsAdd} class="btn btn-primary btn-block mt-3">Enviar</button>
        </Modal.Body>
      </Modal>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Mensaje
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro que desea eliminar esta unidad? <b>{consolaSeleccionada && consolaSeleccionada.license_plate}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => unitsDelete()}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default TableUnit;