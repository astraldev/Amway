<template>
  <div class="shop-body">
    <div class="categories">
      <div v-for="(product, index) in products" class="card" :key="product.id+'_'+index">
        <div class="card-head">
          <div class="img">
            <span class="rotated">Image</span>
          </div>
        </div>
        <div class="card-body">
          <div class="head">
            <h3>{{ product.name }}</h3>
            <div class="price-tag">{{ product.defaultPrice }}</div>
          </div>
          <div class="body">
            <div class="description">
              {{ product.shortDes }}
            </div>
            <div class="rating"></div>
            <button class="btn slide-effect" v-on:click="addToCart(product)" v-if="loggedIn()">
              Add to cart
            </button>
            <button class="btn slide-effect dissabled" @click="logIn()" v-else>Log in</button>
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
      Product("kone", 3488.99, "Large size printer ", "fuck this"),
      Product(
        "iron cartridge",
        529.99,
        "Just a printer cartridge more ",
        "Iono what im doing here"
      ),
      Product(
        "Hp Sonic printer",
        49.99,
        "A miniture size desktop printer...",
        "Worth it"
      ),
      Product("Nike air", 2000.93, "Just Nike air shoe", "Nike air"),
      Product("Iphone 12", 199999.99, "Iphone 12", "Just Iphone 12"),
      Product("Iphone 12", 199999.99, "Iphone 12", "Just Iphone 12"),
      Product("Iphone 12", 199999.99, "Iphone 12", "Just Iphone 12"),
      Product("Iphone 12", 199999.99, "Iphone 12", "Just Iphone 12"),
    ];
    return {
      products: pd,
      snackbarcontent: "",
      snackclasses: "snackbar",
    };
  },
  methods: {
    logIn(){
      this.$parent.Page = "SignIn"
    },
    loggedIn(){
      return this.$parent.signedIn
    },
    addToCart(item) {
      if (this.$parent.signedIn) this.$parent.cart.push(item);
      item.count = 1
    },
  },
};

var product = 0
function Product(name, price, description, short_description) {
  product++;
  return {
    name: name,
    price: price,
    description: description,
    shortDes: short_description,
    defaultPrice: price,
    count: 1,
    id: `product ${product}`,
  };
}

</script>
// 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hidden {
  display: none;
}

.shop-body{
  padding: 5px;
}
.img {
  position: relative;
  background-color: aqua;
  width: 100%;
  height: 100%;
  border-radius: 7px 7px 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0 3px 0 rgb(26, 26, 26);
}
.dissabled{
  background: rgba(22, 22, 22, 0.692);
}
.card-head {
  position: relative;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 120px;
  margin: 0;
}
.card-body {
  margin-top: 10px;
  display: grid;
  height: 120px;
  position: relative;
  width: 100%;
  grid-row-start: 3;
}
.card-body .head {
  position: relative;
  width: 100%;
}
.head .price-tag {
  position: absolute;
  color: rgb(14, 14, 14);
  right: 0;
  top: -35px;
  padding: 3px;
}

.categories {
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
}
.card {
  border: 1px solid rebeccapurple;
  border-radius: 7px;
  width: 250px;
  margin: 5px;
  height: 250px;
  display: flex;
  flex-shrink: 1;
  box-shadow: 1px 1px 2px 0 rgb(36, 36, 36), -1px 0 0 0 rgb(36, 36, 36);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  background-color: rgb(240, 240, 240);
  transform: scale(0.99);
  transition: all 0.2s linear;
}
.card:hover {
  box-shadow: 5px 5px 10px 0 rgba(22, 22, 22, 0.692),
    -5px -2px 10px 0 rgba(22, 22, 22, 0.692);
  transform: scale(1);
  transition: all 0.1s linear;
}
.card-body .body {
  position: relative;
  display: flex;
  flex-direction: column;
}
.btn {
  width: 60%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  height: 39px;
  margin: auto;
  position: relative;
}

@media screen and (max-width: 720px) {
  .card {
    width: 250px;
    height: 250px;
  }
  .img {
    height: 100%;
    width: 100%;
  }
  h3 {
    font-size: 17px;
  }
  .description {
    font-size: 13px;
  }
}
</style>

