<template>
  <card>
    <template v-slot:header>
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">My Profile</h3>
        </div>
        <div
          v-if="hide"
          class="col-4 text-right"
          @click="
            hide = false;
            edit = false;
          "
        >
          <a
            class="btn btn-sm"
            type="primary"
            style="
              width: 70px;
              font-size: 15px;
              background-color: rgb(54, 134, 255);
              color: white;
            "
            >Edit</a
          >
        </div>
      </div>
    </template>

    <div v-if="edit">
      <div>
        <div m="4">
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
        </div>
      </div>
      <div>
        <div m="4">
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
        </div>
      </div>
      <div>
        <div m="4">
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
        </div>
      </div>
      <div>
        <div m="4">
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
          <p>Task:</p>
        </div>
      </div>
    </div>

    <form @submit.prevent="updateProfile" v-if="!edit">
      <h6 class="heading-small text-muted mb-4">User information</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <base-input
              name="firstname"
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="lastname"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="email"
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="mobile"
              type="text"
              label="Contact No."
              placeholder="Mobile no."
              v-model="user.username"
            >
            </base-input>
          </div>
        </div>
      </div>
      <hr class="my-4" />

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-md-12">
            <base-input
              name="address"
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <base-input
              name="city"
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
          </div>
          <div class="col-lg-4">
            <base-input
              name="country"
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
          </div>
          <div class="col-lg-4">
            <base-input
              name="postalcode"
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
            >
            </base-input>
          </div>
        </div>
      </div>

      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Bank information</h6>
      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <base-input
              name="bank"
              type="text"
              label="Bank Name"
              placeholder="Bank Name"
              v-model="user.firstName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="account_name"
              type="text"
              label="Account Name"
              placeholder="Account name"
              v-model="user.username"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="account"
              type="text"
              label="Account Number"
              placeholder="Account Number"
              v-model="user.lastName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              name="branch"
              type="branch"
              label="Branch"
              placeholder="Branch"
              v-model="user.email"
            >
            </base-input>
          </div>
        </div>
        <div>
          <el-button
            @click="
              hide = true;
              edit = true;
            "
            type="primary"
            >submit</el-button
          >
        </div>
      </div>
    </form>
  </card>
</template>
<script>
import { ElButton } from "element-plus";
export default {
  components: {
    ElButton,
  },
  data() {
    return {
      hide: true,
      edit: true,
      user: {
        company: "Creative Code Inc.",
        username: "michael23",
        email: "",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`,
      },
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>
