import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

// import OrdersModel from './order'
// import ProductsModel from './product'

class OrderProductsModel extends Sequelize.Model { }

OrderProductsModel.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    autoIncrement: true
  },
  orderId: {
    type: Sequelize.UUID
  },
  productId: {
    type: Sequelize.UUID
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.DECIMAL(10, 2)
  }
}, {
  sequelize,
  modelName: 'ordersproducts'
})

// OrderProductsModel.hasMany(ProductsModel, { as: 'ProductsModel', foreignKey: 'productId'})
// OrderProductsModel.belongsTo(OrdersModel, { as: 'OrdersModel', foreignKey: 'orderId' })


export default OrderProductsModel