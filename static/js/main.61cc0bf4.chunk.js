(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t(261)},124:function(e,a,t){},247:function(e,a,t){},248:function(e,a,t){},253:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(12),l=t.n(i),d=(t(124),t(23)),o=t(24),c=t(27),r=t(25),h=t(8),u=t(26),k=t(105),p=t.n(k),v=t(106),m=t.n(v),f=t(107),E=t.n(f),b=t(49),w=t.n(b),g=t(50),S=t.n(g),T=(t(247),t(22)),C=t.n(T),y=(t(248),t(31)),O=t.n(y),j=t(108),N=t.n(j),D=t(109),I=t.n(D),x=t(110),L=t.n(x),A=t(111),R=t.n(A),W=t(112),B=t.n(W),M=(t(253),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).state={edit:!1},t.handleDel=t.handleDel.bind(Object(h.a)(t)),t.handleTaskStatusChange=t.handleTaskStatusChange.bind(Object(h.a)(t)),t.toggleEdit=t.toggleEdit.bind(Object(h.a)(t)),t.handleSaveEdit=t.handleSaveEdit.bind(Object(h.a)(t)),t.handleCancelEdit=t.handleCancelEdit.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleDel",value:function(){this.props.handleDel(this.props.taskId)}},{key:"handleTaskStatusChange",value:function(){this.props.handleTaskStatusChange(this.props.taskId)}},{key:"toggleEdit",value:function(){this.setState(function(e){return{edit:!e.edit}})}},{key:"handleSaveEdit",value:function(){this.toggleEdit();var e=document.getElementById("taskEdit").value;this.props.handleSaveEdit(this.props.taskId,e)}},{key:"handleCancelEdit",value:function(){window.confirm("Are you sure you want to discard these changes?")&&this.toggleEdit()}},{key:"render",value:function(){var e=null,a={smallIcon:{width:20,height:20},small:{width:20,height:20,padding:0,borderWidth:"0px"}};e=this.state.edit?s.a.createElement("div",{className:"Task-actions"},s.a.createElement(O.a,{iconStyle:a.smallIcon,style:a.small,onClick:this.handleSaveEdit},s.a.createElement(R.a,null)),s.a.createElement(O.a,{iconStyle:a.smallIcon,style:a.small,onClick:this.handleCancelEdit},s.a.createElement(B.a,{color:"#c82333"}))):s.a.createElement("div",{className:"Task-actions"},s.a.createElement(O.a,{className:"Task-edit",iconStyle:a.smallIcon,style:a.small,onClick:this.toggleEdit},s.a.createElement(L.a,{color:"#e0a800"})),s.a.createElement(O.a,{className:"Task-delete",iconStyle:a.smallIcon,style:a.small,onClick:this.handleDel},s.a.createElement(I.a,{color:"#c82333"})));var t=null;return t=this.state.edit?s.a.createElement("input",{type:"text",id:"taskEdit",className:"Task-desc",defaultValue:this.props.description}):s.a.createElement("span",{className:"Task-desc"},s.a.createElement(N.a,{style:{width:"0px"},defaultChecked:this.props.checked,onCheck:this.handleTaskStatusChange}),this.props.description),s.a.createElement("div",{className:"Task"},t,e)}}]),a}(n.Component)),J=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).handleDel=t.handleDel.bind(Object(h.a)(t)),t.handleTaskStatusChange=t.handleTaskStatusChange.bind(Object(h.a)(t)),t.handleSaveEdit=t.handleSaveEdit.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleDel",value:function(e){this.props.handleDel(e)}},{key:"handleTaskStatusChange",value:function(e){this.props.handleTaskStatusChange(e)}},{key:"handleSaveEdit",value:function(e,a){this.props.handleSaveEdit(e,a)}},{key:"render",value:function(){var e=this,a=this.props.tasks.map(function(a){return s.a.createElement(M,{key:a.id,taskId:a.id,checked:a.done,description:a.description,handleDel:e.handleDel,handleTaskStatusChange:e.handleTaskStatusChange,handleSaveEdit:e.handleSaveEdit})});return s.a.createElement(C.a,{className:"Lister"},s.a.createElement("span",{className:"Lister-title"},this.props.title),s.a.createElement("br",null),s.a.createElement(w.a,null),a)}}]),a}(n.Component),U=t(51),V=t.n(U),P=t(113),Q=t.n(P),$=(t(260),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).state={newTask:""},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleSave=t.handleSave.bind(Object(h.a)(t)),t.handleCancel=t.handleCancel.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleSave",value:function(){this.props.handleSave(this.state.newTask),this.setState({newTask:""})}},{key:"handleCancel",value:function(){this.props.handleCancel(),this.setState({newTask:""})}},{key:"handleChange",value:function(e){this.setState({newTask:e.target.value})}},{key:"render",value:function(){var e=null;return e=this.props.addNewTask?s.a.createElement("div",{className:"Task-adder"},s.a.createElement(Q.a,{hintText:"New Task",floatingLabelText:"Please, add a new task:",multiLine:!0,defaultValue:this.state.newTask,onChange:this.handleChange}),s.a.createElement("div",{className:"Adder-buttons"},s.a.createElement(V.a,{label:"Save Task",primary:!0,onClick:this.handleSave}),s.a.createElement(V.a,{label:"Cancel",secondary:!0,onClick:this.handleCancel}))):s.a.createElement("div",null,s.a.createElement(V.a,{primary:!0,label:"New Task",onClick:this.props.handleNewTask})),s.a.createElement("div",null,e)}}]),a}(n.Component)),q=function(e){function a(e){var t;Object(d.a)(this,a);return(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).state={addNewTask:!1,tasks:[{id:1,description:"This is one task",done:!1},{id:2,description:"This is another task",done:!1},{id:3,description:"This task is done",done:!0},{id:4,description:"Done, done, done",done:!0},{id:5,description:"This is yet one more task",done:!1}],idCount:5,drawerIsOpen:!1},t.handleNewTask=t.handleNewTask.bind(Object(h.a)(t)),t.handleSave=t.handleSave.bind(Object(h.a)(t)),t.handleCancel=t.handleCancel.bind(Object(h.a)(t)),t.handleDel=t.handleDel.bind(Object(h.a)(t)),t.handleTaskStatusChange=t.handleTaskStatusChange.bind(Object(h.a)(t)),t.handleSaveEdit=t.handleSaveEdit.bind(Object(h.a)(t)),t.handleReset=t.handleReset.bind(Object(h.a)(t)),t.handleOpenDrawer=t.handleOpenDrawer.bind(Object(h.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleNewTask",value:function(){this.setState({addNewTask:!0})}},{key:"handleSave",value:function(e){if(""!==e){var a=this.state.tasks;a.push({id:this.state.idCount+1,description:e,done:!1}),this.setState({addNewTask:!1,task:a,idCount:this.state.idCount+1})}else this.setState({addNewTask:!1})}},{key:"handleCancel",value:function(){window.confirm("Are you sure you want to cancel?\nAll your input will be lost")&&this.setState({addNewTask:!1})}},{key:"handleDel",value:function(e){var a=this.state.tasks.filter(function(a){return a.id!==e});this.setState({tasks:a})}},{key:"handleTaskStatusChange",value:function(e){var a=this.state.tasks.map(function(a){return a.id===e&&(a.done=!a.done),a});this.setState({tasks:a})}},{key:"handleSaveEdit",value:function(e,a){if(""===a)this.handleDel(e);else{var t=this.state.tasks.map(function(t){return t.id===e&&(t.description=a),t});this.setState({tasks:t})}}},{key:"handleReset",value:function(){window.confirm("This will clear all the tasks.\nAre you sure to proceed?")&&this.setState({tasks:[]})}},{key:"handleOpenDrawer",value:function(){this.setState(function(e){return{drawerIsOpen:!e.drawerIsOpen}})}},{key:"render",value:function(){var e=this.state.tasks.filter(function(e){return!0===e.done}),a=this.state.tasks.filter(function(e){return!1===e.done});return s.a.createElement(p.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(m.a,{title:"My Todo List",onLeftIconButtonClick:this.handleOpenDrawer}),s.a.createElement(E.a,{open:this.state.drawerIsOpen,docked:!1},s.a.createElement(S.a,{disabled:!0},"Main Menu"),s.a.createElement(w.a,null),s.a.createElement(S.a,{primaryText:"Reset List",onClick:this.handleReset}),s.a.createElement(S.a,{primaryText:"Close",onClick:this.handleOpenDrawer})),s.a.createElement("div",{className:"App-listers"},s.a.createElement(J,{title:"Undone",tasks:a,handleDel:this.handleDel,handleTaskStatusChange:this.handleTaskStatusChange,handleSaveEdit:this.handleSaveEdit}),s.a.createElement(J,{title:"Done",tasks:e,handleDel:this.handleDel,handleTaskStatusChange:this.handleTaskStatusChange,handleSaveEdit:this.handleSaveEdit})),s.a.createElement($,{newTask:this.state.newTask,handleSave:this.handleSave,handleCancel:this.handleCancel,handleNewTask:this.handleNewTask,addNewTask:this.state.addNewTask})))}}]),a}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(s.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/todo-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/todo-react-app","/service-worker.js");z?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()}},[[114,1,2]]]);
//# sourceMappingURL=main.61cc0bf4.chunk.js.map