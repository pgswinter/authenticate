import React,{Component} from 'react';
import {firebaseApp} from '../../server/firebase';
import {Link} from 'react-router-dom';

class LogIn extends Component{
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			error:{
				message: ''
			}
		}
	}
	signUp(){
		const {email,password,error} = this.state
		console.log('this.state', this.state)

		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		.catch(error=>{
			this.setState({error})
		})
	}
	render(){
		return(
			<div className="form-inline">
				<input type="text" placeholder="Typing email"
					onChange={e=>this.setState({email:e.target.value})}
				/>
				<input type="password" placeholder="Typing password" 
					onChange={e=>this.setState({password:e.target.value})}
				/>
				<button type="submit"
					onClick={e=>this.signUp()}
				>Submit</button>
				<div className="">{this.state.error.message}</div>
				<Link to="/login">Already exist account!</Link>
			</div>
		)
	}
}

export default LogIn