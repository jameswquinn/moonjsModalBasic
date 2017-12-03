//componet
Moon.component("popup", {
    template: `<div><button m-on:click="popup">Popup</button></div>`,
    data: {
        msg: "Hello Moon!"
    },
    methods: {

        popup: function() {
            var popup = {
                body: '<figure><img src="https://www.maybelline.com/~/media/mny/us/eye-makeup/eye-shadow/the-rock-nudes-palette/modules/featuredproductwide/maybelline-eyeshadow-rocknudes-beauty-look-16x9.jpg?h=900&w=1600&la=en-US&hash=ABE362F5005CB26626B8611FC80B29DCD1419546" /><figcaption><blockquote><p><em>Yeah!! Milligram is amazing.</em></p></blockquote><p><em>Yeah!! Milligram is amazing.</em></p></figcaption></figure>',
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
//app
const app = new Moon({
    el: "#app"
});
