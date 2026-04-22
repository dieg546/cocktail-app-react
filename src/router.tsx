import {BrowserRouter, Routes, Route} from "react-router";
import IndexPage from "./views/IndexPage";
import FavoritesPage from "./views/FavoritesPage";
import MainLayout from "./components/layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route element={<MainLayout/>}>
                <Route 
                    path="/" 
                    index
                    element={<IndexPage />} 
                />
                
                <Route 
                    path="/Favorites" 
                    element={<FavoritesPage />} 
                />
            </Route>

            
        </Routes>

    </BrowserRouter>
  )
}
