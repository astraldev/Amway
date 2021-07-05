<template>
  <div>
    <div class="categories">
      <div
        v-for="(product, index) in products"
        class="border border-blue-500 shadow-md rounded-md mx-auto h-full"
        :key="product.id + '_' + index"
      >
        <div class="border-b-2 border-gray-300 h-43 relative">
          <div class="sm:flex-shrink-0 h-full w-full">
            <img src="" class="w-full h-full" border="0" />
            <button class="h-7 w-7 absolute border-0 right-1 top-1 rounded-full p-0.5 bg-gray-50 hover:bg-gray-200 text-black " @click="goToProductPage(product)">
              <svg class="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
          </div>
        </div>
        <div class="h-57 px-1 relative">
          <div class=" h-p-70 mb-1">
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
            <div class="text-rating font-semibold p-0.5 w-40 price-tag">
              <span class="bg-rating text-white px-0.5 rounded-sm">
                <span class="text-base">★</span>
                {{ getRating(product) }}</span
              >
              <span class="text-gray-700">
                {{ product.defaultPrice }}
              </span>
            </div>
          </div>

            <button
              class="btn btn-blue slide-effect w-full "
              v-on:click="
                addToCart(product);
                showModal();
              "
            >
              Add to cart
            </button>
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
      Product("Orini Pen", 40.53, "Orini pen. Best high quality writing pen made to write on all surfaces", 
      "High quality orini pen", 4)
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
  discount = 0,
  images = []
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
