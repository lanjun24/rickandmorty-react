# Rick and Morty - Explorador de personajes

Aplicación web en React que consume la API de Rick and Morty para mostrar, buscar y filtrar personajes de la serie para ver si están vivos o muertos y más detalles.

## Tecnologías utilizadas

- React
- Hooks: useState, useEffect
- API REST: https://rickandmortyapi.com/api/character
- CSS en línea con objetos JavaScript

## Estructura del proyecto

```
src/
- App.js                       -> Componente principal, lógica de fetch
-components/
 - Buscador.js                 -> Input de búsqueda y selector de estado
 - TarjetaPersonaje.js         -> Tarjeta individual de cada personaje
 - DetallePersonaje.js         -> Modal con información adicional
 - Cargando.js                 -> Indicador visual de carga
```

## Uso de useState

El hook `useState` se usa para gestionar:

- `personajes` ->lista de personajes obtenidos de la API
- `cargando` -> controla si se muestra el spinner
- `error` -> mensaje de error si la consulta falla
- `nombre` -> texto escrito en el buscador
- `estado` -> filtro por estado (Alive, Dead, Unknown)
- `seleccionado` -> personaje que se abre en el modal de detalle

Ejemplo del código:

```js
const [personajes, setPersonajes] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
```

## Uso de useEffect

El hook `useEffect` se usa en `App.js` para hacer el fetch a la API cada vez que el usuario cambia el nombre buscado o el filtro de estado. El array de dependencias `[nombre, estado]` garantiza que la consulta se vuelva a ejecutar solo cuando alguno de esos valores cambia.

```js
useEffect(() => {
  setCargando(true);
  fetch(`${API}?name=${nombre}&status=${estado}`)
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results))
    .catch((err) => setError(err.message))
    .finally(() => setCargando(false));
}, [nombre, estado]);
```

## Funcionalidades implementadas

- Listado de personajes con imagen, nombre, estado, especie y género
- Buscador por nombre en tiempo real
- Filtro por estado (Alive, Dead, Unknown)
- Spinner de carga mientras se espera la respuesta
- Manejo de errores cuando no hay resultados
- Modal de detalle al hacer click en un personaje (origen, ubicación, episodios)
- Diseño adaptable a distintos tamaños de pantalla

## Conclusiones

Este taller me sirvió para practicar el uso de useState y useEffect en una aplicación de React y entender mejor cómo consumir datos desde una API. También pude reforzar la importancia de organizar el proyecto en componentes para que el código sea más claro y fácil de mantener.

Me pareció interesante trabajar con la API de Rick and Morty porque ya conocía la serie, así que fue más fácil identificar a los personajes y probar las funciones de la aplicación. En general, fue una buena práctica para aplicar lo aprendido en clase.
