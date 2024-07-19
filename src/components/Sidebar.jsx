import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="navbar bg-base-300 h-screen flex-col py-10 border-t border-base-100">
            <div className="flex flex-1 flex-col px-2">
                <div className="flex items-stretch gap-5 py-10 flex-col">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <Link to={'/employes'}>Employes</Link>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/reviews'}>Reviews</Link>
                    <Link to={'/users'}>Users</Link>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Sidebar