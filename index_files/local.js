var LS = {

	item : function(name, value) {
		var val = null;
		if (LS.isSupportLocalStorage()) {
			if (value) {
				localStorage.setItem(name, value);
				val = value;
			} else {
				val = localStorage.getItem(name);
			}
		} else {
			console.log('not support local storage');
		}
		return val;
	},

	removeItem : function(name) {
		if (LS.isSupportLocalStorage()) {
			localStorage.removeItem(name);
		} else {
			console.log('not support local storage');
			return false;
		}
		return true;
	},

	isSupportLocalStorage : function() {
		var ls = LS, is = ls.IS_HAS_LOCAL_STORAGE;
		if (is == null) {
			if (window.localStorage) {
				is = ls.IS_HAS_LOCAL_STORAGE = true;
			}
		}
		return is;
	},
	IS_HAS_LOCAL_STORAGE : null
};
