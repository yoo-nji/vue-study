<script setup></script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">YOONJI</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/posts">게시글</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-light" type="button" @click="goPage">글쓰기</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goPage = () => {
  router.push('/posts/create')
}
</script>
