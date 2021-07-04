<template v-if="this.$parent.signedIn()">
  <div class="min-h-screen-80 " v-if="itemInCart()">
    <modal :value="doneShopping" @close="modalClosed()">
      <div
        slot="title"
        class="text-gray-700 flex flex-row items-center space-y-2"
      >
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
        Purchase Successful
      </div>
      <div slot="content" class="text-gray-600">
        Thanks for shopping with Amway :)
      </div>
      <div slot="footer" class="w-full flex flex-row-reverse">
        <button class="mr-2 w-p-40 btn btn-blue" @click="modalClosed()">
          Close
        </button>
      </div>
    </modal>
    <div class="grid grid-cols-1 md:w-p-70 md:mx-auto md:min-h-screen-45 border-2 shadow rounded-md">
    <div
      v-for="product in products"
      :key="product.name"
      class="
        my-2
        border-b border-gray-300
        p-1
        h-24
        flex flex-row
        overflow-hidden
      "
    >
      <div class="w-p-50">
        
        <div class="capitalize font-x-medium text-xl h-8 flex items-center relative text-gray-800">
          {{ product.name }}
          <button
          class="
            h-7
            w-7
            absolute
            border-0
            right-1
            top-1
            rounded-full
            p-0.5
            
            bg-gray-50
            hover:bg-gray-200
            text-black
          "
          @click="goToProductPage(product)"
        >
          <svg
            class="h-full w-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        </div>
        <div
          class="
            font-medium
            antialiased
            leading-normal
            overflow-ellipsis
            text-gray-700
            h-12
            overflow-hidden
            relative
          "
        >
          {{ product.description }}
          <span
            class="
              md:hidden
              w-full
              h-full
              absolute
              flex
              top-0
              right-0
              flex-col-reverse
              items-bottom
            "
          >
            <span class="flex flex-row-reverse"
              ><span class="w-p-15 bg-white opacity-95">...</span></span
            ></span
          >
        </div>
      </div>
      <div class="w-p-50">
        <span class="">
          <span class="">
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
    </div>
    <div class="p-1 mb-1 md:w-p-50 md:mx-auto">
      <div class="font-bold text-2xl text-gray-700">
        Total
        <span class="text-center float-right text-2xl text-gray-500">{{
          GetTotalPrice()
        }}</span>
      </div>
    </div>
    <div class="p-1 flex md:w-p-50 mx-auto">
      <button
        class="btn btn-blue h-full w-full slide-effect"
        @click="checkOut()"
      >
        Check Out
      </button>
    </div>
    <div class="p-1 flex items-center">
      <a
        href="#"
        @click="goTo('Shop')"
        class="mx-auto font-x-medium text-blue-400 hover:text-blue-500"
        >Continue shopping?</a
      >
    </div>
  </div>
  <div class="w-full min-h-screen-80 grid place-items-center" v-else>
    <div class="justify-center flex-col w-p-90 h-p-40">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.9 107.5"
        fill="#555"
        class="w-p-60 h-p-60 mr-6 antialiased"
      >
        <path
          d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"
        />
      </svg>
      <span class="antialiased text-2xl font-semibold text-gray-600"
        >No item in Cart</span
      >
      <a
        href="#"
        @click.prevent="goTo('Shop')"
        class="text-blue-400 hover:text-blue-500"
        >Continue shopping</a
      >
    </div>
  </div>
</template>

<script>
import Modal from "./modal.vue";
import number from "./number.vue";
export default {
  components: { number, Modal },
  data() {
    return {
      cart: this.$parent.cart,
      doneShopping: false,
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
      this.$parent.cart = this.products;
    },
  },
  methods: {
    goTo(page) {
      this.$parent.changePage(page);
    },
    goToProductPage(product) {
      this.$parent.toProduct(product);
    },
    updateCount(prod) {
      if (prod.count > 0) {
        prod.price = prod.defaultPrice * prod.count;
      } else if (prod.count == 0) {
        if (this.products.includes(prod)) {
          this.products = this.remove(
            this.products,
            this.products.indexOf(prod)
          );
          this.$parent.cart = this.products;
          this.cart = this.products;
        }
      }
      this.Discount(prod);
      var price = new Number(prod.price.toString());
      price = price.toFixed(2);
      prod.price = price;
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
    checkOut() {
      this.doneShopping = true;
    },
    modalClosed() {
      this.doneShopping = false;
      this.$parent.clearCart();
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
        item.price = item.price - item.price * discountType;
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