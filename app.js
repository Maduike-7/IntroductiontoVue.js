const app = Vue.createApp({
    data() {
        return {
            firstName: 'Elvis',
            lastName: 'Edeh',
            email: 'edehelvis8@gmail.com',
            gender: 'male',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e9jZl8wtXfZe3i4is1nyVHnnC8B_BVthSGzzBDPqsbR1mo243j_NN3HcHYUtRtkMdXU&usqp=CAU',
        }
    },
    methods: {
  async getUser() {
    const res = await fetch('https://randomuser.me/api')
    const { results } = await  res.json()

    // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount('#app')