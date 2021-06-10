<template>
  <div class="w-full">
    <div class="mx-auto rounded p-5 w-p-95 md:w-p-70 lg:w-p-60 max-h-screen border-2 border-blue-600 shadow">
      <div class="flex flex-row items-center space-x-3 h-43 mb-2">
        <div class="border-2 border-blue-500 h-20 w-32 rounded-md">
          <img src="" :alt="userName" class="w-full h-full p-0.5" />
        </div>
        <h2 class="font-bold text-2xl">{{ userName }}</h2>
      </div>
      <div>
        <form class="flex justify-center flex-col mx-auto">
          <div class="flex p-2 flex-col w-full md:justify-between justify-center md:flex-row">
            <label for="name" class="font-arial text-base font-x-medium text-gray-700 md:w-p-30">Name</label>
            <input
              type="text"
              id="name"
              class="rounded h-9 border-2 border-blue-600 p-1 bg-gray-50 md:w-p-70"
              v-model="userName"
              @keypress.enter.prevent="usrNameChanged_cb()"
            />
          </div>
          <div class="flex p-2 flex-col w-full md:justify-between justify-center md:flex-row">
            <label for="email" class="font-arial text-base font-x-medium text-gray-700 md:w-p-30">Email</label>
            <input
              type="text"
              id="email"
              :disabled="disableEmail"
              v-model="email"
              class="rounded h-9 border-2 border-blue-600 p-1 md:w-p-70 bg-gray-50"
              placeholder="Input email"
            />
          </div>
          <div class="flex p-2 flex-col w-full md:justify-between justify-center md:flex-row" v-if="!disablePass">
            <label for="prev-pass" class="font-arial text-base font-x-medium text-gray-700 md:w-p-30">Previous Password</label>
            <input
              type="password"
              id="prev-pass"
              placeholder="Previous password"
              v-model="prevPass"
              autocomplete="off"
              :class="prevClass"
              class="rounded h-9 border-2 border-blue-600 md:w-p-70 p-1 bg-gray-50"
            />
          </div>
          <div class="flex p-2 flex-col w-full md:justify-between justify-center md:flex-row">
            <label for="password" class="font-arial text-base font-x-medium text-gray-700 md:w-p-30">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              :disabled="disablePass"
              v-model="userPass"
              placeholder="New password"
              class="rounded h-9 border-2 border-blue-600 md:w-p-70 p-1 bg-gray-50"
            />
          </div>
          <div v-if="!disablePass" class="flex p-2 flex-col w-full md:justify-between sm:justify-center md:flex-row">
            <label for="c-password" class="font-arial text-base font-x-medium text-gray-700 md:w-p-30">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="c-password"
              :disabled="disableCPass"
              v-model="cUserPass"
              :class="correctPass"
              class="rounded h-9 border-2 border-blue-600 p-1 md:w-p-70 bg-gray-50"
              placeholder="Confirm password"
            />
          </div>
          <div class="flex flex-col p-2 w-full justify-center md:flex-row md:justify-between">
          <label
            for="usrType"
            class="font-arial text-base font-x-medium text-gray-700 md:w-p-30"
            >User Type
          </label>
          <div
            class=" relative border-2 border-blue-600 md:w-p-70 rounded bg-gray-50"
          >
            <select
              id="usrType"
              class="appearance-none w-full bg-gray-50 h-8"
              v-model="userType"
            >
              <option value="normal">Normal</option>
              <option value="associate">Associate</option>
              <option value="diamond">Diamond</option>
            </select>
            <div
              class="
                absolute
                inset-y-0
                inline-flex
                items-center
                right-0
                px-2
                pointer-events-none
              "
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        
          <div class="flex p-2 flex-col items-center space-y-1">
            <button
              class="btn btn-blue text-white block w-p-60"
              @click="changeValues()"
              v-text="changeText"
              type="button"
            ></button>
            <button class="btn block w-p-60 bg-gray-200" v-if="changeText == 'Confirm'" @click="cancelAll()">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userType: this.$parent.userType,
      userPass: this.$parent.userPass,
      email: this.$parent.userEmail,
      userName: this.$parent.userName,
      cUserPass: "",
      disablePass: true,
      disableEmail: true,
      disableCPass: true,
      correctPass: "default",
      changeText: "Change Values",
      prevClass: "default",
      prevPass: "",
    };
  },

  watch: {
    cUserPass() {
      if (this.userPass == this.cUserPass) {
        this.$parent.userPass = this.userPass;
        this.correctPass = "correct";
      } else {
        this.correctPass = "wrong";
      }
    },
    prevPass(){
      if(this.prevPass == this.$parent.userPass){
        this.prevClass = "correct"
      }else{
        this.prevClass = "wrong"
      }
    }
  },

  methods: {
    usrNameChanged_cb() {
      this.$parent.userName = this.userName.split(" ")[0].replace(",", "");
    },
    changeValues() {
      if (this.changeText == "Change Values") {
        this.disablePass = false;
        this.disableEmail = false;
        this.disableCPass = false;
        this.changeText = "Confirm";
        this.userPass = ""
      } else if (this.changeText == "Confirm") {
        if (this.validate) {
          this.changeText = "Change Values";
          this.$parent.userType = this.userType;
          this.$parent.userPass = this.userPass;
          this.$parent.userEmail = this.email;
          this.$parent.userName = this.userName;
          this.disablePass = true;
          this.disableEmail = true;
          this.disableCPass = true;
        } else {
          this.correctPass = "wrong";
        }
      }
    },
    validate() {
      if (this.userPass == this.cUserPass && this.validateEmail()) return true;
      return false;
    },
    validateEmail() {
      //Under construction
      if (this.email != "" || this.email == " ") return true;
      return false;
    },
  },
};
</script>
<style scoped>
</style>