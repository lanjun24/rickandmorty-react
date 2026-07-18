function Cargando() {
  return (
    <div style={estilos.contenedor}>
      <div style={estilos.spinner}></div>
      <p style={estilos.texto}>Cargando personajes...</p>
      <style>{`
        @keyframes girar {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

const estilos = {
  contenedor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    gap: 16,
  },
  spinner: {
    width: 44,
    height: 44,
    border: "4px solid #eee",
    borderTop: "4px solid #4f6ef7",
    borderRadius: "50%",
    animation: "girar 0.8s linear infinite",
  },
  texto: {
    color: "#888",
    fontSize: 14,
    margin: 0,
  },
}

export default Cargando
