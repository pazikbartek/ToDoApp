(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),i=a(1),l=a(2),c=a(4),m=a(3),u=a(5),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("nav",null,s.a.createElement("h3",null," Your lists: "),s.a.createElement("button",{type:"button",onClick:function(){return e.props.onclick("Work","fas fa-laptop")},className:"btn btn-primary"},"Work \xa0 ",s.a.createElement("i",{className:"fas fa-laptop"}))," ",s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.props.onclick("School","fas fa-book-open")},className:"btn btn-primary"},"School \xa0 ",s.a.createElement("i",{className:"fas fa-book-open"}))," ",s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.props.onclick("Home","fas fa-home")},className:"btn btn-primary"},"Home \xa0 ",s.a.createElement("i",{className:"fas fa-home"}))," ",s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.props.onclick("All","fas fa-paste")},className:"btn btn-primary"},"All in one")," ",s.a.createElement("br",null))}}]),t}(n.Component),h=(a(16),a(6)),p=a(7),b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"task",style:this.props.style[0]},s.a.createElement("p",null,this.props.index+1,"."),s.a.createElement("button",{type:"button",onClick:this.props.handleTaskDone,disabled:this.props.style[1],id:this.props.id,className:"btn btn-success b"},s.a.createElement("i",{className:"fas fa-check",id:this.props.id})),s.a.createElement("p",{className:"taskname",style:this.props.style[2]},this.props.name),s.a.createElement("p",{className:"deadline"},"Deadline: ",s.a.createElement("br",null)," ",s.a.createElement("b",null," ",this.props.date," ")),s.a.createElement("button",{type:"button",id:this.props.id,onClick:this.props.handleTaskRemove,className:"btn btn-danger"},s.a.createElement("i",{className:"far fa-trash-alt",id:this.props.id})))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"editor"},s.a.createElement("button",{type:"button",onClick:this.props.exit,className:"btn btn-danger b"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"form"},s.a.createElement("label",{htmlFor:"task"},"Task name:")," ",this.props.maxLength?s.a.createElement("span",{className:"warning"},s.a.createElement("b",null," Maximum length is 55 characters!")):null,s.a.createElement("input",{maxLength:55,className:"form-control",onChange:this.props.handleTaskName,value:this.props.valueName,type:"text",placeholder:"Write your task...",id:"task"}),"Deadline: ",s.a.createElement("br",null),s.a.createElement("input",{type:"date",onChange:this.props.handleDate,value:this.props.valueDate}),s.a.createElement("input",{type:"time",onChange:this.props.handleDate,value:this.props.valueTime}),this.props.dateGiven&&this.props.timeGiven?null:s.a.createElement("span",{className:"datewarning"},s.a.createElement("b",null," Enter the date"))," ",s.a.createElement("br",null),s.a.createElement("label",{className:"mr-sm-2",htmlFor:"inlineFormCustomSelect"},"Choose list:"),s.a.createElement("select",{className:"custom-select mr-sm-2",onChange:this.props.handleCategory,value:this.props.valueCategory,id:"inlineFormCustomSelect"},s.a.createElement("option",{value:"Work",defaultValue:"Work"},"Work"),s.a.createElement("option",{value:"School"},"School"),s.a.createElement("option",{value:"Home"},"Home"))),s.a.createElement("button",{type:"button",onClick:this.props.handleSubmit,className:"btn btn-primary b"},"Submit"))}}]),t}(n.Component),v=function(e){return s.a.createElement("div",{className:"addtask"},s.a.createElement("h1",null," ",e.curCat," ",s.a.createElement("i",{className:e.icon})," "),s.a.createElement("button",{type:"button",className:"btn btn-success",onClick:e.onclick},"Add task \xa0 ",s.a.createElement("i",{className:"fas fa-plus"})),s.a.createElement("div",{className:"custom-control custom-checkbox"},s.a.createElement("input",{type:"checkbox",onClick:e.handleSort,className:"custom-control-input",id:"customCheck1"}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Sort by date")))},f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[{Id:0,name:"Wash the dishes",category:"Home",date:"2019-05-20",time:"15:30",removed:!1,done:!1,animationNumber:0},{Id:1,name:"Report",category:"Work",date:"2019-07-03",time:"15:00",removed:!1,done:!1,animationNumber:0},{Id:2,name:"English test",category:"School",date:"2019-06-30",time:"16:00",removed:!1,done:!1,animationNumber:0}],editorOn:!1,maxLength:!1,dateGiven:!1,timeGiven:!1,sorted:!1,taskNumber:3,newTask:{Id:"",name:"",date:"",time:"",category:"Work",done:!1,removed:!1,animationNumber:0}},a.handleTaskName=function(e){var t=Object(p.a)({},a.state.newTask);t.name=e.target.value,a.setState({newTask:t,maxLength:54===a.state.newTask.name.length})},a.handleDate=function(e){var t=Object(p.a)({},a.state.newTask);"date"===e.target.type?(t.date=e.target.value,a.setState({newTask:t,dateGiven:!!e.target.value})):(t.time=e.target.value,a.setState({newTask:t,timeGiven:!!e.target.value}))},a.handleCategory=function(e){var t=Object(p.a)({},a.state.newTask);t.category=e.target.value,a.setState({newTask:t})},a.handleSubmit=function(){if(a.state.newTask.date&&a.state.newTask.time){var e=Object(p.a)({},a.state.newTask);e.Id=a.state.taskNumber;var t=Object(h.a)(a.state.tasks);t.push(e),a.state.sorted?t.sort(function(e,t){return new Date(e.date+" "+e.time)-new Date(t.date+" "+t.time)}):t.sort(function(e,t){return e.Id-t.Id}),a.setState({tasks:t,taskNumber:a.state.taskNumber+1,editorOn:!1})}},a.handleAddTask=function(){a.setState({editorOn:!0})},a.handleExit=function(){a.setState({editorOn:!1})},a.handleTaskRemove=function(e){var t=Object(h.a)(a.state.tasks),n=t.findIndex(function(t){return t.Id.toString()===e.target.id});t[n].removed=!0,a.setState({tasks:t}),setTimeout(function(){t.splice(n,1),a.setState({tasks:t})},400)},a.handleTaskDone=function(e){var t=Object(h.a)(a.state.tasks),n=t.findIndex(function(t){return t.Id.toString()===e.target.id});t[n].done=!0,t[n].animationNumber++,a.setState({tasks:t})},a.handleSort=function(){if(a.state.sorted){var e=Object(h.a)(a.state.tasks);e.sort(function(e,t){return e.Id-t.Id}),a.setState({tasks:e,sorted:!1})}else{var t=Object(h.a)(a.state.tasks);t.sort(function(e,t){return new Date(e.date+" "+e.time)-new Date(t.date+" "+t.time)}),a.setState({tasks:t,sorted:!0})}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];if("All"===this.props.curCat)t=this.state.tasks.map(function(t,a){return s.a.createElement(b,{key:a,id:t.Id,index:a,name:t.name,style:t.animationNumber<=1?t.removed?[{animation:"visibility 0.5s"},!0]:t.done?[{animation:"done 0.3s forwards"},!0,{textDecoration:"line-through"}]:[null]:t.removed?[{animation:"visibility 0.5s"},!0]:[{opacity:.7},!0,{textDecoration:"line-through"}],handleTaskRemove:e.handleTaskRemove,handleTaskDone:e.handleTaskDone,handleTaskEdit:e.handleTaskEdit,date:"".concat(t.date," ").concat(t.time)})});else{var a=-1;t=this.state.tasks.map(function(t,n){return t.category===e.props.curCat?(a+=1,s.a.createElement(b,{id:t.Id,index:a,key:n,name:t.name,style:t.animationNumber<=1?t.removed?[{animation:"visibility 0.5s"},!0]:t.done?[{animation:"done 0.3s forwards"},!0,{textDecoration:"line-through"}]:[null]:t.removed?[{animation:"visibility 0.5s"},!0]:[{opacity:.7},!0,{textDecoration:"line-through"}],handleTaskRemove:e.handleTaskRemove,handleTaskDone:e.handleTaskDone,date:"".concat(t.date," ").concat(t.time)})):null})}return s.a.createElement("main",null,this.state.editorOn?s.a.createElement(k,{exit:this.handleExit,handleTaskName:this.handleTaskName,valueName:this.state.newTask.name,handleDate:this.handleDate,valueDate:this.state.newTask.date,valueTime:this.state.newTask.time,handleCategory:this.handleCategory,valueCategory:this.state.newTask.category,handleSubmit:this.handleSubmit,maxLength:this.state.maxLength,dateGiven:this.state.dateGiven,timeGiven:this.state.timeGiven}):null,s.a.createElement(v,{curCat:this.props.curCat,handleSort:this.handleSort,icon:this.props.icon,onclick:this.handleAddTask}),s.a.createElement("div",{className:"tasklist"},t))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={currentCategory:"All",currentIcon:"fas fa-paste"},a.handleChangeCategory=function(e,t){a.setState({currentCategory:e,currentIcon:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"box"},s.a.createElement(d,{onclick:this.handleChangeCategory}),s.a.createElement(f,{curCat:this.state.currentCategory,icon:this.state.currentIcon}))}}]),t}(n.Component);a(17);o.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f1c5b72d.chunk.js.map