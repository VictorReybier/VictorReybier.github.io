(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{255:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("9a2bdf10",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(255)},287:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".centerDiv{\n  transform:translate(-50%,-50%)\n}",""]),t.exports=r},320:function(t,e,n){"use strict";n.r(e);n(9),n(88);var r=n(56),o=n.n(r),l={data:function(){return{error:"",input:{email:"",verify:null,first_name:"",last_name:"",username:"",password:"",confirm_password:"",birthday:"",gender:"",locale:""},input1:"",input2:"",input3:"",input4:"",input5:"",input6:""}},methods:{completeRegister:function(){var t=this;this.input.password!==this.input.confirm_password?document.getElementById("confirmError").style.display="block":this.input.password.toString().length<6?document.getElementById("passwordError").style.display="block":(document.getElementById("passwordError").style.display="none",document.getElementById("confirmError").style.display="none","other"===this.input.gender&&(this.input.gender=null),o()({url:"https://storylation.eu.ngrok.io/api/registration/email-register",method:"post",data:{first_name:this.input.first_name,last_name:this.input.last_name,username:this.input.username,password:this.input.password,birthday:this.input.birthday,gender:this.input.gender,email:this.input.email,code:this.input.verify,locale:navigator.language}}).then((function(e){t.$router.push({name:"login"})})).catch((function(e){t.error=e.response.data.errors.birthday;var n=t.error;throw n=n.toString().substring(0,t.error.toString().length-1),t.error=n,document.getElementById("birthdayError").style.display="block",e})))},checkVerifyCode:function(){var input=this.input1+this.input2+this.input3+this.input4+this.input5+this.input6;this.input.verify=input,o()({url:"https://storylation.eu.ngrok.io/api/registration/email-verify",method:"post",data:{email:this.input.email,code:this.input.verify}}).then((function(t){document.getElementById("verifyContainer").style.display="none",document.getElementById("informationContainer").style.display="block"}))},sendVerifyCode:function(){o()({url:"https://storylation.eu.ngrok.io/api/registration/email-invite",method:"post",data:{email:this.input.email}}).then((function(t){document.getElementById("emailContainer").style.display="none",document.getElementById("verifyContainer").style.display="block"})).catch((function(t){throw t}))},changeInput:function(t){document.getElementById(t).focus()}}},d=(n(286),n(46)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"w-150 h-100 rounded-3xl text-center top-1/2 left-1/2 absolute centerDiv shadow-2xl",attrs:{id:"emailContainer"}},[n("p",{staticClass:"font-bold text-3xl text-blueStory mt-14 text-center"},[t._v("\n      Create your account\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"Email"},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}}),t._v(" "),n("button",{staticClass:"bg-storyColor w-51 h-16 mt-8 text-white rounded-xl text-bold text-lg",on:{click:function(e){return t.sendVerifyCode()}}},[t._v("\n      NEXT STEP\n    ")]),t._v(" "),n("p",{staticClass:"text-blueStory text-lg font-bold mt-10"},[t._v("\n      Already register ?\n      "),n("button",{staticClass:"text-storyColor font-bold text-lg",on:{click:function(e){return t.redirectRegister()}}},[t._v("\n        Log in\n      ")])])]),t._v(" "),n("div",{staticClass:"w-150 h-126 rounded-3xl text-center top-1/2 left-1/2 absolute centerDiv shadow-2xl hidden",attrs:{id:"verifyContainer"}},[n("p",{staticClass:"font-bold text-3xl text-blueStory mt-14 text-center"},[t._v("\n      Confirm your email\n    ")]),t._v(" "),n("p",{staticClass:"w-96 ml-auto mr-auto italic text-base text-greyStory mt-8"},[t._v("\n      A code has been sent to you by e-mail to confirm your address ! You\n      didn’t receive this email ?\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input1,expression:"input1"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input1",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input1},on:{input:[function(e){e.target.composing||(t.input1=e.target.value)},function(e){return t.changeInput("input2")}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input2,expression:"input2"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input2",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input2},on:{input:[function(e){e.target.composing||(t.input2=e.target.value)},function(e){return t.changeInput("input3")}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input3,expression:"input3"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input3",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input3},on:{input:[function(e){e.target.composing||(t.input3=e.target.value)},function(e){return t.changeInput("input4")}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input4,expression:"input4"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input4",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input4},on:{input:[function(e){e.target.composing||(t.input4=e.target.value)},function(e){return t.changeInput("input5")}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input5,expression:"input5"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input5",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input5},on:{input:[function(e){e.target.composing||(t.input5=e.target.value)},function(e){return t.changeInput("input6")}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input6,expression:"input6"}],staticClass:"w-12 h-16 rounded-xl border-2 border-blueStory text-blueColor font-bold text-center text-2xl",attrs:{id:"input6",maxlength:"1",oninput:"this.value=this.value.replace(/[^0-9]/g,'');",type:"text",max:"9",min:"0"},domProps:{value:t.input6},on:{input:function(e){e.target.composing||(t.input6=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"bg-storyColor w-51 h-16 mt-8 text-white rounded-xl text-bold text-lg",on:{click:function(e){return t.checkVerifyCode()}}},[t._v("\n      NEXT STEP\n    ")])]),t._v(" "),n("div",{staticClass:"w-150 rounded-3xl text-center top-1/2 left-1/2 absolute centerDiv shadow-2xl hidden",attrs:{id:"informationContainer"}},[n("p",{staticClass:"font-bold text-3xl text-blueStory mt-10 text-center"},[t._v("\n      Personal informations\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.first_name,expression:"input.first_name"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"First name"},domProps:{value:t.input.first_name},on:{input:function(e){e.target.composing||t.$set(t.input,"first_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.last_name,expression:"input.last_name"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"Last name"},domProps:{value:t.input.last_name},on:{input:function(e){e.target.composing||t.$set(t.input,"last_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"Password",type:"password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),t._v(" "),n("span",{staticClass:"text-red-600 font-semibold hidden",attrs:{id:"passwordError"}},[t._v("\n      The password must be at least 6 characters long.\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.confirm_password,expression:"input.confirm_password"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8",attrs:{placeholder:"Confirm password",type:"password"},domProps:{value:t.input.confirm_password},on:{input:function(e){e.target.composing||t.$set(t.input,"confirm_password",e.target.value)}}}),t._v(" "),n("span",{staticClass:"text-red-600 font-semibold hidden",attrs:{id:"confirmError"}},[t._v("\n      Passwords must be identical.\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.birthday,expression:"input.birthday"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8 p-6",attrs:{placeholder:"Birthday",type:"date"},domProps:{value:t.input.birthday},on:{input:function(e){e.target.composing||t.$set(t.input,"birthday",e.target.value)}}}),t._v(" "),n("span",{staticClass:"text-red-600 font-semibold hidden",attrs:{id:"birthdayError"}},[t._v("\n      "+t._s(t.error)+"\n    ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.input.gender,expression:"input.gender"}],staticClass:"w-115 h-16 rounded-xl border-2 border-greyStory mt-8",attrs:{placeholder:"Gender"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.input,"gender",e.target.multiple?n:n[0])}}},[n("option",[t._v("male")]),t._v(" "),n("option",[t._v("female")]),t._v(" "),n("option",[t._v("other")])]),t._v(" "),n("button",{staticClass:"bg-storyColor w-51 h-16 mt-8 text-white rounded-xl text-bold text-lg",on:{click:function(e){return t.completeRegister()}}},[t._v("\n      COMPLETE REGISTER\n    ")]),t._v(" "),n("p",{staticClass:"text-blueStory text-lg font-bold mt-10 mb-6"},[t._v("\n      Already register ?\n      "),n("button",{staticClass:"text-storyColor font-bold text-lg",on:{click:function(e){return t.redirectRegister()}}},[t._v("\n        Log in\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);