<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="item in carInfoList" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="item.isChecked==1"
              @change="updateChecked(item,$event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">{{ item.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice}}.00</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="hander(-1,item)">-</a>
            <input
              autocomplete="off"
              type="number"
              minnum="1"
              class="itxt"
              @blur="hander($event.target.value*1-item.skuNum*1,item)"
              onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
              :value="item.skuNum"
            />

            <a class="plus" @click="hander(1,item)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice*item.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCarById(item.skuId)">删除</a>
            <br />
            <a>移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          @change="updateallCarChecked($event)"
          class="chooseAll"
          type="checkbox"
          :checked="isChecked&&carInfoList.length"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click="deleteCheckedCar()">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费）:</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getCarList");
    },
    async hander(disNum, cart) {
      try {
        if (disNum == -1) {
          disNum = cart.skuNum > 1 ? -1 : 0;
        }
        await this.$store.dispatch("addOrUpdataShopCart", {
          skuId: cart.skuId,
          skuNum: disNum
        });
        setTimeout(async () => {
          await this.getData()
        }, 100);
       
        if (disNum == -1) {
          if (cart.skuNum == 2) {
            alert("商品仅剩1件");
          }   
        }
        if(disNum==0){
          if(cart.skuNum==1){
          alert("您应该点击删除的")
        }
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    deleteCarById(skuId) {
      try {
        this.$store.dispatch("deletCarListBySkuId", skuId);
        this.getData();
      } catch (error) {
        alert(error);
      }
    },
    async updateChecked(cart, event) {
      try {
        let checked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("updateCheckedById", {
          skuId: cart.skuId,
          isChecked: checked
        });
        this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCheckedCar() {
      try {
        await this.$store.dispatch("deleteAllCheckedCar");
        //获取新数据
        this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    async updateallCarChecked(event) {
      let check = event.target.checked ? "1" : "0";
      try {
        await this.$store.dispatch("updateAllCarChecked", check);
        this.getData();
      } catch (error) {
        console.log(error);
      }
    }
  },
  data(){
    return {
      flag:false
    }
  },
  computed: {
    ...mapGetters(["carList"]),
    carInfoList() {
      return this.carList.cartInfoList || [];
    },
    totalPrice() {
      let sum = 0;
      this.carInfoList.forEach(item => {
        sum += item.skuPrice * item.skuNum;
      });
      return sum;
    },
    isChecked() {
      //数组的every的方法,只要一个false，返回这个
      return this.carInfoList.every(item => item.isChecked == 1);
    }
  }
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 15%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 31px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            text-decoration: none;
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>