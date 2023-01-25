import { createSlice } from "@reduxjs/toolkit";


export const eventSlice = createSlice({
    name:"event",
    initialState :{ eventsArr : [] },
    reducers : {
        createEvent :  (state, action)=>{
            state.eventsArr.push(action.payload);
        },

        deleteEvent : (state, action)=>{
            let newEventsArr = state.eventsArr.filter((challenge)=>{
                return action.payload != challenge.challenge_name_input;
            });
            state.eventsArr = newEventsArr;
        }
    },
});

export const { createEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;