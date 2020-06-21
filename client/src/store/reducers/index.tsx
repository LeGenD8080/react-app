import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import home from './home'
import mine from './mine'
import profile from './profile'
import history from '@/history'
import { CombinedState } from '@/typings/state'

let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  home,
  mine,
  profile,
  router: connectRouter(history)
}
const rootReducer:Reducer<CombinedState, AnyAction> = combineReducers<CombinedState>(reducers)

// 迭代reducers所有的key reducers[key]是reducer类型 ReturnType是返回此函数的返回值类型
// export type CombinedState = {
//   [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }

export default rootReducer