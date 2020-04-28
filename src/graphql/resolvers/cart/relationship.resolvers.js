import { Customer } from '../../../datalayer/actuators'

const Cart = {
  customerId: ({ customerId }) =>
    Customer.getById({ id: customerId })
      .catch(error => {
        throw new Error(error)
      })
}

export default { Cart }
