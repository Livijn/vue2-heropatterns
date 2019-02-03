<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
    import patterns from './../config/patterns'

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
            opacity: {
                required: false,
                type: Number,
                default: 0.05,
            },
            pattern: {
                required: false,
                type: String,
                default: null,
            }
        },
        computed: {
            backgroundColor() {
                return '#' + this.background.replace('#', '');
            },

            foregroundColor() {
                return this.foreground.replace('#', '');
            },

            selectedPattern() {
                return this.pattern && patterns[this.pattern]
                    .replace('FILLCOLOR', '%23' + this.foregroundColor)
                    .replace('FILLOPACITY', this.opacity);
            },

            style() {
                return {
                    backgroundColor: this.backgroundColor,
                    backgroundImage: this.selectedPattern,
                };
            },
        }
    }
</script>
