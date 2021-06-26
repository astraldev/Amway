<template>
  <div>
    <div class="categories">
      <div
        v-for="(product, index) in products"
        class="border border-blue-500 shadow-md rounded-md mx-auto h-full"
        :key="product.id + '_' + index"
      >
        <div class="border-b-2 border-gray-300 h-43">
          <div class="sm:flex-shrink-0">
            <img src="" class="" border="0" />
          </div>
        </div>
        <div class="h-57 px-1 relative">
          <div class="">
            <div
              class="
                text-sm
                h-20
                overflow-ellipsis
                font-x-medium
                overflow-hidden
                antialiased
                px-0.5
              "
            >
              <span class="font-bold text-red-600 capitalize leading-5">{{
                product.name
              }}</span>
              {{ product.description }}
            </div>
            <div class="text-rating font-semibold p-0.5 w-40 m-rl-2 price-tag">
              <span class="bg-rating text-white px-0.5 rounded-sm">
                <span class="text-base">★</span>
                {{ getRating(product) }}</span
              >
              <span class="text-gray-700">
                {{ product.defaultPrice }}
              </span>
            </div>
          </div>
          <div class="flex">
            <button
              class="btn btn-blue slide-effect w-p-80 "
              v-on:click="
                addToCart(product);
                showModal();
              "
            >
              Add to cart
            </button>
            <button class="p-1 rounded-full border bg-gray-400 m-auto w-p-20 h-p-20 border-gray-300 hover:bg-gray-500 slide-effect" @click="goToProductPage(product)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="SVGRoot"
                version="1.1"
                viewBox="0 0 16 16"
              >
                <g id="layer1">
                  <g id="g905">
                    <path
                      style="
                        fill: none;
                        fill-opacity: 1;
                        stroke: #eee;
                        stroke-width: 2.6092608;
                        stroke-linecap: round;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        stroke-dasharray: none;
                        stroke-opacity: 1;
                      "
                      d="M 8.09375,7.7256244 V 13.35188"
                      id="path847"
                    />
                    <path
                      id="path849"
                      d="M 9.625,4 A 1.5,1.5 0 0 1 8.125,5.5 1.5,1.5 0 0 1 6.625,4 1.5,1.5 0 0 1 8.125,2.5 1.5,1.5 0 0 1 9.625,4 Z"
                      style="
                        fill: #eee;
                        fill-opacity: 1;
                        stroke: none;
                        stroke-opacity: 1;
                      "
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  template: "shop",
  data() {
    var pd = [
      Product(
        "kone",
        3488.99,
        "Large size printer. Coupled with scanner and aparatus photocopier and multipleap lot of things",
        "Large size printer long description",
        10
      ),
      Product(
        "iron cartridge",
        529.99,
        "Just a printer (specifically: for Kone) cartridge more. Comes in all 4 colors (Black, Magenta, Cyan and Yellow ) ",
        "kone's main catridge ",
        30
      ),
      Product(
        "Hp Sonic printer",
        2349.99,
        "A miniture size desktop printer...",
        "Worth it"
      ),
      Product(
        "Nike air",
        2000.93,
        "Just Nike air shoe that has no description",
        "Nike air"
      ),
    ];
    return {
      products: pd,
      snackbarcontent: "",
      snackclasses: "snackbar",
      signedIn: this.$parent.signedIn(),
      ifDiscount() {
        if (this.signedIn && product.discount != 0) return "discount";
        return "";
      },
      currentRating: 0,
      openModal: false,
    };
  },
  methods: {
    logIn() {
      this.$parent.Page = "SignIn";
    },
    loggedIn() {
      return this.$parent.signedIn();
    },
    goToProductPage(product){
      this.$parent.toProduct(product)
    },
    addToCart(item) {
      if (this.$parent.signedIn()) this.$parent.cart.push(item);
      item.count = 1;
    },
    getRating() {
      var rate = Math.floor(Math.random() * 5);
      this.currentRating = rate;
      return rate;
    },
    goTo(page) {
      this.$parent.Page = page;
    },
    showModal() {
      if (!this.$parent.signedIn()) this.$parent.openModal = true;
    },
  },
};

var product = 0;
function Product(
  name,
  price,
  description,
  short_description,
  images = [],
  discount = 0
) {
  product++;
  return {
    name: name,
    images: images,
    price: price,
    description: description,
    shortDes: short_description,
    discount: discount,
    defaultPrice: price,
    count: 1,
    id: `product ${product}`,
  };
}
</script>
