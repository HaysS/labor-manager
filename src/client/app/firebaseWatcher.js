import dataStore from './stores/firebaseWatcher';

function firebaseWatcher() {
	var listeners = [];


	function onChange(listener) {
		listeners.push(listener);
	}
}