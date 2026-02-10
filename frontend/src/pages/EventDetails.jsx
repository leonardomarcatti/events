import { useParams } from "react-router"

const EventDetails = () => {
   const {id} = useParams()
   return <>
      <h1>Event Details Page</h1>
      <h3>{id}</h3>
   </> 
}

export default EventDetails