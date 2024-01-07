const Reduce = (state, action) => {
  switch (action.type) {
      case "ADD":

      const ExistingItemIndex = state.items.findIndex(item => item.id === action.Malumot.id)
      const ExistingCart = state.items[ExistingItemIndex]

      let UpdateItem , UpdateItems

      if(ExistingCart){
        UpdateItem = {
          ...ExistingCart,
          amount:(+ExistingCart.amount) + (+action.Malumot.amount)
        }

        UpdateItems = [
          ...state.items
        ]

        UpdateItems[ExistingItemIndex] = UpdateItem
      }else {
        UpdateItems = state.items.concat(action.Malumot)
      }

      const UmumiyNarx = state.TotalAmount + action.Malumot.price * action.Malumot.amount

      return {
        items:UpdateItems,
        TotalAmount: UmumiyNarx,
      }
      
      case "Remove":

      const ExistingItemIndex1 = state.items.findIndex(item => item.id === action.id)
      const ExistingCart1 = state.items[ExistingItemIndex1]

      let UpdateItem1 , UpdateItems1 , UmumiyNarx1

      UmumiyNarx1 = state.TotalAmount - ExistingCart1.price

      if(ExistingCart1.amount === 1){
        UpdateItems1 = state.items.filter(item => item.id !== action.id)

      }else {
        UpdateItem1 = {
          ...ExistingCart1,
          amount:(+ExistingCart1.amount) -1
        }

        UpdateItems1 = [
          ...state.items
        ]

        UpdateItems1[ExistingItemIndex1] = UpdateItem1
      }

      return {
        items:UpdateItems1,
        TotalAmount: UmumiyNarx1,
      }

    default:return state;
  }
};

export default Reduce;
