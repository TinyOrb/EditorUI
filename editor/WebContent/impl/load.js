json_test = { 'core' : {
    'data' : [
              { "id" : "ajson1", "parent" : "#", "text" : "Simple root node", "type":"SUB" },
              { "id" : "ajson2", "parent" : "#", "text" : "Root node 2", "type":"SUB" },
              { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1", "type":"DATA" },
              { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2", "type":"SUB","icon":"img/file.png" },
           ]
       } }
project_test = "Demo Project"

function load_dir(project, dir){
	$('#project_explore').text(project)
	$('#jstree_demo_div').jstree(dir);
}

$(function() {
	load_dir(project_test, json_test);
	$('#jstree_demo_div').on("changed.jstree", function (e, data) {
		  console.log(data.selected);
		});
	
	$('#jstree_demo_div').on("after_open.jstree", function (e, data) {
		  console.log(data.node);
		  console.log(data.node.id);
		});

	$('button').on('click', function () {
		  $('#jstree').jstree(true).select_node('child_node_1');
		  $('#jstree').jstree('select_node', 'child_node_1');
		  $.jstree.reference('#jstree').select_node('child_node_1');
		});
	
	
});



