import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
    let {text, dueDate} = action;
    return {
        text,
        dueDate,
        id: Math.random(),
    }
}
const removebyId = (state =[], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('yeni reducer reminders =>', reminder)
    return reminders
}



const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER: 
        console.log('Yeni Görev Eklendi', reminders);
        reminders = [...state,reminder(action)];
        return reminders;
        case DELETE_REMINDER: 
        reminders = removebyId(state, action.id); 
        return reminders;
        default:  
        return state;
    }
}
export default reminders;