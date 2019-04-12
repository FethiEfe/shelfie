import React, {Component} from "react"
import Product from "../Product/Product"

class Dashboard extends Component{
    render(){
       let product = this.props.inventoryList.map((value, index) => {
            
            return <Product key = {index} img={value.img} name={value.name} price={value.price}/>
            
        })
        return(
            <div>
                {product}
            </div>
        )
    }
}

export default Dashboard