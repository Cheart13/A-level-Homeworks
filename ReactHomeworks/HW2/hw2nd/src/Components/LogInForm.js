import React from 'react';


const LogInForm = ()=>{

	return(
		<div>
			<label>Email: </label><input type="text"></input>
			<label>Password: </label><input type="password"></input>

			<input type='Submit'>Log In</input>
		</div>
	);

}

export default LogInForm;