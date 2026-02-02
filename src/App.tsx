import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import Catalog from "./pages/Catalog"
import Footer from "./components/Footer"

function App() {
  // const {pathname} = useLocation()

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
