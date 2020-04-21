<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
    import patterns from './../config/patterns'
    import tinycolor from 'tinycolor2';
    import hexToRgba from 'hex-to-rgba';

    export default {
        props: {
            background: {
                required: false,
                type: String,
                default: 'FFFFFF'
            },
            foreground: {
                required: false,
                type: String,
                default: '000000',
            },
            pattern: {
                required: false,
                type: String,
                default: null,
            },
            opacity: {
                required: false,
                type: Number,
                default: null,
            }
        },
        computed: {
            backgroundColor() {
                return hexToRgba(this.background);
            },

            foregroundColor() {
                return hexToRgba(this.foreground);
            },

            fillOpacity() {
                return _.round(this.opacity || 0.15 - tinycolor(this.backgroundColor).getLuminance() / 10, 2);
            },

            selectedPattern() {
                return this.pattern && patterns[this.pattern]
                    .replace('FILLCOLOR', '%23' + this.foregroundColor)
                    .replace('FILLOPACITY', this.fillOpacity);
            },

            style() {
                return {
                    backgroundColor: this.backgroundColor,
                    backgroundImage: this.selectedPattern,
                };
            },
        },
    }
</script>
