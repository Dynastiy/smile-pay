<template>
    <div>
        <div>
            <div>
                <TopBar/>
            </div>
            <div class="">
                <div>
                    <router-view/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '../components/topBar.vue';
export default {
    components: { TopBar }
}
</script>