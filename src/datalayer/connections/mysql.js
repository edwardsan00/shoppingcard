import Sequelize from 'sequelize'
import { connections } from '../config'
console.log("===> Edward <===: connections", connections)
import CustomersModel from '../models/customer'
import OrdersModel from '../models/order'
import CartsModel from '../models/cart'
import CartAsProductsModel from '../models/cartasproducts'
import ProductsModel from '../models/product'
import OrderProductsModel from '../models/orderproducts'

const { DATA_BASE, HOST, PASSWORD, USER } = connections.mysql

export const sequelize = new Sequelize(DATA_BASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


const Customers = CustomersModel(sequelize, Sequelize)
const Orders = OrdersModel(sequelize, Sequelize)
const Carts = CartsModel(sequelize, Sequelize)
const CartAsProducts = CartAsProductsModel(sequelize, Sequelize)
const Products = ProductsModel(sequelize, Sequelize)
const OrderProducts = OrderProductsModel(sequelize, Sequelize)


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

  export {
    Customers,
    Orders,
    Carts,
    CartAsProducts,
    Products,
    OrderProducts
  }