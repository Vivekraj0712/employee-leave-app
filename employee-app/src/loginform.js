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


class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:"",
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
            response:"",
            isLogin:false,
            error_empty_email:"",
            error_empty_password:"",
            error_invalid_email:""
        }
    }

    handleChange=(e)=>{
        let name=e.target.name
        this.setState({[name]:e.target.value})
        
    }
    
    addEmployee=(e)=>{
     e.preventDefault()
     let token=this.state.response.token;
     alert(this.state.response.token)
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
     )
    }

    runValidation(){
        var errCount=0;
        if(this.state.username==""){
            this.setState({error_empty_email:"Please Enter Email"})
            errCount++;
         }else{
            this.setState({error_empty_email:""})
         }
         if(this.state.password==""){
             this.setState({error_empty_password:"Please Enter Password"})
             errCount++;
         }else{
            this.setState({error_empty_password:""})
         }
         if(this.state.username!=""){
         if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username))){
            this.setState({error_invalid_email:"Please fill a valid email"})
            errCount++
            
         }else{
            this.setState({error_invalid_email:""})
         }
        }
         if(errCount>0){
             return false;
         }
         return true;
    }
    handleClick=(e)=>{
        e.preventDefault()
        /*Client validation*/
        if(this.runValidation()){          
        let _data={
            email:this.state.username,
            password:this.state.password
        }
        fetch("http://127.0.0.1:5000/lms/loginAdmin",{
         method:"POST",
         body:JSON.stringify(_data),
         headers:{"Content-type":"application/json;charset=UTF-8"}
        }).then(
            response=>response.json()
        ).then(json=>this.setState({response:json})
        ).then(()=>{
            if(this.state.response.success){
             this.setState({isLogin:true})
             sessionStorage.setItem("login",this.state.isLogin)
            }
        }
        )
    }

    }  
    render(){
        if(!sessionStorage.getItem("login")){
        return(
          <div>
    <React.Fragment>
      <CssBaseline />
       <Container maxWidth="sm">
         <AppBar position="static">  
           <Toolbar>  
            Administrator Login
        </Toolbar>  
    </AppBar>
          <Box component="form"
           sx={{ flexGrow: 1 ,border:1,mx: "auto",
             height: '40vh',
            '& > :not(style)': { m: 1, width: '70ch' }}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Email*" 
        variant="outlined" 
        name="username" 
        value={this.state.username} 
        onChange={this.handleChange}  
        style={{width:500}} />
        <div style={{color:"red"}}>{this.state.error_empty_email!=""?this.state.error_empty_email:""}</div>
        <div style={{color:"red"}}>{this.state.error_invalid_email!=""?this.state.error_invalid_email:""}</div>
        </Grid>
        
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Password*" 
        variant="outlined" 
        name="password" 
        value={this.state.password} 
        onChange={this.handleChange} 
        style={{width:500}}/>
        <div style={{color:"red"}}>{this.state.error_empty_password!=""?this.state.error_empty_password:""}</div>
        </Grid>
        <Grid item xs={12}>
        <Box sx={{mx:"auto",width:250}}>
         <Button variant='contained' onClick={this.handleClick}>
          Login
        </Button>
        <div>{this.state.response.message}</div>
        </Box>
        
        </Grid>
        
      </Grid>
    </Box>
    
      </Container>
    </React.Fragment>
        
        
           
            </div>
        )}else{
            return(
                <div>
    
    <React.Fragment>
      <CssBaseline />
       <Container maxWidth="sm">
         <AppBar position="static">  
           <Toolbar>  
            Add Employee Details
        </Toolbar>  
    </AppBar>
          <Box component="form"
           sx={{ flexGrow: 1 ,border:1,mx: "auto",
             height: '150vh',
            '& > :not(style)': { m: 1, width: '70ch' }}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="QCI_ID" 
        variant="outlined" 
        name="qci_id" 
        value={this.state.qci_id} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        name="email" 
        value={this.state.email} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Board" 
        variant="outlined" 
        name="board" 
        value={this.state.board} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Designation" 
        variant="outlined" 
        name="designation" 
        value={this.state.designation} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Type of Employee" 
        variant="outlined" 
        name="type_of_employee" 
        value={this.state.type_of_employee} 
        onChange={this.handleChange}  
        style={{width:500}} /> 
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_cl" 
        variant="outlined" 
        name="bal_cl" 
        value={this.state.bal_cl} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>       
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_sl" 
        variant="outlined" 
        name="bal_sl" 
        value={this.state.bal_sl} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_pl" 
        variant="outlined" 
        name="bal_pl" 
        value={this.state.bal_pl} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_ml" 
        variant="outlined" 
        name="bal_ml" 
        value={this.state.bal_ml} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_ptl" 
        variant="outlined" 
        name="bal_ptl" 
        value={this.state.bal_ptl} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="bal_eol" 
        variant="outlined" 
        name="bal_eol" 
        value={this.state.bal_eol} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        name="password1" 
        value={this.state.password1} 
        onChange={this.handleChange}  
        style={{width:500}} />        
        </Grid>
        <Grid item xs={12}>
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
                
                 </div>
                
            )
        }
    }
}
export default LoginForm