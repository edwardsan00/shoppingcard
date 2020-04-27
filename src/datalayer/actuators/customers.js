import { Customers as CustomersModel } from '../connections/mysql'

class Customers {
  async getCustomers() {
    return await CustomersModel.findAll()
  }
  async getById({ id }) {
    const [ customer ] = await CustomersModel.findAll({
      where: {
        id: id
      },
      raw: true,
      nest: true,
    })
    return customer
  }

  async createCustomer({ customer }) {
    return await CustomersModel.create(customer)
  }
}

export default new Customers()