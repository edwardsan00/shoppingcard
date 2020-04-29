import { Customer } from '../../../datalayer/actuators'

const Query = {
  getCustomer: () => {
    return Customer.getCustomers()
  },
  getCustumerById: (_, { id }) => {
    return Customer.getById({id})
  }
}


export { Query }