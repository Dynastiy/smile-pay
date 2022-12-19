<template>
  <div>
    <div
      class="container--fluid d-flex justify-content-between align-items-center"
    >
      <h5 class="font-weight-bold" style="font-size: 16px">
        Wallet Information
      </h5>
      <div
        class="d-flex align-items-center"
        style="gap: 5px; color: var(--secondary-color); font-size: 12px"
      >
        <span> <i-icon icon="ci:plus-circle"></i-icon> </span>
        <span>Add New Account</span>
      </div>
    </div>

    <div
      style="border-bottom: 1px dashed var(--accent)"
      class="container--fluid pt-1"
    >
      <div class="d-flex justify-content-between">
        <div class="wallet--headings">
          <h6>Total Available Balance</h6>
          <h6>Wallet Type</h6>
          <h6>Currency</h6>
        </div>
        <div class="wallet--information text-right">
          <h6>$13,878</h6>
          <h6>Dollar Wallet</h6>
          <h6>United States Dollars (USD)</h6>
        </div>
      </div>
    </div>

    <div
      style="border-bottom: 1px dashed var(--accent)"
      class="container--fluid"
    >
      <div class="d-flex justify-content-between">
        <div class="wallet--headings">
          <h6>Bank Name 1</h6>
          <h6>Account No.</h6>
          <h6>Available Balance</h6>
        </div>
        <div class="wallet--information text-right">
          <h6>Citi Bank</h6>
          <h6>14524154</h6>
          <h6>$13,878</h6>
        </div>
      </div>
    </div>

    <div
      style="border-bottom: 1px dashed var(--accent)"
      class="container--fluid"
    >
      <div class="d-flex justify-content-between">
        <div class="wallet--headings">
          <h6>Bank Name 2</h6>
          <h6>Account No.</h6>
          <h6>Available Balance</h6>
        </div>
        <div class="wallet--information text-right">
          <h6>Citi Bank</h6>
          <h6>14524154</h6>
          <h6>$13,878</h6>
        </div>
      </div>
    </div>

    <div
      style="border-bottom: 1px dashed var(--accent)"
      class="container--fluid"
    >
      <button class="primary--btn">Withdraw</button>
    </div>

    <div>
      <WalletHistory />
    </div>
  </div>
</template>

<script>
import WalletHistory from "./walletHistory.vue";
export default {
  components: {
    WalletHistory,
  },
};
</script>
