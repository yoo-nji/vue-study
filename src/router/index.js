import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import AboutView from '@/pages/AboutView.vue';
import PostCreateView from '@/pages/posts/PostCreateView.vue';
import PostDetailView from '@/pages/posts/PostDetailView.vue';
import PostEditView from '@/pages/posts/PostEditView.vue';
import PostListView from '@/pages/posts/PostListView.vue';
import NotFoundView from '@/pages/NotFoundView.vue';

import NestedView from '@/pages/nested/NestedView.vue';
import NesteHomeView from '@/pages/nested/NestedHomeView.vue';
import NestedOneView from '@/pages/nested/NestedOneView.vue';
import NestedTwoView from '@/pages/nested/NestedTwoView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,

  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',//상세
    name: 'PostDetail',
    component: PostDetailView,
    props: true,
  },
  {
    path: '/posts/:id/edit',//수정
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NesteHome',
        component: NesteHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;