<template>
  <div>
    <div class="user-login-container">
      <div class="user--login">
        <div class="login--box">
          <div class="mb-4 text-center">
               <div class="text-center mb-4">
            <img src="@/assets/img/icon.svg" width="50" alt="">
        </div>
            <h2 class=" ">Admin Login</h2>
            <small>Enter details to login</small>
          </div>
          <div>
            <label class="" for="">Email</label>
            <input type="email form-control" />
          </div>
          <div>
            <label class="" for="">Password</label>
            <input type="password form-control" />
          </div>
          <div><button class="buy--btn" @click="login">Login</button></div>
           <!-- <div class="text-center mt-4">
            <span class=""> Please <router-link to="/register" class="text-info font-weight-bold">Register</router-link> if you do not have an account </span>
          </div>  
          <div class="text-center">
            <span class=""> Go back to <router-link to="/" class="text-info font-weight-bold">Homepage</router-link> </span>
          </div>   -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    methods: {
        login(){
            this.$router.push('/dashboard')
        },
    }
}
</script>
