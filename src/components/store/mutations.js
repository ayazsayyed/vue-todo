import Vue from "vue"
export default {
  // Set Initial Data
  SAVE_USER_DATA(state, payload) {
    state.userData = payload
  },
  ADD_NEW_TAG(state, tagName = payload) {
    state.allTags.push({ name: tagName, color: state.defaultTagColor })
  },
  CREATE_NEW_TODO(state, payload) {
    state.todos.unshift(payload)
  },
  MARK_AS_COMPLETE(state, key = payload) {
    

    if (state.todos[key].completed) {
      state.todos[key].completed = false;
    } else {
      state.todos[key].completed = true;
    }
  },
  DELETE_TODO(state, key = payload) {
    state.todos.splice(key, 1);
  },
  UPDATE_TOD_TAGS(state,payload) {
    state.todos.filter((e)=>{
      if(e.id == payload.id){
        e.tags = payload.tags
      }
    })
  },
  UPDATE_TODO(state, payload) {
    state.todos.forEach(element => {
      if (element.id == payload.id) {
        console.log('UPDATE ', element);
      }
    });
  },

  CHANGE_TAG_COLOR: (state, payload) => state.allTags[payload.key].color = payload.color,
  // Archive Task Board
  ARCHIVE_TASKBOARD(state, payload) {
    console.log('state ', state);
    console.log('payload ', payload);

    const board = state.boards.find(b => b.id == payload.boardId)
    const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
    Vue.swal({
      title: 'Are you sure?',
      text: "It will permanently deleted !",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function () {
      Vue.swal(
        'Deleted!',
        // state.boards.splice(boardIdx, 1),
        'Your file has been deleted.',
        'success'
      );
    });
    // state.boards.splice(boardIdx, 1);
    // board.archived = true
    // Vue.set(state.boards, boardIdx, board)
  },
}