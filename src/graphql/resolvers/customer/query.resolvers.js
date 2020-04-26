const costumers = [
  {
    id: 1,
    firstName: 'Jhon',
    lastName: 'Cena',
    email: 'jhoncena@gmail.com'
  }
]

const Query = {
  getCustomer: () => {
    return costumers
  }
}


export { Query }