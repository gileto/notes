Vue.createApp({
    data() {
        return {
            title: "Notes",
            placeholderVal: "Add a note",
            inputVal: "",
            notes: [],
        }
    },
    methods: {
        inputListener(event) {
            this.inputVal = event.target.value
        },
        addNote() {
            this.notes.push(this.inputVal)
            this.inputVal = ''
        },
        deleteItem(i) {
            this.notes.splice(i)
        }
    },
}).mount('#app')