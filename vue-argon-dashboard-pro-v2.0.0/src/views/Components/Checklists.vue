<template>
  <div class="container" style="height: 100%">
    <!-- div for search menu -->
    <div class="search-view">
      <div class="search-office-select">
        <el-select v-model="selects.simple" placeholder="Select">
          <el-option
            v-for="option in selects.languages"
            :key="option.label"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </div>

      <div class="search-task">
        <div>
          <el-input
            v-model="input1"
            placeholder="Search Task"
            style="width: 400px"
          />
        </div>
      </div>
    </div>
    <!-- second div for card view -->
    <div class="tasks">
      <div>
        <el-table
          :data="tasklist"
          style="width: 100%"
          cell-class-name="my-cells"
        >
          <el-table-column prop="taskName" label="Task" class="flex-fill" />
          <el-table-column prop="taskName" label="Type" class="flex-fill" />
          <el-table-column prop="DueDate" label="Due-Date" class="flex-fill" />
          <el-table-column prop="DueDate" label="Note" class="flex-fill" />
          <el-table-column prop="status" label="status" class="flex-fill" />
          <el-table-column prop="" label="Mark as done" class="flex-fill"
            ><el-button type="success" solid>done</el-button></el-table-column
          >
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ElButton,
  ElOption,
  ElSelect,
  ElInput,
  ElTable,
  ElTableColumn,
} from "element-plus";
import axios from "axios";
export default {
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    ElSelect,
    ElOption,
    ElInput,
    ElButton,
  },
  data() {
    return {
      tasklist: [],
      items: {
        done: true,
      },
      input1: "",
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
  methods: {
    getTasks(id) {
      axios
        .get(`http://localhost:7000/tasks/${id}`, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("user")).token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.tasklist = response.data;
        });
    },
  },
  mounted() {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    this.getTasks(userId);
  },
};
</script>

<style>
*:focus {
  outline: none;
}
/* .userview {
  display: flex;
  flex-grow: 4;
  flex-wrap: wrap;
}
.user-flexview {
  border-radius: 10px;
  box-shadow: 0 0 2px;
  flex: 1;
  margin: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 10px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
} */

/* user card view css */
.my-cells {
  background: white !important;
}

.img1 {
  width: 100%;
  border-radius: 50%;
  padding: 50px;
}
.tasks {
  background-color: blueviolet;
}
p {
  margin: 0;
}
.video-preview {
  box-shadow: 0 0 3px grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  vertical-align: top;
  margin-right: 10px;
  width: 100%;
}

.thumbnail-row {
  margin-bottom: 10px;
  position: relative;
}

.video-div {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
}
/* ends here */
.searchbar {
  padding: 2px 10px;
  width: 300px;
  border-radius: 5px;
  border: solid;
  border-width: 1px;
  background: transparent;
}
.search-item {
  width: 250px;
  padding: 3px 7px;
  font-size: 15px;
  margin-left: 5px;
  background: transparent;
  border: none;
}
.searchbar:hover {
  cursor: pointer;
  border-color: green;
  border-style: solid;
}
.container {
  margin: 0;
}
.search-view {
  height: 50px;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.search-office-select,
.search-department-select {
  margin-right: 10px;
}

.select-button {
  font-family: "Arial";
  background: transparent;
  padding: 7px 7px;
  border-radius: 5px;
}
.select-button:hover {
  border-color: green;
  cursor: pointer;
}
</style>
