<template>
  <div class="w-full py-5 my-5 relative block">
    <div
      class="
        mx-auto
        px-2
        w-p-95
        md:w-p-70
        lg:w-p-50
        rounded
        shadow
        border-2
        h-98
        border-blue-700
      "
    >
      <h2 class="font-semibold text-5xl text-center py-2 text-gray-700">
        Sign in
      </h2>
      <form class="flex justify-center flex-col mx-auto">
        <div class="flex p-2 flex-col sm:justify-center md:flex-row">
          <label
            for="name"
            class="font-arial text-base font-x-medium text-gray-700 md:w-p-20"
          >
            Name</label
          >
          <div
            class="
              relative
              w-full
              md:w-p-95
              h-9
              border-2 border-blue-600
              rounded
              shadow-sm
            "
          >
            <input
              type="text"
              id="name"
              v-model="userName"
              placeholder="Joe"
              aria-required="true"
              required
              class="w-full p-1 bg-gray-50 h-full"
            />
            <div
              class="
                absolute
                right-0
                inset-y-0
                inline-flex
                items-center
                px-2
                pointer-events-none
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex p-2 flex-col sm:justify-center md:flex-row">
          <label
            for="email"
            class="font-arial text-base font-x-medium text-gray-700 md:w-p-20"
            >Email</label
          >
          <div
            class="
              w-full
              md:w-p-95
              border-2 border-blue-600
              shadow-sm
              rounded
              h-9
              overflow-hidden
              relative
            "
          >
            <input
              type="text"
              id="email"
              v-model="userEmail"
              placeholder="joe64@gmail.com"
              aria-required="true"
              required
              class="w-full p-1 h-full"
            />
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-2 sm:justify-center md:flex-row">
          <label
            for="password"
            class="font-arial text-base font-x-medium text-gray-700 md:w-p-20"
            >Password</label
          >
          <div
            class="
              w-full
              md:w-p-95
              border-2 border-blue-600
              rounded
              h-9
              relative
              shadow-sm
            "
          >
            <input
              type="password"
              id="password"
              v-model="userPass"
              placeholder="Password"
              aria-required="true"
              class="p-1 h-full w-full bg-gray-50"
              required
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                inline-flex
                items-center
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-2 sm:justify-center md:flex-row">
          <label
            for="usrType"
            class="font-arial text-base font-x-medium text-gray-700 md:w-p-20"
            >User Type
          </label>
          <div
            class="
              w-full
              md:w-p-95
              relative
              border-2 border-blue-600
              rounded
              bg-gray-50
            "
          >
            <select
              id="usrType"
              class="appearance-none w-full bg-gray-50 h-8"
              v-model="userType"
            >
              <option value="normal" selected>Normal</option>
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
        <div class="p-2 flex flex-row">
          <div class="w-0 md:w-p-18 inline-block"></div>
          <button
            type="submit"
            class="btn btn-blue text-white shadow-sm w-full md:w-p-85 mx-auto"
            @click="signedIn()"
          >
            Sign in
          </button>
        </div>
        <div class="p-2 grid place-items-center">
          <div>
            <span class="antialiased text-base font-semibold text-gray-600"
              >Not a member
              <a href="#" class="text-blue-400 hover:text-blue-500"
                >Register</a
              ></span
            >
          <div class="p-2 ">
            <ul class="m-0 flex flex-row">
              <li class="flex items-center justify-center border border-blue-300"><a href="#"><i></i></a></li>
              <li class="flex items-center justify-center border border-blue-300"><a href="#"><i></i></a></li>
            </ul>
          </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  template: "SignIn",
  data() {
    return {
      userName: "",
      userEmail: "",
      userPass: "",
      userType: "",
    };
  },
  methods: {
    signedIn() {
      console.log(this.userName, this.userEmail, this.userPass, this.userType);

      if (
        this.userType == "" ||
        this.userEmail == "" ||
        this.userPass == "" ||
        this.userType == ""
      ) {
        return;
      }
      this.$parent.userName = this.userName;
      this.$parent.userEmail = this.userEmail;
      this.$parent.userPass = this.userPass;
      this.$parent.userType = this.userType;
      this.$parent.Page = "Shop";
    },
  },
};
</script>

<style scoped>
</style>