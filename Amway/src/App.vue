<template>
  <div id="app">
    <modal v-model="openModal" @close="openModal = false">
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
        <button
          class="btn btn-blue text-white order-2 w-p-40 slide-effect"
          @click="
            openModal = false;
            changePage('SignIn');
          "
        >
          Sign in
        </button>
        <button
          class="
            btn
            bg-gray-200
            hover:bg-gray-300
            text-black
            p-2
            w-p-20
            slide-effect
          "
          @click="openModal = false"
        >
          Close
        </button>
      </div>
    </modal>
    <div
      class="overlay fixed h-screen-90 w-full bottom-0 z-10 md:hidden"
      :class="getMenuClass()"
    ></div>
    <div
      class="
        sticky
        top-0
        w-full
        z-20
        bg-blue-600
        border-b
        flex
        justify-between
        p-0
        flex-col
        md:flex-row
        h-px-50
      "
    >
      <main
        class="
          flex
          items-center
          justify-between
          space-x-1
          px-2
          py-1
          md:px-0
          w-full
          md:w-p-90
        "
      >
        <a href="#" class="w-full h-full" @click="changePage('Shop')">
          <div class="flex items-center">
            <h2 class="font-bold text-2xl lg:text-3xl text-gray-100">Amway</h2>
          </div>
        </a>
        <div class="inline-flex flex-row">
          <div
            class="
              text-gray-100
              capitalize
              hover:bg-blue-500
              border-0
              rounded-md
              font-x-medium
              inline-flex
              p-2
            "
          >
            <a
              href="#"
              @click.prevent="changePage('SignIn', 'User')"
              class="inline-flex space-x-1 flex-nowrap"
            >
              <span class="inline-block whitespace-nowrap" v-if="!signedIn()">
                Sign in
              </span>
              <span v-else>{{ userName }}</span>

              <span class="inline-block p-0.5">
                <svg
                  id="SVGRoot"
                  version="1.1"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  stroke="#fff"
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
              </span>
            </a>
          </div>
          <div
            class="
              text-gray-100
              capitalize
              hover:bg-blue-500
              border-0
              rounded-md
              font-x-medium
              inline-flex
              py-2
              px-2
            "
            :class="notSignedIn_cart()"
          >
            <a
              href="#"
              @click="changePage('Cart')"
              class="
                outline-none
                flex flex-shrink-0
                space-x-2
                md:space-x-0
                w-full
              "
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                height="24px"
                width="24px"
                viewBox="0 0 122.9 107.5"
                fill="#fafafa"
                xml:space="preserve"
                class="inline-block md:hidden"
              >
                <path
                  d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"
                />
              </svg>
              <span class="hidden md:inline-block">Cart</span></a
            >
          </div>
        </div>
        <button
          class="
            outline-none
            border-2 border-blue-300
            rounded
            hover:border-blue-200
            p-1.5
            mr-2
            text-white
            md:hidden
          "
          @click="_toggleMenu()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="SVGRoot"
            version="1.1"
            viewBox="0 0 24 24"
            stroke="#fdfdfd"
            width="16px"
            height="16px"
          >
            <g>
              <path
                id="path832"
                d="M 2,6 H 22 V 6 6"
                style="
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-opacity: 1;
                "
              />
              <path
                id="path832-3"
                d="m 2,12 h 20 v 0 0"
                style="
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-opacity: 1;
                "
              />
              <path
                id="path832-6"
                d="m 2,18 h 20 v 0 0"
                style="
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-opacity: 1;
                "
              />
            </g>
          </svg>
        </button>
      </main>
      <div class="w-full flex md:w-p-40 border-t md:border-0">
        <div
          :class="'w-full h-full ' + getMenuClass()"
          class="md:inline-block bg-blue-600 relative"
        >
          <ul
            class="w-full h-full flex flex-col md:flex-row  py-1 md:p-0 m-0 justify-center"
            v-click-outside="closeMenu"
          >
            <li
              @click.prevent="closeMenu"
              v-if="signedIn()"
              class="
                text-gray-100
                flex items-center
                capitalize
                font-x-medium
                hover:bg-blue-500
                p-2
                border-0
                rounded-md
              "
            >
              <a
                href="#"
                @click="
                  signOut();
                  changePage('Shop');
                "
                class="
                  outline-none
                  flex flex-shrink-0
                  w-full
                "
              >
                <svg
                  class="w-6 h-6 md:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path></svg
                ><span class="inline-block whitespace-nowrap">Sign out</span>
              </a>
            </li>
            <li
              class="
                p-1
                hover:bg-blue-500
                rounded-md
                border-0
                flex flex-shrink-0
                space-x-4
                md:hidden
                relative
                justify-center
              "
            >
              <a
                href=""
                class="
                  outline-none
                  flex flex-shrink-0
                  space-x-4
                  md:space-x-1
                  w-p-95
                  text-white
                  font-x-medium
                "
                >Help</a
              >
            </li>
            <li
              class="
                p-1
                hover:bg-blue-500
                rounded-md
                border-0
                flex flex-shrink-0
                space-x-4
                md:hidden
                relative
                justify-center
              "
            >
              <a
                href=""
                class="
                  outline-none
                  flex flex-shrink-0
                  space-x-4
                  md:space-x-1
                  w-p-95
                  text-white
                  font-x-medium
                "
                >FAQ</a
              >
            </li>
            <li
              class="
                p-1
                hover:bg-blue-500
                rounded-md
                border-0
                flex flex-shrink-0
                space-x-4
                md:hidden
                relative
                justify-center
              "
            >
              <a
                href=""
                class="
                  outline-none
                  flex flex-shrink-0
                  space-x-4
                  md:space-x-1
                  w-p-95
                  text-white
                  font-x-medium
                "
                >Contact us</a
              >
            </li>
            <li
              class="border-b-2 border-gray-600 my-0.5 md:hidden w-p-95 mx-auto"
            ></li>
            <li
              class="
                p-1
                rounded-md
                border-0
                flex items-center
                relative
              "
              :class="searchClass()"

            >
              <div class="relative mx-2.5 w-p-95">
                <input
                  type="text"
                  class="
                    bg-transparent
                    p-0.5
                    border-b-2 border-blue-300
                    outline-none
                    placeholder-gray-50 placeholder-medium
                    font-medium
                    w-full
                    text-gray-100
                    focus:border-gray-200
                  "
                  placeholder="Search in shop"
                />
                <div
                  class="
                    absolute
                    inset-y-0
                    bottom-0
                    right-0
                    inline-flex
                    px-2
                    items-center
                  "
                >
                  <svg
                    class="inline-block"
                    fill="none"
                    stroke="#fff"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <keep-alive>
      <component :is="Page" class="py-0.5" :data="data"></component>
    </keep-alive>
  </div>
