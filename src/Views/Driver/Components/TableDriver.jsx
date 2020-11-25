import React, { useEffect, useState } from "react";
import Axios from "axios";
import cache from "../../../Helpers/cache";
import { API, sub } from "../../../Constants/global";
import { MDBDataTable } from 'mdbreact';
//Import Styles
import "./../assets/table.css";
import { Modal,Button,Alert } from "react-bootstrap";


const TableDriver = () => {

  //Get Token
  const token = cache.getItem("user").token;
  const is_staff = cache.getItem("user").is_staff;

  const [data,setData] = useState([]);
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [showA, setShowA] = useState(false);
  const [showA1, setShowA1] = useState(false);

  const handleCloseAdd = () => setShow(false);
  const handleShowAdd = () => setShow(true);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowA1 = () => setShowA1(!showA1);

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    dni : "",
    lastname: "",
    firstname: "",
    license_number: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setConsolaSeleccionada(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  const driverDelete = async() => {
    await Axios.delete(API + sub + `delete-driver/` + consolaSeleccionada.dni + "/",{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(data.filter((item) => item.dni !== consolaSeleccionada.dni));
      setShowA1(true);
      abrirCerrarModalEliminar()
    })
  }

  const driverAdd = async () => {
    await Axios.post(API + sub + "create-driver/",consolaSeleccionada,{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(data.concat(response.data))
      setShowA(true);
      handleCloseAdd();
    })
  }


  const driverData = async () => {
    await Axios.get(API + sub + "get-drivers/", {
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
      await driverData();
    }
    fetchData();
  },[]);

  const useDrivers = data.map(item => {
    const container = {};
    const dni = "dni";
    const lastname = "lastname";
    const firstname = "firstname";
    const license_number = "license_number";
    const actions = "actions";
    container[dni] = item.dni;
    container[lastname] = item.lastname;
    container[firstname] = item.firstname;
    container[license_number] = item.license_number;
    container[actions] = <button disabled={!is_staff} onClick={()=>seleccionarConsola(item, 'Eliminar')} className="btn btn-danger">
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
        label: 'Documento de Identidad',
        field: 'dni',
        sort: 'asc',
        width: 150,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Apellidos',
        field: 'lastname',
        sort: 'asc',
        width: 270,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Nombres',
        field: 'firstname',
        sort: 'asc',
        width: 200,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Número de licencia',
        field: 'license_number',
        sort: 'asc',
        width: 100,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Acciones',
        field: 'actions',
        sort: 'asc',
        width: 100,
        attributes: {
          'class': 'text-center',
        }
      }
    ],
    rows: useDrivers
  };

  return(
    <div className="row layout-top-spacing">
      <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <Alert show={showA} onClose={toggleShowA} className="alert alert-success mb-1 mt-2">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="alert">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <strong>Conductor agregado con éxito!</strong>
            </Alert>
            <Alert show={showA1} onClose={toggleShowA1} className="alert alert-danger mb-1 mt-2">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="alert">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <strong>Conductor eliminado con éxito!</strong>
            </Alert>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12 col-12">
            <h4>Lista de Conductores</h4>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12 col-12">
            <div className="d-flex flex-row-reverse bd-highlight pb-3">
              <button onClick={handleShowAdd}  className="btn btn-primary">
                <span>Agregar Conductores</span>
              </button>
            </div>
          </div>
        </div>
        <div className="statbox widget box box-shadow">
          <div className="widget-header">
          </div>
          <div className="widget-content widget-content-area">
            <div className="table-responsive-lg">
              <MDBDataTable
                responsive
                striped
                bordered
                data={table}
                className="text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title style={{color : "#0b2266"}}>Agregar Conductor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mb-3">
            <div className="mb-2">
              <strong>Documento de Identidad</strong>
            </div>
            <input
              type="text"
              className="form-control"
              name="dni"
              placeholder="Ingrese su dni"
              onChange = {handleChange}
              required
              autoFocus
            />
          </div>
          <div className="form-group mb-3">
            <div className="mb-2">
              <strong>Apellidos</strong>
            </div>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Ingrese sus apellidos"
              onChange = {handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <div className="mb-2">
              <strong>Nombres</strong>
            </div>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Ingrese sus nombres"
              onChange = {handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <div className="mb-2">
              <strong>Número de Licencia</strong>
            </div>
            <input
              type="text"
              className="form-control"
              name="license_number"
              placeholder="Ingrese su tipo de número de licencia"
              onChange = {handleChange}
              required
            />
          </div>
          <button onClick={driverAdd} className="btn btn-primary btn-block mt-3">Enviar</button>
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
        <Modal.Body>¿Seguro que desea eliminar al conductor <b>{consolaSeleccionada && consolaSeleccionada.firstname} {consolaSeleccionada && consolaSeleccionada.lastname}?</b></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => driverDelete()}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default TableDriver;