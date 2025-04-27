<template>
  <div class="add-book-form">
    <h2>Добавить новую книгу</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Название:</label>
        <input
          id="title"
          v-model="newBook.title"
          type="text"
          required
          placeholder="Капитанская дочка"
        />
      </div>

      <div class="form-group">
        <label for="author">Автор:</label>
        <input
          id="author"
          v-model="newBook.author"
          type="text"
          required
          placeholder="А.С.Пушкин"
        />
      </div>

      <div class="form-group">
        <label for="description">Описание:</label>
        <textarea
          id="description"
          v-model="newBook.description"
          required
          placeholder="Краткое описание книги"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="year">Год издания:</label>
        <input
          id="year"
          v-model.number="newBook.year"
          type="number"
          required
          placeholder="1836"
        />
      </div>

      <div class="form-group">
        <label for="genre">Жанр:</label>
        <input
          id="genre"
          v-model="newBook.genre"
          type="text"
          required
          placeholder="Роман"
        />
      </div>

      <div class="form-group">
        <label for="coverUrl">Ссылка на обложку (необязательно):</label>
        <input
          id="coverUrl"
          v-model="newBook.coverUrl"
          type="text"
          placeholder="/covers/exapmle.png"
        />
      </div>

      <button type="submit" class="submit-btn">Добавить книгу</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-book"]);

const newBook = ref({
  id: Date.now(), // Генерируем временный ID
  title: "",
  author: "",
  description: "",
  year: null,
  genre: "",
  coverUrl: "",
  isFavorite: false,
});

const handleSubmit = () => {
  emit("add-book", newBook.value);
  resetForm();
};

const resetForm = () => {
  newBook.value = {
    id: Date.now(),
    title: "",
    author: "",
    description: "",
    year: null,
    genre: "",
    coverUrl: "",
    isFavorite: false,
  };
};
</script>

<style scoped>
.add-book-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #369f6b;
}
</style>
