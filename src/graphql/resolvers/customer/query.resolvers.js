import { Customer } from '../../../datalayer/actuators'

const Query = {
  getCustomer: () => {
    return Customer.getCustomers()
  },
  getCostumerById: (_, { id }) => {
    return Customer.getById({id})
  }
}


export { Query }