</template>

<script>
import Shop from "./components/Shop.vue";
import Cart from "./components/Cart.vue";
import SignIn from "./components/SignIn";
import User from "./components/User";
import Modal from "./components/modal.vue";
import Product from "./components/Product.vue";

export default {
  name: "App",
  data: function () {
    return {
      Page: "Shop",
      cart: [],
      userType: "",
      userName: "",
      userEmail: "",
      userPass: "",
      signedIn() {
        if (
          this.userType != "" &&
          this.userEmail != "" &&
          this.userPass != "" &&
          this.userType != ""
        ) {
          return true;
        }
        return false;
      },
      notify: false,
      toggleMenu: false,
      togglePage: "",
      openModal: false,
      data: "",
      notSignedIn_cart() {
        if (!this.signedIn()) return " hidden";
        else return "";
      },
      searchClass(){
        if(!this.signedIn()){
          return "w-full"
        }return "w-full md:w-p-70"
      },
    };
  },
  methods: {
    _toggleMenu() {
      if (!this.toggleMenu)
        setTimeout(() => {
          this.toggleMenu = !this.toggleMenu;
        }, 100);
    },
    hideNotification() {
      this.notify = false;
    },
    alert() {
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 10000);
    },
    changePage(name, other) {
      this.togglePage = name;

      if (!this.signedIn() && name == "Cart") {
        this.openModal = true;
        return;
      }
      if (!this.signedIn() && name == "User") return;
      this.Page = name;

      if (name == "SignIn" && other) {
        if (this.signedIn()) {
          this.Page = other;
        }
      }

      this.notify = false;
    },

    signOut() {
      this.userType = "";
      this.userName = "";
      this.userEmail = "";
      this.userPass = "";
      this.Page = "Shop";
    },
    getMenuClass() {
      if (!this.toggleMenu) {
        return "hidden";
      } else return "";
    },
    closeMenu() {
      if (this.toggleMenu) this.toggleMenu = false;
    },
    clearCart() {
      this.cart = [];
    },
    toProduct(prod) {
      this.changePage("Product");
      this.data = prod;
    },
  },
  components: {
    Shop,
    Cart,
    SignIn,
    User,
    Modal,
    Product,
  },
};
</script>
<style scoped>
</style>