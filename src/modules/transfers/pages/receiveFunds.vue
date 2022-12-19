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
            :class="{ active : active_el == 1 }"
            style="gap:10px"
            @click="viewOptions(1)"
          >
            <span> <i-icon
              icon="fluent:building-bank-48-regular"
              style="font-size:18px"
            /> </span>
            <span>From Local Bank</span>
          </button>
  
          <button
            class="d-flex align-items-center justify-content-center"
            :class="{ active : active_el == 2 }"
            style="gap:10px"
            @click="viewOptions(2)"
          >
            <span> <i-icon
              icon="lucide:users"
              style="font-size:18px"
            /> </span>
            <span>Peer To Peer</span>
          </button>

          <button
            class="d-flex align-items-center justify-content-center"
            :class="{ active : active_el == 3 }"
            style="gap:10px"
            @click="viewOptions(3)"
          >
            <span> <i-icon
              icon="carbon:document"
              style="font-size:18px"
            /> </span>
            <span>Paper Check Remit</span>
          </button>
        </div>
      </div>
  
      <div class="send--options_view">
        <div
          class="close"
          role="button"
          @click="closeOptionsView"
        >
          <i-icon icon="codicon:chrome-close" />
        </div>
        <div class="collapsible--content2">
          <FromBank v-if="active_el == 1" />
          <P2pReceive v-if="active_el == 2" />
          <PaperRemit v-if="active_el == 3" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import FromBank from '../components/modals/fromBank.vue';
import P2pReceive from '../components/modals/p2pReceive.vue';
import PaperRemit from '../components/modals/paperRemit.vue';
  
  export default {
    components: { FromBank, P2pReceive, PaperRemit },
    data() {
        return {
            active_el: 0
        };
    },
    beforeMount(){
      console.log(this.$route);
    },
    methods: {
        viewOptions(el) {
            this.active_el = el;
            let sideBar = document.querySelector(".send--options_view");
            let mainArea = document.querySelector(".send--options");
            sideBar.classList.add("collapsed");
            mainArea.classList.add("collapsed");
        },
        closeOptionsView(){
            this.active_el = 0
            let sideBar = document.querySelector(".send--options_view");
            let mainArea = document.querySelector(".send--options");
            sideBar.classList.remove("collapsed");
            mainArea.classList.remove("collapsed");
        }
    }
};
  </script>