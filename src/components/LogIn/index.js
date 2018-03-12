import React,{Component} from 'react';
import {firebaseApp} from '../../server/firebase';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {login, getUser, googleLogin, twitterLogin} from '../../redux/actions/userActions'

class LogIn extends Component{
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			error:{
				message:''
			}
		}
	}

	componentWillMount(){
		if(this.props.user !== null){
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.user !== null){
			nextProps.history.push('/');
		}
	}

	signUp(e){
		// const {email,password} = this.state
		// console.log('this.state', this.state)

		// firebaseApp.auth().signInWithEmailAndPassword(email,password)
		// .catch(error=>{
		// 	this.setState({error})
		// })
		e.preventDefault();
		this.props.login(this.state.email, this.state.password)
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
					onClick={e=>this.signUp(e)}
				>Submit</button>
				<Link to="/signup">Create new account!</Link>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps){
	return{user: state.user};
}

export default connect(mapStateToProps,{ login, getUser, googleLogin, twitterLogin })(LogIn);