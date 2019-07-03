const INITIAL_DATA_URL = "https://raw.githubusercontent.com/ayazsayyed/Vue-Projects/master/src/components/asana/boards.json"
import axios from "axios"

export default {
        async userData({ commit }, payload) {
        commit("SAVE_USERDATA", payload)
    },

    // async fetchData({ commit }) {
    //     console.log('asd')
    //     return axios.get(INITIAL_DATA_URL).then(res => {
    //         commit("SET_INITIAL_DATA", res.data)
    //         console.log(res.data)
    //     })
    // },
    // async saveTaskBoard({ commit }, payload) {
    //     commit("SAVE_TASKBOARD", payload)
    // },
    // async archiveTaskBoard({ commit }, payload) {
    //     commit("ARCHIVE_TASKBOARD", payload)
    //   },
}