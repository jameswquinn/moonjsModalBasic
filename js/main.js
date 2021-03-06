Moon.component("modal", {
    template: `<div><button m-on:click="popup">Popup</button></div>`,
    methods: {
          popup: function() {
            var change = app.set("img2", "https://i.pinimg.com/736x/83/ef/d2/83efd2f83d050642e5de3adbbfcfd5bc--black-white-fashion-fashion-portraits.jpg");
            var url = app.get("img2");
            var popup = {
                body: '<figure><img class="lazyload" data-src="' + url + '" /><figcaption><blockquote><p><em>Yeah!! Milligram is amazing.</em></p></blockquote><p><em>Yeah!! Milligram is amazing.</em></p></figcaption></figure>',
                buttons: {
                    cancel: {
                        title: 'Dismiss',
                        class: basicModal.THEME.xclose,
                        fn: basicModal.close
                    }
                }
            };
            basicModal.show(popup)
        }
    }
});
const app = new Moon({
    el: "#app",
    data: {
        img: "https://www.maybelline.com/~/media/mny/us/eye-makeup/eye-shadow/the-rock-nudes-palette/modules/featuredproductwide/maybelline-eyeshadow-rocknudes-beauty-look-16x9.jpg",
        img2: ""
    },
    template: '<modal></modal>'
});
