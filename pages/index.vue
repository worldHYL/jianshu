<template>
    <div>
        <my-header></my-header>
        <b-container>
        <b-row>
            <b-col cols="9">我占9个</b-col>
            <b-col cols="3">我占3个</b-col>
        </b-row>
        </b-container>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader'
    export default {
        components:{
            myHeader
        }
    }
</script>
<style>

</style>