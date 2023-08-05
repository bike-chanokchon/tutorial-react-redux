import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
// useSelector ใช้อ่านข้อมูลจาก store
// useDispatch ใช่เรียกใช้ action เพื่อให้เข้าไปจัดการกับ state

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2>Start editing to see some magic</h2>
      <h1>{ count }</h1>
      <button aria-label='Increment value' onClick={() => dispatch(increment())}>increment</button>
      <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
