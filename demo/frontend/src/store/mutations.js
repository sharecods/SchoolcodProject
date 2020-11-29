import {
    Login
} from './mutation-types'

export default {
    [Login] (state, payload) {
        console.log('mu_login')
        state.lists = payload
    }
}
