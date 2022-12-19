<template>
  <div>
    <div class="smile--form">
      <form action="">
        <div class="mb-3 input--with_flag">
          <label for="">Amount to send</label>
          <div class="d-flex align-items-center">
            <input
              id="with-flag"
              type="text"
            >
            <select
              id=""
              name=""
            >
              <option value="">
                Flags
              </option>
            </select>
          </div>
        </div>

        <div class="mb-3">
          <select
            id=""
            name=""
          >
            <option
              value=""
              selected
              disabled
            >
              Source of Fund
            </option>
            <option value="">
              Account 1
            </option>
            <option value="">
              Account 1
            </option>
          </select>
        </div>

        <div class="mb-3">
          <input
            type="text"
            placeholder="Recipient Smile tag, email or phone no."
          >
        </div>  

        <div class="mb-3">
          <input
            type="text"
            placeholder="Recipient Name"
          >
        </div>


        <div class="mb-3">
          <textarea
            type="text"
            placeholder="Description"
          />
        </div>

        <div class="mt-3">
          <button class="primary--btn">
            Send Money
          </button>
        </div>
      </form>
    </div>
  </div>
</template>