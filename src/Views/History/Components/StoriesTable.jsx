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
import { Carousel } from "react-responsive-carousel";

const StoriesTable = ({ events, loading, onDetailClick }) => {

  const token = cache.getItem("user").token;

  const [data,setData] = useState([]);
  const [show, setShow] = useState(false);
  const [smShow1, setSmShow1] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [modalEditar, setModalEditar]=useState(false);

  const handleCloseAdd = () => setShow(false);
  const handleShowAdd = () => setShow(true);


  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    dni : "",
    lastname: "",
    firstname: "",
    license_number: "",
    images : {
      url1 : ""
    }
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
    setSmShow1(!smShow1);
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
  },[]);


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
              <TableCell component="th">{yourdate(event.datetime)}</TableCell>
              <TableCell>
              <button onClick={()=>seleccionarConsola(event, 'Editar')} className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>&nbsp;
              <button onClick={()=>seleccionarConsola(event, 'Eliminar')} className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </button>
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
        show={smShow1}
        onHide={() => setSmShow1(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalles del Evento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="widget-activity-three">
            <div className="widget-content">
              <div className="mt-container mx-auto">
                <div className="timeline-line">
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Operador Logístico:</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-primary br-6">{consolaSeleccionada && consolaSeleccionada.logistic_operator}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Placa</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-success br-6">{consolaSeleccionada && consolaSeleccionada.unitid}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Tipo de Servicio</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-primary br-6">{consolaSeleccionada && consolaSeleccionada.type_of_service}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Conductor</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-success br-6">{consolaSeleccionada && consolaSeleccionada.driver_fullname}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Fecha de Creación</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-primary br-6">{consolaSeleccionada && consolaSeleccionada.datetime}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Estado de ruta</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-success br-6">{consolaSeleccionada && consolaSeleccionada.route_status}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Checkpoint</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-primary br-6">{consolaSeleccionada && consolaSeleccionada.checkpoint}</mark>
                      </div>
                    </div>
                  </div>
                  <div className="item-timeline timeline-new">
                    <div className="t-dot">
                      <div className="t-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                      </div>
                    </div>
                    <div className="t-content">
                      <div className="t-uppercontent">
                        <h5>Puntaje</h5>
                        <span className="">{consolaSeleccionada && consolaSeleccionada.datetime}</span>
                      </div>
                      <div className="tags">
                        <mark className="bg-success br-6">{consolaSeleccionada && consolaSeleccionada.game_score}</mark>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow1(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
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
        <Carousel autoPlay>
          <div>
            <img alt={API + consolaSeleccionada.images.url1} src={API + consolaSeleccionada.images.url1}/>
            <p className="legend">Selfie del Conductor</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url2} src={API + consolaSeleccionada.images.url2}/>
            <p className="legend">Extintor</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url3} src={API + consolaSeleccionada.images.url3}/>
            <p className="legend">Delantero Izquierdo</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url4} src={API + consolaSeleccionada.images.url4}/>
            <p className="legend">Delantero Derecho</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url5} src={API + consolaSeleccionada.images.url5}/>
            <p className="legend">Posterior Izquiera</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url6} src={API + consolaSeleccionada.images.url6}/>
            <p className="legend">Posterior Derecha</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url7} src={API + consolaSeleccionada.images.url7}/>
            <p className="legend">Toma frontal de la unidad</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url8} src={API + consolaSeleccionada.images.url8}/>
            <p className="legend">Toma posterior de la unidad</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url9} src={API + consolaSeleccionada.images.url9}/>
            <p className="legend">Luces delanteras</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url10} src={API + consolaSeleccionada.images.url10}/>
            <p className="legend">Luces posteriores</p>
          </div>
          <div>
            <img alt={API + consolaSeleccionada.images.url11} src={API + consolaSeleccionada.images.url11}/>
            <p className="legend">Valvula interna</p>
          </div>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setSmShow(false)}>
            Cerrar
          </Button>
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