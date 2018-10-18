<!--运营商联系方式-->
<template>
  <mt-popup
    v-model="popupVisible"
    position="middle"
    id="teleLink">
    <div class="teleLinkWrap">
      <p class="title">可通过拨打手机运营商客服电话重置</p>
      <div class="content">
        <p><span>中国电信客服电话：</span><a href="tel:10000" class="phoneNumber">10000</a></p>
        <p><span>中国移动客服电话：</span><a href="tel:10086" class="phoneNumber">10086</a></p>
        <p><span>中国联通客服电话：</span><a href="tel:10010" class="phoneNumber">10010</a></p>
      </div>
      <div class="btn">
        <mt-button plain size="normal" @click.native="popupVisible=false">确定</mt-button>
      </div>
    </div>
  </mt-popup>
</template>

<script>
  import storage from '@/utils/storage';

  export default {
    name: 'teleLink',
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        popupVisible: this.visible, // 是否显示popup
      };
    },
    watch: {
      visible(newValue) {
        this.popupVisible = newValue;
      },
      popupVisible(newValue) {
        this.$emit('update:visible', newValue);
      },
    },
  };
</script>

<style scoped lang="scss">
#teleLink{
  background: transparent;
  width: 70%;
  .teleLinkWrap{
    border-radius: 0.1rem;
    background-color: #fff;
    .title{
      color: #4A4A4A;
      font-size: 0.14rem;
      text-align: center;
      padding-top: 0.30rem;
    }
    .content{
      padding: 0.25rem 0;
      font-size: 0.17rem;
      border-bottom: 1px solid #CCC;
      > p{
        text-align: center;
        > span:first-child{
          color: #030303;
        }
        > .phoneNumber{
          color: #F7A206;
        }
      }

    }
    .btn{
      text-align: center;
      padding: 0.05rem 0;
      .mint-button--default.is-plain{
        border-color: transparent;
        color: #0076FF;
        width: 100%;
      }
    }
  }
}
</style>