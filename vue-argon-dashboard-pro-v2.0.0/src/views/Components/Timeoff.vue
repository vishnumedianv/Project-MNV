<template>
  <div class="container">
    <!-- leave header -->
    <div class="leave-header">
      <div class="leave">
        <div class="flex-fill"><h3>sick leaves</h3></div>
        <div class="flex-fill"><p style="margin: 0">10 Days</p></div>
      </div>
      <div class="leave">
        <div class="flex-fill"><h3>Unpaid leaves</h3></div>
        <div class="flex-fill"><p style="margin: 0">10 Days</p></div>
      </div>
    </div>

    <!-- leave body -->
    <!-- header -->
    <div class="leave-body">
      <div class="leave-body-header">
        <div class="logo-design"><i class="fa fa-calendar text-white"></i></div>
        <div><h3>My Requests</h3></div>
      </div>

      <!-- second part -->
      <div class="select-filter">
        <div>
          <el-select v-model="selects.simple" placeholder="Select">
            <el-option
              v-for="option in selects.languages"
              :key="option.label"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>
        <div>
          <el-select v-model="selects.simple" placeholder="Select">
            <el-option
              v-for="option in selects.languages"
              :key="option.label"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          />
        </div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          />
        </div>

        <div>
          <el-button type="success" @click="showModal = true" solid
            >New Request</el-button
          >
          <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal"></div>
          </transition>

          <transition name="slide" appear>
            <div class="timeOffModal" v-if="showModal">
              <h2>New Request</h2>
              <hr style="margin: 20px 0" />
              <div class="timeoffinput">
                <div>
                  <i class="fa fa-plane-up"></i>
                </div>
                <div class="flex-fill">
                  <el-select
                    class="w-100"
                    v-model="selects.simple"
                    placeholder="Select Type"
                  >
                    <el-option
                      v-for="option in selects.leaves"
                      :key="option.label"
                      :label="option.label"
                      :value="option.value"
                    />
                  </el-select>
                </div>
              </div>
              <div class="timeoffinput-radio">
                <div><i class="fa-regular fa-clock"></i></div>
                <div style="padding-top: 3px">
                  <el-radio-group v-model="radio1">
                    <el-radio label="1" size="large">Single Day</el-radio>
                    <el-radio label="2" size="large">Multiple Day</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="timeoffinput-text">
                <div><i class="fa fa-bars-staggered"></i></div>
                <div class="flex-fill">
                  <el-form-item label="">
                    <el-input placeholder="Note(Optional)" type="textarea" />
                  </el-form-item>
                </div>
              </div>
              <div class="timeoffinput-text">
                <div><i class="fa-solid fa-paperclip"></i></div>
                <div>
                  <el-upload
                    drag
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    multiple
                    class="customUpload"
                  >
                    <i
                      class="fa fa-cloud-arrow-up"
                      style="color: lightgreen"
                    ></i>
                    <div class="el-upload__text">
                      Drop file here or <em>click to upload</em>
                    </div>
                    <template #tip>
                      <div class="el-upload__tip">
                        Max file size : 5MB. File format : pdf, docx, png, jpeg,
                        ...
                      </div>
                    </template>
                  </el-upload>
                </div>
                <div>
                  <p style="margin-top: 10px">(Optinal)</p>
                </div>
              </div>

              <div class="timeoffinput-radio">
                <div>
                  <i class="fa-regular fa-bell" style="padding-top: 10px"></i>
                </div>
                <div class="linemanger">
                  <div class="flex-fill">
                    <el-input
                      placeholder="Add member to notify them"
                      :prefix-icon="Search"
                    />
                  </div>

                  <div class="timeoffinput">
                    <div>
                      <p
                        style="
                          margin: 0;
                          font-size: 13px;
                          font-family: Sans-serif;
                        "
                      >
                        This request will be sent to your line manager
                      </p>
                    </div>
                    <div class="timeoffinput-user-dp">
                      <div>
                        <img
                          class="img-dp"
                          src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6366184c704381002693b1b8/Fi83N4EWLSMpPh58wQQCE.jpeg"
                        />
                      </div>
                      <div><h5 style="margin: 0">sdsdsds</h5></div>
                    </div>
                  </div>
                </div>
              </div>
              <el-button type="success" @click="showModal = false" plain
                >Submit</el-button
              >
              <el-button @click="showModal = false">Close</el-button>
            </div>
          </transition>
        </div>
      </div>

      <!-- third part -->
      <div class="leave-table">
        <el-table
          class="table-responsive table-flush"
          header-row-class-name="thead-light"
          :data="projects"
        >
          <el-table-column label="From" min-width="140px" prop="from" sortable>
            <template v-slot="{ row }">
              <div class="media align-items-center">
                <div class="media-body">{{ row.from }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="To" prop="to" min-width="140px">
          </el-table-column>
          <el-table-column label="Total" prop="total" min-width="140px">
          </el-table-column>
          <el-table-column label="Type" prop="type[0]" min-width="140px">
          </el-table-column>
          <el-table-column
            label="status"
            min-width="170px"
            prop="status"
            sortable
          >
            <template v-slot="{ row }">
              <badge class="badge-dot mr-4" type="">
                <i :class="`bg-${row.statusType}`"></i>
                <span class="status">{{ row.status }}</span>
              </badge>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import projects from "../Tables/projects";
import {
  ElUpload,
  ElFormItem,
  ElRadio,
  ElRadioGroup,
  ElInput,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElButton,
  ElTable,
  ElTableColumn,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
} from "element-plus";
export default {
  components: {
    ElUpload,
    ElFormItem,
    ElRadio,
    ElRadioGroup,
    ElInput,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElButton,
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [ElDropdown.name]: ElDropdown,
    [ElDropdownItem.name]: ElDropdownItem,
    [ElDropdownMenu.name]: ElDropdownMenu,
  },
  data() {
    return {
      showModal: false,
      projects,
      currentPage: 1,
      selects: {
        simple: "",
        leaves: [
          { value: "sickleave", label: "Sick Leave (unpaid)" },
          { value: "unpaid", label: "Unpaid" },
        ],
        languages: [
          { value: "allstatus", label: "All Status" },
          { value: "approved", label: "Approved" },
          { value: "pending", label: "Pending" },
          { value: "cancelled", label: "Cancelled" },
          { value: "rejected", label: "Rejected" },
        ],
      },
    };
  },
};
</script>

<style>
*:focus {
  outline: none;
}
.img-dp {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 55;
  background-color: rgba(0, 0, 0, 0.6);
}
.linemanger {
  display: flex;
  flex: 1fr 1fr;
  flex-wrap: wrap;
}
.timeOffModal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
  padding: 25px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.2s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%), translateX(100vw);
}
.timeoffinput-user-dp {
  margin: 5px 0;
  padding: 0 2px;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 20px;
  gap: 5px;
}

.timeoffinput {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  flex: 20px 1fr;
}

.timeoffinput-radio {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  flex: 20px 1fr;
}

.timeoffinput-text {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex: 20px 1fr;
}

.leave-header {
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
}

.leave {
  background-color: white;
  width: 250px;
  padding: 10px;
  border: none;
  box-shadow: 0 0 2px grey;
  border-radius: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
}

.leave-body-header {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
.select-filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.select-button {
  border: none;
  box-shadow: 0 0 1px grey;
}
.leave-body {
  box-shadow: 0 0 2px lightgray;
  padding: 10px;
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
  background-color: white;
}
.logo-design {
  background-color: rgb(45, 206, 137);
  border-radius: 50%;
  padding: 2px 5px;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.customUpload > .el-upload.el-upload--text > .el-upload-dragger {
  height: 50px;
  align-items: center;
}
</style>
