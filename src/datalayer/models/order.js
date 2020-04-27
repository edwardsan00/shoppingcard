import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

// import CustomerModel from './customer'
// import OrderProducts from './orderproducts'

class OrdersModel extends Sequelize.Model { }

OrdersModel.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    autoIncrement: true
  },
  customerId: {
    type: Sequelize.UUID
  },
  paymentType: {
    type: Sequelize.ENUM,
    values: ['visa', 'mastercard']
  },
  status: {
    type: Sequelize.ENUM,
    values: ['pending', 'complete', 'cancelled']
  },
  total: {
    type: Sequelize.DECIMAL(10, 2)
  }
}, {
  sequelize,
  modelName: 'orders'
})

// OrdersModel.belongsTo(CustomerModel, { as: 'CustomerModel', foreignKey: 'customerId' })
// OrdersModel.hasOne(OrderProducts, { as: 'OrderProducts', foreignKey: 'orderId' })

export default OrdersModel