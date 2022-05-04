<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

</style>


<script type="text/javascript">
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ) {
          // document.location = "mobile.html";
          this.$router.push('/mobile')
        }
    </script>