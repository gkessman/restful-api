// Backbone Model

var List = Backbone.Model.extend({
	defaults: {
		name: '',
		category: '',
		item: ''
	}
});

// Backbone Collection

var Lists = Backbone.Collection.extend({

});

// Instantiate Two Lists

var list1 = new List({
	name: 'Greg\'s List',
	category: 'Chores',
	item: 'Walk dog'
});

var list2 = new List({
	name: 'Greg\'s List',
	category: 'Work',
	item: 'Hand in TPS report'
});

// Instantiate Collection

var lists = new Lists([list1, list2]);