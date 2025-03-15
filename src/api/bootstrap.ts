import { TransactionRepositories, TransactionController } from './transactions'
class API {
  transaction = new TransactionController(new TransactionRepositories.Mock())
}

export default new API()
