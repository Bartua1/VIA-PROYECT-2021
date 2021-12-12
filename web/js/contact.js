"use strict";

import { userValidator } from "/js/validators/user_validator.js";
import { messageRenderer } from "/js/renderers/messages.js";

function main() {
	addContactSubmitHandler();
}

function addContactSubmitHandler() {
	event.preventDefault();
	let form = document.getElementById("contact-form");
	form.onsubmit = registerSubmit;
}

function registerSubmit(event) {
	event.preventDefault();
	let errorsDiv = document.getElementById("errors");
	errorsDiv.innerHTML = "";

	let form = event.target;
	let formData = new FormData(form);
	let errors = userValidator.validateContact(formData);

	if (errors.length>0){
		for (let error of errors){
			messageRenderer.showErrorMessage(error);
		}
	} else {
		window.location.href = "index.html";
	}
}



document.addEventListener("DOMContentLoaded", main);
