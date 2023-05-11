export default {
  data() {
    return {
      city: 'beijing'
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted', this.name)
  }
}
