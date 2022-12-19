<template>
  <div>
    <div>
      <div class="dollar" style="border-bottom: 1px dashed var(--accent)">
        <div class="container--fluid">
          <div class="d-flex align-items-center mb-5" style="gap: 10px">
            <h6 class="" style="font-weight: 600">Dollar Account</h6>
            <img
              src="https://countryflagsapi.com/svg/us"
              width="20"
              height="20"
              alt="The United States Of America flag"
            />
          </div>

          <div class="d-flex" style="gap: 40px">
            <div class="left--details w-100">
              <h6
                class="text-center w-75 mx-auto"
                style="font-size: 11px; font-weight: 400"
              >
                Sender should scan QR code to transfer money to you
              </h6>
              <div class="mt-2 text-center">
                <vue-qr :text="account_number" style="width: 100px" />
              </div>

              <div class="mt-2 d-flex justify-content-center" style="gap: 15px">
                <i-icon
                  icon="tabler:copy"
                  style="color: var(--secondary-color); font-size: 18px"
                />
                <i-icon
                  icon="ci:share"
                  style="color: var(--secondary-color); font-size: 18px"
                />
              </div>
            </div>

            <div class="right--details w-100">
              <div class="mb-4">
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Account Number
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  {{ account_number }}
                </h6>
              </div>

              <div class="mb-4">
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Holder's Name
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  John Doe
                </h6>
              </div>

              <div>
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Bank Name
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  Citi Bank
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pounds">
        <div class="container--fluid">
          <div class="d-flex align-items-center mb-5" style="gap: 10px">
            <h6 class="" style="font-weight: 600">Pounds Account</h6>
            <img
              src="https://countryflagsapi.com/svg/gb"
              width="20"
              height="20"
              alt="The United Kingdom Of Great Britain And Northern Ireland flag"
            />
          </div>

          <div class="d-flex" style="gap: 40px">
            <div class="left--details text-center w-100">
              <h6
                class="text-center w-75 mx-auto"
                style="font-size: 11px; font-weight: 400"
              >
                Sender should scan QR code to transfer money to you
              </h6>
              <div class="mt-2">
                <vue-qr :text="account_number" style="width: 100px" />
              </div>
              <div class="mt-2 d-flex justify-content-center" style="gap: 15px">
                <i-icon
                  icon="tabler:copy"
                  style="color: var(--secondary-color); font-size: 18px"
                />
                <i-icon
                  icon="ci:share"
                  style="color: var(--secondary-color); font-size: 18px"
                />
              </div>
            </div>

            <div class="right--details w-100">
              <div class="mb-4">
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Account Number
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  {{ account_number }}
                </h6>
              </div>

              <div class="mb-4">
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Holder's Name
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  John Doe
                </h6>
              </div>

              <div>
                <h6 class="" style="font-size: 11px; font-weight: 400">
                  Bank Name
                </h6>
                <h6
                  class="mt-1"
                  style="
                    font-size: 11px;
                    font-weight: 300;
                    color: var(--text-inactive);
                  "
                >
                  Citi Bank
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  components: {
    VueQr,
  },
  data() {
    return {
      account_number: "112323423",
    };
  },
};
</script>