import ImgPreviewComponet from "./vue-img-preview.vue"

let ImgPreview = {}
ImgPreview.install = function () {
    Vue.prototype.$imgPreview = function (urls,idx) {
        const ImgPreviewController = Vue.extend(ImgPreviewComponet);
        let instance = new ImgPreviewController().$mount(document.createElement("div"));
        document.body.appendChild(instance.$el);
        instance.showImgPreview = true;
        instance.imgList = urls;
        instance.imgIndex = idx;
        instance.imgUrl = urls[idx];
    }
}
if(window.Vue){
    Vue.use(ImgPreview);
}
export default ImgPreview;