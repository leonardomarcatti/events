import { useNavigate, useNavigation, useActionData } from 'react-router';
import { Form } from 'react-router';
import classes from './EventForm.module.css';

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation()
  const isSubmitting = navigation.state == 'submitting'
   const data = useActionData()

  const cancelHandler = () => {
    navigate('..');
  }
  
  return (
    <Form className={classes.form} method={method}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event? event.title : ''}  />
           {data && <small style={{'color': 'tomato'}}>{data.errors.title}</small>}
      </p>
      <p>
        <label htmlFor="image">Image</label>
           <input id="image" type="url" name="image" defaultValue={event? event.image : ''}  />
           {data && <small style={{ 'color': 'tomato' }}>{data.errors.image}</small>}
      </p>
      <p>
        <label htmlFor="date">Date</label>
           <input id="date" type="date" name="date" defaultValue={event? event.date : ''}  />
           {data && <small style={{ 'color': 'tomato' }}>{data.errors.date}</small>}
      </p>
      <p>
        <label htmlFor="description">Description</label>
           <textarea id="description" name="description" rows="5" defaultValue={event? event.description : ''}  />
           {data && <small style={{ 'color': 'tomato' }}>{data.errors.description}</small>}
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
           <button type='submit' disabled={isSubmitting}>{isSubmitting? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
