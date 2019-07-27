<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="genericPopup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Task Detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="content-wrapper">
              <div class="task-wrapper">
                <div class="task-name" v-if="showTitle">{{taskDetail.title}}</div>
                <input
                  type="text"
                  class="form-control"
                  :value="taskDetail.title"
                  v-if="showEditTodoTitleField"
                  @blur="saveTodoTitle"
                />
                <div class="task-actions">
                  <i
                    class="fa fa-edit"
                    aria-hidden="true"
                    @click="editTodoTitle"
                    v-if="showTitleBtn"
                  ></i>
                </div>
              </div>
              <div class="task-desc task-desc mt-3 text-right">
                <div
                  class="task-description text-left small"
                  v-if="showDescription"
                >{{taskDetail.description}}</div>
                <p
                  class="text-primary add-link"
                  @click="editTodoDescription"
                  v-if="showDescriptionBtn"
                >{{taskDetail.description ? 'Edit ' : 'Add '}}description</p>
                <textarea
                  v-if="showAddDecriptionField"
                  class="form-control"
                  rows="3"
                  placeholder="Write a dewscription text here ..."
                  @blur="saveTodoDescription"
                  :value="taskDetail.description"
                ></textarea>
              </div>
            </div>
            <div class="task-features">
              <div class="nav-wrapper">
                <ul
                  class="nav nav-pills nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-2"
                      role="tab"
                      aria-controls="tabs-icons-text-2"
                      aria-selected="false"
                    >
                      <i class="fa fa-exclamation" aria-hidden="true"></i>
                      <i class="fa fa-exclamation" aria-hidden="true"></i>
                      <i class="fa fa-exclamation mr-2" aria-hidden="true"></i>Priority
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-3"
                      role="tab"
                      aria-controls="tabs-icons-text-3"
                      aria-selected="false"
                    >
                      <i class="fa fa-tags mr-2" aria-hidden="true"></i>Tags
                    </a>
                  </li>
                </ul>
              </div>

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade task-priority"
                  id="tabs-icons-text-2"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-2-tab"
                >
                  <div class="card shadow">
                    <div class="card-body">
                      <p class="description">Set priority of your task</p>
                      <div class="custom-control custom-radio mb-2">
                        <input
                          name="custom-radio-1"
                          class="custom-control-input"
                          id="customRadio1"
                          type="radio"
                          v-model="taskDetail.priority"
                          value="High"
                        />
                        <label class="custom-control-label high" for="customRadio1">
                          <div class="icon-wrapper">
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                          </div>High
                        </label>
                      </div>
                      <div class="custom-control custom-radio mb-2">
                        <input
                          name="custom-radio-1"
                          class="custom-control-input"
                          id="customRadio2"
                          type="radio"
                          v-model="taskDetail.priority"
                          value="Medium"
                        />
                        <label class="custom-control-label medium" for="customRadio2">
                          <div class="icon-wrapper">
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                          </div>Medium
                        </label>
                      </div>
                      <div class="custom-control custom-radio mb-2">
                        <input
                          name="custom-radio-1"
                          class="custom-control-input"
                          id="customRadio3"
                          type="radio"
                          v-model="taskDetail.priority"
                          value="Low"
                        />
                        <label class="custom-control-label low" for="customRadio3">
                          <div class="icon-wrapper">
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                          </div>Low
                        </label>
                      </div>
                      <div class="custom-control custom-radio mb-2">
                        <input
                          name="custom-radio-1"
                          class="custom-control-input"
                          id="customRadio4"
                          type="radio"
                          v-model="taskDetail.priority"
                          value="None"
                        />
                        <label class="custom-control-label none" for="customRadio4">
                          <div class="icon-wrapper">
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                            <i class="fa fa-exclamation" aria-hidden="true"></i>
                          </div>None
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade task-tags"
                  id="tabs-icons-text-3"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-3-tab"
                >
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="new-tag">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                placeholder="Enter tag"
                                autocomplete="off"
                                v-model="searchText"
                                v-on:keydown.enter="createNewTag(searchText)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="tags-wrapper">
                        <li class="tag-item" v-for="(tag, key) in searchTag" :key="key">
                          <div class="color-option-icon">
                            <i
                              class="fa fa-ellipsis-v"
                              id="tagColorDropdoen1"
                              aria-hidden="true"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></i>
                            <div class="dropdown-menu" aria-labelledby="tagColorDropdoen1">
                              <div class="group-color-dialog">
                                <a
                                  class="group-color-item"
                                  v-for="(color, index) in colorPalete"
                                  :key="index"
                                  :style="{background:color}"
                                  @click="setTagColor(key, $event)"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="tag-icon">
                            <i class="fa fa-tags" aria-hidden="true" :style="{color:tag.color}"></i>
                          </div>
                          <div class="tag-name">
                            <p>
                              <strong>{{tag.name}}</strong>
                            </p>
                          </div>
                          <div class="action">
                            <div class="custom-control custom-checkbox mb-3">
                              <input
                                class="custom-control-input"
                                :id="key"
                                type="checkbox"
                                v-model="taskDetail.tags"
                                :value="tag"
                              />
                              <label class="custom-control-label" :for="key">
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          v-if="searchTag.length<=0"
                          class="tag-item mark"
                          @click="createNewTag(searchText)"
                        >Create "{{searchText}}"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveTaskData">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./utils/bus";
