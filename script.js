// SHOW PASSWORD
function showPassword(e) {
	const inpPW = document.getElementById('password')
	const rePW = document.getElementById('retypedPassword')

	if (e.value == 'show password') {
		e.value = 'hide password'
		inpPW.type = 'text'
		rePW.type = 'text'
	} else {
		e.value = 'show password'
		inpPW.type = 'password'
		rePW.type = 'password'
	}
};

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

// Email & Retyped Email Validation 
$('#email').on('input', function () {
	if ($('#retypedEmail').val() !== '' && $('#email').val() != $('#retypedEmail').val()) {
		$('.errorMsg').show()
		$('#confirmPassword').hide()
		$('#confirmEmail').html('Email and Retyped Email does not match.')
	} else {
		$('.errorMsg').hide()
		$('#confirmEmail').html('')
	}
})
	
$('#retypedEmail').on('input', function () {
	if ($('#email').val() !== '' && $('#retypedEmail').val() != $('#email').val()) {
		$('.errorMsg').show()
		$('#confirmPassword').hide()
		$('#confirmEmail').html('Email and Retyped Email does not match.')
		$('#passValidation').hide()
	} else {
		$('.errorMsg').hide()
		$('#confirmEmail').html('')
	}
})

// Password & Retyped Password Validation 
$('#password').on('input', function () {
	if ($('#retypedPassword').val() !== '' && $('#password').val() != $('#retypedPassword').val()) {
		$('.errorMsg').show()
		$('#confirmPassword').show()
		$('#confirmPassword').html('Password and Retyped Password does not match.')
		$('#passValidation').hide()
	} else {
		$('.errorMsg').hide()
		$('#confirmPassword').html('')
	}
})
	
$('#retypedPassword').on('input', function () {
	if ($('#password').val() !== '' && $('#retypedPassword').val() != $('#password').val()) {
		$('.errorMsg').show()
		$('#confirmPassword').show()
		$('#confirmPassword').html('Password and Retyped Password does not match.')
		$('#passValidation').hide()
	} else {
		$('.errorMsg').hide()
		$('#confirmPassword').html('')
	}
})

// $('input[type=password]').keyup(function () {
// 		let pw = $(this).val()
// 		// validate the length
// 		if (pw.length < 8) {
// 			$('.errorMsg').show()
// 			$('#passValidation').show()
// 		} else {
// 			$('.errorMsg').hide()
// 			$('#passValidation').hide()
// 		}
// 		// validate the letter & number
// 		if (pw.match(/[A-z]/) && pw.match(/\d/)) {
// 			$('.errorMsg').hide()
// 			$('#passValidation').hide()
// 		} else {
// 			$('.errorMsg').show()
// 			$('#passValidation').show()
// 		}
// 	})


// ON SUBMIT VALIDATION - saving to a variable first
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const address = document.getElementById('address')
const email1 = document.getElementById('email')
const email2 = document.getElementById('retypedEmail')
const password = document.getElementById('password')
const password2 = document.getElementById('retypedPassword')
const genderSel = document.getElementById('gender')

// The isRequired() function to check if the value is provided.
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

const checkCourse = () => {
	let valid = false;
	const course = document.querySelector('input[name="course"]:checked')

	if (!course) {
		showError1(course)
	} else {
		showSuccess1(course)
		valid = true
	}
	return valid
};

const checkInfo = () => {
	let valid = false
	const info = document.querySelector('input[name="info"]:checked')

	if (!info) {
		showError2(info)
	} else {
		showSuccess2(info)
		valid = true
	}
	return valid
}

const checkGender = () => {
	let valid = false
	const genderSelect = genderSel.value
	
	if (!isRequired(genderSelect)) {
		showError3(genderSel)
	} else {
		showSuccess3(genderSel)
		valid = true
	}
	return valid;
}

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

const showError = (input) => {
	// get the form-group element
	const formGroupInput = input.parentElement;
	// add the error class
	formGroupInput.classList.remove('success')
	formGroupInput.classList.add('error')
}

const showSuccess = (input) => {
	// get the form-group element
	const formGroupInput = input.parentElement;
	// add the error class
	formGroupInput.classList.remove('error')
	formGroupInput.classList.add('success')
}

const showError1 = () => {
	const formGroupCheck = document.querySelector('.legend');
	formGroupCheck.classList.add('error')
	formGroupCheck.classList.remove('success')
}

const showSuccess1 = () => {
	const formGroupCheck = document.querySelector('.legend');
	formGroupCheck.classList.remove('error')
	formGroupCheck.classList.add('success')
}

