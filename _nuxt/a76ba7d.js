(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(t,o,n){"use strict";n.r(o);var e={beforeMount:function(){},methods:{login:function(){},loginWithFacebook:function(){this.$auth.loginWith("facebook");var t=this.$auth.getToken("facebook");this.$auth.$storage.setUniversal("facebookToken",t),this.$router.push({name:"facebookRegister",params:{access_token:t}})}}},c=n(46),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"container"},[n("img",{staticClass:"ml-middle",attrs:{src:"logo-corail-1024-large@3x.png"}}),t._v(" "),n("button",{staticClass:"storyColor text-5xl text-IBM",attrs:{onclick:"location.href = '/';"}},[t._v("\n    Storylation\n  ")]),t._v(" "),n("div",{staticClass:"rounded-xl shadow-lg w-96 h-96 absolute bottom-0 mb-32 border-2 border-black left-1/2 -ml-48"},[n("button",{on:{click:function(o){return t.loginWithFacebook()}}},[t._v("Connection avec FB")]),t._v(" "),n("button",{attrs:{onclick:"location.href = 'login';"}},[t._v("Se connecter")]),t._v(" "),n("button",{attrs:{onclick:"location.href = 'register';"}},[t._v("Créer un compte")])]),t._v(" "),n("div",{staticClass:"fb-login-button",attrs:{"data-width":"","data-size":"large","data-button-type":"continue_with","data-layout":"default","data-auto-logout-link":"false","data-use-continue-as":"false"}}),t._v(" "),n("div",{attrs:{id:"fb-root"}}),t._v(" "),n("script",{attrs:{async:"",defer:"",crossorigin:"anonymous",src:"https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0&appId=4013058672073169&autoLogAppEvents=1",nonce:"BhdjCCDX"}})])}),[],!1,null,null,null);o.default=component.exports}}]);