import { NavLink } from 'react-router';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsLetterSignup';

const MainNavigation = () => {
   return <>
      <header className={classes.header}>
         <nav className={classes.list}>
            <ul>
               <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined } end>
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/events" className={({ isActive }) => isActive ? classes.active : undefined}>
                     Events
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : undefined}>
                     Newsletter
                  </NavLink>
               </li>
            </ul>
            <NewsletterSignup />
         </nav>
      </header>
   </>
}

export default MainNavigation;