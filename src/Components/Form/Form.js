import React, {Component} from "react"
import axios from "axios";

class Form extends Component{
    state = {
        imageURl: "",
        productName: "",
        price: "",
        selectedId: null
    }

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
      price: "",
      
    })
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.id !== prevProps.id){
  //     this.fetchData(this.props.id)
  //   }
  // }
    postNewProduct = () => {
        axios
        .post("/api/product", {name: this.state.productName, price: this.state.price, img: this.state.imageURl})
        .then(this.props.getRequest)
    }

    render(){
        return(
        <div>
            <form>

                    <input onChange = {(e) => this.urlChange(e)}></input>
                    <input onChange = {(e) => this.productChange(e)}></input>
                    <input onChange = {(e) => this.priceChange(e)}></input>
                    <button onClick ={this.resetInput}>Cancel</button>
                    <button onClick = {this.postNewProduct}>Add to Inventory</button>

            </form>

        </div>
        )
    }
}

export default Form