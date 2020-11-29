import {
    FINDONE
} from './mutation-types'

import axios from 'axios'
//  import router form '../router'

export default {
    rememberid ({ commit }, a) {
        console.log('rememberid: ' + a)
        commit(FINDONE, a)
    },
}
