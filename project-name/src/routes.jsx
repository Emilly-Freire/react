import {createBrowserRouter} from 'react-router-dom'
import Home from "../src/pages/Home"
import Profile from "../src/pages/Profile"

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },

    {
        path: '/Profile',
        element: <Profile />
    }
])

export default router