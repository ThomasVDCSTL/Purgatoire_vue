import { defineStore } from 'pinia'
const api_url = import.meta.env.VITE_API_URL

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product, token) {
      fetch(api_url+'/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      })
        .then((res) => res.json())
        .then((json) => {
          this.products.push(json)
          console.log('Product added')
        })
    },
  },
})