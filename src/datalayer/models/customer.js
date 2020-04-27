import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

import OrdersModel from './order'
import CartsModel from './cart'

class CustomersModel extends Sequelize.Model { }

CustomersModel.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 15]
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      len: [4, 20]
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  getterMethods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  sequelize,
  modelName: 'customers'
})

CustomersModel.hasMany(OrdersModel, { as: 'OrdersModel', foreignKey: 'customerId' })
CustomersModel.hasOne(CartsModel, { as: 'CartsModel', foreignKey: 'customerId'})


export default CustomersModel