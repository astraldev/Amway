<template>
  <div class="shop-body">
    <div class="categories">
      <div
        v-for="(product, index) in products"
        class="card"
        :key="product.id + '_' + index"
      >
        <div class="full">
          <div class="card-head">
            <div v-if="(product.discount != 0) &&  signedIn" class="badge">-{{product.discount}}%</div>
            <div class="img">
              <img src="<%= BASE_URL %>" class="b-none" border="0"/>
            </div>
          </div>
          <div class="card-body">
              <div class="description">
                <span class="prod-name capitalize text-bold">{{ product.name }}</span>
                {{ product.description }}
              </div>
              <div class="price-rating container"> 
              <div class="rating"></div>
              <div class="inline price-tag" :id="ifDiscount()">{{ product.defaultPrice }}</div> &nbsp;
              <div v-if="(product.discount != 0) && signedIn" class="price-tag inline discounted"> {{product.price - (product.defaultPrice * product.discount / 100)}} </div>
              </div>
              <button
                class="btn shop-btn slide-effect"
                v-on:click="addToCart(product)"
              >
                Add to cart
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/shop.css'
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
      Product("Nike air", 2000.93, "Just Nike air shoe", "Nike air"),
    ];
    return {
      products: pd,
      snackbarcontent: "",
      snackclasses: "snackbar",
      signedIn: this.$parent.signedIn,
      ifDiscount(){
        if(product.signedIn && product.discount != 0)
         return "discount"
        return ""
      }
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
  },
};

var product = 0;
function Product(name, price, description, short_description, discount=0) {
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
// 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

