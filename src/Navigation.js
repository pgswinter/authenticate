import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/LogIn';
import Signup from './components/SignUp';
import Content from './components/Content';

class ModalSwitch extends Component {
	previousLocation = this.props.location;

	componentWillUpdate(nextProps){
		const {location} = this.props;
		if(
			nextProps.history.action !== "POP" &&
			(!location.state || !location.state.modal)
		){
			this.previousLocation = this.props.location;
		}
	}

	render(){
		const {location} = this.props;
		const isModal = !!(
			location.state &&
			location.state.modal &&
			this.previousLocation !== location
		); // not initial render
		return(
			<div>
				<Switch location={isModal ? this.previousLocation : location}>
					<Route path="/" component={Content} />
					<Route exact path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</div>
		)
	}
}

const Navigation = () => (
	<Router>
		<Route component={ModalSwitch} />
	</Router>
);

export default Navigation