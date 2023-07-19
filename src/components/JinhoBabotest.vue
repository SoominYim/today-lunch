<template lang="">
    <div>
        {{진호바보}}
        <button @click="진호바보()"></button>
    </div>
</template>
<script>
export default {
    name: "진호바보",
    data() {
        return {
            진호바보: "진호바보"
        }
    },
    methods: {
        진호바보() {
            alert(this.진호바보)
        }
    }

}
</script>
<style lang="">
    
</style>