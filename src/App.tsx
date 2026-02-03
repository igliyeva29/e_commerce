import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import Catalog from "./pages/Catalog"
import Footer from "./components/Footer"
import NotFound from "./pages/Notfound"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
