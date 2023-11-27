import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    uid: null,
}

export const uidSlice = createSlice({
    name: 'id',
    initialState: initialValues,
    reducers: {
        reducerSetId: (state, action) => {
            state.uid = action.payload.uid
        }
    }
})

export const {reducerSetId} = uidSlice.actions

export default uidSlice.reducer