import { Customer } from '../../../datalayer/actuators'

const Order = {
  customerId: ({ customerId }) =>
    Customer.getById({ id: customerId })
      .catch(error => {
        throw new Error(error)
      })
}

export default { Order }
