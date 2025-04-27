const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Подключаем cors

const app = express();
const PORT = 3000;

app.use(cors()); // Разрешаем все CORS-запросы
// Middleware
app.use(express.json());

// Serve static files from the covers directory with absolute path
app.use("/covers", express.static(path.join(__dirname, "covers")));

// Read the database file
const db = JSON.parse(fs.readFileSync("db.json", "utf8"));

// Books routes
app.get("/books", (req, res) => {
  res.json(db.books || []);
});

app.get("/book/:id", (req, res) => {
  const book = (db.books || []).find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

// Reviews routes
app.get("/reviews", (req, res) => {
  res.json(db.reviews || []);
});

app.get("/review/:id", (req, res) => {
  const review = (db.reviews || []).find(
    (r) => r.id === parseInt(req.params.id)
  );
  if (!review) {
    return res.status(404).json({ error: "Review not found" });
  }
  res.json(review);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Available routes:");
  console.log("  GET    /books");
  console.log("  GET    /book/:id");
  console.log("  GET    /reviews");
  console.log("  GET    /review/:id");
  console.log("  GET    /covers/:image");
});
