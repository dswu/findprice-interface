import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import Letter from "./pages/blogs/letter";
import Github from "./pages/connections/github";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/blogs/letter" replace />}/>
                <Route path="/blogs/letter" element={<Letter />}/>
                <Route path="/connections/github" element={<Github />}/>
            </Routes>
        </BrowserRouter>
    )
}