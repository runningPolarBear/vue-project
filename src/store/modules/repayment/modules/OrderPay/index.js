import { _BANK_LIST_ASSEMBLE, SELECTED_BANK_SWITCH } from './enum/mutation-types';
import actions from './actions';
// 还款账单列表
export default {
  namespaced: true, // OrderPay
  state: {
    bankArr: null,
    selectIndex: 0,
  },
  getters: {
    bankInfo(state) {
      const bankArr = state.bankArr;
      const selectIndex = state.selectIndex;
      if (!Array.isArray(bankArr)) {
        return null;
      }
      return bankArr[selectIndex];
    },
    isNeedAgree: (state, getters) => (getters.bankInfo ? getters.bankInfo.isNeedAgree : null),
  },
  actions,
  mutations: {
    // bank list assemble
    [_BANK_LIST_ASSEMBLE](_state, _payload) {
      _state.bankArr = [_payload];
    },
    // 切换选中银行卡的索引
    [SELECTED_BANK_SWITCH](_state, _payload) {
      console.log(_payload);
      _state.selectIndex = _payload;
    },
  },
};
