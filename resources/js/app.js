require('./bootstrap');
require('../sass/app.scss');
import Vue from 'vue'
import App from './App.vue';
window.Vue = require('vue');
// Icons

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
