import { Carts, Products } from '../../../datalayer/actuators'

const CartAsProduct = {
  cartId: ({ cartId }) =>
    Carts.getById({ id: cartId })
      .catch(error => {
        throw new Error(error)
      }),
  productId: ({ productId }) => 
    Products.getById({ id: productId })
      .catch(error => {
        throw new Error(error)
      })
}

export default { CartAsProduct }
