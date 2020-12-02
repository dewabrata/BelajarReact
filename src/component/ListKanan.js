import React, { Component } from 'react';


 class ListKanan extends Component {



    render(){

        return(
         
            <li className="list-group-item d-flex justify-content-between lh-condensed" id={this.props.urut}>
            <div>
              <h6 className="my-0">{this.props.title}
            </h6>
              <small className="text-muted">  {this.props.description}</small>
              <div>
            <button type="button" className="btn btn-primary btn-sm" onClick={e=>{this.props.eventClick(this.props.urut,this.props.allData)}}>Delete</button>
            </div>
            </div>
            <span className="text-muted">  {this.props.price}</span>
           
          </li>
        );


    }




 }

 export default ListKanan;