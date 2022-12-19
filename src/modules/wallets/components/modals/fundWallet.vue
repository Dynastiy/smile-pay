<template>
  <div>
    <transition name="fade">
      <div class="modal--mask">
        <div class="modal--content">
          <div class="">
            <div class="text-right" role="button" @click="$emit('close')">
              <i-icon
                style="font-size: 25px"
                icon="humbleicons:times-circle"
              ></i-icon>
            </div>
            <div class="text-center">
              <h5 style="font-weight: 700">Fund Wallet</h5>
              <small class="text-muted"
                >Enter an amount and select a source to fund your wallet</small
              >
            </div>
            <div class="smile--form mt-4">
              <form action="">
                <div class="mb-3 input--with_flag">
                  <label for="">Amount to fund</label>
                  <div class="d-flex align-items-center">
                    <input type="text" id="with-flag" />
                    <select name="" id="">
                      <option value="">Flags</option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <select name="" id="">
                    <option value="" selected disabled>Source of Fund</option>
                    <option value="">Account 1</option>
                    <option value="">Account 1</option>
                  </select>
                </div>

                <div class="mb-3">
                  <select name="" id="">
                    <option value="" selected disabled>Account to Fund</option>
                    <option value="">Bank 1</option>
                    <option value="">Bank 1</option>
                  </select>
                </div>

                <div>
                  <span class="small text-secondary">
                    You're about to fund your selected dollar wallet with $X,
                    click below to continue
                  </span>
                </div>

                <div class="mt-3">
                  <button class="primary--btn">Fund</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
