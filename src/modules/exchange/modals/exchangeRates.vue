<template>
  <div>
    <div>
      <div class="container--fluid">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h5 class="mb-1">Conversion Rate</h5>
            <div class="d-flex align-items-center" style="gap: 20px">
              <h6
                style="
                  font-size: 12px;
                  font-weight: 300;
                  color: var(--text-inactive);
                "
              >
                Last updated as of today
              </h6>
              <i-icon
                icon="el:refresh"
                style="color: var(--secondary-color); font-size: 12px"
              ></i-icon>
            </div>
          </div>
          <div class="select--currency">
            <select name="" id="">
              <option value="">Flag</option>
            </select>
          </div>
        </div>

        <!-- Exchange rates table -->
        <section>
          <div>
            <div class="rates--headings row m-0 p-0 mt-4">
              <h6 class="col-5 p-0 m-0">Currency</h6>
              <h6 class="col p-0 m-0">Buy at</h6>
              <h6 class="col p-0 m-0">Sell at</h6>
            </div>

            <div class="rates--data row m-0 p-0 mt-2">
              <p
                class="col-5 p-0 m-0"
                style="font-size: 14px; font-weight: 400"
              >
                Currency
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Buy at
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Sell at
              </p>
            </div>

            <div class="rates--data row m-0 p-0 mt-2">
              <p
                class="col-5 p-0 m-0"
                style="font-size: 14px; font-weight: 400"
              >
                Currency
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Buy at
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Sell at
              </p>
            </div>

            <div class="rates--data row m-0 p-0 mt-2">
              <p
                class="col-5 p-0 m-0"
                style="font-size: 14px; font-weight: 400"
              >
                Currency
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Buy at
              </p>
              <p
                class="col p-0 m-0"
                style="
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--text-inactive);
                "
              >
                Sell at
              </p>
            </div>
          </div>
        </section>

        <div class="mt-5">
          <h6
            style="
              font-size: 12px;
              font-weight: 300;
              color: var(--text-inactive);
            "
          >
            *The base currency for exchange is USD
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
