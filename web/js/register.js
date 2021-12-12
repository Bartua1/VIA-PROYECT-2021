"use strict";

import { userValidator } from "/js/validators/user_validator.js";

function main() {
	addRegisterSubmitHandler();
}

function addRegisterSubmitHandler() {
	event.preventDefault();
	let form = document.getElementById("register-form");
	form.onsubmit = registerSubmit;
}

function registerSubmit(event) {
	event.preventDefault();
	let errorsDiv = document.getElementById("errors");
	errorsDiv.innerHTML = "";

	let form = event.target;
	let formData = new FormData(form);
	if (formData.get('avatarUrl')==''){
		formData.set('avatarUrl', '/images/default_profile.png');
	}
	let errors = userValidator.validateRegister(formData);

	if (errors.length>0){
		for (let error of errors){
			messageRenderer.showErrorMessage(error);
		}
	} else {
		window.location.href = "index.html";
	}
}



document.addEventListener("DOMContentLoaded", main);
