import Login from './login'
import Navbar from './navbar'

export default function Header() {
  return (
    <div className='flex'>
        <Navbar />
        <Login />
    </div>
  )
}
