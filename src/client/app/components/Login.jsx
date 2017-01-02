import React, {Component} from 'react';

module.exports = React.createClass({
	handleForm: function(e) {
		document.getElementById("createUserFrom").reset();

		e.preventDefault();
	},
	render: function() {	
		return(
			<div className="column">
				<h2>Login here</h2><br />
				<form name="userForm" id="createUserForm" onSubmit="">
					Email:<input type='text' id='femail' required/><br />
					Password:<input type='text' id='fpassword' required/><br />
					<input type="submit" value="Create Account" onClick={this.handleForm}/>
				</form>
			</div>);
	}
});