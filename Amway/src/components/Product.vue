<template>
  <div class="min-h-screen-90">
    <div class="min-h-screen-85">
      <div
        class="
          h-screen-40
          border-2 border-gray-400
          bg-blue-400
          relative
          overflow-hidden
          rounded-t-md
          flex
        "
      >
        <img
          :src="getLink()"
          alt="No image availiable"
          class="
            w-full
            h-full
            flex flex-shrink-0
            items-center
            justify-center
            text-gray-800
          "
        />
        <div class="absolute w-full h-full top-0 px-1">
          <!--Overlay of pagination-->
          <div class="flex flex-row h-full justify-between items-center w-full">
            <button
              :disabled="backwardDisabled"
              class="
                bg-gray-600
                opacity-50
                hover:opacity-95
                rounded-full
                p-2
                h-8
                w-8
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-gray-200
                text-lg
                slide-effect
                font-x-medium
              "
              :class="hideBtns()"
              @click="changePicture(false)"
            >
              &lt;
            </button>
            <button
              :disabled="forwardDisabled"
              class="
                bg-gray-600
                opacity-50
                hover:opacity-95
                rounded-full
                p-2
                h-8
                w-8
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-gray-200
                text-lg
                slide-effect
                font-x-medium
              "
              :class="hideBtns()"
              @click="changePicture(true)"
            >
              &gt;
            </button>
          </div>
          <div>
            <ul class="p-0 m-0 inline-block">
              <li
                v-for="(index, x) in numOfImages"
                :key="index + x"
                class="h-0.5 w-0.5 bg-white p-0.5 m-1"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
          class="
            text-gray-700
            w-full
            p-1
            text-4xl
            capitalize
            font-x-medium
            text-center
          "
        >
          {{ data.name }}
        </div>
        <div class="text-gray-600 w-full">
          <div class="text-center">{{ data.description }}</div>
          <div class="font-x-medium text-lg text-center my-2">
            Price : {{ data.price }}
          </div>
          <div
            class="text-lg text-center my-2 flex justify-center items-center"
          >
            <div class="inline-flex space-x-5 text-blue-600">
              <span class="inline-flex space-x-1 items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 16 16"
                  class="h-6 w-6"
                >
                  <g>
                    <path
                      transform="matrix(0.44909706,0,0,0.47169133,-8.1054134,3.7312924)"
                      d="m 43.375,20.5 -7.476054,-3.148746 -7.454648,3.199094 0.684408,-8.083166 -5.346132,-6.1012168 7.899041,-1.8469247 4.150556,-6.9698541 4.197468,6.9417034 7.911318,1.7936105 -5.304864,6.1371337 z"
                      id="path846"
                      style="
                        stroke-width: 2.5;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                      "
                    />
                  </g>
                </svg>

                <span>4.5</span>
              </span>
              <span class="inline-flex space-x-1 items-center">
                <svg
                  id="SVGRoot"
                  version="1.1"
                  viewBox="0 0 24 24"
                  class="h-5 w-5"
                  stroke="#000"
                >
                  <g>
                    <path
                      transform="rotate(179.25555)"
                      d="m -1.7878389,-21.697271 a 9.829999,7.4767089 0 0 1 -5.1194384,6.56234 9.829999,7.4767089 0 0 1 -10.0259347,-0.27296 9.829999,7.4767089 0 0 1 -4.489468,-6.823946"
                      id="path32"
                      style="fill: none; stroke-width: 3"
                    />
                    <ellipse
                      ry="5"
                      rx="4.75"
                      cy="7.2418962"
                      cx="11.556483"
                      id="path37"
                      style="fill: none; stroke-width: 3"
                    />
                  </g>
                </svg>
                <span>{{ getRating() }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <button class="btn btn-blue w-p-90 slide-effect" v-if="!itemInCart()" @click="addToCart()">
            Add to cart
          </button>
          <number
            v-else
            v-model="data.count"
            :value="data.count"
            :size="90"
            :textposition="'center'"
            :btncolor="'rgb(96, 165, 250)'"
            class="h-10 rounded shadow-md border-2"
            :textcolor="'white'"
          ></number>
          <button class="btn btn-gray w-p-90 slide-effect">
            Call to order
          </button>
        </div>
      </div>
    </div>
    <!--Comment Section-->
    <div
      class="
        border-t border-gray-200
        my-2
        py-1
        w-p-95
        mx-auto
        flex flex-col flex-shrink-0
        items-center
      "
    >
      <div class="flex flex-col w-p-95">
        <span class="text-base w-full font-x-medium text-gray-600"
          >Leave a review
        </span>
        <div class="flex flex-row space-x-1">
          <textarea
            cols="20"
            rows="2"
            class="border-2 border-gray-200 shadow-sm w-p-70"
            :disabled="!purchaseVerified"
          ></textarea>
          <div class="flex flex-col w-p-30">
            <button
              class="btn inline-flex justify-center"
              :class="verifyButton()"
              @click="verifyPurchase()"
            >
              <span class="h-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="SVGRoot"
                  version="1.1"
                  viewBox="0 0 16 16"
                  class="h-full w-6 spining"
                  :class="hideSpinner()"
                  v-if="beginVerify"
                >
                  <defs id="defs1139">
                    <linearGradient id="linearGradient1701">
                      <stop
                        id="stop1697"
                        offset="0"
                        style="stop-color: #9999; stop-opacity: 1"
                      />
                      <stop
                        id="stop1699"
                        offset="1"
                        style="stop-color: #eee; stop-opacity: 1"
                      />
                    </linearGradient>
                    <linearGradient
                      gradientTransform="matrix(0.94710367,0,0,0.82957209,0.52188087,0.94816796)"
                      gradientUnits="userSpaceOnUse"
                      y2="4.46875"
                      x2="20.125"
                      y1="3.96875"
                      x1="2.6875"
                      id="linearGradient1703"
                      xlink:href="#linearGradient1701"
                    />
                    <linearGradient
                      y2="4.46875"
                      x2="20.125"
                      y1="3.96875"
                      x1="2.6875"
                      gradientTransform="matrix(0.9471037,0,0,0.82957209,-15.853119,-13.739334)"
                      gradientUnits="userSpaceOnUse"
                      id="linearGradient1720"
                      xlink:href="#linearGradient1701"
                    />
                    <linearGradient
                      y2="4.46875"
                      x2="20.125"
                      y1="3.96875"
                      x1="2.6875"
                      gradientTransform="matrix(0.94710367,0,0,0.82957209,0.77188087,0.76066796)"
                      gradientUnits="userSpaceOnUse"
                      id="linearGradient1728"
                      xlink:href="#linearGradient1701"
                    />
                    <linearGradient
                      y2="4.46875"
                      x2="20.125"
                      y1="3.96875"
                      x1="2.6875"
                      gradientTransform="matrix(0.9471037,0,0,0.82957209,-16.228119,-13.801834)"
                      gradientUnits="userSpaceOnUse"
                      id="linearGradient1732"
                      xlink:href="#linearGradient1701"
                    />
                    <linearGradient
                      y2="4.46875"
                      x2="20.125"
                      y1="3.96875"
                      x1="2.6875"
                      gradientTransform="matrix(0.94710367,0,0,0.82957209,0.52188087,0.94816796)"
                      gradientUnits="userSpaceOnUse"
                      id="linearGradient1740"
                      xlink:href="#linearGradient1701"
                    />
                  </defs>
                  <g id="layer1">
                    <g transform="translate(-0.0625,0.375)" id="g1724">
                      <g transform="translate(-0.3125,0.34375024)" id="g1738">
                        <path
                          d="M 3.0672212,6.6514757 A 5.1202788,4.821888 0 0 1 8.1875001,1.8295879 5.1202788,4.821888 0 0 1 13.307779,6.6514759"
                          id="path1152"
                          style="
                            fill: none;
                            fill-rule: evenodd;
                            stroke: url(#linearGradient1740);
                            stroke-width: 2.65917587;
                            stroke-linecap: round;
                            stroke-miterlimit: 4;
                            stroke-dasharray: none;
                          "
                        />
                        <path
                          transform="scale(-1)"
                          style="
                            fill: none;
                            fill-rule: evenodd;
                            stroke: url(#linearGradient1720);
                            stroke-width: 2.65917587;
                            stroke-linecap: round;
                            stroke-miterlimit: 4;
                            stroke-dasharray: none;
                          "
                          id="path1718"
                          d="m -13.307779,-8.0360243 a 5.1202793,4.8218875 0 0 1 5.1202791,-4.8218877 5.1202793,4.8218875 0 0 1 5.1202792,4.8218879"
                        />
                        <path
                          style="
                            fill: none;
                            fill-rule: evenodd;
                            stroke: url(#linearGradient1728);
                            stroke-width: 2.65917587;
                            stroke-linecap: round;
                            stroke-miterlimit: 4;
                            stroke-dasharray: none;
                          "
                          id="path1726"
                          d="M 3.3172212,6.4639757 A 5.1202788,4.821888 0 0 1 8.4375001,1.6420879 5.1202788,4.821888 0 0 1 13.557779,6.4639759"
                        />
                        <path
                          d="m -13.682779,-8.0985243 a 5.1202793,4.8218875 0 0 1 5.1202791,-4.8218877 5.1202793,4.8218875 0 0 1 5.1202792,4.8218879"
                          id="path1730"
                          style="
                            fill: none;
                            fill-rule: evenodd;
                            stroke: url(#linearGradient1732);
                            stroke-width: 2.65917587;
                            stroke-linecap: round;
                            stroke-miterlimit: 4;
                            stroke-dasharray: none;
                          "
                          transform="scale(-1)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 16 16"
                  class="h-full w-6 px-0.5"
                  :class="showVerified()"
                >
                  <g id="layer1">
                    <g>
                      <path
                        d="M 2.3145951,6.345144 5.6136149,12.628337 14.122425,2.9970855"
                        style="
                          fill: none;
                          stroke: #00e300;
                          stroke-width: 2.47627449;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-opacity: 1;
                        "
                        id="path10"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span class="text-center">{{ verifyText() }}</span>
            </button>
            <button class="btn btn-blue">Comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import number from "./number.vue";
export default {
  components: { number },
  props: ["data"],
  data() {
    return {
      numOfImages: 0,
      forwardDisabled: false,
      backwardDisabled: false,
      purchaseVerified: false,
      index: 0,
      beginVerify: false,
      tryVerify: false,
      verifyText() {
        if (this.purchaseVerified) return " Verified";
        if (this.tryVerify) return "Not verified";
        return "Verify purchase";
      },
      hideSpinner() {
        if (this.purchaseVerified) {
          return " hidden";
        } else return "";
      },
      showVerified() {
        console.log("POPAOPO");
        if (!this.purchaseVerified) {
          return " hidden";
        } else return "";
      },
      verifyButton() {
        let name;
        if (!this.beginVerify) name = "btn-red";
        else if (this.beginVerify) name = "btn-blue";
        if (this.purchaseVerified) name = "btn-green";
        return name;
      },
      updateCount() {
        let prod = this.data;
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
        var price = new Number(prod.price.toString());
        price = price.toFixed(2);
        prod.price = price;
      },
    };
  },
  methods: {

    addToCart() {
      if (this.$parent.signedIn) this.$parent.cart.push(this.data);
      this.data.count = 1;
    },
    verified() {
      this.beginVerify = false;
      this.purchaseVerified = true;
    },
    verifyPurchase() {
      if (this.purchaseVerified || this.tryVerify) return;
      this.beginVerify = true;
      setTimeout(this.verified, 1000);
    },
    hideBtns() {
      if (this.numOfImages < 1) return " hidden";
    },
    getForward() {
      if (this.index > this.numOfImages - 1) {
        return false;
      }
      return true;
    },
    getBackward() {
      if (this.index < 1) {
        return false;
      }
      return true;
    },
    getLink() {
      return this.data.images[this.index];
    },
    getRating() {
      return Math.ceil(Math.random() * 100);
    },
    itemInCart() {
      return this.$parent.cart.includes(this.data);
    },
  },
  watch: {
    data(val) {
      this.numOfImages = val.images.length;
      if (this.data.images.length > 1) {
        this.forwardDisabled = false;
      }
    },
  },
};
</script>