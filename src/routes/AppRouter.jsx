import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import Users from '@pages/Users'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/users' element={<Users />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter