<template>
    <div>
        <div>
            <div style="border-bottom: 1px dashed rgba(0,0,0,0.08); padding: 0.9rem 2.5rem ;">
                <div>
                    <div>
                        <el-radio-group>
                            <el-radio-button label="top">
                                <router-link to="/transact/send-funds">
                                    <span><i-icon icon="bi:arrow-up-right-circle" /></span>
                                    <span>Send</span>
                                </router-link>
                            </el-radio-button>
                            <el-radio-button label="right">
                                <router-link to="receive-funds">
                                    <span><i-icon icon="bi:arrow-down-left-circle" /></span>
                                    <span>Receive</span>
                                </router-link>
                            </el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>