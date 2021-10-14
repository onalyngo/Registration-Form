// SHOW PASSWORD
function showPassword(e) {
	const inpPW = document.getElementById('password')
	const rePW = document.getElementById('retypedPassword')

	if (e.innerHTML == 'show password') {
		e.innerHTML = 'hide password'
		inpPW.type = 'text'
		rePW.type = 'text'
	} else {
		e.innerHTML = 'show password'
		inpPW.type = 'password'
		rePW.type = 'password'
	}
}

// OTHER CHECKBOX
const otherCheck = document.querySelector('#others')
const otherTxt = document.querySelector('input[id="otherVal"]')

otherCheck.addEventListener('change', () => {
	if (otherCheck.checked) {
		otherTxt.style.display = 'block'
		otherTxt.value = ''
	} else {
		otherTxt.style.display = 'none'
	}
})

// ON SUBMIT VALIDATION
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const address = document.getElementById('address')
const email1 = document.getElementById('email')
const email2 = document.getElementById('retypedEmail')
const password = document.getElementById('password')
const password2 = document.getElementById('retypedPassword')

// The isRequired() function to check if the username is provided.
// The showError() and showSuccess() functions to show the error and success indicator.
// The function returns true if the field passes the checks.

const checkfName = () => {
	let valid = false
	const firstName = fName.value.trim()
	if (!isRequired(firstName)) {
		showError(fName)
	} else {
		showSuccess(fName)
		valid = true
	}
	return valid
}

const checklName = () => {
	let valid = false
	const lastName = lName.value.trim()
	if (!isRequired(lastName)) {
		showError(lName)
	} else {
		showSuccess(lName)
		valid = true
	}
	return valid
}

const checkAddress = () => {
	let valid = false
	const addressInp = address.value.trim()
	if (!isRequired(addressInp)) {
		showError(address)
	} else {
		showSuccess(address)
		valid = true
	}
	return valid
}

// const checkAge = () => {
// 	let valid = false;
// 	const ageChk = document.getElementsByName('age');
// 	if(!isRequired(ageChk)) {
// 		showError(age)
// 	} else {
// 		showSuccess(age)
// 		valid = true
// 	}
// 	return valid;
// };

const checkEmail = () => {
	let valid = false
	const emailInp = email1.value.trim()

	if (!isRequired(emailInp)) {
		showError(email1)
	} else {
		showSuccess(email1)
		valid = true
	}
	return valid
}

const checkEmail2 = () => {
	let valid = false
	const reEmail = email2.value.trim()

	if (!isRequired(reEmail)) {
		showError(email2)
	} else {
		showSuccess(email2)
		valid = true
	}
	return valid
}

const checkPassword = () => {
	let valid = false
	const inputPassword = password.value.trim()

	if (!isRequired(inputPassword)) {
		showError(password)
	} else {
		showSuccess(password)
		valid = true
	}
	return valid
}

const checkPassword2 = () => {
	let valid = false
	const inputPassword = password2.value.trim()

	if (!isRequired(inputPassword)) {
		showError(password2)
	} else {
		showSuccess(password2)
		valid = true
	}
	return valid
}

const isRequired = (value) => (value === '' ? false : true)
// const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input) => {
	// get the form-group element
	const formGroupInput = input.parentElement
	// const formGroupCheck = document.querySelector('.legend')
	// add the error class
	formGroupInput.classList.remove('success')
	// formGroupCheck.classList.remove('success')
	formGroupInput.classList.add('error')
	// formGroupCheck.classList.add('error')
}

const showSuccess = (input) => {
	// get the form-group element
	const formGroupInput = input.parentElement
	// const formGroupCheck = document.querySelector('.legend')
	// add the error class
	formGroupInput.classList.remove('error')
	// formGroupCheck.classList.remove('error')
	formGroupInput.classList.add('success')
	// formGroupCheck.classList.add('success')
}

const form = document.getElementById('regForm')

form.addEventListener('input', function (e) {
	switch (e.target.id) {
		case 'fName':
			checkfName()
			break
		case 'lName':
			checklName()
			break
		case 'address':
			checkAddress()
			break
		case 'email':
			checkEmail()
			break
		case 'retypedEmail':
			checkEmail2()
			break
		case 'password':
			checkPassword()
			break
		case 'retypedPassword':
			checkPassword2()
			break
	}
})

form.addEventListener('submit', function (e) {
	// prevent the form from submitting
	e.preventDefault()

	// validate forms
	let isFNameValid = checkfName(),
		isLNameValid = checklName(),
		isAddValid = checkAddress(),
		isEmailValid = checkEmail(),
		isEmailValid2 = checkEmail2(),
		isPWValid = checkPassword(),
		isPWValid2 = checkPassword2();

	let isFormValid = isFNameValid && isLNameValid && isAddValid && isEmailValid && isEmailValid2 && isPWValid && isPWValid2;

	if (isFormValid = true) {
		$('#regModal').modal('show')
	};
})

// PASS THE DATA INTO THE MODAL
$('#submit').click(function () {
	let fname = $('#fName').val()
	let lname = $('#lName').val()
	let email = $('#email').val()
	let address = $('#address').val()
	let phone = $('#phone').val()
	let age = $('input:radio:checked').val()

	let info = $('input:checkbox:checked')
		.map(function () {
			return this.value
		})
		.toArray()

	let othersInfo = $('#otherVal').val()
	let status = $('#status').val()
	let brand = $('#brand').val()

	$('#showName').html(fname + ' ' + lname)
	$('#showEmail').html(email)
	$('#showAdd').html(address)
	$('#showPhone').html(phone)
	$('#showAge').html(age)
	$('#showInfo').html('' + info)
	$('#showInfo').append('<br />' + othersInfo)
	$('#showStatus').html(status)
	$('#showBrand').html(brand)
})

// RESET THE FORM WHEN MODAL CLOSE
$('#regModal').on('hidden.bs.modal', function () {
	$('#regForm').trigger('reset')
})
