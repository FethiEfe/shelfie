import React, { Component } from 'react';

import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"


class App extends Component {
  state = {
    inventoryList : [
        {   price: '1',
            img: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/16/31/1470238884-unspecified.jpg?crop=0.682xw:0.768xh;0.00170xw,0.0651xh&resize=980:*',
            name: 'Resto',

        },
        {   price: '2',
            img: 'https://www.skinnytaste.com/wp-content/uploads/2016/12/Chickpea-Tomato-Soup-1-2.jpg',
            name: 'Chickpea Soup',
            
        },
        {   price: '3',
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caponata-flatbread-1532029138.jpg?crop=0.807xw:0.806xh;0.0829xw,0.106xh&resize=768:*',
            name: 'Caponata Flatbread',
            
        },
    ],
    imageURl: "",
    productName: "",
    price: ""
  }

  // componentDidMount{
  //   this.setState({
  //     inventoryList
  //   })
  // }


  // this method grabs the value  in image input
  urlChange = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    this.setState({
      imageURl: e.target.value
    })
  }
  // this method grabs the value  in product name input
  productChange = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    this.setState({
      productName: e.target.value
    })
  }
  //this method grabs the value  in price input
  priceChange(e){
    // console.log(e.target.value)
    e.preventDefault();
    this.setState({
      price: e.target.value
    })

  }
  //this method deletes the value  in all inputs
  resetInput = () => {
    this.setState({
      imageURl: "",
      productName: "",
      price: ""
    })
  }


  render() {
    return (
      <div>
        <Dashboard inventoryList = {this.state.inventoryList}/>
        <Form />
        <Header />
        <input onChange = {(e) => this.urlChange(e)}></input>
        <input onChange = {(e) => this.productChange(e)}></input>
        <input onChange = {(e) => this.priceChange(e)}></input>
        <button onClick ={this.resetInput}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default App;
