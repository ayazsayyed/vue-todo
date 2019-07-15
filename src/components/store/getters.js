export default {

  filterTags: state => {
    return (id) => state.allTags.filter(tag => {
      if (tag)
        return tag.name.toLowerCase().includes(id.toLowerCase());
    });

    
  },

  colorPalete: state => state.colorPalete,
  getTodos: state => state.todos,
  getUserData: state => state.userData,
  // getAllTags: state => state.allTags,

}