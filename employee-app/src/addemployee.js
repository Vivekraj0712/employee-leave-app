import { SentimentDissatisfiedOutlined } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Link} from 'react-router-dom'




class AddEmployee extends React.Component{
    constructor(){
        super()
        this.state={
            
            qci_id:"",
            name:"",
            email:"",
            board:"",
            designation:"",
            type_of_employee:"",
            gender:"",
            bal_cl:0,
            bal_sl:0,
            bal_pl:0,
            bal_ml:0,
            bal_ptl:0,
            bal_eol:0,
            password1:"",
            response1:"",
            
        }
    }

    handleChange=(e)=>{
        let name=e.target.name
        this.setState({[name]:e.target.value})
        
    }
    handleLogout=()=>{
      sessionStorage.removeItem("token");
      this.props.history.push("/")
    }
    
    addEmployee=(e)=>{
     e.preventDefault()
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
        password:this.state.password1,
        
     }
     fetch("http://127.0.0.1:5000/lms/addEmployee",{
      method:"POST",
      body:JSON.stringify(_employeeData),
      headers:{"Authorization":extractedToken}
     }         
     ).then(response1=>response1.json()
     ).then(json1=>this.setState({response1:json1})
     ).then(()=>alert(this.state.response1.message))
    }
    componentWillMount(){
      if(sessionStorage.getItem('token')==null){
        this.props.history.push("/")
     }
    }

   
    render(){  
          
            return(
                <>                
            <Grid container direction="column">
              <Grid item>
              <AppBar position="static">  
           <Toolbar> 

            <Typography style={{flex:1}}>Employee Management System </Typography> <Button variant='contained' onClick={this.handleLogout}>
          Logout
        </Button>
        </Toolbar>  
    </AppBar>
              </Grid>
              <Grid item>
         <Grid container direction="row">
           <Grid item sm={2}>
            <div>
            <Link to="/employeedetails">Employee Details</Link>
            </div>
            <div>            
            <Link to="/dashboard">Dashboard</Link>
            </div>
            </Grid>        
           <Grid item  container sm={10} >
    <React.Fragment>
      <CssBaseline />
       <Container>
         <AppBar position="static" color="transparent">  
           <Toolbar>  
            Add Employee Details
        </Toolbar>  
    </AppBar>
          <Box component="form"
           sx={{ flexGrow: 1 ,border:1,mx: "auto",
             height: '150vh',
            '& > :not(style)': { m: 1, width: '70ch' }}}>
      <Grid container direction="row" spacing={4} style={{margin:'auto'}}>
        <Grid item xs={12} sm={6} spacing={4}>
        <TextField 
        id="outlined-basic" 
        label="QCI_ID" 
        variant="outlined" 
        name="qci_id" 
        value={this.state.qci_id} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        name="email" 
        value={this.state.email} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Board" 
        variant="outlined" 
        name="board" 
        value={this.state.board} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Designation" 
        variant="outlined" 
        name="designation" 
        value={this.state.designation} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Type of Employee" 
        variant="outlined" 
        name="type_of_employee" 
        value={this.state.type_of_employee} 
        onChange={this.handleChange}  
        style={{width:300}} /> 
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_cl" 
        variant="outlined" 
        name="bal_cl" 
        value={this.state.bal_cl} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>       
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_sl" 
        variant="outlined" 
        name="bal_sl" 
        value={this.state.bal_sl} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_pl" 
        variant="outlined" 
        name="bal_pl" 
        value={this.state.bal_pl} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_ml" 
        variant="outlined" 
        name="bal_ml" 
        value={this.state.bal_ml} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_ptl" 
        variant="outlined" 
        name="bal_ptl" 
        value={this.state.bal_ptl} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="bal_eol" 
        variant="outlined" 
        name="bal_eol" 
        value={this.state.bal_eol} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        name="password1" 
        value={this.state.password1} 
        onChange={this.handleChange}  
        style={{width:300}} />        
        </Grid>
        <Grid item xs={12} >
        <Box sx={{mx:"auto",width:250}}>
         <Button variant='contained' onClick={this.addEmployee}>
          Add Employee
        </Button>
        <div>{this.state.response1.message}</div>
        </Box>
        
        </Grid>
        </Grid>

    
    </Box>
    </Container>
                 
                 </React.Fragment>
                 </Grid>
                 </Grid>       
                 </Grid>
                 </Grid>

                 </>
                
            )
            
    }
}
export default AddEmployee