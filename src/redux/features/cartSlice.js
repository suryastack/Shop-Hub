import { createSlice } from "@reduxjs/toolkit";
import { Slide, toast } from 'react-toastify';

const initialState = {
    products:JSON.parse(localStorage.getItem('products')) || []
}

const cartSlice = createSlice({
    name:'cart',

    initialState,

    reducers:{
        addCart(state,action){
            const alreadyExists = state.products.find(
                products => products.id === action.payload.id
            )
            if(!alreadyExists){
                state.products.push(action.payload)
                localStorage.setItem('products',JSON.stringify(state.products))
            }
        },
        removeCart(state,action){
            state.products = state.products.filter(
                products => products.id !== action.payload
            )
            localStorage.setItem('products',JSON.stringify(state.products))
        },
        clearCart(state){
            state.products = []
            localStorage.removeItem('products')
        },
        addToast(){
            toast.success('Added To Cart ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        removeToast(){
            toast.error('Item Removed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }
})

export const {addCart,removeCart,clearCart,addToast,removeToast} = cartSlice.actions
export default cartSlice.reducer