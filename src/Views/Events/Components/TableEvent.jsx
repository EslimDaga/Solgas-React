import Axios from "axios";
import React from "react";
import cache from "../../../Helpers/cache";

export default class TableUnit extends React.Component {

  state = {
    events : []
  }

  async componentDidMount() {
    const res = await Axios.get('http://checkpoint.segursat.com:8080/control/web/api/get-events/',{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${cache.getItem("user").token}`
      }
    });
    this.setState({events : res.data})
  }

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        provider: '',
        logistic_operator: '',
        unitid: '',
        type_of_service: '',
        checkpoint: '',
        driver_fullname: '',
        datetime : ''
      }
    ];
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      provider: "SEGURSAT 2",
      logistic_operator: 'GINOGAS 2',
      unitid: 'C6O-731 2',
      type_of_service: 'GRANEL 2',
      checkpoint: 'CASITA 2',
      driver_fullname: 'CAPANI FERNANDEZ, ARTURO 2',
      datetime : '12/11/2020 08:41 pm 2'
    }
    this.state.products.push(product);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
    for (var key in product) {
      if (key == item.name && product.id == item.id) {
        product[key] = item.value;
      }
    }
    return product;
  });
    this.setState({products:newProducts});
  //  console.log(this.state.products);
  };
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
    );
  }
}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="input-group mt-3 mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Buscar..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

class ProductTable extends React.Component {

  state = {
    events : []
  }

  async componentDidMount() {
    const res = await Axios.get('http://checkpoint.segursat.com:8080/control/web/api/get-events/',{
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${cache.getItem("user").token}`
      }
    });
    this.setState({events : res.data})
    console.log(this.state.events);
  }

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.provider.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });

    return (
      <div>
      <button type="button" onClick={this.props.onRowAdd} className="btn btn-secondary pull-right mb-3">Agregar</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">Proveedor</th>
              <th className="text-center">Operador Logístico</th>
              <th className="text-center">Placa</th>
              <th className="text-center">Tipo de Servicio</th>
              <th className="text-center">Checkpoint</th>
              <th className="text-center">Nombre del Conductor</th>
              <th className="text-center">Fecha de Creación</th>
              <th className="text-center">Ver Detalle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map(event => <tr className="eachRow">
        <td className="text-center">
        { event.provider}
        </td>
        <td className="text-center">
        { event.logistic_operator}
        </td>
        <td className="text-center">
        { event.unitid}
        </td>
        <td className="text-center">
        { event.type_of_service}
        </td>
        <td className="text-center">
        { event.checkpoint}
        </td>
        <td className="text-center">
        { event.driver_fullname}
        </td>
        <td className="text-center">
        { event.datetime}
        </td>
        <td className="text-center">
          <button className="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </td>
      </tr>)}
            {product}
          </tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    return (
      <tr className="eachRow">
        <td className="text-center">
        { this.props.product.provider}
        </td>
        <td className="text-center">
        { this.props.product.logistic_operator}
        </td>
        <td className="text-center">
        { this.props.product.unitid}
        </td>
        <td className="text-center">
        { this.props.product.type_of_service}
        </td>
        <td className="text-center">
        { this.props.product.checkpoint}
        </td>
        <td className="text-center">
        { this.props.product.driver_fullname}
        </td>
        <td className="text-center">
        { this.props.product.datetime}
        </td>
        <td className="text-center">
          <button className="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </td>
      </tr>
    );
  }
}
