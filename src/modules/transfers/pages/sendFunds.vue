<template>
  <div>
    <div class="send--funds">
      <div class="container--fluid">
        <div
          class="send--options d-flex"
          style="gap: 20px"
        >
          <button
            class="d-flex align-items-center justify-content-center"
            :class="{ active: active_el == 1 }"
            style="gap: 10px"
            @click="viewOptions(1)"
          >
            <span>
              <i-icon
                icon="fluent:building-bank-48-regular"
                style="font-size: 18px"
              />
            </span>
            <span>To Local/Foreign Banks</span>
          </button>

          <button
            class="d-flex align-items-center justify-content-center"
            :class="{ active: active_el == 2 }"
            style="gap: 10px"
            @click="viewOptions(2)"
          >
            <span>
              <i-icon
                icon="lucide:users"
                style="font-size: 18px"
              />
            </span>
            <span>Peer To Peer</span>
          </button>
        </div>
      </div>

      <div class="send--options_view container--fluid">
        <div
          class="close"
          role="button"
          @click="closeOptionsView"
        >
          <i-icon icon="codicon:chrome-close" />
        </div>
        <div class="collapsible--content2">
          <ToBank v-if="active_el == 1" />
          <PeerToPeer v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToBank from "../components/modals/toBank.vue";
import PeerToPeer from "../components/modals/peerToPeer.vue";
export default {
  components: { ToBank, PeerToPeer },
  data() {
    return {
      active_el: 0,
    };
  },
  methods: {
    viewOptions(el) {
      this.active_el = el;
      let sideBar = document.querySelector(".send--options_view");
      let mainArea = document.querySelector(".send--options");
      sideBar.classList.add("collapsed");
      mainArea.classList.add("collapsed");
    },
    closeOptionsView() {
      this.active_el = 0;
      let sideBar = document.querySelector(".send--options_view");
      let mainArea = document.querySelector(".send--options");
      sideBar.classList.remove("collapsed");
      mainArea.classList.remove("collapsed");
    },
  },
};
</script>