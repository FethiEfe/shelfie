import React, { Component } from 'react';
import axios from "axios"

import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"


class App extends Component {
  constructor(){
    super();
    this.state = {
    inventoryList : [],
    selected : []
      
    }
    this.getRequest= this.getRequest.bind(this)
  }

  componentDidMount(){
    this.getRequest ();
  }
  
  // changeSelected = (parameter) => {
  //   console.log(parameter)
  //   // this.setState({
  //   //   selected: parameter
  //   // })
  // }

  // method that gets inventory from database
  getRequest () {
    axios
    .get("/api/inventory")
    .then(res => {
      this.setState({inventoryList: res.data})
     
    })
  }

  render() {
    return (
      <div>
        <Dashboard inventoryList = {this.state.inventoryList} 
                   getRequest = {this.state.getRequest}
                  //  changeSelected = {this.state.changeSelected}
                  />
        <Form getRequest = {this.state.getRequest} selected = {this.state.selected}/>
        <Header />
      </div>
    );
  }
}

export default App;
