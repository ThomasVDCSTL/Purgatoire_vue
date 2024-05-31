import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import router from '@/router/index.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    saveState() {
      const state = JSON.stringify(this.$state)
      localStorage.setItem('userStore', state)
    },
    loadState() {
      const state = localStorage.getItem('userStore')
      if (state) {
        this.$patch(JSON.parse(state))
      }
    },
    getAuthUser() {
      let userId = 0
      if (localStorage.getItem('token') && this.token === null) {
        this.token = localStorage.getItem('token')
        userId = decode(this.token).sub
      }
      fetch(`https://fakestoreapi.com/users/${userId}`)
        .then((res) => res.json())
        .then((json) => {
          if (json) {
            console.log(json)
            this.user = json
            this.isAuthenticated = true
          } else {
            throw new Error('User not found')
          }
        })
        .catch((error) => {
          console.error('Error : ', error)
        })
    },
    login(username, password) {
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem('token', json.token)
          this.token = json.token
          const decoded = decode(json.token)
          if (decoded) {
            this.user = useFetch(`https://fakestoreapi.com/users/${decoded.sub}`)
            this.isAuthenticated = true;
            router.push('/');
          }
          console.log('decoded : ', decoded)
          console.log('user : ', this.user)
        })
    },
    logout() {
      this.user = null
      localStorage.removeItem('token')
      console.log('Le user est déco ! Pour preuve : ', this.user)
      this.isAuthenticated = false
    },
  },
  persist: true,
})
function decode(token) {
  return JSON.parse(
    decodeURIComponent(
      atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join(''),
    ),
  )
}
