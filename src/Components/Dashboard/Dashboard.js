import React, {Component} from "react"
import Product from "../Product/Product"
import axios from "axios";

class Dashboard extends Component{

    deleteProduct = (id) => {
        console.log(id)
        axios
        .delete(`/api/inventory/${id}`)
        .then(this.props.getRequest)
    }


    render(){
       let product = this.props.inventoryList.map((value, index) => {
            
            return <Product key = {index} 
                            img={value.img} 
                            name={value.name} 
                            price={value.price} 
                            id ={value.id} 
                            deleteProduct={this.deleteProduct}
                            // changeSelected ={this.props.changeSelected}
                            />
            
        })
        return(
            <div>
                {product}
            </div>
        )
    }
}

export default Dashboard