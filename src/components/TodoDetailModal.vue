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
            </div>
            <div class="task-features">
              <div class="task-calender">
                <i class="fa fa-calendar datepicker" aria-hidden="true"></i>
              </div>
              <div class="task-priority">
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <i class="fa fa-exclamation" aria-hidden="true"></i>
                <i class="fa fa-exclamation" aria-hidden="true"></i>
              </div>
              <div class="task-tasgs">
                <i class="fa fa-tags" aria-hidden="true"></i>
              </div>
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
      taskDetail: {}
    };
  },
  components: {
    Bus
  },
  methods: {
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
.modal-body {
  padding-bottom: 0;
}
.content-wrapper {
  height: 200px;
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
.task-features {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ced3d4;
  i {
    cursor: pointer;
    font-size: 18px;
  }
  .fa.fa-exclamation {
    letter-spacing: -3px;
  }
  & > *{
      flex-grow: 1;
    text-align: center;
    border-right: 1px solid #ced3d4;
    &:last-child{
    border-right: 0;   
    }
  }
}

</style>
