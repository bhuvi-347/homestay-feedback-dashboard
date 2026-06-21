import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-purple-600">
        Homestay Dashboard
      </Link>
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/dashboard" className="hover:text-purple-600">Dashboard</Link>
        <Link to="/about" className="hover:text-purple-600">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
