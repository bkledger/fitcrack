webpackJsonp([16],{480:function(e,t,n){"use strict";function s(e){n(799),n(801)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(616),r=n(803),i=n(32),o=s,l=i(a.a,r.a,!1,o,"data-v-6ab87341",null);t.default=l.exports},484:function(e,t,n){"use strict";t.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},485:function(e,t,n){"use strict";var s=n(484),a=n(487),r=n(32),i=r(s.a,a.a,!1,null,null,null);t.a=i.exports},487:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto"},[n("v-card-title",[e.icon?n("v-icon",{attrs:{left:""}},[e._v("\n      "+e._s(e.icon)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),n("v-card-text",{staticClass:"contentFcTile"},[e.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):e._t("default")],2)],1)},a=[],r={render:s,staticRenderFns:a};t.a=r},616:function(e,t,n){"use strict";var s=n(485);t.a={name:"EncryptedFilesView",components:{"fc-tile":s.a},data:function(){return{uploadOptions:{url:this.$serverAddr+"/protectedFiles/",paramName:"file"},headers:[{text:"Name",align:"left",value:"name"},{text:"Hash",value:"hash",align:"right"},{text:"Added",value:"time",align:"right"},{text:"Download",value:"name",align:"right"}],encryptedFiles:[],uploadProgress:0}},mounted:function(){this.loadFiles()},methods:{loadFiles:function(){var e=this;this.axios.get(this.$serverAddr+"/protectedFiles",{}).then(function(t){e.encryptedFiles=t.data})},uploadProgressChanged:function(e,t,n){this.uploadProgress=e},uploadComplete:function(e,t,n){"error"===t?this.axios.interceptors.response.handlers[0].rejected(JSON.parse(n.response)):this.loadFiles()}}}},799:function(e,t,n){var s=n(800);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(455)("d7459904",s,!0,{})},800:function(e,t,n){t=e.exports=n(454)(!0),t.push([e.i,".noEvent[data-v-6ab87341]{pointer-events:none;display:inline-block}.dz-message[data-v-6ab87341]{cursor:pointer;text-align:center}.max500[data-v-6ab87341]{max-width:600px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/encryptedFile/encryptedFilesView.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB",file:"encryptedFilesView.vue",sourcesContent:["\n.noEvent[data-v-6ab87341] {\n  pointer-events: none;\n  display: inline-block;\n}\n.dz-message[data-v-6ab87341] {\n  cursor: pointer;\n  text-align: center;\n}\n.max500[data-v-6ab87341] {\n  max-width: 600px;\n}\n\n"],sourceRoot:""}])},801:function(e,t,n){var s=n(802);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(455)("6032cc16",s,!0,{})},802:function(e,t,n){t=e.exports=n(454)(!0),t.push([e.i,".selectedDict{background:rgba(37,157,173,.85)!important;color:#fff}.selectedDict a{color:#fff}.clickable{cursor:pointer}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/encryptedFile/encryptedFilesView.vue"],names:[],mappings:"AACA,cACE,0CAAgD,AAChD,UAAa,CACd,AACD,gBACE,UAAa,CACd,AACD,WACE,cAAgB,CACjB",file:"encryptedFilesView.vue",sourcesContent:["\n.selectedDict {\n  background: rgba(37, 157, 173, 0.85) !important;\n  color: white;\n}\n.selectedDict a {\n  color: white;\n}\n.clickable {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},803:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"max500"},[n("fc-tile",{staticClass:"ma-2",attrs:{title:"Encrypted files",loading:null===e.encryptedFiles}},[null!==e.encryptedFiles?n("v-data-table",{attrs:{headers:e.headers,items:e.encryptedFiles.items,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"Files per page"}},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.name))]),e._v(" "),n("td",{staticClass:"text-right"},[e._v("\n          "+e._s(t.item.hash)+"\n        ")]),e._v(" "),n("td",{staticClass:"text-right"},[e._v("\n          "+e._s(e.$moment(t.item.time).format("DD.MM.YYYY HH:mm"))+"\n        ")]),e._v(" "),n("td",{staticClass:"text-right"},[n("a",{attrs:{href:e.$serverAddr+"/protectedFiles/"+t.item.id,target:"_blank"}},[n("v-btn",{attrs:{outlined:"",fab:"",small:"",color:"primary"}},[n("v-icon",[e._v("file_download")])],1)],1)])]}}],null,!1,2021922619)}):e._e(),e._v(" "),n("vue-clip",{staticClass:"pa-2",attrs:{options:e.uploadOptions,"on-total-progress":e.uploadProgressChanged,"on-complete":e.uploadComplete},scopedSlots:e._u([{key:"clip-uploader-body",fn:function(t){return e._l(t.files,function(t){return n("div",[e._v("\n          "+e._s(t.name)+" "+e._s(t.status)+"\n        ")])})}}])},[n("template",{slot:"clip-uploader-action"},[n("div",{staticClass:"dz-message"},[n("v-btn",{staticClass:"noEvent",attrs:{outlined:"",text:"",color:"primary"}},[e._v("\n            Upload file\n          ")])],1),e._v(" "),n("v-progress-linear",{attrs:{"background-color":"white"},model:{value:e.uploadProgress,callback:function(t){e.uploadProgress=t},expression:"uploadProgress"}})],1)],2)],1)],1)},a=[],r={render:s,staticRenderFns:a};t.a=r}});
//# sourceMappingURL=16.9844d3d1e422babd66a3.js.map