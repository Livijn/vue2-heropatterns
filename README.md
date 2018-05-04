# Vue 2 Hero Patterns

<p align="center">
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
    </a>
</p>


[![npm version](https://badge.fury.io/js/vue2-heropatterns.svg)](https://badge.fury.io/js/vue2-heropatterns.svg)

This is a simple package to get using Hero Patterns within VueJS

## Available Patterns

- Jigsaw: `jigsaw`
- Overcast: `overcast`


## How to use

First we need to import and initialize

```es6
import Vue from 'vue'
import HeroPatterns from 'vue2-heropatterns'

Vue.use(HeroPatterns)
```

Then in our Vue templates:

```html
<template>
    <vue-hero-pattern
        pattern="anchors_away"
    >
        <p>{{ this.message }}</p>
    </vue-hero-pattern>
</template>
<script>
    export default {
        data () {
            return {
                message: 'A simple message'
            }
        }
    }
</script>
```

### Links

[Hero Patterns](https://www.heropatterns.com/)

[Vue JS](https://vuejs.org/)


