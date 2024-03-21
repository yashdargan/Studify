import React from 'react'
import './index.css'
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom' 


const menu = [
  {name:'Home',
  to:'/front',},
  {name: 'Blogs',
    to: '/blogs'
   },
  {name: 'Course',
    to: '/blogs',
    },
  { name: 'Progess',
    to:'/blogs',
  },
  {name: 'Achivement',
    to:'/blogs',
  },
  {name: 'Logout',
    to: '/',
  },
]

const Navbar = () => {

return (
    <div>
      <center>Studify: special offer get 20% discount using 'HELLOWORLD' as python 🐍 code</center>
      <ul>
        {menu.map(({ name, to }) => (
          <li key={to}>
            <Link className='link' to={to}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default Navbar
