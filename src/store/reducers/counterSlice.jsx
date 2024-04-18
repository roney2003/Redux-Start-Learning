import { createSlice } from "@reduxjs/toolkit";  // ye slice banata hai jo ki ek reducer hota hai wo bhi ek function hota hai jo ki state ko change karta hai

const initialState = {
    value: 0,   // ye state hai jo ki change hogi reducer ke through
    };

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {    // ye reducers hote hai jo ki store ke state ko change karte hai
        increment: (state) => {
            state.value += 1;     // ye state ko change karta hai
        },
        decrement: (state) => {
            state.value -= 1;       // ye state ko change karta hai
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            /*
            setTimeout(() => {
                state.value += action.payload;   // humesha yaad rakhna ki asyc code directly state ko change nahi kar sakta iske liye hum wrapper function ka use karte hai
            },2000);
            */
            state.value += action.payload;  // ye state ko change karta hai
        },
    },
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;  // ye actions hote hai jo ki state ko change karne ke liye use hote hai

export const incrementAsync = (amount) => (dispatch) => {    // ye ek async function hai jo ki state ko change karta hai 2 seconds ke baad
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
}

export default counterSlice.reducer;  // ye reducer ko return karta hai jo ki state ko change karta hai
