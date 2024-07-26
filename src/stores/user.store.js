import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'
import router from '@/router/index.js'
const api_url = import.meta.env.VITE_API_URL


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
        userId = (this.token).sub
      }
      fetch(api_url+`/users/${userId}`)
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
    register(username, password, email) {
        fetch(api_url+'/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            }),
            })
            .then((res) => res.json())
            .then((json) => {
                console.log('json : ', json)
                this.login(username, password)
            })
    },
    login(email, password) {
      fetch(api_url+'/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
      })
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          console.log(json.access_token)
          localStorage.setItem('token', json.access_token)
          this.token = json.access_token
          fetch(api_url+`/user`,{
            method: 'GET',
            headers :{
              Authorization: `Bearer ${this.token}`,
              'Content-Type': 'application/json',
            }})
            .then((res) => res.json())
            .then((json) => {
              console.log(json)
              this.isAuthenticated = true;
              this.user = json})
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
// function (token) {
//   return JSON.parse(
//     URIComponent(
//       atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
//         .split('')
//         .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
//         .join(''),
//     ),
//   )
// }
