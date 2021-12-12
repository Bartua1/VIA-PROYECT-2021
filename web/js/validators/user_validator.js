"use strict";

const userValidator = {
	validateRegister: function ( formData ) {
		let errors = [];
		let firstName = formData.get("firstName");
		let lastName = formData.get("lastName");
		let password = formData.get("password");
		let password2 = formData.get("password2");
		let email = formData.get("email");
		if (email === ""){
			errors.push("You must Provide an email");
		}
		if(firstName.length < 3 || lastName.length < 3) {
			errors.push("The first and last name should have more than 3 characters");
		}
		if(password !== password2) {
			errors.push("The passwords must match");
		}
		return errors;
	},

	validateContact: function ( formData ) {
		let errors = [];
		let firstName = formData.get("name");
		let email = formData.get("email");
		let subject = formData.get("subject");
		let message = formData.get("message");
		if (email === ""){
			errors.push("You must Provide an email");
		}
		if(firstName.length < 3 || lastName.length < 3) {
			errors.push("Your name should have more than 3 characters");
		}
		if(email.length < 4) {
			errors.push("Your email should have more than 4 characters");
		}
		if(subject.length < 7) {
			errors.push("You must specify a correct subject (more than 7 characters)");
		}
		if(message.length < 20){
			errors.push("Elaborate a better message (more than 20 characters)");
		}
		return errors;
	}
};

export { userValidator };
