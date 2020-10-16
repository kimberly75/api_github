import { persistCombineReducers } from 'redux-persist'
import { connectRouter } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import infos from './infos'
import loading from './loading'
import communication from './communication'

export default history => persistCombineReducers(
  {
    key: 'dynamo',
    storage,
    blacklist: ['infos']
  },
  {
    infos,
    loading,
    communication,
    router: connectRouter(history)
  }
)
