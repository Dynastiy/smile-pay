<template>
    <div>
        <div  class="smile--form">
            <div class="container--fluid">
                <form action="">
                <div class="mb-3 input--with_flag">
                    <label for="">Amount to Withdraw</label>
                    <div class="d-flex align-items-center">
                        <input type="text" id="with-flag">
                        <select name="" id="">
                            <option value="">Flags</option>
                        </select>
                    </div>
                </div>

                <div class="mb-3">
                    <select name="" id="">
                        <option value="" selected disabled>Withdrawal Destination</option>
                        <option value="">Account 1</option>
                        <option value="">Account 1</option>
                    </select>
                </div>

                <div class="mb-3">
                    <input type="text" placeholder="Recipient full name">
                </div>  

                <div class="mb-3">
                    <input type="text" placeholder="Sender's full name">
                </div>  

                <div class="mb-3">
                    <select name="" id="">
                        <option value="" selected disabled>Sender's Country</option>
                        <option value="">Option 1</option>
                        <option value="">Option 1</option>
                    </select>
                </div>


                <div class="mb-3">
                    <input type="text" placeholder="Transaction Reference Number">
                </div>  

                <div class="mt-3">
                    <button class="primary--btn">Check</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>