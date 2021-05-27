<template>
  <div class="sign-in hidden">
    <div class="container">
      <h2>Sign in</h2>
      <form class="form">
        <div class="form-group">
          <label for="name"> Name</label>
          <input
            type="text"
            id="name"
            v-model="userName"
            placeholder="Joe"
            aria-required="true"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model="userEmail"
            placeholder="joe64@gmail.com"
            aria-required="true"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="userPass"
            placeholder="Password"
            aria-required="true"
            required
          />
        </div>
        <div class="form-group">
          <label for="usrType">User Type </label>
          <div class="joined">
            <select id="usrType" class="select-btn" v-model="userType">
              <option value="normal">Normal</option>
              <option value="associate">Associate</option>
              <option value="diamond">Diamond</option>
            </select>
          </div>
        </div>
        <div class="form-group last">
          <button type="submit" class="btn" @click="signedIn()">Sign in</button>
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
      this.$parent.signedIn = true;
      this.$parent.userName = this.userName;
      this.$parent.userEmail = this.userEmail;
      this.$parent.userPass = this.userPass;
      this.$parent.userType = this.userType
      this.$parent.Page = "Shop";
    },
  },
};
</script>

<style scoped>
.sign-in {
  background-color: #fff;
  position: relative;
  width: 60%;
  margin-left: 20%;
  border: 1px solid transparent;
  border-radius: 7px;
  padding: 10px;
  height: 70%;
  margin-bottom: 5vh;
  margin-top: 5vh;
  box-shadow: 5px 5px 10px 0 rgba(29, 29, 29, 0.8),
    -5px -5px 20px 0 rgba(29, 29, 29, 0.8);
}
.container{
  display: flex;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sign-in h2 {
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  width: 60%;
  height: 40px;
}
.select-btn {
  height: 35px;
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  width: 95%;
}
.form{
  height: 90%;
}
.joined {
  border: 1px solid rgb(31, 98, 223);
  height: 35px;
  overflow: hidden;
  border-radius: 5px;
  padding-left: 5px;
}
input:hover,
.joined:hover {
  transform: scale(1.001);
  box-shadow: 1px 1px 1px 0 rgba(18, 79, 194, 0.8),
    -1px -1px 1px 0 rgba(18, 79, 194, 0.8);
  transition: all 0.5s linear;
}
@media screen and (max-width: 720px) {
  .sign-in {
    width: 90%;
    margin-left: 5%;
  }
  .form {
    position: relative;
    width: 90%;
    display: block;
    height: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .form h2 {
    font-size: 20px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 10px;
  }
  .form-group label {
    font-weight: 600;
    font-size: 17px;
  }
}
</style>