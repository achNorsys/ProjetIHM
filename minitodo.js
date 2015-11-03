angular	.module('todomvc', [])
		.controller	( 'todoController', function ($scope) {
						 var todoController		= this;
						 this.todolist			= 
							localStorage.todolist?
								  JSON.parse( localStorage.todolist )
								: [];
						 this.newItem = "";
						 this.nbCompleted		= 0;
						 this.displayCompleted	= true;
						 this.displayToBeDone	= true;
						 this.save = function (){
							 var data = [], item;
							 this.nbCompleted = 0 ;
							 for(var i in this.todolist){
								 item = this.todolist[i];
								 if(this.todolist[i].completed) {
									 this.nbCompleted++;
								 }
								 data.push({
									    text : this.todolist[i].text
									  , date : this.todolist[i].date
									  , completed : this.todolist[i].completed
									 
								 })
							 }
							 localStorage.todolist = JSON.stringify(data);
						 }
						 
						 this.addItem = function () {
							 this.todolist.push({
								 text : this.newItem
								, date : Date.now()
								, completed : false
								}
							 );
							 this.newItem= "";
							 this.save();
						 }
						 this.save();
		}
	)
	.directive('todoItem', function() {
		return {
		 	  restrict : 'E'
			, controller : function(){
				console.log("new todoItem");
			  }
			, controllerAs : 'todoItem'
			, templateUrl : 'todoItem.html'
			,scope : {
				text : "=text"
				,date : "=date"
				,completed : "=completed"
			}
		}
	});
	