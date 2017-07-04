import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { EDIT_CONTENT, EDIT_CONTENT__AJAX, LOGIN__REQUEST } from '../constants/actions'
import { receiveContentPush, receiveLogin } from '../actions'

const proAction = (action$) => {
    return action$.filter(action => action)
}

// Debounce field editing for AJAX request
const authEpic = action$ => {
    return action$.ofType(LOGIN__REQUEST)
        .mergeMap(action =>
                  ajax.post(`/login?username=${action.username}&password=${action.password}`)
                  .map(response => receiveLogin(response.response)))


}

export default authEpic
