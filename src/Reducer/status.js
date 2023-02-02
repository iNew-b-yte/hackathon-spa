import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "status",
    initialState: { statusArr: [] },
    reducers: {
        // statusCreator: (state, action) => {
        //     state.statusArr.push(action.payload);
        // },

        statusUpdater: (state, action) => {
            const { challengeId } = action.payload;

            let newStatusArr = state.statusArr.filter(challenge => {
                return challenge.challengeId !== challengeId;
            });

            state.statusArr = newStatusArr;
            console.log(state.statusArr);
            console.log(action.payload);
            state.statusArr.push(action.payload);
        }
    }
});

export const { statusUpdater } = statusSlice.actions;
export default statusSlice.reducer;