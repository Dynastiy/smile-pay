<template>
  <div>
    <div class="wallet--history container--fluid">
      <div class="topp d-flex justify-content-between">
        <h6>Recent Wallet History</h6>
        <div
          class="d-flex align-items-center"
          style="gap: 5px; color: var(--secondary-color); font-size: 12px"
        >
          <span>See All</span>
          <span> &raquo; </span>
        </div>
      </div>
      <div class="options my-3">
        <span>Citi Bank</span>
        <span>Delta Bank</span>
      </div>

      <!-- Wallet Transaction History Table -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div
          class="history--left_side d-flex align-items-center"
          style="gap: 10px"
        >
          <span class="wallet--icon credit">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
              />
            </svg>
          </span>
          <div>
            <h6>Withdrawal</h6>
            <h6
              style="
                font-weight: 400;
                font-size: 12px;
                color: var(--text-inactive);
              "
            >
              Jul 13
            </h6>
          </div>
        </div>
        <div class="history--right_side">
          <h6>$45</h6>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between mb-3">
        <div
          class="history--left_side d-flex align-items-center"
          style="gap: 10px"
        >
          <span class="wallet--icon debit">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M19 6.41L17.59 5L7 15.59V9H5v10h10v-2H8.41L19 6.41Z"
              />
            </svg>
          </span>
          <div>
            <h6>Funding</h6>
            <h6
              style="
                font-weight: 400;
                font-size: 12px;
                color: var(--text-inactive);
              "
            >
              Jul 13
            </h6>
          </div>
        </div>
        <div class="history--right_side">
          <h6>$45</h6>
        </div>
      </div>
    </div>
  </div>
</template>
