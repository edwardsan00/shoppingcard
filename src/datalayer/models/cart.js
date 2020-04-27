import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

// import CustomersModel from './customer'
// import CartAsProductsModel from './cartasproducts'

class CartsModel extends Sequelize.Model { }

CartsModel.init({
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
  status: {
    type: Sequelize.ENUM,
    values: ['actived', 'abandoned']
  }
}, {
  sequelize,
  modelName: 'carts'
})

// CartsModel.belongsTo(CustomersModel, { as: 'CustomersModel', foreignKey: 'customerId' })
// CartsModel.hasOne(CartAsProductsModel, { as: 'CartAsProductsModel', foreignKey: 'cartId' })


export default CartsModel