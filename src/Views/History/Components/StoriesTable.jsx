import React, { useEffect, useState } from "react";
import Axios from "axios";
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table, LinearProgress } from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import { yourdate } from "../../../Common/decorator";
import { API, sub } from "../../../Constants/global";
import PropTypes from "prop-types";
import Empty from "../../../Components/Empty";
import cache from "../../../Helpers/cache";
import { Modal,Button as ButtonModal } from "react-bootstrap";

const StoriesTable = ({ events, loading, onDetailClick }) => {

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


  return (
    <>
    <TableContainer className="mt-3">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Proveedor</TableCell>
            <TableCell component="th">Operador Logístico</TableCell>
            <TableCell component="th">Placa</TableCell>
            <TableCell component="th">Tipo de Servicio</TableCell>
            <TableCell component="th">Checkpoint</TableCell>
            <TableCell component="th">Nombre del Conductor</TableCell>
            <TableCell component="th">Fecha de Creación</TableCell>
            <TableCell component="th">Ver Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && <TableRow >
            <TableCell colSpan="8"> <LinearProgress /></TableCell>
          </TableRow>}
          {events.map(event => (
            <TableRow key={event.id}>
              <TableCell component="th">{event.provider}</TableCell>
              <TableCell component="th">{event.logistic_operator}</TableCell>
              <TableCell component="th">{event.unitid}</TableCell>
              <TableCell component="th">{event.type_of_service}</TableCell>
              <TableCell component="th">{event.checkpoint}</TableCell>
              <TableCell component="th">{event.driver_fullname}</TableCell>
              <TableCell component="th">{yourdate(event.created)}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  size="small"
                  onClick={()=>seleccionarConsola(event, 'Eliminar')}
                >
                  <VisibilityRounded />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {!events.length && <TableRow >
            <TableCell colSpan="7"><Empty title="Sin registros. Ingrese la placa y la fecha de creación para obtener eventos" /></TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
    size="lg"
    show={smShow}
    onHide={() => setSmShow(false)}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Detalles del Evento
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="http://checkpoint.segursat.com:8080//static/pictures/fdd90eda9c94b30d11d98d2cdeb6fb4d.jpg" alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://checkpoint.segursat.com:8080//static/pictures/eae97854dc8115ec5929911e82670f1c.jpg" alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://checkpoint.segursat.com:8080//static/pictures/fdd90eda9c94b30d11d98d2cdeb6fb4d.jpg" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
      <div class="row">
        <div class="col-xl-6 col-md-12 col-sm-12 col-12">
          <ul class="list-group mt-3">
            <li class="list-group-item active">Operador Logístico:</li>
            <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.logistic_operator}</strong></li>
          </ul>
          <ul class="list-group mt-3">
            <li class="list-group-item active">Placa:</li>
            <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.unitid}</strong></li>
          </ul>
          <ul class="list-group mt-3">
            <li class="list-group-item active">Tipo de Servicio:</li>
            <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.type_of_service}</strong></li>
          </ul>
          <ul class="list-group mt-3">
            <li class="list-group-item active">Conductor:</li>
            <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.driver_fullname}</strong></li>
          </ul>
        </div>
        <div class="col-xl-6 col-md-12 col-sm-12 col-12">
        <ul class="list-group mt-3">
          <li class="list-group-item active">Fecha de Creación:</li>
          <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.datetime}</strong></li>
        </ul>
        <ul class="list-group mt-3">
          <li class="list-group-item active">Estado de ruta:</li>
          <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.logistic_operator}</strong></li>
        </ul>
        <ul class="list-group mt-3">
          <li class="list-group-item active">Checkpoint:</li>
          <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.checkpoint}</strong></li>
        </ul>
        <ul class="list-group mt-3">
          <li class="list-group-item active">Puntaje:</li>
          <li class="list-group-item"><strong>{consolaSeleccionada && consolaSeleccionada.logistic_operator}</strong></li>
        </ul>
        </div>
      </div>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <ButtonModal variant="danger" onClick={() => setSmShow(false)}>
        Cerrar
      </ButtonModal>
    </Modal.Footer>
  </Modal>
  </>
  )
}

StoriesTable.propTypes = {
  events: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onDetailClick: PropTypes.func.isRequired,
}

export default StoriesTable;