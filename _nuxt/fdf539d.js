(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData},259:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("4a2060e6",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r(259)},305:function(t,e,r){var o=r(67)((function(i){return i[1]}));o.push([t.i,'button:focus,textarea:focus{\n  outline:none\n}\nbody,html{\n  overflow-x:hidden\n}\n.rond{\n  border-radius:50%\n}\n.grid-item{\n  margin-bottom:80px\n}\n.pdpStory{\n  border-radius:0 0 9999px 9999px\n}\n.text-IBM{\n  font-family:"IBMPlexSans",sans-serif\n}\n.text-IBM-bold{\n  font-family:"IBMPlexSans-Bold",sans-serif\n}\n.typeButton{\n  border-top-left-radius:8px;\n  border-bottom-left-radius:8px\n}\n.typeNumber{\n  border-top-right-radius:8px;\n  border-bottom-right-radius:8px\n}\n.gray-bg{\n  background-color:#f4f4f8\n}\ninput#file-upload-button{\n  visibility:hidden\n}\n.previewContainer{\n  display:-webkit-box\n}\n.centerDiv{\n  transform:translate(-50%,-50%)\n}',""]),t.exports=o},323:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(35),r(33),r(116),r(41),r(57),r(174),r(34),r(175),r(9),r(28),r(36),r(58),r(56)),l=r.n(n),c=r(237),d=r.n(c),m=r(240),h=r.n(m),y={data:function(){return{stories:[],groups:[],userInfo:[],me:[],types:[],writeType:"Story about",writeStory:{receiver:"",name_receiver:"",type:"",content:"",pictures:[],tags:[],groups:"",kudoboard:!1},selectedGroup:[],selectedTags:[],persons:[],nextStoriesWritten:"bonjour",nextStoriesReceived:"",nextStoriesMedia:"",nextStoriesMentionned:"",currentStoryType:"received",subdomain:"",uploadImages:[],triggerMention:0,currentMention:"",storyMentions:[],userResult:[],comments:[],currentComment:"",storyComment:[],writeStoryPictures:[],writeStorySendPictures:[]}},beforeMount:function(){this.types=["Story about","Introducing","Many thanks to","Good memory with","Inspired by","Congratulations to","Fun fact about","Proud of","Respect to","Shoutout to","How I met","Impressed by","My first impression of","Conversation opener for","What I like about","Happy for"],this.getSubdomain(),null===this.$auth.$storage.getUniversal("userToken")?(this.setNoAuthFirstCall(),this.getNoAuthId()):(this.setFirstCall(),this.getId(this.$auth.$storage.getUniversal("userToken"))),this.getStoryReceived(),this.getMyInfo();for(var t=0;t<Object.keys(this.stories).length;t++)for(var i=0;i<this.stories[t].videos.length;i++)this.initHLS(this.stories[t].videos[0].url,this.stories[t].videos[0].id)},mounted:function(){var t=this;window.onscroll=function(){0===document.body.offsetHeight-window.scrollY-window.innerHeight&&("received"===t.currentStoryType&&t.getStoryReceived(),"written"===t.currentStoryType&&t.getStoryWritten(),"mentionned"===t.currentStoryType&&t.getStoryMentionned())}},methods:{initHLS:function(t,e){var r="storyVideo"+e,video=document.getElementById(r);if(h.a.isSupported()){var o=new h.a;o.loadSource(t),o.attachMedia(video)}},getReplies:function(t,e,r){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=[],o.next=3,l()({url:"https://storylation.eu.ngrok.io/api/stories/"+t.id+"/comments/"+e.id+"/replies",method:"get",headers:{authorization:"Bearer ".concat(n.$auth.$storage.getUniversal("userToken"))}}).then((function(t){for(var i=0;i<Object.keys(t.data.data).length;i++)c.push=t.data.data[i],n.comments[r].replies.push(t.data.data[i])})).catch((function(t){throw t}));case 3:case"end":return o.stop()}}),o)})))()},removeComment:function(){document.getElementById("commentsContainer").style.display="none"},appendComment:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.comments_count<1)){r.next=2;break}return r.abrupt("return");case 2:return e.storyComment=[],e.storyComment.push(t),e.comments=[],null===e.$auth.$storage.getUniversal("userToken")&&e.appendLogin(),r.next=8,l()({url:"https://storylation.eu.ngrok.io/api/stories/"+t.id+"/comments",method:"get",headers:{authorization:"Bearer ".concat(e.$auth.$storage.getUniversal("userToken"))}}).then(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(o){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:if(!(i<Object.keys(o.data.data).length)){r.next=10;break}if(e.comments.push(o.data.data[i]),!(o.data.data[i].replies_count>0)){r.next=7;break}return e.comments[i].replies=[],r.next=7,e.getReplies(t,o.data.data[i],i);case 7:i++,r.next=1;break;case 10:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()).catch((function(t){throw t}));case 8:document.getElementById("commentsContainer").style.display="flex",e.comments[0].id+=1,e.comments[0].id-=1;case 11:case"end":return r.stop()}}),r)})))()},setNoAuthFirstCall:function(){this.nextStoriesWritten="https://storylation.eu.ngrok.io/api/no-auth/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/written",this.nextStoriesReceived="https://storylation.eu.ngrok.io/api/no-auth/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/received",this.nextStoriesMedia="https://storylation.eu.ngrok.io/api/no-auth/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/media",this.nextStoriesMentionned="https://storylation.eu.ngrok.io/api/no-auth/groups/"+this.subdomain+"/members"+this.$route.params.username+"/stories/mentionned"},setFirstCall:function(){this.nextStoriesWritten="https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/written",this.nextStoriesReceived="https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/received",this.nextStoriesMedia="https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/media",this.nextStoriesMentionned="https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members"+this.$route.params.username+"/stories/mentionned"},getAuthUsers:function(){var t=this;l()({url:"https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members",method:"get",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(e){for(var i=0;i<Object.keys(e.data.data).length;i++)e.data.data[i].username===t.$route.params.username&&(t.userInfo=[],t.userInfo.push(e.data.data[i]))})).catch((function(t){throw t}))},getSubdomain:function(){var t=window.location.hostname.split(".localhost");this.subdomain=t[0]},getUserStory:function(){var t=this;l()({url:"https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members/"+this.$route.params.username+"/stories/received",method:"get",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(e){for(var i=0;i<Object.keys(e.data.data).length;i++)t.stories.push(e.data.data[i]);setTimeout(t.loaded,3e3)})).catch((function(t){throw t}))},appendTypeStory:function(){document.getElementById("typesContainer").style.display="block"},appendSearch:function(){var t=this,e=this.currentMention.substring(1);this.userResult.splice(0);var r=this.$auth.$storage.getUniversal("userToken");""!==e&&l()({url:"https://storylation.eu.ngrok.io/api/users/search",method:"post",data:{q:e},headers:{authorization:"Bearer ".concat(r)}}).then((function(e){for(var i=0;i<Object.keys(e.data.data).length;i++)t.userResult.push(e.data.data[i]);Object.keys(e.data.data).length<Object.keys(t.userResult).length&&setTimeout(t.appendSearch(),500)})).catch((function(t){throw t}))},callStoryType:function(t){t!==this.currentStoryType&&(this.stories=[],this.setFirstCall()),"received"===t&&(this.currentStoryType="received",this.getStoryReceived()),"written"===t&&(this.currentStoryType="written",this.getStoryWritten()),"mentionned"===t&&(this.currentStoryType="mentionned",this.getStoryMentionned())},setCharAt:function(t,e,r){return e>t.length-1?t:t.substr(0,e)+r+t.substr(e+1)},parser:function(t){var e=t.indexOf("@[");if(-1!==e){for(var i=e+1;" "!==t.charAt(i);)t=this.setCharAt(t,i,"");t=this.parser(t);for(var r=e;"]"!==t.charAt(r);r++)if(this.setCharAt(t,r,""),"]"===t[r+1]){t=this.setCharAt(t,r+1,"");break}}return t},checkMention:function(t){var e=document.getElementById("textWriteStory");-1!==e.value.indexOf("@")&&(this.triggerMention=1),1===this.triggerMention&&" "!==e.value.charAt(e.value.length-1)&&(null===t.data?this.currentMention=this.currentMention.substring(0,this.currentMention.length-1):this.currentMention+=e.value.charAt(e.value.length-1),this.appendSearch()),1===this.triggerMention&&" "===e.value.charAt(e.value.length-1)&&(this.storyMentions.push(this.currentMention),this.currentMention="",this.triggerMention=0)},dislikeStory:function(t){t.likes_count-=1,t.liked_type=null,l()({url:"https://storylation.eu.ngrok.io/api/stories/"+t.id+"/likes",method:"delete",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}})},followFunction:function(){if("followed"===this.userInfo[0].followed_status)return 0;l()({url:"https://storylation.eu.ngrok.io/api/users/"+this.$route.params.username+"/follow",method:"post",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(t){document.getElementById("followButton").innerHTML="Followed",document.getElementById("followButton").style.color="#fff",document.getElementById("followContainer").style.background="#132963",console.log(t)})).catch((function(t){throw t}))},getId:function(t){var e=this;l()({url:"https://storylation.eu.ngrok.io/api/groups/"+this.subdomain+"/members/"+this.$route.params.username,method:"get",headers:{authorization:"Bearer ".concat(t)}}).then((function(t){e.userInfo.push(t.data.data),e.$auth.$storage.setUniversal("selectedId",t.data.data.id)})).catch((function(t){throw t}))},getNoAuthId:function(){var t=this;l()({url:"https://storylation.eu.ngrok.io/api/no-auth/groups/"+this.subdomain+"/members",method:"get"}).then((function(e){for(var i=0;i<Object.keys(e.data.data).length;i++)e.data.data[i].username===t.$route.params.username&&(t.userInfo.push(e.data.data[i]),t.$auth.$storage.setUniversal("selectedId",e.data.data[i].id))})).catch((function(t){throw t}))},getMyInfo:function(){var t=this;l()({url:"https://storylation.eu.ngrok.io/api/me",method:"get",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(e){t.me.push(e.data.data)})).catch((function(t){throw t}))},getStoryMedia:function(){var t=this;l()({url:this.nextStoriesMedia,method:"get",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(e){for(var i=0;i<Object.keys(e.data.data).length;i++)null!==e.data.data[i].liked_type&&(e.data.data[i].liked_type=e.data.data[i].liked_type.charAt(0).toUpperCase()+e.data.data[i].liked_type.slice(1)),e.data.data[i].type=t.transformStoryType(e.data.data[i].type),t.stories.push(e.data.data[i])})).catch((function(t){throw t})),setTimeout(this.loaded,3e3),setTimeout(this.initFlickity,1e3)},getStoryWritten:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,i,o,n,c,d,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.nextStoriesWritten){e.next=2;break}return e.abrupt("return");case 2:for(r=document.getElementsByClassName("writtenButton"),i=0;i<r.length;i++)r[i].style.background="#ee8172",r[i].style.color="#fff";for(o=document.getElementsByClassName("receivedButton"),n=0;n<o.length;n++)o[n].style.background="rgba(244, 244, 248, 1)",o[n].style.color="#132963";for(c=document.getElementsByClassName("mentionnedButton"),d=0;d<c.length;d++)c[d].style.background="rgba(244, 244, 248, 1)",c[d].style.color="#132963";return e.next=10,l()({url:t.nextStoriesWritten,method:"get",headers:{authorization:"Bearer ".concat(t.$auth.$storage.getUniversal("userToken"))}}).then((function(e){e.data.next_plage_url!==t.nextStoriesWritten?t.nextStoriesWritten=e.data.next_page_url:t.nextStoriesWritten=null;for(var r=0;r<Object.keys(e.data.data).length;r++)null!==e.data.data[r].liked_type&&(e.data.data[r].liked_type=e.data.data[r].liked_type.charAt(0).toUpperCase()+e.data.data[r].liked_type.slice(1)),e.data.data[r].content=t.parser(e.data.data[r].content),e.data.data[r].type=t.transformStoryType(e.data.data[r].type),t.stories.push(e.data.data[r])})).catch((function(t){throw t}));case 10:for(m=0;m<Object.keys(t.stories).length;m++)for(h=0;h<t.stories[m].videos.length;h++)t.initHLS(t.stories[m].videos[0].url,t.stories[m].videos[0].id);setTimeout(t.loaded,3e3),setTimeout(t.initFlickity,1e3);case 13:case"end":return e.stop()}}),e)})))()},getStoryReceived:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,i,o,n,c,d,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.nextStoriesReceived){e.next=2;break}return e.abrupt("return");case 2:for(r=document.getElementsByClassName("writtenButton"),i=0;i<r.length;i++)r[i].style.background="rgba(244, 244, 248, 1)",r[i].style.color="#132963";for(o=document.getElementsByClassName("receivedButton"),n=0;n<o.length;n++)o[n].style.background="#ee8172",o[n].style.color="#fff";for(c=document.getElementsByClassName("mentionnedButton"),d=0;d<c.length;d++)c[d].style.background="rgba(244, 244, 248, 1)",c[d].style.color="#132963";return e.next=10,l()({url:t.nextStoriesReceived,method:"get",headers:{authorization:"Bearer ".concat(t.$auth.$storage.getUniversal("userToken"))}}).then((function(e){e.data.next_plage_url!==t.nextStoriesReceived?t.nextStoriesReceived=e.data.next_page_url:t.nextStoriesReceived=null;for(var r=0;r<Object.keys(e.data.data).length;r++)null!==e.data.data[r].liked_type&&(e.data.data[r].liked_type=e.data.data[r].liked_type.charAt(0).toUpperCase()+e.data.data[r].liked_type.slice(1)),e.data.data[r].content=t.parser(e.data.data[r].content),e.data.data[r].type=t.transformStoryType(e.data.data[r].type),t.stories.push(e.data.data[r])})).catch((function(t){throw t}));case 10:for(m=0;m<Object.keys(t.stories).length;m++)for(h=0;h<t.stories[m].videos.length;h++)t.initHLS(t.stories[m].videos[0].url,t.stories[m].videos[0].id);setTimeout(t.loaded,3e3),setTimeout(t.initFlickity,1e3);case 13:case"end":return e.stop()}}),e)})))()},getStoryMentionned:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,i,o,n,c,d,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.nextStoriesMentionned){e.next=2;break}return e.abrupt("return");case 2:for(r=document.getElementsByClassName("writtenButton"),i=0;i<r.length;i++)r[i].style.background="rgba(244, 244, 248, 1)",r[i].style.color="#132963";for(o=document.getElementsByClassName("receivedButton"),n=0;n<o.length;n++)o[n].style.background="rgba(244, 244, 248, 1)",o[n].style.color="#132963";for(c=document.getElementsByClassName("mentionnedButton"),d=0;d<c.length;d++)c[d].style.background="#ee8172",c[d].style.color="#fff";return e.next=10,l()({url:t.nextStoriesMentionned,method:"get",headers:{authorization:"Bearer ".concat(t.$auth.$storage.getUniversal("userToken"))}}).then((function(e){e.data.next_plage_url!==t.nextStoriesMentionned?t.nextStoriesMentionned=e.data.next_page_url:t.nextStoriesMentionned=null;for(var r=0;r<Object.keys(e.data.data).length;r++)null!==e.data.data[r].liked_type&&(e.data.data[r].liked_type=e.data.data[r].liked_type.charAt(0).toUpperCase()+e.data.data[r].liked_type.slice(1)),e.data.data[r].content=t.parser(e.data.data[r].content),e.data.data[r].type=t.transformStoryType(e.data.data[r].type),t.stories.push(e.data.data[r])})).catch((function(t){throw t}));case 10:for(m=0;m<Object.keys(t.stories).length;m++)for(h=0;h<t.stories[m].videos.length;h++)t.initHLS(t.stories[m].videos[0].url,t.stories[m].videos[0].id);setTimeout(t.loaded,3e3),setTimeout(t.initFlickity,1e3);case 13:case"end":return e.stop()}}),e)})))()},getGroups:function(){if(Object.assign(this.$data,this.$options.data()),null===this.$auth.$storage.getUniversal("userGroups"))return 0;for(var i=0;i<Object.keys(this.$auth.$storage.getUniversal("userGroups").data).length;i++)this.groups.push(this.$auth.$storage.getUniversal("userGroups").data[i])},getStoryGroups:function(t){var e=this;Object.assign(this.$data,this.$options.data()),l()({url:"https://storylation.eu.ngrok.io/api/groups/"+t+"/stories",method:"get",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}}).then((function(t){for(var i=0;i<Object.keys(t.data.data).length;i++)t.data.data[i].type=e.transformStoryType(t.data.data[i].type),e.stories.push(t.data.data[i])})).catch((function(t){throw t})),setTimeout(this.loaded,3e3),setTimeout(this.initFlickity,1e3)},likeStory:function(t){if("Like"===t.liked_type)return this.dislikeStory(t),0;t.likes_count+=1,t.liked_type="Like",l()({url:"https://storylation.eu.ngrok.io/api/stories/"+t.id+"/likes",method:"post",headers:{authorization:"Bearer ".concat(this.$auth.$storage.getUniversal("userToken"))}})},loaded:function(){var t=r(238),e=r(239),o=document.querySelector(".grid");e(o,(function(){new t(o,{itemSelector:".grid-item",columnWidth:".grid-item",gutter:80})}))},previewFiles:function(t){var e=t.target.files[0];e&&(e.id=Object.keys(this.writeStoryPictures).length-1,this.writeStoryPictures.push(URL.createObjectURL(e)),this.writeStorySendPictures.push(e),this.loaded())},redirectSocial:function(t){window.location.replace(t)},redirectToStory:function(){document.getElementById("textWriteStory").focus()},removeTypeStory:function(t){this.writeType=t,document.getElementById("typesContainer").style.display="none"},removePicture:function(image,t){for(var i=0;i<Object.keys(this.writeStoryPictures).length;i++)this.writeStoryPictures[i]===image&&this.writeStoryPictures.splice(i,1);this.loaded()},selectUser:function(t){var e=document.getElementById("textWriteStory").value,r=document.getElementById("textWriteStory").value.substring(0,e.length-this.currentMention.length);document.getElementById("textWriteStory").value=r+"@"+t+" ",document.getElementById("textWriteStory").focus(),this.currentMention=t,this.storyMentions.push(this.currentMention),this.currentMention="",this.triggerMention=0},sendComment:function(){this.$auth.$storage.getUniversal("userToken")},sendStory:function(){for(var t=this.$auth.$storage.getUniversal("userToken"),e=new d.a,i=0;i<this.selectedTags.length;i++)e.append("tags["+i+"]",this.selectedTags[i]);for(var r=0;r<this.selectedGroup.length;r++)e.append("groups["+r+"]",this.selectedGroup[r]);for(var o=0;o<this.writeStoryPictures.length;o++)e.append("pictures["+o+"]",this.writeStorySendPictures[o]);e.append("type","story"),e.append("content",this.writeStory.content),!1===this.writeStory.kudoboard?e.append("kudoboard",0):e.append("kudoboard",1),e.append("hidden_by_author",0),l()({url:"https://storylation.eu.ngrok.io/api/users/"+this.$route.params.username+"/stories",method:"post",headers:{authorization:"Bearer ".concat(t)},data:e}).then((function(t){document.location.reload(!0)})).catch((function(t){throw t}))},transformStoryType:function(t){switch(t){case"story":return"Story about";case"introduction":return"Introducing";case"thanks":return"Many thanks to";case"good_memory":return"Good memory with";case"inspired":return"Inspired by";case"congratulations":return"Congratulations to";case"fun_fact":return"Fun fact about";case"proud":return"Proud of";case"respect":return"Respect to";case"shoutout":return"Shoutout to";case"how_i_met":return"How I met";case"impressed":return"Impressed by";case"first_impression":return"My first impression of";case"conversation_opener":return"Conversation opener for";case"what_i_like":return"What I like about";case"happy":return"Happy for"}},initFlickity:function(){var t=document.createElement("script");t.setAttribute("src","https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"),document.head.appendChild(t)}}},f=(r(304),r(46)),component=Object(f.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"trombi w-screen align-center overflow-hidden justify-center items-start"},[t._l(t.userInfo,(function(e){return r("div",{key:e.username,staticClass:"w-270 mt-45.5 ml-auto mr-auto"},[r("img",{staticClass:"w-60 h-60 rond absolute",attrs:{src:e.thumbnail}}),t._v(" "),r("div",{staticClass:"mt-5"},[r("p",{staticClass:"leading-5 font-bold text-5xl text-IBM absolute ml-70 text-blueStory"},[t._v("\n        "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n      ")]),t._v(" "),r("p",{staticClass:"font-semibold text-base text-IBM text-greyStory ml-70 mt-12 absolute"},[t._v("\n        @"+t._s(e.username)+"\n      ")]),t._v(" "),r("p",{staticClass:"ml-70 font-normal text-xl text-IBM text-blueStory w-150 mt-20 absolute max-h-22 overflow-hidden"},[t._v("\n        "+t._s(e.description)+"\n      ")]),t._v(" "),r("div",{staticClass:"flex-row flex wrap absolute mt-44 ml-70 font-semibold text-IBM text-blueStory text-base"},[r("p",[t._v(t._s(e.karma_count)+" Karma")]),t._v(" "),r("p",{staticClass:"ml-6"},[t._v(t._s(e.followers_count)+" Followers")]),t._v(" "),r("p",{staticClass:"ml-6"},[t._v(t._s(e.following_count)+" Following")])]),t._v(" "),r("div",{staticClass:"w-32"},[r("div",{staticClass:"gray-bg text-center rounded-lg text-blueStory absolute ml-234 w-32 h-8 mt-28",attrs:{id:"followContainer"}},["following"!==e.following_status?r("button",{staticClass:"mt-1.5 text-sm font-semibold",attrs:{id:"followButton"},on:{click:function(e){return t.followFunction()}}},[t._v("\n            Follow\n          ")]):t._e()]),t._v(" "),"following"===e.following_status?r("div",{staticClass:"bg-blueStory text-center rounded-lg text-white absolute ml-234 w-32 h-8 mt-28"},[r("button",{staticClass:"mt-1.5 text-sm font-semibold",attrs:{id:"followButton"},on:{click:function(e){return t.followFunction()}}},[t._v("\n            Followed\n          ")])]):t._e(),t._v(" "),r("div",{staticClass:"ml-234 mt-44 absolute flex-row flex"},[null!==e.twitter_profile_url?r("button",{staticClass:"z-50 mr-4 w-6 h-6",on:{click:function(r){return t.redirectSocial(e.twitter_profile_url)}}},[r("img",{attrs:{src:"img/TWITTER.png"}})]):t._e(),t._v(" "),null!==e.facebook_profile_url?r("button",{staticClass:"z-50 mr-4 w-5 h-6",on:{click:function(r){return t.redirectSocial(e.facebook_profile_url)}}},[r("img",{attrs:{src:"img/FACEBOOK.png"}})]):t._e(),t._v(" "),null!==e.instagram_profile_url?r("button",{staticClass:"z-50 mr-4 w-5 h-6",on:{click:function(r){return t.redirectSocial(e.instagram_profile_url)}}},[r("img",{attrs:{src:"img/INSTA.png"}})]):t._e(),t._v(" "),null!==e.linkedin_profile_url?r("button",{staticClass:"z-50 mr-4 w-5 h-6",on:{click:function(r){return t.redirectSocial(e.linkedin_profile_url)}}},[r("img",{attrs:{src:"img/LINKEDIN.png"}})]):t._e()])])])])})),t._v(" "),t._l(t.userInfo,(function(e){return r("div",{key:e.id,staticClass:"justify-center mt-132 flex-row flex"},[r("div",{staticClass:"flex-row flex text-white"},[r("button",{staticClass:"receivedButton text-white font-semibold text-lg ml-3 mt-1 w-36 h-9 typeButton bg-storyColor",on:{click:function(e){return t.callStoryType("received")}}},[t._v("\n        Story received\n      ")]),t._v(" "),r("button",{staticClass:"receivedButton w-11 text-white font-semibold text-lg ml-0.5 mt-1 h-9 bg-storyColor typeNumber"},[t._v("\n        "+t._s(e.received_stories_count)+"\n      ")])]),t._v(" "),r("div",{staticClass:"flex-row flex ml-8"},[r("button",{staticClass:"writtenButton text-blueStory font-semibold text-lg mt-1 w-36 h-9 typeButton gray-bg",on:{click:function(e){return t.callStoryType("written")}}},[t._v("\n        Story written\n      ")]),t._v(" "),r("button",{staticClass:"writtenButton w-11 text-blueStory font-semibold text-lg ml-0.5 mt-1 h-9 gray-bg typeNumber"},[t._v("\n        "+t._s(e.written_stories_count)+"\n      ")])]),t._v(" "),r("div",{staticClass:"flex-row flex ml-8"},[r("button",{staticClass:"mentionnedButton text-blueStory font-semibold text-lg mt-1 w-36 h-9 typeButton gray-bg",on:{click:function(e){return t.callStoryType("mentionned")}}},[t._v("\n        Mentionned in\n      ")]),t._v(" "),r("button",{staticClass:"mentionnedButton w-11 text-blueStory font-semibold text-lg ml-0.5 mt-1 h-9 gray-bg typeNumber"},[t._v("\n        "+t._s(e.mentioning_stories_count)+"\n      ")])])])})),t._v(" "),r("div",{staticClass:"grid max-w-340 ml-auto mr-auto mt-54 absolute",attrs:{id:"storiesContainer"}},[t._l(t.me,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"grid-item shadow-box rounded-xl w-100 rounded-xl border-2 bg-white"},[r("button",{staticClass:"ml-7 mt-4 text-storyColor text-xs text-IBM-bold font-bold",on:{click:function(e){return t.appendTypeStory()}}},[t._v("\n          "+t._s(t.writeType)+"\n        ")]),t._v(" "),r("div",{staticClass:"max-h-20 overflow-scroll hidden absolute bg-white overflow-x-hidden",attrs:{id:"typesContainer"}},t._l(t.types,(function(e){return r("button",{key:e,staticClass:"flex-row flex ml-7 mt-4 text-storyColor text-xs text-IBM-bold font-bold",on:{click:function(r){return t.removeTypeStory(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),r("div",{staticClass:"line ml-7 mt-2.5 w-6 h-0.5 bg-storyColor"}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.writeStory.content,expression:"writeStory.content"}],staticClass:"ml-7 mt-7 w-85 resize-none overflow-x-hidden",attrs:{id:"textWriteStory",placeholder:"Write a story"},domProps:{value:t.writeStory.content},on:{input:[function(e){e.target.composing||t.$set(t.writeStory,"content",e.target.value)},t.checkMention]}}),t._v(" "),t._l(t.userResult,(function(e){return r("p",{key:e.id,staticClass:"max-w-44"},[r("button",{on:{click:function(r){return t.selectUser(e.username)}}},[t._v("\n            "+t._s(e.first_name)+" "+t._s(e.last_name)+" "+t._s(e.username)+"\n          ")])])})),t._v(" "),r("div",{staticClass:"flex-row flex overflow-x-auto max-w-none previewContainer"},t._l(t.writeStoryPictures,(function(image){return r("div",{key:image.id,staticClass:"overflow-hidden w-24 h-24 mr-2"},[r("img",{staticClass:"w-24 h-24 hoverImg rounded-2xl min-w-24 overflow-hidden",attrs:{src:image}}),t._v(" "),r("button",{staticClass:"hideButton absolute -mt-22 text-right bg-white rounded-full ml-18",attrs:{id:"beforeButton"},on:{click:function(e){return t.removePicture(image)}}},[r("img",{attrs:{src:"img/icon-croix.png"}})])])})),0),t._v(" "),r("div",{staticClass:"flex-row flex ml-74"},[r("input",{staticClass:"absolute opacity-0 w-6",style:{backgroundImage:"url(../img/icon-photo.png)"},attrs:{type:"file",accept:".png, .jpeg, .jpg",multiple:""},on:{change:t.previewFiles}}),t._v(" "),r("img",{staticClass:"mr-4",attrs:{src:"img/icon-photo.png"}})]),t._v(" "),r("img",{staticClass:"ml-7 mt-6 mb-6 h-12 w-12 object-cover rounded-full",attrs:{src:e.picture}}),t._v(" "),r("p",{staticClass:"text-xs text-IBM text-blueStory ml-20 mb-5 -mt-13 flex-row flex absolute"},[t._v("\n          "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n        ")]),t._v(" "),r("button",{staticClass:"flex-row flex ml-80 mb-4",on:{click:function(e){return t.sendStory()}}},[r("p",{staticClass:"font-bold text-blueStory text-IBM"},[t._v("Send")]),t._v(" "),r("img",{attrs:{src:"img/icon-chevron.png"}})])],2)])})),t._v(" "),t._l(t.stories,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"grid-item shadow-box rounded-xl w-100 rounded-xl border-2 bg-white"},[r("p",{staticClass:"ml-7 mt-4 text-storyColor text-xs text-IBM-bold font-bold"},[t._v("\n          "+t._s(e.type)+"\n        ")]),t._v(" "),r("div",{staticClass:"text-sm font-bold text-IBM-bold text-blueStory ml-7"},[t._v("\n          "+t._s(e.recipient.first_name)+" "+t._s(e.recipient.last_name)+"\n        ")]),t._v(" "),r("img",{staticClass:"absolute -mt-13 mr-3.5 ml-74 h-18 w-18 object-cover pdpStory",attrs:{src:e.recipient.picture}}),t._v(" "),r("div",{staticClass:"line ml-7 mt-2.5 w-6 h-0.5 bg-storyColor"}),t._v(" "),r("div",{staticClass:"ml-7 mr-8 text-xl max-h-100 overflow-scroll text-blueStory mt-5 text-IBMPlexSerif mb-6 overflow-x-hidden overflow-y-auto"},[t._v("\n          "+t._s(e.content)+"\n        ")]),t._v(" "),e.videos.length>0?r("div",[r("video",{staticClass:"w-100 mt-4",attrs:{id:"storyVideo"+e.videos[0].id,controls:""}},[r("source",{attrs:{autostart:"false",src:e.videos[0].url}})])]):t._e(),t._v(" "),t._l(e.video_links,(function(video){return r("iframe",{key:video.id,staticClass:"w-100 mt-4",attrs:{src:"https://www.youtube.com/embed/"+video.provider_id,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})})),t._v(" "),r("div",{attrs:{id:"carousel"}},[r("div",{staticClass:"overflow-hidden",attrs:{"data-flickity":'{ "wrapAround": true, "pageDots": true }'}},t._l(e.pictures,(function(picture){return r("div",{key:picture.id,staticClass:"w-100"},[r("img",{staticClass:"w-100",attrs:{src:picture.url}})])})),0),t._v(" "),r("div",{staticClass:"ml-7 mt-2.5 text-xs text-IBM text-greyStory mb-5"},[t._v("\n            "+t._s(e.hashtags)+"\n          ")]),t._v(" "),r("img",{staticClass:"ml-7 mt-6 mb-6 h-12 w-12 object-cover rounded-full",attrs:{src:e.author.picture}}),t._v(" "),r("div",{staticClass:"text-xs text-IBM text-blueStory ml-20 mb-5 -mt-13 flex-row flex absolute"},[t._v("\n            "+t._s(e.author.first_name)+" "+t._s(e.author.last_name)+"\n            "),r("p",{staticClass:"text-greyStory flex-row flex ml-2"},[t._v("—"+t._s(e.date))])]),t._v(" "),r("div",{staticClass:"text-xs text-greyStory ml-7 flex-row flex mb-4 mt-8"},[r("img",{staticClass:"w-4 h-4",attrs:{src:"img/emoji/emoji-like-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-coeur-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-impressionne-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-clap-contour.png"}}),t._v("\n            "+t._s(e.likes_count)+" ・"+t._s(e.comments_count)+" commentaires\n            ・"+t._s(e.views_count)+"\n            vues\n          ")]),t._v(" "),r("div",{staticClass:"ml-7 w-85 h-0.5 bg-greyStory"}),t._v(" "),r("div",{staticClass:"flex-row flex mt-5 mb-5 w-85 ml-7 justify-between"},[null===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/like-line.png"}}):"Love"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-coeur-contour.png"}}):"Like"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-like-contour.png"}}):"Superlike"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-superlike.png"}}):"Cry"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/cryIcon.png"}}):t._e(),t._v(" "),r("button",{staticClass:"text-greyStory ml-2",on:{click:function(r){return t.likeStory(e)}}},[null!==e.liked_type?r("p",{staticClass:"text-yellow-400 -ml-8",attrs:{id:"likedType"}},[t._v("\n                "+t._s(e.liked_type)+"\n              ")]):r("p",{staticClass:"-ml-8",attrs:{id:"likeDefault"}},[t._v("Like")])]),t._v(" "),r("img",{staticClass:"w-6 h-6",attrs:{src:"img/comment-line.png"}}),t._v(" "),r("button",{staticClass:"text-greyStory -ml-4",on:{click:function(r){return t.appendComment(e)}}},[t._v("\n              Comments\n            ")]),t._v(" "),r("img",{staticClass:"w-6 h-6",attrs:{src:"img/share-line.png"}}),t._v(" "),r("button",{staticClass:"text-greyStory -ml-4"},[t._v("Share")])])])],2)])}))],2),t._v(" "),r("div",{staticClass:"border-2 border-black centerDiv left-1/2 top-1/2 fixed bg-white hidden rounded-xl max-h-270 flex-row flex w-200",attrs:{id:"commentsContainer"}},[t._l(t.storyComment,(function(e){return r("div",{key:e.id,staticClass:"overflow-x-hidden w-100"},[r("div",{staticClass:"shadow-box rounded-xl w-100 rounded-xl border-2 bg-white"},[r("p",{staticClass:"ml-7 mt-4 text-storyColor text-xs text-IBM-bold font-bold"},[t._v("\n          "+t._s(e.type)+"\n        ")]),t._v(" "),r("button",{on:{click:function(r){return t.redirectProfile(e.recipient.id,e.recipient.username)}}},[r("div",{staticClass:"text-sm font-bold text-IBM-bold text-blueStory text-left ml-7"},[t._v("\n            "+t._s(e.recipient.first_name)+"\n            "+t._s(e.recipient.last_name)+"\n          ")]),t._v(" "),r("img",{staticClass:"-mt-14 mr-3.5 ml-74 h-18 w-18 object-cover pdpStory",attrs:{src:e.recipient.picture}})]),t._v(" "),r("div",{staticClass:"line ml-7 w-6 h-0.5 bg-storyColor"}),t._v(" "),r("div",{staticClass:"ml-7 mr-8 text-xl max-h-100 overflow-scroll text-blueStory mt-5 text-IBMPlexSerif overflow-x-hidden overflow-y-auto"},[t._v("\n          "+t._s(e.content)+"\n        ")]),t._v(" "),e.videos.length>0?r("div",[r("video",{staticClass:"w-100 mt-4",attrs:{id:"storyVideo"+e.videos[0].id,controls:""}},[r("source",{attrs:{autostart:"false",src:e.videos[0].url}})])]):t._e(),t._v(" "),r("div",{attrs:{id:"carousel"}},[r("div",{staticClass:"overflow-hidden",attrs:{"data-flickity":'{ "wrapAround": true, "imagesLoaded": true }'}},t._l(e.pictures,(function(picture){return r("div",{key:picture.id,staticClass:"w-100"},[r("img",{attrs:{src:picture.url}})])})),0),t._v(" "),r("div",{staticClass:"ml-7 mt-2.5 text-xs text-IBM text-greyStory mb-5"},[t._v("\n            "+t._s(e.hashtags)+"\n          ")]),t._v(" "),r("button",{on:{click:function(r){return t.redirectProfile(e.author.id,e.author.username)}}},[r("img",{staticClass:"ml-7 mt-6 mb-6 h-12 w-12 object-cover rounded-full",attrs:{src:e.author.picture}}),t._v(" "),r("div",{staticClass:"text-xs text-IBM text-blueStory ml-20 mb-5 -mt-13 flex-row flex absolute"},[t._v("\n              "+t._s(e.author.first_name)+" "+t._s(e.author.last_name)+"\n              "),r("p",{staticClass:"text-greyStory flex-row flex ml-2"},[t._v("\n                —\n                "+t._s(e.date)+"\n              ")])])]),t._v(" "),r("div",{staticClass:"text-xs text-greyStory ml-7 flex-row flex mb-4 mt-2"},[r("img",{staticClass:"w-4 h-4",attrs:{src:"img/emoji/emoji-like-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-coeur-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-impressionne-contour.png"}}),t._v(" "),r("img",{staticClass:"w-4 h-4 -ml-1",attrs:{src:"img/emoji/emoji-clap-contour.png"}}),t._v("\n            "+t._s(e.likes_count)+" ・"+t._s(e.comments_count)+" commentaires\n            ・"+t._s(e.views_count)+"\n            vues\n          ")]),t._v(" "),r("div",{staticClass:"ml-7 w-85 h-0.5 bg-greyStory"}),t._v(" "),r("div",{staticClass:"flex-row flex mt-5 mb-5 justify-center"},[null===e.liked_type||void 0===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/like-line.png"}}):"Love"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-coeur-contour.png"}}):"Like"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-like-contour.png"}}):"Cry"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/cryIcon.png"}}):"Superlike"===e.liked_type?r("img",{staticClass:"w-6 h-6",attrs:{src:"img/emoji/emoji-superlike.png"}}):t._e(),t._v(" "),r("button",{staticClass:"text-greyStory ml-2 mr-12",on:{click:function(r){return t.likeStory(e)}}},[null!==e.liked_type&&void 0!==e.liked_type?r("p",{staticClass:"text-yellow-400"},[t._v("\n                "+t._s(e.liked_type)+"\n              ")]):r("p",[t._v("Like")])]),t._v(" "),r("img",{staticClass:"w-6 h-6",attrs:{src:"img/comment-line.png"}}),t._v(" "),r("button",{staticClass:"text-greyStory ml-2 mr-12",on:{click:function(r){return t.appendComment(e)}}},[t._v("\n              Comments\n            ")]),t._v(" "),r("img",{staticClass:"w-6 h-6",attrs:{src:"img/share-line.png"}}),t._v(" "),r("button",{staticClass:"text-greyStory ml-2",on:{click:function(r){return t.copyClipboard(e.short_link)}}},[t._v("\n              Share\n            ")])])])])])})),t._v(" "),r("button",{staticClass:"fixed mt-2 ml-183.5 underline text-IBM text-blueStory font-bold",on:{click:function(e){return t.removeComment()}}},[t._v("\n      Return\n    ")]),t._v(" "),r("div",{staticClass:"flex-col flex overflow-x-hidden overflow-y-auto w-100"},[t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"m-12"},[r("img",{staticClass:"object-cover rounded-full h-8 w-8",attrs:{src:e.author.picture}}),t._v(" "),r("p",{staticClass:"-mt-8 ml-10 font-bold text-IBM text-blueStory text-sm"},[t._v("\n          "+t._s(e.author.first_name)+" "+t._s(e.author.last_name)+"\n        ")]),t._v(" "),r("p",{staticClass:"text-blueStory text-sm text-IBM ml-10"},[t._v("\n          "+t._s(e.content)+"\n        ")]),t._v(" "),r("img",{staticClass:"mt-4",attrs:{src:e.picture}}),t._v(" "),e.replies?r("div",t._l(e.replies,(function(e){return r("div",{key:e.id,staticClass:"ml-11 mt-8"},[r("img",{staticClass:"object-cover rounded-full h-8 w-8",attrs:{src:e.author.picture}}),t._v(" "),r("p",{staticClass:"-mt-8 ml-10 font-bold text-IBM text-blueStory text-sm"},[t._v("\n              "+t._s(e.author.first_name)+" "+t._s(e.author.last_name)+"\n            ")]),t._v(" "),r("p",{staticClass:"text-blueStory text-sm text-IBM ml-10"},[t._v("\n              "+t._s(e.content)+"\n            ")])])})),0):t._e()])})),t._v(" "),r("div",{staticClass:"flex flex-row"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentComment,expression:"currentComment"}],staticClass:"bg-gray-200 outline-none rounded-3xl w-8/10 ml-auto mr-auto h-10 pl-4 text-IBM text-blueStory",attrs:{type:"text",placeholder:"Comments"},domProps:{value:t.currentComment},on:{input:function(e){e.target.composing||(t.currentComment=e.target.value)}}}),t._v(" "),r("button",{staticClass:"w-10 h-10",on:{click:function(e){return t.sendComment(t.storyComment)}}},[r("img",{staticClass:"-ml-4 h-10 w-10",attrs:{src:"img/icon-chevron.png"}})])])],2)],2)],2)}),[],!1,null,null,null);e.default=component.exports}}]);