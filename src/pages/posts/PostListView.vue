<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { getPosts } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])

const fetchPosts = () => {
  posts.value = getPosts()
}
fetchPosts()
const goPage = (id) => {
  router.push(`/posts/${id}`)
}
</script>

<style lang="scss" scoped></style>
