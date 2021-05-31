<template>
  <div id="app">
    <div class="navbar">
      <div class="brand"> <a href="#" class="no-link" @click="changePage('Shop')"> Amway </a> </div>
      <div class="search-bar"><input type="text" placeholder="Search bar"></div>
      <div class="navs">
        <ul class="nav-list">
          <li v-if="signedIn && userName != ''" class="capitalize" @click.prevent="changePage('User')"><a href="#" >{{userName}}</a></li>
          <li v-if="!signedIn" ><a href="#" @click="changePage('SignIn')">Sign in </a></li>
          <li v-if="signedIn"><a href="#" @click="signOut(); changePage('Shop')" >Sign out </a></li>
          <li><a href="#" @click="changePage('Cart')"> Cart </a></li>
        </ul>
      </div>
    </div>
    <div v-if="notify" class="notify">
      <a class="no-link undl" @click="changePage('SignIn');hideNotification()" href="#">Sign in  to access cart </a>
    </div>
    <keep-alive>
      <component :is="Page" ></component>
    </keep-alive>
  </div>
</template>

<script>

import Shop from './components/Shop.vue'
import Cart from './components/Cart.vue'
import SignIn from './components/SignIn'
import User from './components/User'

export default {
  name: 'App',
  data: function(){
    return {
      Page : "Shop",
      cart : [],
      userType: "",
      userName: "",
      userEmail:"",
      userPass: "",
      signedIn: false,
      notify: false
    }
  },
  methods: {
    hideNotification(){
      this.notify = false
    },
    alert(){
      this.notify = true
      setTimeout(()=>{this.notify = false;}, 10000)
    },
    changePage(name){
      if(!this.signedIn && (name == "Cart")) return
      if(!this.signedIn && (name == "User")) return
      this.Page = name;
      this.notify = false

    },
    signOut(){
      this.userType = ""
      this.userName = ""
      this.userEmail = ""
      this.userPass = ""
      this.signedIn = false
      this.Page = "Shop"
    }
  },
  components: {
    Shop, Cart, SignIn, User
  }
}
</script>
<style scoped>
.notify{
  background-color: rgb(219, 65, 65);
  display: flex;
  position: relative;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-shadow: 1px 0 1px rgb(207, 207, 207);
  margin: 0 10px 10px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  animation: hide 10s 1 linear;
}
@keyframes hide {
  0%{opacity: 1;}
  90%{opacity: 1;}
  100%{opacity: 0;}
}
.notify:hover{
  box-shadow: 0 0 0 1px rgb(207, 207, 207);
}
</style>