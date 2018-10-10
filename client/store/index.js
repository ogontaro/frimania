export const state = () => ({
  items: []
})

export const mutations = {
  get (state, text) {
    state.items = [
      {
        id: 1,
        name: 'test_name_01',
        price: 1000
      },
      {
        id: 2,
        name: 'test_name_02',
        price: 200
      }
    ]
  }
}
