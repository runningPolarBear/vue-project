import {
	ERROR_MESSAGE,
	ERROR_ADDINFO
} from './enum/mutationsEnum'

export default {
	[ERROR_MESSAGE](state,errorSender = {}){
		const { errorInfo = {},errorMsg = "" } = errorSender
		state.nowError = { ...state.nowError,errorInfo,errorMsg  }
	},
	[ERROR_ADDINFO](state,errorInfo = {}){
		state.errorList.push(errorInfo);
	}
}