import firebase from 'firebase';

module.exports = {

	submitNewUserForm : function(email, password) {
		alert('Success');

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			//alert('Create User Error');
			console.log(error.code);
			console.log(error.message);

			if (error.code == 'auth/weak-password') {
			    alert('The password is too weak.');
		    } else {
			    alert(error.message);
			}
		})
	}
}