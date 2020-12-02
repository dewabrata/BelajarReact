import React, { Component } from 'react';


 class ListKanan extends Component {



    render(){

        return(
         
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{this.props.title}
            </h6>
              <small className="text-muted">  {this.props.description}</small>
            </div>
            <span className="text-muted">  {this.props.price}</span>
          </li>
        );


    }




 }

 export default ListKanan;