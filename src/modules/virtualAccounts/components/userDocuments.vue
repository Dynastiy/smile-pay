<template>
  <div class="">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Document Country</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
              name="KYCInformation[document][issuedCountryCode]"
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Issued By</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
              name="KYCInformation[document][issuedBy]"
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Document Date</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="date"
              name="KYCInformation[document][issuedDate]"
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Document Type</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
              name="KYCInformation[document][type]"
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Document Number</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
              name="KYCInformation[document][number]"
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Means of Identification</label>
          <div class="d-flex align-items-center">
            <input id="with-flag" type="file" name="meansOfId" />
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Utility Bill</label>
          <div class="d-flex align-items-center">
            <input id="with-flag" type="file" name="utilityBill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      utilityBill: null,
      meansOfId: null,
    };
  },
  methods: {
    chooseId(e) {
      const val = e.target.files[0];
      this.utilityBill = val;
    },

    chooseUtility(e) {
      const val = e.target.files[0];
      this.meansOfId = val;
    },
  },
};
</script>
