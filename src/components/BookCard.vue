<template>
  <div class="book-card">
    <img :src="coverUrl" :alt="book.title" class="book-cover" />
    <h3>{{ book.title }}</h3>
    <p><strong>Автор:</strong> {{ book.author }}</p>
    <p><strong>Год:</strong> {{ book.year }}</p>
    <p><strong>Жанр:</strong> {{ book.genre }}</p>
    <p>{{ book.description }}</p>
  </div>
</template>

<script>
import { getCoverUrl } from "../stores/booklist";

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    coverUrl() {
      return getCoverUrl(this.book.coverUrl);
    },
  },
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  width: 360px;
}
.book-cover {
  width: 240px;
  height: 360px;
  background-size: cover;
}
</style>
