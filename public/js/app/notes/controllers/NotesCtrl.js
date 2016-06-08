;(function(){
	angular
	.module('App.Notes')
	.controller('NotesCtrl', ['NotesService', function(NotesService){
		var vm = this;

		vm.getNotes = function() {
			return NotesService.notes();
		};

		vm.addNote = function(noteTitle) {
			if(noteTitle != '') {
				NotesService.addNote(noteTitle);
			}
		};

		vm.deleteNote = function(id) {
			NotesService.deleteNote(id)
		};

		vm.resetForm = function() {
			vm.noteTitle = '';
		};
	}]);
})();