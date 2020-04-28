export default (sequelize, DataType) => {
  const Orders = sequelize.define('orders', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    customerId: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    paymentType: {
      type: DataType.ENUM,
      values: ['visa', 'mastercard'],
      allowNull: false
    },
    status: {
      type: DataType.ENUM,
      values: ['pending', 'complete', 'cancelled'],
      defaultValue: 'pending'
    },
    total: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false
    }
  })

  Orders.associate = models => {
    Orders.belongsTo(models.Customers, { 
      foreignKey: {
        allowNull: false
      }
     })
  }

  return Orders
}