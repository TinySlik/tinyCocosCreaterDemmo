cc._RFpush(module, 'dcd01JbA/BAN4yXbr1QO3uI', 'Menu');
// scripts/Menu.js

"use strict";

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        startBtn: {
            "default": null,
            type: cc.Node
        },
        guanyu: {
            "default": null,
            type: cc.Node
        },
        title: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.guanyu.runAction(cc.repeatForever(cc.sequence(cc.moveTo(2, cc.p(-330, -221)), cc.scaleTo(0.5, -1, 1), cc.moveTo(2, cc.p(330, -221)), cc.scaleTo(0.5, 1, 1))));
        this.title.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(0.8, 10), cc.rotateTo(1.6, -20), cc.rotateTo(0.8, 10))));
    },

    onClick: function onClick() {}

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();