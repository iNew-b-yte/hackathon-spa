import { createSlice } from "@reduxjs/toolkit";


export const eventSlice = createSlice({
    name:"event",
    initialState :{ eventsArr : [] },
    reducers : {
        createEvent :  (state, action)=>{
            state.eventsArr.push(action.payload);
        },

        editEvent : (state, action)=>{            
            const {name , data} = action.payload;
            
            let newEventsArr = state.eventsArr.map((challenge)=>{
                if(name === challenge.challenge_name_input){
                    return {...data };
                }
                return challenge;
            })
            state.eventsArr = newEventsArr;            
        },

        deleteEvent : (state, action)=>{
            let newEventsArr = state.eventsArr.filter((challenge)=>{
                return challenge.challenge_name_input !== action.payload;
            });
            state.eventsArr = newEventsArr;
        }
    },
});

export const { createEvent, editEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;