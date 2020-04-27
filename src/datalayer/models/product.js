export default (sequelize, DataType) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    description: {
      type: DataType.TEXT
    },
    image: {
      type: DataType.STRING,
      validate: {
        isUrl: true
      }
    },
    price: {
      type: DataType.DECIMAL(5, 2)
    },
    quantity: {
      type: DataType.INTEGER
    }
  })

  return Products
}