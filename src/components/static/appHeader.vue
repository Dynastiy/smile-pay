<template>
  <div>
    <div class="app--header">
      <div></div>
      <div class="d-flex align-items-end justify-content-between" id="myDIV">
        <div>
        <h5 class="font-weight-bold">Your Smile Wallets</h5>
        <p>Where everything you've got is</p>
      </div>
      <div>
        <div class="options d-flex align-items-center" style="gap:20px">
          <div class="d-flex align-items-center nav--item active" style="gap:3px" role="button" @click="goToTransfer">
            <span class="active--icon">
              <img src="@/assets/img/icons/transfer-active.svg" alt="" srcset="">
            </span>
            <span class="inactive--icon">
              <img src="@/assets/img/icons/transfer.svg" alt="" srcset="">
            </span>
            <span class="">
              Transfer
            </span>
          </div>
          <div  style="height:20px; width:1px; background-color:#A7B3CA">
          </div>
          <div class="nav--item d-flex align-items-center" style="gap:3px">
            <span class="active--icon">
            </span>
            <span class="inactive--icon">
              <img src="@/assets/img/icons/exchange.svg" alt="" srcset="">
            </span>
            <span class="">
              Exchange
            </span>
          </div>
        </div>
      </div>
      </div>
      <div></div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      active: false
    }
  },
  methods:{
    goToTransfer(){
      this.$router.push('/transfer');
      this.active = true
    }
  },
  mounted() {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav--item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
}
</script>