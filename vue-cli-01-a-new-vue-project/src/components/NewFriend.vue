<template>
  <div>
    <form>
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" v-model="enteredPhone" />
      </div>
      <div>
        <label>E-Mail</label>
        <input type="email" v-model="enteredEmail" />
      </div>
      <div>
        <button>Add contact</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
};
</script>
