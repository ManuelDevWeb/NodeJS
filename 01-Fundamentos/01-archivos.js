const fs = require('fs');

// Leyendo un archivo
const data = fs.readFileSync('README-React.md', 'utf-8');

// Modificando el contenido del archivo
const newData = data.replace(/React/ig, 'Angular');

// Escribiendo el nuevo contenido en un nuevo archivo
fs.writeFileSync('README-Angular.md', newData);
