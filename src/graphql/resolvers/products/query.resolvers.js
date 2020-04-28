import { Products } from '../../../datalayer/actuators'

const Query = {
  getProducts: (_, { search = ''}) => {
    return Products.getProducts({ search })
  }
}

export { Query }