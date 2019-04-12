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
      
    }
    this.getRequest= this.getRequest.bind(this)
  }

  componentDidMount(){
    this.getRequest ();
  }


  // method that gets inventory from database
  getRequest () {
    axios
    .get("/api/inventory")
    .then(res => {
      this.setState({inventoryList: res.data})
      console.log(res.data)
    })
  }


  


  render() {
    return (
      <div>
        <Dashboard inventoryList = {this.state.inventoryList}/>
        <Form getRequest = {this.state.getRequest}/>
        <Header />
      </div>
    );
  }
}

export default App;
