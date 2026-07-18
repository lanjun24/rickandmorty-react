function DetallePersonaje({ personaje, onCerrar }) {
  if (!personaje) return null

  function colorEstado(estado) {
    if (estado === "Alive") return "#27ae60"
    if (estado === "Dead") return "#e74c3c"
    return "#95a5a6"
  }

  return (
    <div style={estilos.overlay} onClick={onCerrar}>
      <div style={estilos.modal} onClick={e => e.stopPropagation()}>
        <button style={estilos.cerrar} onClick={onCerrar}>✕</button>
        <img src={personaje.image} alt={personaje.name} style={estilos.imagen} />
        <div style={estilos.contenido}>
          <h2 style={estilos.nombre}>{personaje.name}</h2>
          <p style={{ ...estilos.estado, color: colorEstado(personaje.status) }}>
            ● {personaje.status}
          </p>
          <div style={estilos.grilla}>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>Especie</span>
              <span>{personaje.species}</span>
            </div>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>Género</span>
              <span>{personaje.gender}</span>
            </div>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>Origen</span>
              <span>{personaje.origin?.name}</span>
            </div>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>Ubicación</span>
              <span>{personaje.location?.name}</span>
            </div>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>Episodios</span>
              <span>{personaje.episode?.length}</span>
            </div>
            <div style={estilos.campo}>
              <span style={estilos.etiqueta}>ID</span>
              <span>#{personaje.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const estilos = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    padding: 20,
  },
  modal: {
    background: "white",
    borderRadius: 16,
    maxWidth: 420,
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  cerrar: {
    position: "absolute",
    top: 12,
    right: 12,
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: 30,
    height: 30,
    cursor: "pointer",
    fontSize: 14,
    zIndex: 1,
  },
  imagen: {
    width: "100%",
    display: "block",
    maxHeight: 300,
    objectFit: "cover",
  },
  contenido: {
    padding: "16px 20px 24px",
  },
  nombre: {
    margin: "0 0 6px",
    fontSize: 20,
    color: "#1a1a2e",
  },
  estado: {
    margin: "0 0 16px",
    fontWeight: 600,
    fontSize: 14,
  },
  grilla: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  campo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    fontSize: 14,
    color: "#333",
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#999",
    letterSpacing: "0.05em",
  },
}

export default DetallePersonaje
