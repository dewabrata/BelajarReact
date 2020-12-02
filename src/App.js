
import React, { Component } from 'react';
import ListKanan from './component/ListKanan';
import ListKiri from './component/ListKiri';

class App extends Component{
 

  constructor(props){

    super(props);

    this.nourut =0;
    this.carts=[];
    this.addCart = this.addCart.bind(this);
    this.deleteCart = this.deleteCart.bind(this);

    this.state={
      product :[],
      cart:[],
      nourut:0
    };

    

  }


  componentDidMount(){

    this.getData();

  }


  getData(){
    fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
              
             

              this.setState({
                product:json
              });
            

            })
  }


  render(){

    return (
      <div className="row">
      
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">{this.state.cart.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {this.state.cart.map((element,index)=>{
            return <ListKanan eventClick={this.deleteCart} urut={index} nomer={index} key={element.id} model={element} id={element.id} images={element.image} price={element.price} title={element.title} description = {element.description}/>
          })}
        
        </ul>
      </div>
  
  
      <div className="col-md-8 order-md-1">
        <ul className="list-unstyled">
         
         {this.state.product.map((element,index) => {

          return <ListKiri eventClick={this.addCart} urut={index} key={index} model={element} id={element.id} images={element.image} title={element.title} description = {element.description}/>

         })
         }
         
        </ul>
     </div>
  
     </div>
   
      )
  
  }


  addCart(model,index){
  
    this.setState({nourut:this.state.nourut+1})
  
    model['urut']=this.state.nourut;
    this.carts.push(model);
    this.setState({cart:this.carts});

    console.log(this.state.cart);
   
   
  }

  deleteCart(nomer,data){



    let dummy =[];
    for(let x=0;x<this.carts.length;x++){
        if(x!==nomer){
          dummy.push(this.carts[x]);
        }
    }
    this.carts =dummy;

 

    this.setState({cart:this.carts })
   

  }

}

export default App;
