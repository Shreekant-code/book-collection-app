import { CreateBook } from "./Pages/CreateBook"
import { Delete } from "./Pages/Delete"
import { Edit } from "./Pages/Edit"
import { Home } from "./Pages/Home"
import { Show } from "./Pages/Show"
import { Routes, Route } from "react-router-dom";



export const App=()=>{
  return(
    <>

    <Routes>
<Route path="/"   element={<Home />} />
<Route path="/books/create"   element={<CreateBook/>} />
<Route path="/books/details/:id"   element={<Show />} />
<Route path="/books/edit/:id"   element={<Edit />} />
<Route path="/books/delete/:id"   element={<Delete />} />

    </Routes>
    
    
    </>
  )
}