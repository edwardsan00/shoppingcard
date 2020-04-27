export default (sequelize, DateType) => {
  const OrderProducts = sequelize.define('orderproducts', {
    id: {
      type: DateType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    orderId: {
      type: DateType.INTEGER
    },
    productId: {
      type: DateType.INTEGER
    },
    quantity: {
      type: DateType.INTEGER
    },
    total: {
      type: DateType.DECIMAL(10, 2)
    }
  })

  OrderProducts.associate = models => {
    CartAsProducts.hasMany(models.Carts),
    CartAsProducts.hasMany(models.Products)
  }

  return OrderProducts
}