import { Outlet } from "react-router";
import EventsNavigation from '../components/EventsNavigation'

const Eventslayout = () => {
   return <>
      <EventsNavigation />
      <Outlet/>
   </>
}

export default Eventslayout