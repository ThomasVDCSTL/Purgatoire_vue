import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // Define the initial state of the store
  state: () => ({
    cart: [],
  }),
  // Define getters for the store
  getters: {
    // Calculate the total price of the items in the cart
    cartTotal() {
      return this.cart.reduce((acc, item) => acc + item.price, 0)
    },
    // Get the number of items in the cart
    itemCount() {
      return this.cart.length
    }
  },
  // Define actions for the store
  actions: {

    // Add an item to the cart
    addToCart(product, quantity = 1) {
      product.quantity = quantity
      this.cart.push(product)

    },
    // Remove an item from the cart
    removeFromCart(index) {
      this.cart.splice(index, 1)

    },


  },
  persist: true
})
