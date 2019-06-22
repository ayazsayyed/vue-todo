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
                <div class="task-name">{{taskDetail.title}}</div>
                <div class="task-actions">
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </div>
              </div>
              <div class="task-desc task-desc mt-3 text-right">
                <p class="text-primary add-link" @click="toggleAddDecriptionField">Add description</p>
                <textarea
                  v-if="showAddDecriptionField"
                  class="form-control"
                  rows="3"
                  placeholder="Write a dewscription text here ..."
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
                      id="tabs-icons-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-1"
                      role="tab"
                      aria-controls="tabs-icons-text-1"
                      aria-selected="true"
                    >
                      <i class="fa fa-calendar mr-2" aria-hidden="true"></i>Calendar
                    </a>
                  </li>
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
                  class="tab-pane fade task-calendar"
                  id="tabs-icons-text-1"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-1-tab"
                >
                  <div class="card shadow">
                    <div class="card-body">
                      <p class="description">Schedule your task by adding date and time</p>
                    </div>
                  </div>
                </div>
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
                        >
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
                        >
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
                        >
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
                        >
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
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="tags-wrapper">
                        <li class="tag-item">
                          <div class="color-option-icon">
                            <i class="fa fa-ellipsis-v" id="tagColorDropdoen1" aria-hidden="true"
                            data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false" 
                            ></i>
                            <div class="dropdown-menu" aria-labelledby="tagColorDropdoen1">
                              <div class="group-color-dialog"><a class="group-color-item" style="background: rgb(0, 200, 117);"></a><a class="group-color-item" style="background: rgb(156, 211, 38);"></a><a class="group-color-item" style="background: rgb(202, 182, 65);"></a><a class="group-color-item" style="background: rgb(255, 203, 0);"></a><a class="group-color-item" style="background: rgb(120, 75, 209);"></a><a class="group-color-item" style="background: rgb(162, 93, 220);"></a><a class="group-color-item" style="background: rgb(0, 134, 192);"></a><a class="group-color-item" style="background: rgb(87, 155, 252);"></a><a class="group-color-item" style="background: rgb(102, 204, 255);"></a><a class="group-color-item" style="background: rgb(187, 51, 84);"></a><a class="group-color-item" style="background: rgb(226, 68, 92);"></a><a class="group-color-item" style="background: rgb(255, 21, 138);"></a><a class="group-color-item" style="background: rgb(255, 90, 196);"></a><a class="group-color-item" style="background: rgb(255, 100, 46);"></a><a class="group-color-item" style="background: rgb(253, 171, 61);"></a><a class="group-color-item" style="background: rgb(127, 83, 71);"></a><a class="group-color-item" style="background: rgb(196, 196, 196);"></a><a class="group-color-item" style="background: rgb(128, 128, 128);"></a><a class="group-color-item" style="background: rgb(51, 51, 51);"></a></div>
                            </div>
                          </div>
                          <div class="tag-icon">
                            <i class="fa fa-tags" aria-hidden="true"></i>
                          </div>
                          <div class="tag-name">
                            <p>
                              <strong>Work</strong>
                            </p>
                          </div>
                          <div class="action">
                            <div class="custom-control custom-checkbox mb-3">
                              <input class="custom-control-input" id="customCheck1" type="checkbox">
                              <label class="custom-control-label" for="customCheck1">
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li class="tag-item">
                          <div class="color-option-icon">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                          </div>
                          <div class="tag-icon">
                            <i class="fa fa-tags" aria-hidden="true"></i>
                          </div>
                          <div class="tag-name">
                            <p>
                              <strong>Home</strong>
                            </p>
                          </div>
                          <div class="action">
                            <div class="custom-control custom-checkbox mb-3">
                              <input class="custom-control-input" id="customCheck2" type="checkbox">
                              <label class="custom-control-label" for="customCheck2">
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li class="tag-item">
                          <div class="color-option-icon">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                          </div>
                          <div class="tag-icon">
                            <i class="fa fa-tags" aria-hidden="true"></i>
                          </div>
                          <div class="tag-name">
                            <p>
                              <strong>Personal</strong>
                            </p>
                          </div>
                          <div class="action">
                            <div class="custom-control custom-checkbox mb-3">
                              <input class="custom-control-input" id="customCheck3" type="checkbox">
                              <label class="custom-control-label" for="customCheck3">
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="task-calender">
                <i class="fa fa-calendar datepicker" aria-hidden="true"></i>
              </div>
              <div class="task-priority">
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <div class="task-priority-dropdown dropdown-menu show">
                    <p>hello world</p>
                </div>
              </div>
              <div class="task-tasgs">
                <i class="fa fa-tags" aria-hidden="true"></i>
              </div>-->
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./utils/bus";
export default {
  name: "todoDetailModal",
  data() {
    return {
      taskDetail: {},
      showAddDecriptionField: false
    };
  },
  components: {
    Bus
  },
  methods: {
    toggleAddDecriptionField() {
      this.showAddDecriptionField = !this.showAddDecriptionField;
    },
    showModal(data) {
      this.taskDetail = data;
      $("#genericPopup").modal("show");
    }
  },
  mounted() {
    Bus.$on("showDetailedTaskModal", this.showModal);
  }
};
</script>

<style scoped lang="scss" >
.content-wrapper {
  //   height: 200px;
}
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
  li.tag-item {
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
.group-color-dialog{
  
    position: relative;
    padding: 5px;
    line-height: 0px;
    .group-color-item{
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
