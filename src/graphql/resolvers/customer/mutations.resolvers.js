import { Customer } from '../../../datalayer/actuators'

const Mutation = {
  createCustomer: (_, { customer }) => {
    return Customer.createCustomer({ customer })
  }
} 

export { Mutation }