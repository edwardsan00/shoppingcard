import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

// import CartsModel from './cart'
// import ProductsModel from './product'

class CartAsProductsModel extends Sequelize.Model { }

CartAsProductsModel.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    autoIncrement: true
  },
  cartId: {
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
  modelName: 'cartasproducts'
})

// CartAsProductsModel.hasMany(ProductsModel, { as: 'ProductsModel', foreignKey: 'productId' })
// CartAsProductsModel.belongsTo(CartsModel, { as: 'CartsModel', foreignKey: 'cartId' })


export default OrderProductsModel