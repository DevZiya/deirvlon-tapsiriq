import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
      products:[],
      totalPrice:0
  },
  reducers: {
   addToCart:(state,action)=>{
    const productIndex=state.products.findIndex(find=>find.id === action.payload.id)
    if(productIndex >= 0){
        state.products[productIndex].quantity +=1
    }else{
        const cart = {...action.payload,quantity:1}
        state.products.push(cart)
    }
   },
   decres:(state,action)=>{
    const productIndex=state.products.findIndex(find=>find.id === action.payload.id)
    if(state.products[productIndex].quantity > 1){
        state.products[productIndex].quantity -=1
    }else if(state.products[productIndex].quantity === 1){
        const newState = state.products.filter(filter=>filter.id !== action.payload.id)
        state.products = newState
    }
   },
   totalAmmount:state=>{
      let {total} = state.products.reduce(
          (cartTotal,cartItem)=>{
              const {quantity,price} =cartItem
              const itemTotal = quantity * price

              cartTotal.total += itemTotal

              return cartTotal
          },
          {
              total:0
          }
      );
      total=parseFloat(total.toFixed(2))
      state.totalPrice = total
   }

  },
})

export const { addToCart,decres,totalAmmount } = cartSlice.actions

export default cartSlice.reducer