(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(68)},38:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/white_logo_transparent.96d5a089.png"},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),i=a.n(r),l=(a(38),a(5)),s=a(6),c=a(8),d=a(7),u=a(3),m=a(9),p=a(72),h=a(71),g=a(12),b=a.n(g),x=a(2),v={fontSize:"40px",display:"flex",justifyContent:"center",marginTop:"25px",color:"white",fontFamily:"BebasBold"},y={fontSize:"20px",fontFamily:"BebasBold",margin:"auto",marginTop:"0px",justifyContent:"center",display:"flex",textAlign:"center",color:"white",letterSpacing:"2px",backgroundColor:"black",width:"300px",height:"80px",paddingTop:"6px",borderRadius:"10px"},E={fontFamily:"BebasBook",letterSpacing:"2px",textAlign:"center",border:"2px solid black",borderRadius:"5px",width:"200px",height:"20px",color:"black"},f={position:"relative",left:"20px",top:"20px",textAlign:"center",margin:"0px",backgroundColor:"#FC6000",padding:"2px",cursor:"pointer",borderRadius:"10px",border:"1px solid black",boxShadow:"0px 0px 10px white"},S={container:{width:"500px",height:"600px",display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"40px",marginBottom:"40px",padding:"0px",border:"4px solid black",borderRadius:"20px 20px 20px 20px",boxShadow:"0px 0px 25px black",backgroundColor:"#1d1d1e"},footer:{position:"fixed",left:"0",bottom:"0",width:"100%",backgroundColor:"black",color:"white",textAlign:"center",letterSpacing:"3px",fontSize:"25px"},message:v,subtitle:Object(x.a)({},v,{fontSize:"20px",marginTop:"0px",marginBottom:"0px",fontFamily:"BebasBook"}),form:y,regForm:Object(x.a)({},y,{height:"575px",margin:"auto",marginTop:"10px",width:"475px",boxShadow:"0px 0px 5px inset white",border:"1px solid black",paddingBottom:"0px"}),input:E,inputError:Object(x.a)({},E,{border:"2px solid red",boxShadow:"0px 0px 10px red"}),line:{width:"400px",height:"2px",backgroundColor:"#1d1d1e",borderColor:"#1d1d1e",border:"0px",marginBottom:"6px"},userIcon:f,userIconClicked:Object(x.a)({},f,{boxShadow:"0px 0px 10px inset black"})},k=a(17),w=a.n(k),O=a(28),j=a(31),C=a(14),T={display:"block",margin:"auto",boxShadow:"0px 0px 25px white",borderRadius:"31px 31px 31px 31px",border:"1px solid black",marginTop:"15px",marginBottom:"15px"},F=function(e){return o.a.createElement("div",null,o.a.createElement("img",{src:e.imgUrl,alt:"card",style:T}))},N={backgroundColor:"#FC6000",height:"50px",width:"150px",display:"inline",margin:"auto",marginTop:"20px",border:"2px solid black",borderRadius:"10px",color:"white",textDecoration:"none",fontFamily:"BebasBold",letterSpacing:"4px",fontSize:"26px"},B=Object(x.a)({},N,{boxShadow:"0px 0px 10px white",cursor:"pointer"}),R=Object(x.a)({},N,{width:"75px",height:"50px",letterSpacing:"2px",fontSize:"20px"}),I={backgroundColor:"gray",height:"50px",width:"150px",display:"inline",margin:"auto",marginTop:"20px",border:"2px solid black",borderRadius:"10px",color:"white",textDecoration:"none",fontFamily:"BebasBold",letterSpacing:"4px",fontSize:"26px"},H={backgroundColor:"green",height:"50px",width:"150px",display:"inline",margin:"auto",marginTop:"20px",border:"2px solid black",borderRadius:"10px",color:"white",textDecoration:"none",fontFamily:"BebasBold",letterSpacing:"4px",fontSize:"26px"},U={backgroundColor:"red",height:"50px",width:"150px",display:"inline",margin:"auto",marginTop:"20px",border:"2px solid black",borderRadius:"10px",color:"white",textDecoration:"none",fontFamily:"BebasBold",letterSpacing:"4px",fontSize:"26px"},L={main:N,mainHover:B,timer:R,timerHover:Object(x.a)({},R,{boxShadow:"0px 0px 10px white",cursor:"pointer"}),done:I,doneHover:Object(x.a)({},I,{boxShadow:"0px 0px 10px white",cursor:"pointer"}),yes:H,yesHover:Object(x.a)({},H,{boxShadow:"0px 0px 10px white",cursor:"pointer"}),no:U,noHover:Object(x.a)({},U,{boxShadow:"0px 0px 10px white",cursor:"pointer"})},A=a(70),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={linkTo:a.props.linkTo,isHovered:!1,buttonName:a.props.buttonName,type:a.props.type,buttonFor:a.props.buttonFor},a.buttonHoverToggle=a.buttonHoverToggle.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"buttonHoverToggle",value:function(){var e=this.state.isHovered;this.setState({isHovered:!e})}},{key:"render",value:function(){var e,t=this.state,a=t.linkTo,n=t.isHovered,r=t.buttonName,i=t.type,l=t.buttonFor,s=this.props.buttonFunc;return e=a?o.a.createElement(A.a,{style:{display:"block",textDecoration:"none",width:"150px",margin:"auto"},to:"".concat(a)},o.a.createElement("button",{type:"button",style:n?L.mainHover:L.main,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle},r)):"submit"===i?o.a.createElement("button",{type:"submit",style:n?L.mainHover:L.main,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle},r):"timer"===l?o.a.createElement("button",{type:"button",style:n?L.timerHover:L.timer,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle,onClick:s},r):"finish"===r?o.a.createElement("button",{type:"button",style:n?L.doneHover:L.done,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle,onClick:s},r):"YES"===r?o.a.createElement("button",{type:"button",style:n?L.yesHover:L.yes,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle,onClick:s},r):"NO"===r?o.a.createElement("button",{type:"button",style:n?L.noHover:L.no,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle,onClick:s},r):o.a.createElement("button",{type:"button",style:n?L.mainHover:L.main,onMouseEnter:this.buttonHoverToggle,onMouseLeave:this.buttonHoverToggle,onClick:s},r),o.a.createElement("div",{style:{display:"inline"}},e)}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={minutes:0,seconds:0,isOn:!1},a.startTimer=a.startTimer.bind(Object(u.a)(a)),a.stopTimer=a.stopTimer.bind(Object(u.a)(a)),a.resetTimer=a.resetTimer.bind(Object(u.a)(a)),a.handleFinish=a.handleFinish.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"startTimer",value:function(){var e=this;this.props.onWorkoutStart(),this.setState({isOn:!0}),this.timer=setInterval(function(){e.setState({seconds:e.state.seconds+1}),60===e.state.seconds&&e.setState({seconds:0,minutes:e.state.minutes+1})},1e3)}},{key:"stopTimer",value:function(){this.setState({isOn:!1}),clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setState({minutes:0,seconds:0})}},{key:"handleFinish",value:function(){this.setState({isOn:!1});var e=this.state,t=e.minutes,a=e.seconds;this.props.onWorkoutFinish(t,a),console.log("Finished in ".concat(t," mins. and ").concat(a," secs."))}},{key:"render",value:function(){var e=this.state,t=e.minutes,a=e.seconds,n=e.isOn,r=n?null:o.a.createElement(M,{buttonFor:"timer",buttonFunc:this.startTimer,buttonName:"start"}),i=n?o.a.createElement(M,{buttonFor:"timer",buttonFunc:this.stopTimer,buttonName:"stop"}):null,l=n?null:o.a.createElement(M,{buttonFor:"timer",buttonFunc:this.resetTimer,buttonName:"reset"}),s=n?null:o.a.createElement(M,{buttonFunc:this.handleFinish,buttonName:"finish"});return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"0px"}},o.a.createElement("h1",{style:{marginTop:"5px",marginBottom:"0px",fontSize:"60px",letterSpacing:"4px"}}," ",t<10?"0"+t:t," : ",a<10?"0"+a:a," ")),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"0px"}},o.a.createElement("div",{style:{margin:"auto"}},l),o.a.createElement("div",{style:{margin:"auto"}},s,i),o.a.createElement("div",{style:{margin:"auto"}},r)))}}]),t}(n.Component),P=function(e){return o.a.createElement("div",null,o.a.createElement("h2",{style:Object(x.a)({},S.message,{marginTop:"3px",marginBottom:"4px"})}," Great work! "),o.a.createElement("h3",{style:Object(x.a)({},S.subtitle,{textAlign:"center"})}," Would you like to save this to your workout History?"),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"0px"}},o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(M,{buttonName:"NO",buttonFunc:e.onNotSave})),o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(M,{buttonName:"YES",buttonFunc:e.onSave}))))},D={display:"block",margin:"auto",boxShadow:"0px 0px 25px white",borderRadius:"31px 31px 31px 31px",border:"1px solid black",marginTop:"15px",marginBottom:"15px"},z={backgroundColor:"black",color:"white",height:"160px",border:"5px solid black",borderRadius:"0px 0px 15px 15px",boxShadow:"-2px 0px 5px black"},q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={workoutStart:!1,workoutFinish:!1,saveClicked:!1,notSaveClicked:!1,time:""},a.handleWorkoutStart=a.handleWorkoutStart.bind(Object(u.a)(a)),a.handleWorkoutFinish=a.handleWorkoutFinish.bind(Object(u.a)(a)),a.handleSave=a.handleSave.bind(Object(u.a)(a)),a.handleNotSave=a.handleNotSave.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleWorkoutStart",value:function(){this.setState({workoutStart:!0})}},{key:"handleWorkoutFinish",value:function(e,t){this.setState({workoutFinish:!0,workoutStart:!1,time:"".concat(e," mins. ").concat(t," secs.")})}},{key:"handleSave",value:function(){this.setState({saveClicked:!0}),this.props.onSave(this.state.time),setTimeout(this.props.onSaveUnSave,2e3)}},{key:"handleNotSave",value:function(){this.setState({notSaveClicked:!0}),setTimeout(this.props.onSaveUnSave,2e3)}},{key:"render",value:function(){var e,t;return this.state.workoutFinish?(this.state.saveClicked||this.state.notSaveClicked||(e=o.a.createElement(P,{onNotSave:this.handleNotSave,onSave:this.handleSave})),this.state.saveClicked&&(e=o.a.createElement("div",null,o.a.createElement("h2",{style:Object(x.a)({},S.message,{marginTop:"3px",marginBottom:"4px"})}," Workout Saved! "),o.a.createElement("h3",{style:Object(x.a)({},S.subtitle,{textAlign:"center"})}," Redirecting..."))),this.state.notSaveClicked&&(e=o.a.createElement("div",null,o.a.createElement("h2",{style:Object(x.a)({},S.message,{marginTop:"3px",marginBottom:"4px"})}," Workout NOT Saved! "),o.a.createElement("h3",{style:Object(x.a)({},S.subtitle,{textAlign:"center"})}," Redirecting...")))):e=o.a.createElement(W,{onWorkoutStart:this.handleWorkoutStart,onWorkoutFinish:this.handleWorkoutFinish}),this.state.workoutStart&&!this.state.workoutFinish?t="CRUSH THIS CARD!":this.state.workoutStart||this.state.workoutFinish?!this.state.workoutStart&&this.state.workoutFinish&&(t="Workout Finished!"):t="Start the timer below to begin!",o.a.createElement("div",null,o.a.createElement("div",{style:S.message},t),o.a.createElement("img",{src:this.props.currentCard.imgUrl,alt:"Current Card",style:D}),o.a.createElement("div",{style:z},e))}}]),t}(n.Component),Y={carousel:{width:"500px",height:"250px",margin:"auto",marginTop:"20px",marginBottom:"20px",borderRadius:"17px 17px 17px 17px"}},_=function(e){var t,a={fontFamily:"BebasBook",fontSize:"20px",marginTop:"0px",marginBottom:"0px",color:"white"};return t=0===e.user.workoutRecord.length?o.a.createElement("div",null,o.a.createElement("h1",null,"YOU HAVE NO WORKOUTS RECORDED YET! ")):o.a.createElement("div",{style:Object(x.a)({},Y.carousel,{width:"400px",height:"200px"})},o.a.createElement(C.a,{wrapAround:!0,withoutControls:!0,slideWidth:.9,speed:500,cellAlign:"center",easing:"easeLinear"},e.user.workoutRecord.map(function(e,t){return o.a.createElement("div",null,o.a.createElement("img",{style:{display:"block",margin:"auto",marginTop:"10px",boxShadow:"0px 0px 15px white",borderRadius:"20px",border:"2px solid black",marginBottom:"5px"},src:e.imgUrl,alt:"card",height:"200",width:"150"}),o.a.createElement("div",null,e.time))}))),o.a.createElement("div",{style:Object(x.a)({},S.regForm,{height:"525px",marginTop:"20px",display:"block"})},o.a.createElement("div",null,o.a.createElement("h3",{style:{marginBottom:"5px",marginTop:"10px"}}," USER INFO ")),o.a.createElement("hr",{style:Object(x.a)({},S.line,{marginBottom:"10px"})}),o.a.createElement("div",{style:{display:"inline",marginRight:"25px"}},o.a.createElement("span",{style:a},"Name:")," ",e.user.firstName," ",e.user.lastName),o.a.createElement("div",{style:{display:"inline",marginLeft:"25px"}},o.a.createElement("span",{style:a},"Age:")," ",e.user.age),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement("span",{style:a},"Email:")," ",e.user.email),o.a.createElement("hr",{style:Object(x.a)({},S.line,{marginBottom:"10px"})}),o.a.createElement("div",null,o.a.createElement("h3",{style:{marginBottom:"0px",marginTop:"0px"}}," Workout History ")),o.a.createElement("hr",{style:Object(x.a)({},S.line,{marginBottom:"0px"})}),t,o.a.createElement("div",{style:{position:"relative",float:"right",right:"20px",top:"10px"}},o.a.createElement(M,{buttonName:"logout",buttonFor:"timer",buttonFunc:function(){e.onLogout()}})))},G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={cards:[],currentCardIndex:0,autoplayToggle:!1,currentCard:null,currentUser:{},cardSelected:!1,displayUserInfo:!1},a.handleRandomButton=a.handleRandomButton.bind(Object(u.a)(a)),a.handleCurrentCard=a.handleCurrentCard.bind(Object(u.a)(a)),a.handleCardSelect=a.handleCardSelect.bind(Object(u.a)(a)),a.handleWorkoutSave=a.handleWorkoutSave.bind(Object(u.a)(a)),a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/cards").then(function(t){if(t.data&&0===e.state.cards.length){var a=t.data.map(function(e){return{id:e._id,imgUrl:e.imgUrl}}).sort(function(e,t){return parseInt(e.imgUrl.slice(86,88))-parseInt(t.imgUrl.slice(86,88))});e.setState({cards:a,currentCard:t.data[0],currentUser:e.props.currentUser})}}).catch(function(e){return console.log(e)})}},{key:"handleRandomButton",value:function(){var e=this,t=this.state.currentCardIndex+Math.floor(26*Math.random()),a=t>52?t%52:t;this.setState({autoplayToggle:!0,currentCardIndex:a}),setTimeout(function(){e.setState({autoplayToggle:!1})},1500),console.log(this.state.currentUser)}},{key:"handleUserInfo",value:function(){this.setState({displayUserInfo:!this.state.displayUserInfo})}},{key:"handleCardSelect",value:function(){var e=this.state.cardSelected;this.setState({cardSelected:!e})}},{key:"handleLogout",value:function(){var e=this;setTimeout(function(){return e.props.history.push("/")},500)}},{key:"handleWorkoutSave",value:function(e){var t=this.state,a=t.currentUser,n=t.currentCard,o={cardId:n._id,time:e,imgUrl:n.imgUrl},r=Object(j.a)(a.workoutRecord);r.push(o),this.setState({currentUser:Object(x.a)({},a,{workoutRecord:r})}),b.a.patch("/users/".concat(a._id),{workoutRecord:a.workoutRecord}).then(function(e){console.log("Workout Saved")}).catch(function(e){return console.log("Something went wrong",e)})}},{key:"handleCurrentCard",value:function(){var e=Object(O.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.cards,e.next=3,b.a.get("/cards/".concat(a[t].id));case 3:n=e.sent;try{this.setState({currentCard:n.data,currentCardIndex:t})}catch(o){console.log("something went wrong",o)}case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=this.state.autoplayToggle?o.a.createElement("div",{style:Object(x.a)({},S.message,{marginTop:"125px"})}," PLEASE WAIT... "):o.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"110px"}},o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(M,{buttonName:"RANDOM",buttonFunc:this.handleRandomButton})),o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(M,{buttonName:"CONFIRM",buttonFunc:this.handleCardSelect}))),n=this.state.autoplayToggle?"PICKING RANDOMLY":"SELECT A CARD",r=this.state.autoplayToggle?"Make sure you warm up first":"(Please swipe left or right to navigate through the deck)";return e=this.state.cardSelected?o.a.createElement(q,{onSave:this.handleWorkoutSave,onSaveUnSave:this.handleCardSelect,currentCard:this.state.currentCard}):this.state.displayUserInfo?o.a.createElement("div",null,o.a.createElement("img",{style:this.state.displayUserInfo?S.userIconClicked:S.userIcon,onClick:function(){return t.handleUserInfo()},src:"https://img.icons8.com/metro/26/000000/user-group-man-man.png",alt:"User Icon"}),o.a.createElement(_,{onLogout:this.handleLogout,user:this.state.currentUser})):o.a.createElement("div",null,o.a.createElement("img",{style:this.state.displayUserInfo?S.userIconClicked:S.userIcon,onClick:function(){return t.handleUserInfo()},alt:"User Icon",src:"https://img.icons8.com/metro/26/000000/user-group-man-man.png"}),o.a.createElement("div",{style:Object(x.a)({},S.message,{marginTop:"0px"})},n),o.a.createElement("div",{style:S.subtitle},r),o.a.createElement("div",{style:Y.carousel},o.a.createElement(C.a,{slideIndex:this.state.currentCardIndex,wrapAround:!0,withoutControls:!0,slideWidth:.9,speed:500,cellAlign:"center",animation:this.state.autoplayToggle?{}:"zoom",easing:"easeLinear",autoplay:this.state.autoplayToggle,autoplayInterval:10,afterSlide:function(e){return t.handleCurrentCard(e)}},this.state.cards.map(function(e,t){return o.a.createElement(F,{key:e.id,imgUrl:e.imgUrl,index:t})}))),a),o.a.createElement("div",null,e)}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={linkTo:a.props.linkTo,isHovered:!1,linkName:a.props.linkName},a.hoverToggle=a.hoverToggle.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"hoverToggle",value:function(){var e=this.state.isHovered;this.setState({isHovered:!e})}},{key:"render",value:function(){var e=this.state,t=e.linkTo,a=e.isHovered,n=e.linkName,r={display:"block",width:"150px",margin:"auto",marginTop:"20px",color:"white",textDecoration:"none",textAlign:"center",fontSize:"20px",letterSpacing:"3px",fontFamily:"BebasBook",padding:"0px"},i=Object(x.a)({},r,{color:"black",textShadow:"0px 0px 20px white"});return o.a.createElement("div",null,o.a.createElement(A.a,{style:a?i:r,to:t,onMouseEnter:this.hoverToggle,onMouseLeave:this.hoverToggle},n))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={email:"",password:"",emailFound:!0},a.handleEmail=a.handleEmail.bind(Object(u.a)(a)),a.handlePassword=a.handlePassword.bind(Object(u.a)(a)),a.handleSubmission=a.handleSubmission.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmission",value:function(e){var t=this;e.preventDefault(),b.a.get("/users/email/".concat(this.state.email.toLowerCase())).then(function(e){var a=e.data;t.setState({emailFound:!0}),e.data.password===t.state.password?(t.props.onSignIn(a),t.setState({email:"",password:""}),setTimeout(function(){return t.props.history.push("/deck")},500)):404===e.status&&t.setState({email:"",password:"",emailFound:!1})}).catch(function(e){t.setState({email:"",password:"",emailFound:!1})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",color:"red"}},this.state.emailFound?"":"INVALID EMAIL / PASSWORD"),o.a.createElement("div",{style:this.state.emailFound?Object(x.a)({},S.form,{marginTop:"14px"}):S.form},o.a.createElement("form",{onSubmit:this.handleSubmission},o.a.createElement("div",null,o.a.createElement("input",{required:!0,style:this.state.emailFound?S.input:S.inputError,type:"text",name:"email",placeholder:"Enter E-mail address",onChange:this.handleEmail})),o.a.createElement("hr",{style:S.line}),o.a.createElement("div",{style:{marginBottom:"5px"}},o.a.createElement("input",{style:S.input,type:"password",name:"password",placeholder:"enter password",onChange:this.handlePassword})),o.a.createElement(M,{buttonName:"LAUNCH",type:"submit"}))))}}]),t}(n.Component),K=a(66),$=function(e){return o.a.createElement("div",null,o.a.createElement("img",{src:K,alt:"Sweat Deck Logo",style:{display:"block",margin:"auto",marginTop:"20px",marginBottom:"15px",height:"330px",width:"330px"}}),o.a.createElement(V,Object.assign({},e,{onSignIn:e.onSignIn})),o.a.createElement("div",{style:{marginTop:"85px"}},o.a.createElement(J,{linkTo:"/register",linkName:"REGISTER"})))},Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={firstName:"",lastName:"",age:0,password:"",email:"",confirmPassword:"",validEmail:!0,validPassword:!0,registrationSuccess:!1},a.handleFirstName=a.handleFirstName.bind(Object(u.a)(a)),a.handleLastName=a.handleLastName.bind(Object(u.a)(a)),a.handleBirthday=a.handleBirthday.bind(Object(u.a)(a)),a.handleEmail=a.handleEmail.bind(Object(u.a)(a)),a.handlePassword=a.handlePassword.bind(Object(u.a)(a)),a.handlePasswordConfirmation=a.handlePasswordConfirmation.bind(Object(u.a)(a)),a.handleSubmission=a.handleSubmission.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmission",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.firstName,o=a.lastName,r=a.age,i=a.email,l=a.password,s=a.confirmPassword,c=a.validEmail,d=a.validPassword;l!==s?this.setState({validPassword:!1}):this.setState({validPassword:!0}),b.a.get("/users/email/".concat(i)).then(function(e){t.setState({validEmail:!1})}).catch(function(e){t.setState({validEmail:!0}),c&&d&&(t.props.onRegister({firstName:n[0].toUpperCase()+n.slice(1),lastName:o[0].toUpperCase()+o.slice(1),age:r,email:i.toLowerCase(),password:l,admin:!1,workoutRecord:[]}),t.setState({registrationSuccess:!0}))})}},{key:"handleFirstName",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastName",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleBirthday",value:function(e){var t=new Date,a=new Date(e.target.value),n=t.getFullYear()-a.getFullYear(),o=t.getMonth()-a.getMonth();(o<0||0===o&&t.getDate()<a.getDate())&&n--,this.setState({age:n})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handlePasswordConfirmation",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"render",value:function(){var e;if(this.state.registrationSuccess)e=o.a.createElement("div",{style:Object(x.a)({},S.regForm,{display:"block",height:"300px",marginTop:"150px"})},o.a.createElement("h1",null,"Registration Complete!"),o.a.createElement("hr",{style:S.line}),o.a.createElement("h4",null,"Please return to the homepage and sign in"),o.a.createElement(M,{buttonName:"HOME",linkTo:"/"}));else{var t={marginBottom:"12px"},a="",n="";this.state.validEmail?(t={marginBottom:"12px"},a=""):(a=o.a.createElement("p",{style:{color:"red",fontSize:"10px",marginTop:"5px",marginBottom:"0px"}},"E-mail already taken."),t={marginBottom:"10px"}),this.state.validPassword?(t={marginBottom:"12px"},n=""):(n=o.a.createElement("p",{style:{color:"red",fontSize:"10px",marginTop:"2px",marginBottom:"2px"}},"Passwords don't match."),t={marginBottom:"10px"}),e=o.a.createElement("div",{style:S.regForm},o.a.createElement("form",{onSubmit:this.handleSubmission},o.a.createElement("h2",{style:{marginBottom:"0px"}}," PLEASE FILL OUT THE FORM BELOW "),o.a.createElement("hr",{style:Object(x.a)({},S.line,{marginBottom:"10px"})}),o.a.createElement("label",null,"First Name"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:S.input,type:"text",id:"firstName",placeholder:"John / Jane",onChange:this.handleFirstName})),o.a.createElement("label",null,"Last Name"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:S.input,type:"text",id:"lastName",placeholder:"Doe",onChange:this.handleLastName})),o.a.createElement("label",null,"DATE OF BIRTH"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:S.input,type:"date",id:"birthday",onChange:this.handleBirthday})),o.a.createElement("label",null,"E-MAIL ADDRESS"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:this.state.validEmail?S.input:S.inputError,type:"text",id:"email",placeholder:"example1234@email.com",onChange:this.handleEmail}),a),o.a.createElement("label",null,"PASSWORD"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:S.input,type:"password",id:"password",placeholder:"Must be 6 - 12 characters",onChange:this.handlePassword})),o.a.createElement("label",null,"CONFIRM PASSWORD"),o.a.createElement("div",{style:t},o.a.createElement("input",{required:!0,style:this.state.validPassword?S.input:S.inputError,type:"password",id:"confirmation",placeholder:"Confirm Password",onChange:this.handlePasswordConfirmation}),n),o.a.createElement("hr",{style:Object(x.a)({},S.line,{marginBottom:"0px",marginTop:"15px"})}),o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(J,{linkTo:"/",linkName:"NEVERMIND, RETURN"})),o.a.createElement("div",{style:{margin:"auto"}},o.a.createElement(M,{buttonName:"REGISTER",type:"submit"})))))}return o.a.createElement("div",null,e)}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={signedIn:!1,currentUser:{}},a.handleRegistration=a.handleRegistration.bind(Object(u.a)(a)),a.handleSignIn=a.handleSignIn.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleRegistration",value:function(e){b.a.post("/users",{firstName:e.firstName,lastName:e.lastName,age:e.age,email:e.email,password:e.password,admin:!1,workoutRecord:[]}).then(function(t){console.log("User added successfully",e.firstName)}).catch(function(e){return console.log("Something went wrong",e)})}},{key:"handleSignIn",value:function(e){var t=e;this.setState({signedIn:!0,currentUser:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement("div",{style:S.container},o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement($,Object.assign({},t,{onSignIn:e.handleSignIn}))}}),o.a.createElement(h.a,{exact:!0,path:"/deck",render:function(t){return o.a.createElement(G,Object.assign({},t,{currentUser:e.state.currentUser}))}}),o.a.createElement(h.a,{exact:!0,path:"/register",render:function(){return o.a.createElement(Q,{onRegister:e.handleRegistration})}}))),o.a.createElement("div",{style:S.footer},"Copyright \xa9 2019 www.mysweatdeck.com  All Rights Reserved"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.41546fe4.chunk.js.map