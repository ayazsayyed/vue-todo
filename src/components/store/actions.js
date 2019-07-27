const INITIAL_DATA_URL = "https://raw.githubusercontent.com/ayazsayyed/Vue-Projects/master/src/components/asana/boards.json"
import axios from "axios"

export default {
  async saveUserData({
    commit
  }, payload) {
    commit("SAVE_USER_DATA", payload)
  },
  async createNewTodo({
    commit
  }, payload) {
    commit("CREATE_NEW_TODO", payload)
  },
  async addNewTag({
    commit
  }, payload) {
    commit("ADD_NEW_TAG", payload)
  },
  async markAsComplete({
    commit
  }, payload) {
    commit("MARK_AS_COMPLETE", payload)
  },
  async updateTodo({
    commit
  }, payload) {
    commit("UPDATE_TODO", payload)
  },
  async deleteTodo({
    commit
  }, payload) {
    commit("DELETE_TODO", payload)
  },
  async changeTagColor({
    commit
  }, tag) {
    commit('CHANGE_TAG_COLOR', tag);
  },
  async updateTodoTags({
    commit
  }, payload) {
    commit('UPDATE_TOD_TAGS', payload);
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