import ClickOutside from "vue-click-outside";
import vueStore from "./store/index";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "todoDetailModal",
  data() {
    return {
      taskDetail: {},
      showAddDecriptionField: false,
      showEditTodoTitleField: false,
      showTitle: true,
      showTitleBtn: true,
      showDescription: true,
      showDescriptionBtn: true,
      taskPriority: null,
      searchText: "",
    };
  },
  components: {
    Bus
  },
  directives: {
    ClickOutside
  },
  computed: {
    ...mapGetters(["colorPalete", "getAllTags"]),

    // searchTag() {
    //   return this.tags.filter(tag => {
    //     return tag.name.toLowerCase().includes(this.searchText.toLowerCase());
    //   });
    // }
    searchTag() {
      return vueStore.getters.filterTags(this.searchText);
    }
  },

  methods: {
    ...mapActions(["addNewTag", "changeTagColor", "updateTodoTags"]),
    saveTaskData() {
      if (this.taskDetail.priority) {
        if (this.taskDetail.priority === "High")
          this.taskDetail.priorityColor = "#f5365c";
        if (this.taskDetail.priority === "Medium")
          this.taskDetail.priorityColor = "#ffbb33";
        if (this.taskDetail.priority === "Low")
          this.taskDetail.priorityColor = "#5e72e4";
        if (this.taskDetail.priority === "None")
          this.taskDetail.priorityColor = "#11cdef";
      }
      this.updateTodoTags({
        id: this.taskDetail.id,
        tags: this.taskDetail.tags
      });
      $("#genericPopup").modal("hide");
    },
    editTodoTitle() {
      this.showEditTodoTitleField = !this.showEditTodoTitleField;
      this.showTitle = !this.showTitle;
      this.showTitleBtn = !this.showTitleBtn;
    },
    saveTodoTitle(e) {
      if (e.target.value.trim().length > 0) {
        this.taskDetail.title = e.target.value.trim();
        this.showEditTodoTitleField = !this.showEditTodoTitleField;
        this.showTitle = !this.showTitle;
        this.showTitleBtn = !this.showTitleBtn;
      }
    },
    editTodoDescription() {
      this.showDescriptionBtn = !this.showDescriptionBtn;
      this.showAddDecriptionField = !this.showAddDecriptionField;
      this.showDescription = !this.showDescription;
    },
    saveTodoDescription(e) {
      this.taskDetail.description = e.target.value.trim();
      this.showAddDecriptionField = !this.showAddDecriptionField;
      this.showDescriptionBtn = !this.showDescriptionBtn;
      this.showDescription = !this.showDescription;
    },
    createNewTag(newTagName) {
      this.addNewTag(newTagName);
      this.searchText = "";
    },
    setTagColor(key, $event) {
      this.changeTagColor({ key, color: $event.target.style.backgroundColor });
    },
    setTaskPriority() {},
    resetModal() {
      this.showAddDecriptionField = false;
      this.showEditTodoTitleField = false;
      this.showTitle = true;
      this.showTitleBtn = true;
      this.showDescription = true;
      this.showDescriptionBtn = true;
      this.taskPriority = null;
      this.searchText = "";
      $(".tab-pane, .nav-item a").removeClass("active show");
    },
    showModal(data) {
      this.taskDetail = data;
      this.resetModal();
      $("#genericPopup").modal("show");
    }
  },
  mounted() {
    Bus.$on("showDetailedTaskModal", this.showModal);
  }
};
</script>

<style scoped lang="scss" >
.task-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .task-name {
    flex: auto;
  }
  .task-actions {
    i {
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.custom-control {
  .icon-wrapper {
    width: 40px;
    display: inline-block;
    text-align: center;
  }
  .high i {
    color: #f5365c;
  }
  .medium i {
    color: #ffbb33;
  }
  .low i {
    color: #5e72e4;
  }
  .none i {
    color: #37474f;
  }
}
.task-desc {
  p.add-link {
    font-size: 15px;
    text-decoration: underline;
    font-weight: 500;
    display: inline;
    cursor: pointer;
  }
}
// #tabs-icons-text-3 {
//   .card-body {
//     padding: 1.7rem;
//   }
// }
ul.tags-wrapper {
  padding-left: 0;
  li.tag-item.mark {
    cursor: pointer;
  }
  li.tag-item {
    .custom-control-label{
      vertical-align: baseline;
    }
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 30px;
    position: relative;
    padding-left: 25px;
    cursor: default;
    &:hover {
      .color-option-icon {
        display: block;
      }
    }
    .color-option-icon {
      position: absolute;
      left: 8px;
      display: none;
      cursor: pointer;
    }
    .tag-icon {
      margin-right: 10px;
    }
    .tag-name {
      flex: 1;
      p {
        margin: 0;
      }
    }
    .action {
      .custom-checkbox {
        padding: 0;
        margin: 0;
        .custom-control-label::before,
        .custom-control-label::after {
          top: -10px;
        }
        span {
          display: none;
        }
      }
    }
  }
}
.group-color-dialog {
  position: relative;
  padding: 5px;
  line-height: 0px;
  .group-color-item {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    transition: opacity 0.1 ease;
    margin: 3px;
  }
}
</style>
