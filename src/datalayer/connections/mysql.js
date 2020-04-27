import Sequelize from 'sequelize'
import { connections } from '../config'

const { DATA_BASE, HOST, PASSWORD, USER } = connections.mysql

const sequelize = new Sequelize(DATA_BASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Models created')
  })
  .catch(error => {
    console.log('Failed models created', error)
  })

export default sequelize