<template >
  <div v-if="showModal">
    <div id="my-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header" :class="typeModal">
          <h2>{{ this.data.title }}</h2>
          <span @click="closeModal">&times;</span>
        </div>
        <div class="modal-body">
          <h2>{{ this.data.message }}</h2>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" :class="typeModal">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        visible: false,
        title: "",
        message: "",
        type: "",
      }
    }
  },
  data() {
    return {
      modal: document.querySelector('#my-modal'),
    }
  },
  computed: {
    showModal() {
      if(this.data.visible) {
        this.openModal
        return true
      } else {
        return false
      }
    },
    typeModal() {
      if (this.data.type == "error") {
        return "fontError"
      } else if (this.data.type == "success") {
        return "fontSuccess"
      } else if (this.data.type == "warning") {
        return "fontWarning"
      } else {
        return "fontInfo"
      }
    },
  },
  mounted() {
    window.addEventListener('click', this.outsideClick)
  },
  methods: {
    openModal() {
      this.modal.style.display = 'block';
    },
    closeModal() {
    this.$emit("resetModal")
    },
    outsideClick(e) {
      if (e.target.id == "my-modal") {
        this.$emit("resetModal")
      }
    }
  },
}
</script>

<style lang="stylus" scoped>

.fontError
  color #e2200c

.fontSuccess
  color #049804

.fontWarning
  color #d48901

.fontInfo
  color #0096ff

.modal
  position fixed
  z-index 1
  left 0
  top 2rem
  height 100%
  width 100%
  overflow auto
  background-color rgba(0, 0, 0, 0.5)
  .modal-content
    background-color white
    border-radius 5px
    margin 10% auto
    width 60%
    max-width 768px
    box-shadow 0px 1px 2px gray
    animation-name modalopen
    animation-duration 1s
    .modal-header
      display flex
      justify-content space-between
      padding 15px
      border-top-left-radius 5px
      border-top-right-radius 5px
      span
        font-size 30px
        cursor pointer !important
    .modal-body
      padding 10px 20px
      color #545151
      text-align center
    .modal-footer
      color #0096FF
      display flex
      justify-content center
      padding 10px
      text-align center
      border-bottom-left-radius 5px
      border-bottom-right-radius 5px
      button
        border-radius 80px
        padding 15px 32px
        font-size 18px
        margin-top 0.5rem
        font-weight bold
        letter-spacing 1px
        width fit-content
        cursor pointer
        display flex
        align-items center
        justify-content center
      :hover
        background #3876ac
      .fontError
        background white
        border 1px solid #e2200c
        box-shadow: 0px 1px 2px #e2200c
      .fontSuccess
        background white
        border 1px solid #049804
        box-shadow: 0px 1px 2px #049804
      .fontWarning
        background white
        border 1px solid #d48901
        box-shadow: 0px 1px 2px #d48901
      .fontInfo
        background white
        border 1px solid #0096ff
        box-shadow: 0px 1px 2px #0096ff

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px)
  .modal
    padding-top 8rem
  .modal-content
    width 90% !important

</style>
