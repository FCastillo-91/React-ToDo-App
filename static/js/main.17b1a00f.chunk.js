(this["webpackJsonptodo-list-application"]=this["webpackJsonptodo-list-application"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(7),r=a.n(c),l=(a(14),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),d=a(8),k=a.n(d),p=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{className:"display-4"},"Things To Do Today"),s.a.createElement("p",{className:"lead"},'"Organising is what you do before you do something, so that when you do it, it is not all mixed up."'),s.a.createElement("p",{className:"font-italic"},"A.A. Milne"))}}]),t}(s.a.Component)),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).updateTaskName=function(e){a.setState({taskName:e.target.value})},a.updateDate=function(e){a.setState({dueDate:e.target.value})},a.updateUrgency=function(e){a.setState({urgency:e.target.checked})},a.addTask=function(){return""===a.state.taskName?alert("Please add Task"):""===a.state.dueDate?alert("Please select a task due date"):void a.props.addNewTaskFunc(a.state.taskName,a.state.dueDate,a.state.urgency,a.state.id)},a.state={taskName:e.taskForm.name,dueDate:e.taskForm.dueDate,urgency:e.taskForm.urgency,id:e.taskForm.id},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({taskName:e.taskForm.name,dueDate:e.taskForm.dueDate,urgency:e.taskForm.urgency,id:e.taskForm.id})}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-md-6 mb-2"},s.a.createElement("input",{type:"text",onChange:this.updateTaskName,value:this.state.taskName,className:"form-control",placeholder:"Write Task Here"})),s.a.createElement("div",{className:"col-8 col-md-3 mb-2"},s.a.createElement("input",{type:"date",onChange:this.updateDate,value:this.state.dueDate,className:"form-control"})),s.a.createElement("div",{className:"col-4 col-md-1 mb-2"},s.a.createElement("input",{type:"checkbox",onChange:this.updateUrgency,className:"form-check-input",id:"taskUrgency",name:"taskUrgency",checked:this.state.urgency}),s.a.createElement("label",{className:"form-check-label",hfor:"taskUrgency"},"Is urgent")),s.a.createElement("div",{className:"col-12 col-md-2 mb-2"},s.a.createElement("button",{onClick:this.addTask,className:null!==this.state.id?"btn btn-success btn-block":"btn btn-primary btn-block"},null!==this.state.id?"Update":"Add")))}}]),t}(s.a.Component),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={status:"Pending Tasks",numOfTasks:""},a.updateNumOfTasks=function(e){a.setState({numOfTasks:e.target.value})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card bg-light cardToDoList mb-3"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,"To Do List ",s.a.createElement("span",{className:"badge badge-pill badge-primary float-right"},this.props.count))))}}]),t}(s.a.Component),f=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).taskDone=function(){a.props.taskCompletedFunc(a.props.task.id)},a.taskDelete=function(){a.props.taskDeletedFunc(a.props.task.id)},a.taskEdit=function(){a.props.taskEditFunc(a.props.task.id)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"card bg-light cardToDoList mb-3"},s.a.createElement("div",{className:"card-body"},s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item"},s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-6 col-md-5 mb-3"},this.props.task.urgency&&s.a.createElement("span",{className:"importantIcon"},s.a.createElement("i",{className:"fas fa-star"})),this.props.task.name),s.a.createElement("div",{className:"col-6 col-md-3 mb-3"},this.props.task.dueDate),s.a.createElement("div",{className:"col-12 col-md-4"},s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-4"},s.a.createElement("button",{type:"button",onClick:this.taskDone,className:"btn btn-success btn-sm btn-block small"},"Done")),s.a.createElement("div",{className:"col-4"},s.a.createElement("button",{type:"button",onClick:this.taskEdit,className:"btn btn-secondary btn-sm btn-block small"},"Edit")),s.a.createElement("div",{className:"col-4"},s.a.createElement("button",{type:"button",onClick:this.taskDelete,className:"btn btn-danger btn-sm btn-block small"},"Delete"))))))))))}}]),t}(s.a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.completedTasks;return s.a.createElement("div",{className:"card text-white bg-success mb-3"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,"Done List"),s.a.createElement("ul",{className:"list-group text-dark"},e.map((function(e){return s.a.createElement("li",{key:e.id,className:"list-group-item"},e.name)})))))}}]),t}(s.a.Component),g=(a(19),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={taskList:[],taskForm:{name:"",dueDate:"2019-01-01",urgency:!1,id:null}},a.addNewTask=function(e,t,n,s){var c=a.state.taskList,r={name:e,dueDate:t,done:!1,urgency:n,id:null===s?k()():s,isEditing:!1};if(null===s){var l=c;l.slice(),l.push(r),a.setState({taskList:l}),a.resetForm()}else console.log(c),c.forEach((function(e){e.id===s&&(e.name=r.name,e.isEditing=!1,e.date=r.date,e.urgency=r.urgency)})),a.setState({taskList:c}),a.resetForm()},a.resetForm=function(){a.setState({taskForm:{name:"",dueDate:"2019-01-01",urgency:!1,id:null}})},a.completedTask=function(e){var t=a.state.taskList;t.forEach((function(t){if(t.id===e)return t.done=!0})),a.setState({taskList:t})},a.deleteTask=function(e){var t=a.state.taskList.filter((function(t){return t.id!==e}));a.setState({taskList:t})},a.editTask=function(e){var t,n=a.state.taskList;n.forEach((function(a){a.id===e&&(a.isEditing=!0,t={name:a.name,dueDate:a.dueDate,urgency:a.urgency,id:a.id})})),a.setState({taskForm:t,taskList:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.taskList.filter((function(e){return e.done})),a=this.state.taskList.filter((function(e){return!0!==e.done&&!1===e.isEditing}));return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(p,null),s.a.createElement(b,{addNewTaskFunc:this.addNewTask,taskForm:this.state.taskForm}),s.a.createElement(h,{count:a.length}),a.map((function(t){return s.a.createElement(f,{key:t.id,task:t,taskCompletedFunc:e.completedTask,taskDeletedFunc:e.deleteTask,taskEditFunc:e.editTask})})),s.a.createElement(E,{completedTasks:t})))}}]),t}(s.a.Component));r.a.render(s.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.17b1a00f.chunk.js.map