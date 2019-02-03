import patterns from './../config/patterns'

export const mixin = {
    props: {
        background: {
            required: false,
            type: String,
            default: 'DFDBE5'
        },
        foreground: {
            required: false,
            type: String,
            default: '9C92AC'
        },
        opacity: {
            required: false,
            type: Number,
            default: 0.4
        },

        pattern: {
            required: true,
            type: String
        }
    },

    computed: {
        backgroundColor() {
            return this.background.replace('#', '');
        },
        
        foregroundColor() {
            return this.foreground.replace('#', '');
        },
        
        formattedPattern() {
            return this.pattern.replace('-', '_');
        },
        
        style () {
            return `background-color: #${this.backgroundColor}; background-image: url("${this.imageUri}")`
        },

        imageUri () {
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${this.currentPattern.width}' height='${this.currentPattern.height}' viewBox='0 0 ${this.currentPattern.width} ${this.currentPattern.height}'%3E%3Cg fill='%23${this.foregroundColor}' fill-opacity='${this.opacity}'%3E%3Cpath ${this.fillRule} d='${this.currentPattern.drawing}'/%3E%3C/g%3E%3C/svg%3E`
        },

        fillRule () {
            if (this.currentPattern.fillRule) {
                return `fill-rule='${this.currentPattern.fillRule}'`
            } else {
                return ``
            }
        },

        currentPattern () {
            return patterns[this.formattedPattern]
        }
    }
}