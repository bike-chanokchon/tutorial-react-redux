import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux' // สำหรับนำมาครอบ element เพื่อทำการสร้าง store ให้ทุก element ใช้งาน state ได้

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ส่ง store ที่เก็บ state ของ application ไปให้ Provider */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
)
