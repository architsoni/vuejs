import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import example1 from '@/components/example1';
import example2 from '@/components/example2';
import example3 from '@/components/example3';
import example4 from '@/components/example4';
import example5 from '@/components/example5';
import example6 from '@/components/excercise6/example6';
import example7 from '@/components/excercise7/example7';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/example1',
      name: 'example1',
      component: example1,
    },
    {
      path: '/example2',
      name: 'example2',
      component: example2,
    },
    {
      path: '/example3',
      name: 'example3',
      component: example3,
    },
    {
      path: '/example4',
      name: 'example4',
      component: example4,
    },
    {
      path: '/example5',
      name: 'example5',
      component: example5,
    },
    {
      path: '/example6',
      name: 'example6',
      component: example6,
    },
    {
      path: '/example7',
      name: 'example7',
      component: example7,
    },
  ],
});
