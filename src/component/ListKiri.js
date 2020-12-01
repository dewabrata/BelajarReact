import React, { Component } from 'react';


 class ListKiri extends Component {



    render(){

        return(
            <li class="media">
            <img src={this.props.images} style={{"width":"150px","height":"150px"}}
             className="img-thumbnail" alt="..."/>
            <div class="media-body">
              <h5 class="mt-0 mb-1">{this.props.title}</h5>
              {this.props.description}
            </div>
          </li>
        );


    }




 }

 export default ListKiri;