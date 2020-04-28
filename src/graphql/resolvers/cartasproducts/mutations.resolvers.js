import { CartAsProducts } from '../../../datalayer/actuators'

const Mutation = {
  addCart: (_, { addCart }) => {
    return CartAsProducts.addCart({ addCart })
  },
  deleteProduct: (_, { id }) => {
    return CartAsProducts.deleteProduct({ id })
  },
  updateProduct: (_, { id, addCart }) => {
    return CartAsProducts.updateProduct({ id, addCart })
  }
}

export { Mutation }