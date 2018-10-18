import Vue from "vue";
import Router from "vue-router";

// 开通存管
const OpenAccount = () => import("@/pages/openAccount/openAccount");

// 银行卡
const BankCardList = () => import("@/pages/bankCard/bankCardList");
const AddBankCard = () => import("@/pages/bankCard/addBankCard");
const BankCardInfo = () => import("@/pages/bankCard/bankCardInfo");
const SupportBankList = () => import("@/pages/bankCard/supportBankList");

// 授权页
const GotoAccredit = () => import("@/pages/authorization/gotoAccredit");

// 合同列表
const ContractList = () => import("@/pages/contract/contractList");
const ContractDetail = () => import("@/pages/contract/contractDetail");

// 提现
const Withdraw = () => import("@/pages/withdraw/withdraw.vue");
const WithdrawResult = () => import("@/pages/withdraw/withdrawResult.vue");

Vue.use(Router);

const routes = [
  {
    path: "/bankCardList",
    name: "bankCardList",
    component: BankCardList,
    meta: { title: "银行卡列表", requiresAuth: false }
  },
  {
    path: "/addBankCard",
    name: "addBankCard",
    component: AddBankCard,
    meta: { title: "添加银行卡", requiresAuth: false }
  },
  {
    path: "/bankCardInfo",
    name: "bankCardInfo",
    component: BankCardInfo,
    meta: { title: "银行卡详情", requiresAuth: false }
  },
  {
    path: "/supportBankList",
    name: "supportBankList",
    props: true,
    component: SupportBankList,
    meta: { title: "支持银行", requiresAuth: false }
  },
  {
    path: "/contractList",
    name: "contractList",
    component: ContractList,
    meta: { title: "合同列表", requiresAuth: false }
  },
  {
    path: "/contractDetail",
    name: "contractDetail",
    component: ContractDetail,
    meta: { title: "合同详情", requiresAuth: false }
  },
  {
    path: "/gotoAccredit",
    name: "gotoAccredit",
    component: GotoAccredit,
    meta: { title: "跳转授权", requiresAuth: false }
  },
  {
    path: "/openAccount",
    name: "openAccount",
    component: OpenAccount,
    meta: { title: "开通存管", requiresAuth: false }
  },
  {
    path: "/withdraw",
    name: "withdraw",
    component: Withdraw,
    props: true,
    meta: { title: "提现", keepAlive: false, requiresAuth: false }
  },
  {
    path: "/withdrawResult",
    name: "withdrawResult",
    component: WithdrawResult,
    props: true,
    meta: { title: "申请成功", keepAlive: false, requiresAuth: true }
  },
  {
    path: "/BillDetailOperate",
    name: "BillDetailOperate",
    component: () =>
      import(/* webpackChunkName: "BillDetailOperate" */ "@/pages/repayment/BillDetailOperate.vue"),
    meta: { title: "账单", keepAlive: false, requiresAuth: true }
  },
  {
    path: "/EarlyBillsRepay/:order",
    name: "EarlyBillsRepay",
    component: () =>
      import(/* webpackChunkName: "EarlyBillsRepay" */ "@/pages/repayment/EarlyBillsRepay.vue"),
    meta: { title: "提前结清", keepAlive: false, requiresAuth: false }
  },
  {
    path: "/SucceedToPay",
    name: "SucceedToPay",
    component: () =>
      import(/* webpackChunkName: "EarlyBillsRepay" */ "@/pages/repayment/SucceedToPay.vue"),
    meta: { title: "还款成功", keepAlive: false, requiresAuth: false }
  },
  {
    path: "/OrderPay",
    name: "OrderPay",
    component: () =>
      import(/* webpackChunkName: "EarlyBillsRepay" */ "@/pages/repayment/OrderPay.vue"),
    meta: { title: "还款支付", keepAlive: false, requiresAuth: false }
  },
  {
    path: "/error/:origin",
    name: "ErrorPage",
    component: require("@/pages/common/ErrorPage.vue").default,
    meta: { title: "出错", keepAlive: false, requiresAuth: false }
  }
];
export default new Router({
  mode: "history",
  linkActiveClass: "active", // 激活路由添加 'active' class名称
  routes: routes
});
