export default (sequelize, DataType) => {
  const CartAsProducts = sequelize.define('cartasproducts', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    cartId: {
      type: DataType.UUID
    },
    productId: {
      type: DataType.UUID
    },
    quantity: {
      type: DataType.INTEGER
    },
    total: {
      type: DataType.DECIMAL(10, 2)
    }
  })

  CartAsProducts.associate = models => {
    CartAsProducts.hasMany(models.Carts),
    CartAsProducts.hasMany(models.Products)
  }


  return CartAsProducts
}