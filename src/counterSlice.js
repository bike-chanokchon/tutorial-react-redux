import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter', // ชื่อของ state
    initialState: initialState, // state ที่เราต้องการจัดการ
    reducers: { // ฟังก์ชันำหรับจัดการค่าของ state โดยจะเป็นการกำหนเวิธีการที่ state ของเราจะถูก update
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions; // export ฟังก์ชันที่ใช้เปลี่ยนแปรงค่าของ counter

export default counterSlice.reducer;