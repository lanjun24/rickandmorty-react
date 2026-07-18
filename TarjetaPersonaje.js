function TarjetaPersonaje({ personaje, onSeleccionar }) {
  function colorEstado(estado) {
    if (estado === "Alive") return "#27ae60"
    if (estado === "Dead") return "#e74c3c"
    return "#95a5a6"
  }

  return (
    <div style={estilos.tarjeta} onClick={() => onSeleccionar(personaje)}>
      <img src={personaje.image} alt={personaje.name} style={estilos.imagen} />
      <div style={estilos.info}>
        <h3 style={estilos.nombre}>{personaje.name}</h3>
        <p style={{ ...estilos.estado, color: colorEstado(personaje.status) }}>
          ● {personaje.status}
        </p>
        <p style={estilos.dato}>Especie: {personaje.species}</p>
        <p style={estilos.dato}>Género: {personaje.gender}</p>
      </div>
    </div>
  )
}

const estilos = {
  tarjeta: {
    background: "white",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.15s",
  },
  imagen: {
    width: "100%",
    display: "block",
  },
  info: {
    padding: "12px 14px 16px",
  },
  nombre: {
    margin: "0 0 6px",
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a2e",
  },
  estado: {
    margin: "0 0 4px",
    fontSize: 13,
    fontWeight: 600,
  },
  dato: {
    margin: "2px 0",
    fontSize: 13,
    color: "#666",
  },
}

export default TarjetaPersonaje
