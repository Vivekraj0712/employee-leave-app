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
import {Link} from 'react-router-dom';


class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:"",            
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
             sessionStorage.setItem("token",this.state.response.token)
             this.props.history.push("/dashboard")
            }
        }
        )
    }

    }  
    render(){
        
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
        )
            
            
        
    }
}
export default LoginForm