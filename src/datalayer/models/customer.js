export default (sequelize, DataType) => {
  const Customers = sequelize.define('customers', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        len: [2, 15]
      }
    },
    lastName: {
      type: DataType.STRING,
      validate: {
        len: [4, 20]
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  }, {

  })

  Customers.associate = models => {
    Customers.hasMany(models.Orders)
  }

  return Customers
}