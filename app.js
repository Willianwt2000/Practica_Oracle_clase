const fs = require('fs');

// Nombre del archivo JSON
const jsonFilePath = 'datos.json';

// Función para cargar los datos desde el archivo JSON
function cargarDatos() {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Si hay un error al leer el archivo, retorna un objeto vacío
        console.error('Error al cargar los datos:', error.message);
        return {};
    }
}

// Función para guardar los datos en el archivo JSON
function guardarDatos(datos) {
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(datos, null, 2), 'utf-8');
        console.log('Datos guardados exitosamente.');
        console.log('Bien hecho usuario bien hecho')
    } catch (error) {
        console.error('Error al guardar los datos:', error.message);
    }
}

// Cargar datos existentes (si los hay)
let datos = cargarDatos();

// Modificar o agregar valores según sea necesario
datos.usuario = {
  direccion: 'el progreso',
  telefoto: 8294459111,
  casa: '#5'
}
// Guardar los datos actualizados
guardarDatos(datos);
