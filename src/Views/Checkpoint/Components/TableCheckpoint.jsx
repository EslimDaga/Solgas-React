import React, { useEffect, useState } from "react";
import Axios from "axios";
import cache from "../../../Helpers/cache";
import { API, sub } from "../../../Constants/global";
import { MDBDataTable } from "mdbreact";
import { yourdate } from "../../../Common/decorator";
//Import Styles
import "./../assets/table.css";
import { Modal,Button,Alert } from "react-bootstrap";
import request from "../../../Service/request";

const TableCheckpoint = () => {

  //Get Token
  const token = cache.getItem("user").token;
  const is_staff = cache.getItem("user").is_staff;

  const [data,setData] = useState([]);
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showA1, setShowA1] = useState(false);

  const handleCloseAdd = () => setShow(false);
  const handleShowAdd = () => setShow(true);
  const toggleShowA1 = () => setShowA1(!showA1);

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    username : "",
    created: "",
    modified: "",
    name: "",
  });

  const checkpointDelete = async() => {
    await request.delete(API + sub + `delete-checkpoint/` + consolaSeleccionada.name + "/",{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(response => {
      setData(data.filter((item) => item.name !== consolaSeleccionada.name));
      setShowA1(true);
      abrirCerrarModalEliminar()
    })
  }

  const checkpointData = async () => {
    await request.get(API + sub + "get-checkpoints/", {
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
    setShowMap(!showMap);
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
      await checkpointData();
    }
    fetchData();
  },[]);

  const useCheckpoint = data.map(item => {
    const container = {};
    const name = "name";
    const username = "username";
    const created = "created";
    const modified = "modified";
    const actions = "actions";
    container[name] = item.name;
    container[username] = item.username;
    container[created] = yourdate(item.created);
    container[modified] = yourdate(item.modified);
    container[actions] = <>&nbsp;
      <button onClick={()=>seleccionarConsola(item, 'Editar')} className="btn btn-primary">
        <svg svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      </button>&nbsp;
      <button disabled={!is_staff} onClick={()=>seleccionarConsola(item, 'Eliminar')} className="btn btn-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </button>
    </>
    return container;
  })

  const table = {
    columns: [
      {
        label: 'Nombre',
        field: 'name',
        sort: 'asc',
        width: 150,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Usuario',
        field: 'username',
        sort: 'asc',
        width: 270,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Fecha de Creación',
        field: 'created',
        sort: 'asc',
        width: 200,
        attributes: {
          'class': 'text-center',
        }
      },
      {
        label: 'Fecha de Modificación',
        field: 'modified',
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
    rows: useCheckpoint
  };

  return(
    <div className="row layout-top-spacing">
      <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12 col-12">
            <Alert show={showA1} onClose={toggleShowA1} className="alert alert-danger mb-1 mt-2">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="alert">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <strong>Checkpoint eliminado con éxito!</strong>
            </Alert>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12 col-12">
            <h4>Lista de Checkpoints</h4>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12 col-12">
            <div className="d-flex flex-row-reverse bd-highlight pb-3">
              <button disabled={!is_staff} onClick={handleShowAdd}  className="btn btn-primary">
                <span>Agregar Checkpoint</span>
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
                className="text-center"
                data={table}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleCloseAdd} dialogClassName = "modal-dialog modal-dialog-centered modal-xl">
        <Modal.Header closeButton>
          <Modal.Title style={{color : "#0b2266"}}>Agregar Conductor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="770px"
              src={`http://checkpoint.segursat.com/api/create-checkpoint/${token}`}>
            </iframe>
          </div>
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
        <Modal.Body>¿Seguro que desea eliminar el checkpoint <b>{consolaSeleccionada && consolaSeleccionada.name}?</b></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => checkpointDelete()}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showMap}
        onHide={() => setShowMap(false)}
        dialogClassName = "modal-dialog modal-dialog-centered modal-xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {consolaSeleccionada && consolaSeleccionada.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="698px"
            src={`http://checkpoint.segursat.com/api/get-checkpoint/${consolaSeleccionada && consolaSeleccionada.name}/${token}`}>
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowMap(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default TableCheckpoint;