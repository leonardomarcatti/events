import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router';

const EventsNavigation = () =>  {
   return <div className={classes.header}>
      <nav>
         <ul className={classes.list}>
            <li>
               <NavLink to='/events' className={({isActive}) => isActive ? classes.active : undefined } end >All Events</NavLink>
            </li>
            <li>
               <NavLink to='/events/new' className={({isActive}) => isActive ? classes.active : undefined } end >New Event</NavLink>
            </li>
         </ul>
      </nav>
    </div>
}

export default EventsNavigation;
