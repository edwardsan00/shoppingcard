import { CartAsProducts } from '../../../datalayer/actuators'

const Query = {
  getCartAsProducts: (_, { cartId }) => {
    return CartAsProducts.getByCart({ cartId })
  }
}

export { Query }