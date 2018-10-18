import vue from 'vue'
import vuex from 'vuex'

import error from '@/store/commonModules/error'
import loading from '@/store/commonModules/loading'
import service from '@/store/commonModules/service'
import Toast from '@/store/commonModules/Toast'
import Confirm from '@/store/commonModules/Confirm'

import user from '@/store/modules/user';
import repayment from '@/store/modules/repayment';
import withdraw from '@/store/modules/withdraw';
import bankCard from '@/store/modules/bankCard';
import authorization from '@/store/modules/authorization';
import contact from '@/store/modules/contact';
// import middleWare from '@/utils/vuexMiddleWare'

vue.use(vuex);
// middleWare(vuex.Store);
const store = new vuex.Store({
  modules: {
    user,
    error,
    loading,
    Toast,
    service,
    repayment,
    withdraw,
    bankCard,
    Confirm,
    authorization,
    contact
  }
})

export default store
