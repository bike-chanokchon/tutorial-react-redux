// config

import { configureStore } from "@reduxjs/toolkit" // ทำให้สร้าง store ได้
import counterReducer from './counterSlice';

// เอาไว้เก็บ state ของ appcation ของเรา โดย Redux จะต้องมี store แค่ 1 ตัว แล้วนำทุก state มาไว้ที่นี่
export const store = configureStore({
    reducer: {
        // กำหนด slice เพื่อบอก store ว่าเราจะใช้ slice reducer function ตัวนี้ในการจัดการ การอัพเดท state
        counter: counterReducer // reducer ก็จะรู้แล้วว่ามี function ตัวไหนบ้างที่เราจะใช้ในการจัดการ state
    }
})
