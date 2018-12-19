<template>
    <div class="home">
        <p>   11   </p>
        <a href="javascript:;" @click="handleOpenApp">打开App</a>
    </div>
</template>

<script>
import VConsole from "vconsole";
import CallApp from "@/callapp";
import callAppConfig from "@/libs/callapp-config.js";
var vConsole = new VConsole();

export default {
    name: "home",
    data() {
        return {
            callLib: null
        };
    },
    mounted() {
        let that = this;
        this.callLib = new CallApp(callAppConfig);
        // that.handleOpenApp();
    },
    methods: {
        handleOpenApp() {
            this.callLib.open({
                params:
                    'key=&mw_cp_data={"view_type":"normal","title":"今年国人为偷懒花费160亿元 95 后“ 懒需求” 增长最快 "," support_version ":6230," id ":" 3262927 "}',
                path: "/rmrb.app/openwith"
               
            });
        }
    }
};
</script>
