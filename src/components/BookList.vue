<template>
  <div class="book-list">
    <h2>Список книг</h2>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="books-container">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchBooks } from "../stores/booklist";
import BookCard from "./BookCard.vue";

export default {
  components: { BookCard },
  setup() {
    const books = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const loadBooks = async () => {
      try {
        books.value = await fetchBooks();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(loadBooks);

    return { books, loading, error };
  },
};
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.error {
  color: red;
}
</style>
