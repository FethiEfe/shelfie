import React, {Component} from "react"


class Product extends Component{
    render(){
        return(
            <div>
                
                    <img src = {this.props.img} alt= ""/>
                    <h5>Name: {this.props.name}</h5>
                    <h5>Price: {this.props.price}</h5>
                
            </div>
        )
    }
}

export default Product