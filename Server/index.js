// index.js

const express = require('express');
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos.
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

// Define una ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express en la raíz!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});