import { ACTIONS_ERROR } from './enum/actionsEnum';
import { ERROR_MESSAGE, ERROR_ADDINFO } from './enum/mutationsEnum';
import { SHOW_TOAST } from '@/store/commonModules/Toast/enum/actionsEnum';

export default {
  [ACTIONS_ERROR]({ commit, dispatch }, params = {}) {
    const { isToast = true, errorInfo = {}, } = params;
    const { desc, errorCode, status } = errorInfo;
    let msg;
    if (errorCode === 2) { // 后端返回不为200
      msg = status === 302 ? "未登录,请先登录" : null;
    }
    //记录错误信息
    commit(ERROR_ADDINFO, errorInfo);
    //是否弹窗
    // isToast && commit(ERROR_MESSAGE, { errorMessage, errorBody })
    isToast && dispatch(SHOW_TOAST, {
      text: msg || desc || '服务器开小差,请稍后重试',
    });
  },
}
