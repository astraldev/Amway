<template>
  <div class="user-page">
    <div class="card-container">
      <div class="card-head flex">
        <div class="image-container">
          <img src="" :alt="userName" />
        </div>
        <h2 class="usr-name">{{ userName }}</h2>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="userName"
              @keypress.enter.prevent="usrNameChanged_cb()"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              :disabled="disableEmail"
              v-model="email"
              placeholder="Input email"
            />
          </div>
          <div class="form-group" v-if="!disablePass">
            <label for="prev-pass">Previous Password</label>
            <input
              type="password"
              id="prev-pass"
              placeholder="Previous password"
              v-model="prevPass"
              autocomplete="off"
              :class="prevClass"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              :disabled="disablePass"
              v-model="userPass"
              placeholder="New password"
            />
          </div>
          <div class="form-group" v-if="!disablePass">
            <label for="c-password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id="c-password"
              :disabled="disableCPass"
              v-model="cUserPass"
              :class="correctPass"
              placeholder="Confirm password"
            />
          </div>
          <div class="form-group">
            <label for="usrtype">User Type</label>
            <select id="usrtype" class="select-btn" v-model="userType">
              <option value="normal">Normal</option>
              <option value="associate">Associate</option>
              <option value="diamond">Diamond</option>
            </select>
          </div>
          <div class="form-group last last-2">
            <button
              class="btn "
              @click="changeValues()"
              v-text="changeText"
              type="button"
            ></button>
            <button class="btn" v-if="changeText == 'Confirm'" @click="cancelAll()">Cancel</button>
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
.flex {
  display: flex;
}
.middle {
  align-items: center;
}
.center {
  justify-content: center;
}
.card-container {
  background-color: #fff;
  padding: 5px;
  margin: 5px;
  border-radius: 7px;
  position: relative;
  height: 100%;
}
.card-head {
  position: relative;
  height: 110px;
  margin-left: 15px;
  padding: 5px;
}
.card-body form {
  margin: 0;
  margin-left: 15px;
}
.image-container {
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  border: 2px solid rgb(88, 88, 88);
  position: relative;
  overflow: hidden;
}
.image-container img {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-body {
  height: 50%;
  padding: 5px;
}

.select-btn {
  height: 35px;
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  width: 100%;
  border: 1px solid rgb(31, 98, 223);
  height: 35px;
  border-radius: 5px;
}
input:disabled {
  background: initial;
  color: rgb(100, 100, 100);
}

.wrong {
  border-color: rgb(218, 53, 53);
}
.correct {
  border-color: rgb(91, 218, 53);
}
.default {
  border-color: rgb(31, 98, 223);
}

.usr-name {
  height: 100%;
  width: 60%;
  display: flex;
  padding-left: 10px;
  align-items: center;
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
p {
  color: rgb(221, 43, 43);
}
</style>