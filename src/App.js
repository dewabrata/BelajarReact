
import React, { Component } from 'react';
import ListKiri from './component/ListKiri';

class App extends Component{


  constructor(props){

    super(props);

    this.state={
      product :[]
    };


  }


  componentDidMount(){

    this.getData();

  }


  getData(){
    fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
              
              console.log(json);

              this.setState({
                product:json
              });
              console.log(this.state)

            })
  }


  render(){

    return (
      <div className="row">
      
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">-$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
      </div>
  
  
      <div className="col-md-8 order-md-1">
        <ul className="list-unstyled">
         
         {this.state.product.map(element => {

          return <ListKiri images={element.image} title={element.title} description = {element.description}/>

         })
         }
         
        </ul>
     </div>
  
     </div>
   
      )
  
  }

}

export default App;
