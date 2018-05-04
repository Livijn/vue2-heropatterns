<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
    import { mixin } from './../mixins/mixin'

    export default {
        mixins: [mixin]
    }
</script>
