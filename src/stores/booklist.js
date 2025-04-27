const API_URL = "http://localhost:3000";

export async function fetchBooks() {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return await response.json();
}

export async function fetchBookById(id) {
  const response = await fetch(`${API_URL}/book/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch book with id ${id}`);
  }
  return await response.json();
}

export function getCoverUrl(coverPath) {
  return `${API_URL}${coverPath}`;
}
