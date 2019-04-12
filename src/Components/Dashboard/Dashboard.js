import React, {Component} from "react"
import Product from "../Product/Product"

class Dashboard extends Component{
    render(){
       let product = this.props.inventoryList.map((value, index) => {
            return (
                <div>
                    <img src={value.img} alt =""/>
                    <h5>{value.name}</h5>
                    <h5>{value.price}</h5>
                </div>
            )
               
            
        })
        return(
            <div>
                <Product product={product}/>
                
            </div>
        )
    }
}

export default Dashboard