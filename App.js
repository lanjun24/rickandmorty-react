import { useState, useEffect } from "react"
import Buscador from "./components/Buscador"
import TarjetaPersonaje from "./components/TarjetaPersonaje"
import DetallePersonaje from "./components/DetallePersonaje"
import Cargando from "./components/Cargando"

const API = "https://rickandmortyapi.com/api/character"

function App() {
  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [nombre, setNombre] = useState("")
  const [estado, setEstado] = useState("")
  const [seleccionado, setSeleccionado] = useState(null)
  const [pagina, setPagina] = useState(1)
  const [hayMas, setHayMas] = useState(false)

  useEffect(() => {
    setCargando(true)
    setError(null)
    setPersonajes([])
    setPagina(1)

    const params = new URLSearchParams({ page: 1 })
    if (nombre) params.append("name", nombre)
    if (estado) params.append("status", estado)

    fetch(`${API}?${params}`)
      .then(r => { if (!r.ok) throw new Error("No se encontraron personajes"); return r.json() })
      .then(d => { setPersonajes(d.results); setHayMas(!!d.info.next); setCargando(false) })
      .catch(e => { setError(e.message); setCargando(false) })
  }, [nombre, estado])

function cargarMas() {
  if (!hayMas) return
  const sig = pagina + 1
  const params = new URLSearchParams({ page: sig })
  if (nombre) params.append("name", nombre)
  if (estado) params.append("status", estado)

  fetch(`${API}?${params}`)
    .then(r => { if (!r.ok) { setHayMas(false); return null } return r.json() })
    .then(d => {
      if (!d) return
      setPersonajes(prev => [...prev, ...d.results])
      setHayMas(!!d.info.next)
      setPagina(sig)
    })
    .catch(() => setHayMas(false))
}

  return (
    <div style={estilos.app}>
      <header style={estilos.header}>
        <h1 style={estilos.titulo}>Rick and Morty</h1>
        <p style={estilos.sub}>Explora los personajes de la serie</p>
      </header>
      <main style={estilos.main}>
        <Buscador onBuscar={setNombre} onFiltrarEstado={setEstado} />
        {cargando && <Cargando />}
        {error && !cargando && (
          <div style={estilos.error}>
            <p>😕 {error}</p>
            <p style={{ fontSize: 13, color: "#999" }}>Intenta con otro nombre o filtro</p>
          </div>
        )}
        {!cargando && !error && (
          <>
            <p style={estilos.total}>{personajes.length} personajes cargados</p>
            <div style={estilos.grilla}>
              {personajes.map(p => (
                <TarjetaPersonaje key={p.id} personaje={p} onSeleccionar={setSeleccionado} />
              ))}
            </div>
            {hayMas && (
              <div style={{ textAlign: "center", marginTop: 28 }}>
                <button style={estilos.btnMas} onClick={cargarMas}>Cargar más</button>
              </div>
            )}
          </>
        )}
      </main>
      <DetallePersonaje personaje={seleccionado} onCerrar={() => setSeleccionado(null)} />
    </div>
  )
}

const estilos = {
  app: { fontFamily: "Segoe UI, sans-serif", minHeight: "100vh", background: "#f0f2f5" },
  header: { background: "#1a1a2e", color: "white", padding: "28px 40px", textAlign: "center" },
  titulo: { margin: 0, fontSize: "2rem", fontWeight: 700 },
  sub: { margin: "6px 0 0", color: "#aaa", fontSize: 14 },
  main: { maxWidth: 1100, margin: "0 auto", padding: "32px 20px" },
  grilla: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 },
  error: { textAlign: "center", padding: "48px 20px", color: "#555" },
  total: { fontSize: 13, color: "#888", marginBottom: 16 },
  btnMas: { padding: "12px 32px", background: "#1a1a2e", color: "white", border: "none", borderRadius: 8, fontSize: 14, cursor: "pointer" },
}

export default App
