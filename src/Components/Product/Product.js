import React, {Component} from "react"


class Product extends Component{
    render(){
        return(
            <div>
                
                    <img src = {this.props.img} alt= ""/>
                    <h5>Name: {this.props.name}</h5>
                    <h5>Price: {this.props.price}</h5>
                    <h5>{this.props.id}</h5>
                    <button onClick = {() => this.props.deleteProduct(this.props.id)}>Delete</button>
                    <button >Edit</button>
                
            </div>
        )
    }
}

export default Product