const showError2 = () => {
	const formGroupCheck = document.querySelector('.legend1')
	formGroupCheck.classList.add('error')
	formGroupCheck.classList.remove('success')
}

const showSuccess2 = () => {
	const formGroupCheck = document.querySelector('.legend1')
	formGroupCheck.classList.remove('error')
	formGroupCheck.classList.add('success')
}

const showError3 = () => {
	const formGroupSelect = document.getElementById('gender')
	formGroupSelect.classList.add('error')
	formGroupSelect.classList.remove('success')
}

const showSuccess3 = () => {
	const formGroupSelect = document.getElementById('gender')
	formGroupSelect.classList.remove('error')
	formGroupSelect.classList.add('success')
}

const checkPWValid = () => {
	let valid = false;
	let pw = document.getElementById("password").value
	// validate the length
	if (pw.length < 8) {
		$('.errorMsg').show('slow')
		$('#passValidation').show('slow')
		
	} else {
		$('.errorMsg').hide('slow')
		$('#passValidation').hide('slow')
		valid = true
	}
	// validate the letter & number
	if (pw.match(/[A-z]/) && pw.match(/\d/)) {
		$('.errorMsg').hide()
		$('#passValidation').hide('slow')
		valid = true
	} else {
		$('#passValidation').show('slow')
	setTimeout(function () {
		$('#passValidation').hide('slow')
		$('.errorMsg').hide('slow')
	}, 3000)
	}
	return valid
}

// console.log(checkPWValid())

const checkPWValid2 = () => {
	let valid = false;
	let pw = document.getElementById('retypedPassword').value
	// validate the length
	if (pw.length < 8) {
		$('.errorMsg').show('slow')
		$('#passValidation').show('slow')
		
	} else {
		$('.errorMsg').hide('slow')
		$('#passValidation').hide('slow')
		valid = true
	}
	// validate the letter & number
	if (pw.match(/[A-z]/) && pw.match(/\d/)) {
		$('.errorMsg').hide('slow')
		$('#passValidation').hide('slow')
		valid = true
	} else {
		$('#passValidation').show('slow')
		setTimeout(function () {
			$('#passValidation').hide('slow')
			$('.errorMsg').hide('slow')
		}, 3000)
	}
	return valid
}

// console.log(checkPWValid2())

const form = document.getElementById('regForm')

// Feedback feature to show either error or success instantly for "id" attribute
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
			// checkPWValid()
			break
		case 'retypedPassword':
			checkPassword2()
			// checkPWValid2()
			break
		case 'gender':
			checkGender()
			break
		
	}
})

// Feedback feature to show either error or success instantly for "name" attribute
form.addEventListener('input', function (e) {
	switch (e.target.name) {
		case 'course':
			checkCourse()
			break
		case 'info':
			checkInfo()
			break
	}
})

// SUBMIT THE FORMS WITH VALIDATIONS
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
	isPWValid2 = checkPassword2(), 
	isCourseValid = checkCourse(), 
	isInfoValid = checkInfo(), 
	isGenderValid = checkGender(),
	isCheckPWValid = checkPWValid(), 
	isCheckPWValid2 = checkPWValid2();

	let isFormValid = isFNameValid && isLNameValid && isAddValid && isEmailValid && isEmailValid2 && isPWValid && isPWValid2 && isCourseValid && isInfoValid && isGenderValid && isCheckPWValid && isCheckPWValid2;

	if (!isFormValid) {
		$('#regModal').modal('hide')
	} else {
		$('#regModal').modal('show')
	}
})

// PASS THE DATA INTO THE MODAL
$('#submit').click(function () {
	let fname = $('#fName').val()
	let lname = $('#lName').val()
	let email = $('#email').val()
	let address = $('#address').val()
	let phone = $('#phone').val()
	let course = $('input:radio:checked').val()

	let info = [];
	$('input:checkbox:checked').map(function () {
			info.push($(this).val());
	});
	
	let othersInfo = $('#otherVal').val()
	let gender = $('#gender').val()
	let time = $('#time').val()

	$('#showName').html(fname + ' ' + lname)
	$('#showEmail').html(email)
	$('#showAdd').html(address)
	$('#showPhone').html(phone)
	$('#showCourse').html(course)
	$('#showInfo').html('' + info)
	$('#showInfo').append('<br />' + othersInfo)
	$('#showGender').html(gender)
	$('#showPrefTime').html(time)
})

// RESET THE FORM WHEN MODAL CLOSE
$('#regModal').on('hidden.bs.modal', function () {
	// $('#regForm').trigger('reset')
	location.reload()
})


