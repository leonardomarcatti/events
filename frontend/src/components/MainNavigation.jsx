import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router';


const MainNavigation = () => {
   return <header className={classes.header}>
      <nav>
         <ul className={classes.list}>
            <li>
               <NavLink to='/' className={({isActive}) => isActive ? classes.active : '' }end>Home</NavLink>
            </li>
            <li>
               <NavLink to='/events' className={({isActive}) => isActive ? classes.active : ''} end >Events</NavLink>
            </li>
         </ul>
      </nav>
   </header>
}

export default MainNavigation;
