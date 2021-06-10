<template>
  <div class="shop-body">
    <modal v-model="openModal" @close='openModal = false'>
      <div slot="title" class="flex items-center">
        <svg
          class="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="text-xl">Add to cart</span>
      </div>
      <div slot="content">Sign in to purchase items</div>
      <div slot="footer" class="flex space-x-2 flex-row-reverse p-2">
        <button class="btn btn-blue text-white order-2 w-p-40 slide-effect" @click="openModal = false; goTo('SignIn')">Sign in</button>
        <button class="btn bg-gray-200 hover:bg-gray-300 text-black p-2 w-p-20 slide-effect" @click="openModal = false">
          Close
        </button>
      </div>
    </modal>
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
        <div class="h-57 px-1">
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
              <span>
                {{ product.defaultPrice }}
              </span>
            </div>
          </div>
          <button
            class="
              btn btn-blue
              slide-effect
              relative
              m-rl-2
              w-40
              rounded-md
              text-white
            "
            v-on:click="addToCart(product);showModal()"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./modal.vue";
export default {
  template: "shop",
  components: { Modal },
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
      Product("Nike air", 2000.93, "Just Nike air shoe", "Nike air"),
    ];
    return {
      products: pd,
      snackbarcontent: "",
      snackclasses: "snackbar",
      signedIn: this.$parent.signedIn,
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
      return this.$parent.signedIn;
    },
    addToCart(item) {
      if (this.$parent.signedIn) this.$parent.cart.push(item);
      item.count = 1;
    },
    getRating() {
      var rate = Math.floor(Math.random() * 5);
      this.currentRating = rate;
      return rate;
    },
    goTo(page){
      this.$parent.Page = page
    },
    showModal(){
      if(!this.$parent.signedIn)
      this.openModal = true
    }
  },
};

var product = 0;
function Product(name, price, description, short_description, discount = 0) {
  product++;
  return {
    name: name,
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
