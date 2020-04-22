// import { ajaxLogin } from '../../assets/javascript/baseAjax'
export default {
    data() {
        return {
            activeIndex: 'welcome',
            activeName: '统计数据',
            menuData: require("../../../static/menuData.json"),
        }
    },
    beforeCreate: function () { },
    created: function () {
        window.vue = this;
    },
    beforeMount: function () { },
    mounted: function () {
         // 刷新不折叠导航
         let start = window.location.href.lastIndexOf('/');
         let path = window.location.href.slice(start + 1);
         this.activeIndex = path;
         if (typeof this.__getLocal('name') != 'undefined' && this.activeIndex != 'welcome') {
             this.activeName = this.__getLocal('name');
         } else {
             this.$router.push('/home');
             this.activeIndex = 'welcome';
             this.activeName = '统计数据';
         }
    },
    computed: {
    },
    beforeUpdate: function () { },
    updated: function () { },
    beforeDestroy: function () {

    },
    destroyed: function () { },
    watch: {
        $route() {
            this.activeIndex = this.$route.path.substr(1);
            if (this.$route.path.substr(1) == 'welcome') {
                this.activeName = '统计数据';
            }
        }
    },
    methods: {
        handleSelect(key, keyPath, title) {
            var name = '';
            name = title.$attrs.data.entity.alias;
            this.activeName = name;
            this.__setLocal("name", name);
        },
    }
}
