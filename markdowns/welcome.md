# Welcome!

How to use vue-router is today’s our most important topic. VueJS is frontend Library which can be used with any backend Languages. If we want to create fully functional front end application, then vue-router and vue-resource are two great pillars in VueJS. So today we will deep dive on vue-router. Routing is the way to manage the components in a Single Page Applications. All the Famous Front End Frameworks utilizes the concept of Routing.

# Step 1: Make three components inside your components directory.

Inside that directory, create three components files. These files are as showing in snippets.

```vue
// Home.vue

<template>
  <h1>Home</h1>
</template>

<script>
  export default {

  }
</script>
```
Then create About.vue file.
```vue
// About.vue

<template>
  <h1>About us</h1>
</template>

<script>
  export default {

  }
</script>
```
Finally, create Contact.vue file.
```vue
// Contact.vue

<template>
  <h1>Contact us</h1>
</template>

<script>
  export default {

  }
</script>
```
# Step 2: We need to update the index.html file and add the app id attribute.
```html
<html>
    <body>
        <link rel = "stylesheet" href = "style.css"/>
        <div id="app"></div>
        <script src = "main.js"></script>
    </body>
</html>
```
 # Step 3: Config vue-router module.

 In main.js file first, we need to import a vue-router module from a node_modules folder because we have installed all of our dependencies in this project. Copy the following code into our main.js file.

```javascript
// main.js

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
```

# Step 4: Now, run the code and see the final output.

@[Sample Vue.js App]({"stubs": ["main.js", "index.html", "components/Home.vue", "components/About.vue", "components/Contact.vue"], "command": "/bin/bash run.sh"})
