import Vue from 'vue';
import Router from 'vue-router';

import Pagination from './home/Pagination';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Pagination }
    ]
});
