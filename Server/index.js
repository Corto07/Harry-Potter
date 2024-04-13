// index.js

const express = require('express');
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos.
const app = express();
const PORT = process.env.PORT || 3000;

// Define la ruta para servir el archivo JSON
app.get('/db.json', (req, res) => {
  // Utiliza path.join() para obtener la ruta absoluta del archivo JSON
  const filePath = path.join(__dirname, 'db.json');
  // Envía el archivo JSON como respuesta
  res.sendFile(filePath);
});

// Define una ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express en la raíz!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});