import { useState } from "react"

function Buscador({ onBuscar, onFiltrarEstado }) {
  const [nombre, setNombre] = useState("")
  const [estado, setEstado] = useState("")

  function handleNombre(e) {
    setNombre(e.target.value)
    onBuscar(e.target.value)
  }

  function handleEstado(e) {
    setEstado(e.target.value)
    onFiltrarEstado(e.target.value)
  }

  return (
    <div style={estilos.contenedor}>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={nombre}
        onChange={handleNombre}
        style={estilos.input}
      />
      <select value={estado} onChange={handleEstado} style={estilos.select}>
        <option value="">Todos los estados</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  )
}

const estilos = {
  contenedor: {
    display: "flex",
    gap: 12,
    marginBottom: 24,
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    minWidth: 200,
    padding: "10px 14px",
    borderRadius: 8,
    border: "1.5px solid #ccc",
    fontSize: 14,
    outline: "none",
  },
  select: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1.5px solid #ccc",
    fontSize: 14,
    background: "white",
    cursor: "pointer",
  },
}

export default Buscador
