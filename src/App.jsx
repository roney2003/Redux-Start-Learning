import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount, incrementAsync } from "./store/reducers/counterSlice";


function App() {
  
  const {value} = useSelector((state) => state.counter); // ye state ko return karta hai jo ki store me hai

  console.log(value); // ye value ko print karta hai aur ye likhna jaruri nahin hai ye sirf check karne ke liye likha hai

  const dispatch = useDispatch();  // ye dispatch ko return karta hai jo ki store me hai

  return (
    <>
    <div className=" left-2 top-1 w-75 h-32 bg-red-400 flex items-center justify-center">
        
        <h1 className="text-xl font-semibold">Counter: {value}</h1> 
         <br />
    </div>

    <div className="m-2 flex items-center justify-center gap-12">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>increment</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>decrement</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(incrementAsync(5))}>increment by 5</button>
      {/* payload ke through value ko change karta hai */}
    </div>
    </>
  );
}

export default App;