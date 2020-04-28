export default (sequelize, DataType) => {
  const CartAsProducts = sequelize.define('cartasproducts', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    cartId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataType.INTEGER
    },
    quantity: {
      type: DataType.INTEGER,
      allowNull: false
    },
    total: {
      type: DataType.DECIMAL(10, 2),
      allowNull: false
    }
  })

  CartAsProducts.associate = models => {
    CartAsProducts.hasMany(models.Carts),
    CartAsProducts.hasMany(models.Products)
  }


  return CartAsProducts
}