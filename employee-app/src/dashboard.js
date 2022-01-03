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
      componentWillMount(){
        if(sessionStorage.getItem('token')==null){
          this.props.history.push("/")
       }
      }
    render(){
      

        return(
            <div>
            <div>
            <Link to="/addemployee">Add Employee</Link>
            </div>    
            <div>
            <Link to="/employeedetails">Employee Details</Link>
            </div>
                    
            <div>
            <Button variant='contained' onClick={this.handleLogout}>
          Logout
        </Button>
            </div>
            
            </div>
        )
      
    }
}
export default DashBoard



