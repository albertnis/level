import 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { EDIT_CONTENT, EDIT_CONTENT__AJAX } from '../constants/actions'
import { receiveContentPush } from '../actions'

const proAction = (action$) => {
    return action$.filter(action => action)
}

// Debounce field editing for AJAX request
const editContentEpic = action$ => {
    return action$.ofType(EDIT_CONTENT)
        .debounceTime(2000)
        .mergeMap(action =>
                ajax.getJSON(`/contentpush?id_str=${action.id_str}&content=${action.content}`)
                .map(response => receiveContentPush(response))
        )

}

export default editContentEpic;
