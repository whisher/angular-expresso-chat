'use strict';

/**
 * Get the error message depends on env
 */
exports.get500ErrorMessage = function(err) {
	if (process.env.NODE_ENV === 'production') {
   		return [{'param':'server','msg':'Something went very wrong. Please try later'}];
  	} 
  	var msg  = (typeof err === 'string') ? err : JSON.stringify(err);
  	return [{'param':'server','msg':msg}];
};