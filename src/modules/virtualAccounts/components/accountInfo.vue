<template>
  <div class="">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Currency</label>
          <div class="d-flex align-items-center">
            <select id="with-flag" type="text" class="w-100" name="currency">
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="EUR">GBP</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">Account Type</label>
          <div class="d-flex align-items-center">
            <select id="with-flag" type="text" class="w-100" name="accountType">
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="input--with_flag">
          <label for="">BVN</label>
          <div class="d-flex align-items-center">
            <input id="with-flag" type="number" name="KYCInformation[bvn]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
