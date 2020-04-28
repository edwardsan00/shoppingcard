export default (sequelize, DataType) => {
  const Carts = sequelize.define('carts', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    customerId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    status: {
      type: DataType.ENUM,
      values: ['actived', 'abandoned'],
      defaultValue: 'actived'
    }
  })

  Carts.associate = models => {
    Carts.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    }),
    Carts.belongsTo(models.Orders, {
      foreignKey: {
        allowNull: false
      }
    })
  }


  return Carts
}