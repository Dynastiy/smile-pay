<template>
  <div>
    <div>
      <div class="mt-4">
        <div class="d-flex align-items-center" style="gap: 10px">
          <span class="numbering">1</span>
          <h6 class="small font-weight-bold">
            Select Transfer destination type
          </h6>
        </div>
        <p class="" style="color: #a7b3ca; font-size: 11px">
          Choose any of the transfer destination below
        </p>
      </div>

      <div class="mt-3 transfer--options">
        <div class="d-flex align-items-center" style="gap: 10px">
          <div class=" text-center images">
            <div>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                width="14"
                class="rounded-circle img1"
                alt=""
              />
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                width="14"
                class="rounded-circle img2"
                alt=""
              />
            </div>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              width="14"
              class="rounded-circle img3"
              alt=""
            />
          </div>
          <div>
            <h6 class="small font-weight-bold">Smile Pay User</h6>
            <p class="" style="color: #a7b3ca; font-size: 11px">
              Send to anyone on smilepay
            </p>
          </div>
        </div>
      </div>

      <div class="mt-3 transfer--options">
        <div class="d-flex align-items-center" style="gap: 10px">
          <span class="numbering">
              <img src="@/assets/img/icons/bank-account.svg" alt="" srcset="">
          </span>
          <div>
            <h6 class="small font-weight-bold">DOM Bank Account</h6>
            <p class="" style="color: #a7b3ca; font-size: 11px">
              ...to card with corresponding currency
            </p>
          </div>
        </div>
      </div>

      <div class="mt-3 transfer--options">
        <div class="d-flex align-items-center" style="gap: 10px">
          <span class="numbering2">
              <img src="@/assets/img/icons/credit-card.svg" alt="" srcset="">
          </span>
          <div>
            <h6 class="small font-weight-bold">Virtual Card</h6>
            <p class="" style="color: #a7b3ca; font-size: 11px">
              ...to card with corresponding currency
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
