import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo .svg'


export const Nav = () => {
  // const navstyle = {

  // }
  return (
    <nav>
      <div className='navbar grid-adjustable-columns'>
        <div className="navbarFlex">
        <div className="logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="pageLink">
          <ul>
            <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li>
              <Link to={'/booking'}> Reservation</Link>
            </li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        </div>
       </div>
    </nav>
  )
}


