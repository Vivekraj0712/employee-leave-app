import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

class EditEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state={
          name:"",
          qci_id:"",
          email:"",
          designation:"",
          board:"",
          gender:"",
          bal_cl:0,
          bal_eol:0,
          bal_ml:0,
          bal_pl:0,
          bal_ptl:0,
          bal_sl:0,
          password:"",
          type_of_employee:"",
          response:""

        }
    }
    componentDidMount(){
      if(this.props.location.state){   
      this.setState({
        qci_id:this.props.location.state.qci_id,
        name:this.props.location.state.name,
        email:this.props.location.state.email,
        designation:this.props.location.state.designation,
        board:this.props.location.state.board,
        gender:this.props.location.state.gender,
        bal_cl:this.props.location.state.bal_cl,
        bal_eol:this.props.location.state.bal_eol,
        bal_ml:this.props.location.state.bal_ml,
        bal_pl:this.props.location.state.bal_pl,
        bal_ptl:this.props.location.state.bal_ptl,
        bal_sl:this.props.location.state.bal_sl,
        type_of_employee:this.props.location.state.type_of_employee

      }
      ) 
    }     
    }

    updateDetails=()=>{
      let token=sessionStorage.getItem('token');     
      let extractedToken=token.substr(2,137);     
      let _employeeData={
         qci_id:this.state.qci_id,
         name:this.state.name,
         email:this.state.email,
         board:this.state.board,
         designation:this.state.designation,
         type_of_employee:this.state.type_of_employee,
         gender:this.state.gender,
         bal_cl:this.state.bal_cl,
         bal_sl:this.state.bal_sl,
         bal_pl:this.state.bal_pl,
         bal_ml:this.state.bal_ml,
         bal_ptl:this.state.bal_ptl,
         bal_eol:this.state.bal_eol,
         password:this.state.password
         
      }
      fetch("http://127.0.0.1:5000/lms/editEmployeeDetails",{
       method:"POST",
       body:JSON.stringify(_employeeData),
       headers:{"Authorization":extractedToken}
      }         
      ).then(response=>response.json()
      ).then(json=>this.setState({response:json})
      ).then(()=>alert(this.state.response.message))
     }
     componentWillMount(){
      if(sessionStorage.getItem('token')==null){
        this.props.history.push("/")
     }
    }
 
    handleLogout=()=>{
        sessionStorage.removeItem("token");
        this.props.history.push("/")
      }
    handleChange=(e)=>{        
      let name=e.target.name
      this.setState({[name]:e.target.value})     
      }
    render(){
       
        return(
            <div>
                  <div>
            <Link to="/employeedetails">Employee Details</Link>
            </div>
            <div>
            <Link to="/dashboard">Dashboard</Link>
            </div>
            <div>
            <Link to="/addemployee">Add Employee</Link>
            </div>        
            <div>
            <Button variant='contained' onClick={this.handleLogout}>
          Logout
        </Button>
            </div>
            <h1>Edit Employee Page</h1>
            <form>

              <input type="text" name="qci_id" value={this.state.qci_id} onChange={this.handleChange}/>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
              <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange}/>
              <input type="text" name="board" value={this.state.board}  onChange={this.handleChange}/>
              <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange}/>
              <input type="text" name="bal_cl" value={this.state.bal_cl} onChange={this.handleChange}/>
               <input type="text" name="bal_eol" value={this.state.bal_eol} onChange={this.handleChange}/>
               <input type="text" name="bal_ml" value={this.state.bal_ml} onChange={this.handleChange}/>
               <input type="text" name="bal_pl" value={this.state.bal_pl} onChange={this.handleChange}/>
               <input type="text" name="bal_ptl" value={this.state.bal_ptl} onChange={this.handleChange}/>
               <input type="text" name="bal_sl" value={this.state.bal_sl} onChange={this.handleChange}/>
               <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
               <input type="text" name="type_of_employee" value={this.state.type_of_employee} onChange={this.handleChange}/>
               <input type="button" value="Update" name="submit" onClick={this.updateDetails}/>  
              
            </form>
            
            </div>
        )
    
    }
}
export default EditEmployee



