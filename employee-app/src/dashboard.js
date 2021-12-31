import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

class DashBoard extends React.Component{
    constructor(props){
        super(props)
    }
    handleLogout=()=>{
        sessionStorage.removeItem("token");
        this.props.history.push("/")
      }
    render(){
        if(sessionStorage.getItem('token')!=null){           

        return(
            <div>
            <div>
            <Link to="/addemployee">Add Employee</Link>
            </div>    
            <div>
            <Link to="/editemployee">Edit Employee</Link>
            </div>
            <div>
            <Link to="/deleteemployee">Delete Employee</Link>
            </div>        
            <div>
            <Button variant='contained' onClick={this.handleLogout}>
          Logout
        </Button>
            </div>
            
            </div>
        )
        }else{
            return(
            <div>You are not authorized</div>
            )
        }
    }
}
export default DashBoard



