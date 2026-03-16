import { useEffect, useState } from "react"

function App() {
  const [planes,setPlanes] = useState([])
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    fetch("http://localhost:8080/api/planes")
    .then(Response=>{
      if(!Response.ok) throw new Error("Error al obtener planes")
        return Response.json()
    })
    .then(data=>{
      setPlanes(data)
      setLoading(false)
    })
    .catch(err=>{
      setError(err.message)
      setLoading(false)
    })
  },[])

  return (
    <div>
      <h1>SPA Relahasion</h1>
      {loading && <p>Cargando Planes...</p>}
      {error && <p>Error: {error}</p>}


      <ul>
        {planes.map(plan=>(
          <li key={lan.id}>
            <h3>{plan.nombre}</h3>
            <p>{plan.descripcion}</p>
            <strong>{plan.precio}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
