<template v-if="this.$parent.signedIn">
  <div class="cart" v-if="itemInCart()">
    <div v-for="product in products" :key="product.name" class="block item">
      <div class="item1">
        <div class="p-name text-bold">{{ product.name }}</div>
        <div class="p-desc">{{ product.shortDes }}</div>
      </div>
      <div class="item2">
        <span class="t-sm text-bold">
          <span class="text-center no-right-border p-total block">
            <span
              id="discount"
              :style="discountStyle()"
              v-if="product.defaultPrice * product.count != product.price"
              v-text="product.defaultPrice * product.count"
            ></span>
          </span>
        </span>

        <span class="">
          <number
            v-model="product.count"
            :value="product.count"
            :size="100"
            type="right"
            :withTotal="true"
            :per1="product.price"
            text-position="center"
            v-on:input="updateCount(product)"
          ></number>
        </span>
      </div>
    </div>
    <div class="total">
      <div class="text-bold">
        Total
        <span class="text-center tt-price">{{ GetTotalPrice() }}</span>
      </div>
    </div>
    <div class="check-out">
      <button
        class="btn btn-check-out h-full mrl-auto w-60p"
        @click="checkOut()"
      >
        Check Out
      </button>
    </div>
  </div>
</template>

<script>
import number from "./number.vue";
export default {
  components: { number },
  data() {
    return {
      cart: this.$parent.cart,
      products: this.GetProducts(this.$parent.cart),
      qty_count(product) {
        return Market.CountItems(product.name, this.products);
      },
      discountStyle() {
        return "color: red; font-size: 14px;";
      },
      hasDiscount() {
        if (this.$parent.userType == "diamond") return true;
        return false;
      },
    };
  },
  watch: {
    cart(val) {
      this.products = this.GetProducts(val);
    },
  },
  methods: {
    updateCount(prod) {
      if (prod.count > 0) {
        prod.price = (prod.defaultPrice * prod.count)
      } else if (prod.count == 0) {
        if (this.products.includes(prod)) {
          this.products = this.remove(this.products, this.products.indexOf(prod));
          this.$parent.cart = this.products
          this.cart = this.products
        }
      }
      this.Discount(prod);
      var price = prod.price.toString()
      price.toFixed(2)
      console.log(price, prod.price)
    },
    GetProducts(cart) {
      if (!cart) return;
      var prodList = Market.GetItemTypes(cart);
      var productCount = [];
      for (let i = 0; i < prodList.length; i++) {
        productCount[i] = 0;
        for (let j = 0; j < this.$parent.cart.length; j++) {
          if (this.$parent.cart[j].name == prodList[i].name) {
            productCount[i]++;
          }
        }
      }
      for (let k = 0; k < prodList.length; k++) {
        prodList[k].count = productCount[k];
        prodList[k].price = prodList[k].price * prodList[k].count;
      }
      for (let j = 0; j < prodList.length; j++) {
        this.Discount(prodList[j]);
      }

      return prodList;
    },
    itemInCart() {
      if (this.$parent.cart.length > 0) return true;
      else return false;
    },
    GetTotalPrice() {
      return Market.GetTotalPrice(this.products);
    },
    Discount(prod) {
      var o = Market.DiscountItem(prod, this.$parent.userType);
      return o;
    },
    remove(array, index) {
      return array.slice(0, index).concat(array.slice(index + 1));
    },
  },
};

var Market = {
  discount: {
    normal: 0,
    associate: 5 / 100,
    diamond: 20 / 100,
  },
  DiscountItem: function (item, user) {
    var discountType = this.discount[user];
    if (user == "diamond") {
      if (this.CountItems(item) > 2 && item.name.toLowerCase() == "kone") {
        if (item.name.toLowerCase() == "kone") {
          item.price = 2588.99 * item.count;
        }
      } else if (item.name.toLowerCase() == "kone" && item.count < 2) {
        item.price = item.defaultPrice * item.count;
        item.price = item.price - item.price * discountType
      } else {
        item.price = (
          (item.defaultPrice - item.defaultPrice * discountType) *
          item.count
        ).toFixed(2);
      }
    }
    return item.price;
  },
  GetItemTypes: function (items) {
    let itemNames = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      if (itemNames.indexOf(items[itemIndex]) == -1)
        itemNames.push(items[itemIndex]);
    }
    return itemNames;
  },
  CountItems: function (item) {
    return item.count;
  },
  GetItem(itemName, list) {
    list.forEach((element) => {
      if (element.name == itemName) return element;
    });
  },
  GetTotalPrice(items) {
    var price = 0;
    for (var itemIndex in items) {
      price += new Number(items[itemIndex].price);
    }

    price = price.toFixed(2);
    return price;
  },
};
</script>
<style scoped>
.total {
  padding: 5px;
  margin: 5px 0;
  border-top: 1px solid rgb(34, 105, 211);
}
.total > .text-bold {
  font-size: 22px;
}
.tt-price {
  color: #2e2e2e;
  font-size: 20px;
  float: right;
}
.item {
  display: flex;
  flex-direction: row;
  height: 85px;
  padding: 5px 5px;
  margin-bottom: 5px;
}
.cart {
  background-color: #fff;
}

.item1 {
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}
#discount {
  position: relative;
  overflow: hidden;
}
#discount::before {
  content: "";
  display: block;
  width: 100%;
  border-top: 2px solid #4b4b4b;
  height: 2px;
  position: absolute;
  bottom: 5px;
  left: 0;
}
.item2 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
}
.p-name {
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
}
.p-desc {
  word-wrap: normal;
  text-overflow: ellipsis;
  text-transform: capitalize;
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
}
div#number {
  margin: auto;
}
.bg-red {
  background-color: #e73d3d;
}
.bg-green {
  background-color: #38e720;
}
.bg-blue {
  background-color: #0869e7;
}
.flat {
  border: 1px solid transparent;
  border-radius: none;
}

.no-right-border {
  border-right: none;
}
.no-left-border {
  border-left: none;
}
.check-out {
  display: flex;
  padding: 4px;
}
.justify-center {
  display: inline-flex;
  justify-content: left;
  align-items: center;
}
.justify-center div#number {
  margin: 0 5px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}

@keyframes black-to-white {
  0% {
    color: #000;
  }
  50% {
    color: #d8d8d8;
  }
  100% {
    color: #fff;
  }
}
</style>