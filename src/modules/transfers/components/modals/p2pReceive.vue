<template>
  <div>
    <div class="text-center p2p--receive">
      <div class="container--fluid">
        <div>
          <div class="">:)</div>
        </div>

        <!-- <div>
          {{ user }}
        </div> -->

        <div class="my-3">
          <h6 style="font-size: 11px">Your Smile tag</h6>
        </div>
        <div class="smile--tag">
          <input v-model="user.username" type="text" />
          <div
            v-clipboard:copy="user.username"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            role="button"
          >
            <i-icon
              :icon="copied ? 'ion-copy' : 'tabler:copy'"
              style="color: var(--secondary-color)"
              :style="copied ? 'font-size:18px' : 'font-size:22px'"
            />
            <!-- // <i-icon icon="ion:copy"  style="color:var(--secondary-color); font-size:22px;"/> -->
          </div>
        </div>

        <h6 class="w-75 mx-auto mt-3" style="font-size: 11px; font-weight: 400">
          Copy your smile tag and share with friends to recieve funds from them
        </h6>
      </div>
    </div>
  </div>
</template>

<script src="vue-clipboard2-master/dist/vue-clipboard.min.js"></script>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      copied: false,
      // smile_tag: "@Obyrann"
    };
  },
  methods: {
    // copySmileTag(){
    //   console.log(window.navigator);
    // },
    onCopy: function (value) {
      console.log(value);
      this.copied = true;
      // value.trigger.textContent = 'copied'
    },
    onError: function (e) {
      alert("Failed to copy texts");
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>