// import { ajaxLogin } from '../../assets/javascript/baseAjax'
export default {
    data() {
        return {
            menuData: require("../../../static/menuData.json"),
        }
    },
    beforeCreate: function () { },
    created: function () {
        window.vue = this;
    },
    beforeMount: function () { },
    mounted: function () {
    },
    computed: {
    },
    beforeUpdate: function () { },
    updated: function () { },
    beforeDestroy: function () {

    },
    destroyed: function () { },
    watch: {

    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
    }
}
