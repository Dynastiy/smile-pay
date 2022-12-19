<template>
    <div>
        <div  class="smile--form">
            <form action="">
                <div class="mb-3 input--with_flag">
                    <label for="">Amount to send</label>
                    <div class="d-flex align-items-center">
                        <input type="text" id="with-flag">
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
                    <input type="text" placeholder="Recipient Dollar Account Number">
                </div>

                <div class="mb-3">
                    <select name="" id="">
                        <option value="" selected disabled>Recipient Bank</option>
                        <option value="">Bank 1</option>
                        <option value="">Bank 1</option>
                    </select>
                </div>

                <div class="mb-3">
                    <input type="text" placeholder="Recipient Name">
                </div>


                <div class="mb-3">
                    <textarea type="text" placeholder="Description"></textarea>
                </div>

                <div class="mt-3">
                    <button class="primary--btn">Send Money</button>
                </div>
            </form>
        </div>
    </div>
</template>