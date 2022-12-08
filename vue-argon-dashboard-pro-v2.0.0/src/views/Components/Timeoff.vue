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

        <div><el-button type="success" plain>New Request</el-button></div>
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
      projects,
      currentPage: 1,
      selects: {
        simple: "",
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
</style>
