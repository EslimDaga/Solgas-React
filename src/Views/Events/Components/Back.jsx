import React, { useEffect, useState } from "react";
import Axios from "axios";
import cache from "../../../Helpers/cache";
import { API, sub } from "../../../Constants/global";
import { MDBDataTable } from 'mdbreact';
//Import Styles
import "./../assets/table.css";
import { Modal,Button } from "react-bootstrap";

const UnitDriver = () => {

  //Get Token
  const token = cache.getItem("user").token;

  const [data,setData] = useState([]);
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [modalEditar, setModalEditar]=useState(false);

  const handleCloseAdd = () => setShow(false);
  const handleShowAdd = () => setShow(true);


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


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const unitData = async () => {
    await Axios.get(API + sub + "get-events/", {
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
      await unitData();
    }
    fetchData();
  },[unitData]);

  const useDrivers = data.map(item => {
    const container = {};
    const provider = "provider";
    const logistic_operator = "logistic_operator";
    const unitid = "unitid";
    const type_of_service = "type_of_service";
    const checkpoint = "checkpoint";
    const driver_fullname = "driver_fullname";
    const datetime = "datetime";
    const actions = "actions";
    container[provider] = item.provider;
    container[logistic_operator] = item.logistic_operator;
    container[unitid] = item.unitid;
    container[type_of_service] = item.type_of_service;
    container[checkpoint] = item.checkpoint;
    container[driver_fullname] = item.driver_fullname;
    container[datetime] = item.datetime;
    container[actions] = <button onClick={()=>seleccionarConsola(item, 'Eliminar')} className="btn btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
    return container;
  })

  const table = {
    columns: [
      {
        label: 'Proveedor',
        field: 'provider',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Operador Logístico',
        field: 'logistic_operator',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Placa',
        field: 'unitid',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Tipo de Servicio',
        field: 'type_of_service',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Checkpoint',
        field: 'checkpoint',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Nombre del Conductor',
        field: 'driver_fullname',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Fecha de Creación',
        field: 'datetime',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: 'Ver Detalle',
        field: 'actions',
        sort: 'asc',
        width: 100
      }
    ],
    rows: useDrivers
  };

  return(
    <div className="row layout-top-spacing">
      <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
        <div className="statbox widget box box-shadow">
          <div className="widget-header">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Lista de Eventos</h4>
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
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Mensaje
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={consolaSeleccionada && consolaSeleccionada.images} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary">
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default UnitDriver;