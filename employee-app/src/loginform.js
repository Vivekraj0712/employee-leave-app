import { SentimentDissatisfiedOutlined } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
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
            isLogin:false
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
     ).then(console.log(this.state.response1))
    }
    handleClick=(e)=>{
        e.preventDefault()
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
    render(){
        if(!sessionStorage.getItem("login")){
        return(
             
            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleClick} value="Login"/>
                <div>{this.state.response.message}</div>
            </form>
        )}else{
            return(
                 <form>
                     <label for="qci_id">Qci_id:</label>
                     <input type="text" name="qci_id" value={this.state.qci_id} onChange={this.handleChange}/>
                     <label for="name">Name:</label>
                     <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                     <label for="email">Email:</label>
                     <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                     <label for="board">Board:</label>
                     <input type="text" name="board" value={this.state.board} onChange={this.handleChange}/>
                     <label for="designation">Designation:</label>
                     <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange}/>
                     <label for="type_of_employee">Type of Employee:</label>
                     <input type="text" name="type_of_employee" value={this.state.type_of_employee} onChange={this.handleChange}/>
                     <label for="bal_cl">bal_cl</label>
                     <input type="text" name="bal_cl" value={this.state.bal_cl} onChange={this.handleChange}/>
                     <label for="bal_sl">bal_sl</label>
                     <input type="text" name="bal_sl" value={this.state.bal_sl} onChange={this.handleChange}/>
                     <label for="bal_pl">bal_pl</label>
                     <input type="text" name="bal_pl" value={this.state.bal_pl} onChange={this.handleChange}/>
                     <label for="bal_ml">bal_ml</label>
                     <input type="text" name="bal_ml" value={this.state.bal_ml} onChange={this.handleChange}/>
                     <label for="bal_ptl">bal_ptl</label>
                     <input type="text" name="bal_ptl" value={this.state.bal_ptl} onChange={this.handleChange}/>
                     <label for="bal_eol">bal_eol</label>
                     <input type="text" name="bal_eol" value={this.state.bal_eol} onChange={this.handleChange}/>
                     <label for="password1">password1</label>
                     <input type="text" name="password1" value={this.state.password1} onChange={this.handleChange}/>
                     <input type="submit" name="addemployee" value="Add Employee" onClick={this.addEmployee}/>
                 </form>
                
            )
        }
    }
}
export default LoginForm