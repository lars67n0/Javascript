new Vue({
  el: '#app',
  data: {
    textInput: '',
    transformedTexts: [],
    showError: false
  },
  mounted() {
    // load saved transformed texts from Local Storage on component mount
    const savedTexts = localStorage.getItem('transformedTexts');
    if (savedTexts) {
      this.transformedTexts = JSON.parse(savedTexts);
    }
  },
  methods: {
    addToList() {
      const text = this.textInput.trim();
      if (text) {
        this.transformedTexts = [
          text,
          text.charAt(0).toUpperCase() + text.slice(1),
          text.slice(0, -1) + text.slice(-1).toUpperCase(),
          text.toUpperCase(),
          text.split('').reverse().join('')
        ];
        this.textInput = '';
        this.showError = false;
        // save transformed texts to Local Storage
        localStorage.setItem('transformedTexts', JSON.stringify(this.transformedTexts));
      }
      else {
        this.showError = true;
      }
    }
  }
});
  
