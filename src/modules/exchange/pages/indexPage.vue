<template>
  <div>
    <div class="app--exchange">
      <section class="exchange--money">
        <div class="container--fluid dashboard--content">
          <div class="amount--to_exchange">
            <label for="">Amount to Exchange</label>
            <div class="d-flex justify-content-between">
              <input type="number" />
              <el-dropdown class="text-right" style="width: 20%">
                <span class="el-dropdown-link">
                  <country-flag
                    :country="payload.currency"
                    size="small"
                    :rounded="true"
                  /><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in currencies" :key="item.id">
                    <span @click="selectCurrency(item.country)">
                      <country-flag :country="item.country" size="small" />
                      {{ item.currency }}
                    </span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>

          <div class="amount--to_exchange mt-4">
            <label for="">Exchange Rate</label>
            <div class="d-flex">
              <input type="number" />
            </div>
          </div>

          <div class="amount--to_exchange mt-4">
            <label for="">Equivalent Value</label>
            <div class="d-flex">
              <input type="number" />
              <el-dropdown class="text-right" style="width: 20%">
                <span class="el-dropdown-link">
                  <country-flag
                    :country="payload.currency_to_receive"
                    size="small"
                    :rounded="true"
                  /><i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in currencies" :key="item.id">
                    <span @click="selectCurrency2(item.country)">
                      <country-flag :country="item.country" size="small" />
                      {{ item.currency }}
                    </span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>

          <!-- <div class="my-3">
            <span style="font-size: 10px; color: var(--text-inactive)">
              *Exchange rate $1 = £0.84
            </span>

            <span style="font-size: 10px; color: var(--text-inactive)">
              *Transaction fee = $0.3
            </span>
          </div> -->

          <!-- <div class="smile--form my-3">
            <select id="" name="">
              <option value="" selected disabled>Source of Fund</option>
            </select>
          </div> -->

          <div class="smile--form my-4">
            <select id="" name="">
              <option value="" selected disabled>Recipient</option>
            </select>
          </div>

          <div>
            <button class="primary--btn">Exchange</button>
          </div>
        </div>
      </section>

      <aside class="exchange--rates">
        <ExchangeRates />
      </aside>
    </div>
  </div>
</template>

<script>
import ExchangeRates from "../modals/exchangeRates.vue";
import { mapActions } from "vuex";
import currencies from "@/js/currencies.js";
export default {
  components: { ExchangeRates },
  data() {
    return {
      currencies,
      payload: {
        currency: "",
        currency_to_receive: "",
        recipient: "",
        rate: "",
        note: "",
        status: "",
        role: "user",
      },
    };
  },
  methods: {
    ...mapActions("exchange", ["listUsers"]),
    selectCurrency(val) {
      this.payload.currency = val;
    },
    selectCurrency2(val) {
      this.payload.currency_to_receive = val;
    },
  },
  beforeMount() {
    this.listUsers();
  },
};
</script>
