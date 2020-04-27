import Sequelize from 'sequelize'
import sequelize from '../connections/mysql'

class ProductsModel extends Sequelize.Model { }

ProductsModel.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }    
  },
  price: {
    type: Sequelize.DECIMAL(5, 2)
  },
  quantity: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'products'
})

export default ProductsModel