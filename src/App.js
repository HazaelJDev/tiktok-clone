import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useNavigate,
  useParams
} from 'react-router-dom';


let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>Esta página aún no está lista</h1>
    </>
  )
}

let Error404 = () => {
  return (
    <>
      <Link to="/">Reresar al inicio</Link>
      <h1>Esta página no existe - 404</h1>
    </>
  )
}



const UsuariosOutlet = () => {
  let navigate = useNavigate();
  let redirect = () =>{
    navigate('/')
  }

  return (
    <>
      <button onClick={redirect}>Ir al home</button>
      <Outlet />
    </>
  )
}

let VideoShow = () => {
  let { id } = useParams()
  return(
    <p>{id}</p>
  )
}

function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotImplemented />} />
        
        <Route path="/usuarios" element={isAuth ? <Navigate to="/" /> : <UsuariosOutlet />}>
          <Route path="registro" element={<NotImplemented />} />
          <Route path="login" element={<NotImplemented />} />  
          <Route path=":id" element={<NotImplemented />} />
          <Route path=":id/videos" element={<NotImplemented />} />
        </Route>
        
        <Route path="/videos">
          <Route path="/" element={<NotImplemented />} />
          <Route path="nuevo" element={<NotImplemented />} />
          <Route path=":id" element={<VideoShow />} />
        </Route>

        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
