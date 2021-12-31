import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

class DeleteEmployee extends React.Component{
    constructor(props){
        super(props)
    }
 
    handleLogout=()=>{
        sessionStorage.removeItem("token");
        this.props.history.push("/")
      }

      render(){
        if(sessionStorage.getItem('token')==null){
            return(
              <div>You are not authorized.</div>
            )
           }else{  
        return(
            <div>
                  <div>
            <Link to="/addemployee">Add Employee</Link>
            </div>
            <div>
            <Link to="/editemployee">Edit Employee</Link>
            </div>        
            <div>
            <Button variant='contained' onClick={this.handleLogout}>
          Logout
        </Button>
            </div>
            <h1>Delete Employee Page</h1>
            </div>
        )
    }
    }
}
export default DeleteEmployee



