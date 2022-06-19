export default {
  name: "App",
  computed: {
    pictureHover () {
      if (this.hover == true) {
        return this.puppy
      } else {
        return this.cat
      }
    }
  },
  data () {
    return {
      cat: "https://placekitten.com/300",
      puppy: "https://place-puppy.com/300x300",
      hover: false
    }
  },
  template: `
      <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false">
    `
};
