import React from 'react';

const SignUpForm = ()=>{

	return(
		<div>
			<label>Name: </label><input type="text"></input>
			<label>Email: </label><input type="text"></input>
			<label>Password: </label><input type="password"></input>

			<input type='Submit'>SignUp</input>
		</div>
	);

}

export default SignUpForm;s