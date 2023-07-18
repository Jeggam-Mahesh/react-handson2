import React from "react";
import { Component } from "react";
class FormClass extends Component {
  state = {
    Name: "",
    Department: "",
    Rating: "",
    EmpData: [],
  };
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.Name);
  };
  clickHandle=()=>{
   const  newObj={
    name:this.state.Name,
    department:this.state.Department,
    rating:this.state.Rating
   }
   this.state.EmpData.push(newObj);
   this.setState({EmpData:this.state.EmpData});
  }
  render() {
    return (
      <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="enter name"
          value={this.state.value}
          name="Name"
          onChange={this.changeHandle}
          required
        ></input>
        <br></br>
        <label htmlFor="department">Department:</label>
        <input
          id="department"
          type="text"
          placeholder="enter department"
          name="Department"
          value={this.state.value}
          onChange={this.changeHandle}
          required
        ></input>
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          placeholder="enter rating"
          name="Rating"
          value={this.state.value}
          onChange={this.changeHandle}
          required
        ></input>
        <br></br>
        <button type="button" onClick={this.clickHandle}>Submit</button>
        </form>
        <div id='parent'>
        {this.state.EmpData.map((item,index)=>{
             
            return(
           
                <div class='box'>
                Name:{item.name}||
               Department: {item.department}||
                Rating:{item.rating}
                </div>
                
          
            )
            
        })}
        </div>
      </>
    );
  }
}
export default FormClass;
