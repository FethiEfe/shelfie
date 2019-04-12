import React, {Component} from "react"


class Product extends Component{
    render(){
        return(
            <div>
                
                    {this.props.product}
                
            </div>
        )
    }
}

export default Product