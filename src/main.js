import Vue from 'vue'
import Panel from './components/childcomponent.vue'
let my = new Vue({
    el: '#app',
    template: `<div>
    <panel></panel>
</div>
    `,
    components: {
        panel: Panel

    }
});