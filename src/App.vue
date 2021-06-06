<template>
  <div id="app">
    <div class="bg-blue-600 border-b flex items-center justify-between p-1.5">
      <main class="flex items-center space-x-3">
        <a href="#" class="w-full h-full" @click="changePage('Shop')">
          <div class="flex item-center space-x-2">
            <img src="" alt="" class="w-12 rounded object-cover" />
            <h2 class="font-bold text-lg lg:text-xl text-gray-100">Amway</h2>
          </div>
        </a>
      </main>
      <section class="mr-2">
        <div class="flex items-center space-x-3">
          <ul class="flex items-center space-x-3">
            <li
              v-if="signedIn && userName != ''"
              @click.prevent="changePage('User')"
              class="text-gray-100 capitalize font-x-medium"
            >
              <a href="#">{{ userName }}</a>
            </li>
            <li v-if="signedIn" class="text-gray-100 capitalize font-x-medium">
              <a
                href="#"
                @click="
                  signOut();
                  changePage('Shop');
                "
              >
                <svg
                  class="w-6 h-6"
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
                ><span class="hidden md:inline-block">Sign out</span>
              </a>
            </li>
            <li>
              <input
            type="text"
            class="
              bg-transparent
              p-0.5
              border-b-2 border-blue-500
              outline-none
              placeholder-gray-200
              font-medium
              w-48
              hidden
              md:inline-block
              lg:w-72
              text-gray-100
              focus:border-gray-200
            "
            placeholder="Search"
          />
          <span>
            <svg
              class="inline-block md:hidden"
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
          </span>

            </li>
            <li v-if="!signedIn" class="text-gray-100 capitalize font-x-medium">
              <a href="#" @click="changePage('SignIn')" class="outline-none">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6 md:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span class="hidden md:inline-block"> Sign in</span>
              </a>
            </li>
            <li class="text-gray-100 capitalize font-x-medium">
              <a href="#" @click="changePage('Cart')" class="outline-none">
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
                <span class="hidden md:inline-block">&nbsp;Cart</span></a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
    <keep-alive>
      <component :is="Page" class="pt-1"></component>
    </keep-alive>
  </div>
</template>

<script>
import Shop from "./components/Shop.vue";
import Cart from "./components/Cart.vue";
import SignIn from "./components/SignIn";
import User from "./components/User";

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
      signedIn: false,
      notify: false,
    };
  },
  methods: {
    hideNotification() {
      this.notify = false;
    },
    alert() {
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 10000);
    },
    changePage(name) {
      if (!this.signedIn && name == "Cart") return;
      if (!this.signedIn && name == "User") return;
      this.Page = name;
      this.notify = false;
    },
    signOut() {
      this.userType = "";
      this.userName = "";
      this.userEmail = "";
      this.userPass = "";
      this.signedIn = false;
      this.Page = "Shop";
    },
  },
  components: {
    Shop,
    Cart,
    SignIn,
    User,
  },
};
</script>
<style scoped>
</style>