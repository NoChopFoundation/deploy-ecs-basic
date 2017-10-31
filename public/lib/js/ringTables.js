console.log('rintTables.js');
	
$.widget( "custom.ringTable",  {
		
	// default options
	options: {
		numberSeats: 9,
		
		// Callbacks
		change: null,
		random: null
	},
	
	_init : function() {
		console.log('kl');
	},
 
		// The constructor
	_createWidget : function() {
		console.log('rintTables.js8');
		this.element.addClass("custom-ringTable");

		this.changer = $("<button>", {
			text : "change",
			"class" : "custom-colorize-changer"
		}).appendTo(this.element).button();

		// Bind click events on the changer button to the random
		// method
		this._on(this.changer, {
			// _on won't call random when widget is disabled
			click : "random"
		});
		this._refresh();
	},
 
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();
 
        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      }
      
}); // end widget

$("#my-widget1").ringTable();

console.log('end');


