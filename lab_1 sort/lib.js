window.onload = function() {
  var ArrayGenerator = {
    generateRandomArray: function(size) {
	  var array = [];
	  for (var i = 0; i < size; i++) { 
	    array.push(parseInt(Math.random()*100));
	  };
	  return array;
    },

	generateUpOrderArray: function(size) {
	  var array = [];
	  for (var i = 0; i < size; i++) {
	    array.push(i+1);
	  }
	  return array;
	},

	generateDownOrderArray: function(size) {
	  var array = [];
	  for (var i = 0; i < size; i++) {
	    array.push(size-i);
      }
	  return array;
	}
  },

  ArraySorter = {
    simpleSort: function(array) {
      for(var i = 0; i < array.length-1; i++) {
        var min = array[i], min_index = i;
    	for (var j = i; j < array.length; j++) {
    	  if(array[j] < min) {
    	    min = array[j];
    	  	min_index = j;
    	  }
    	}
    	var temp = array[i];
    	array[i] = array[min_index];
    	array[min_index] = temp;
      }
    }
  },

  init_types = Object.keys(ArrayGenerator),
  sort_methods = Object.keys(ArraySorter),

  generateArrayButtonClickHandler = function() {
    var size = parseInt(document.getElementById("array_size").value),
	str = "";
	if (!window.isNaN(size)) {
	  var array = ArrayGenerator[document.getElementById("init_type").value](size);
	  for(var i in array)
	    str += "<div class='array_item'>" + array[i] + "</div>";
	    document.getElementsByClassName('visual_array')[0].innerHTML = str;
	    document.getElementsByClassName('visual_sorted_array')[0].innerHTML = "";
	  }
	},

  sortArrayButtonClickHandler = function() {
    var array = [],
	arr = document.getElementsByClassName("array_item"),
	str = "";
    for(var i in arr) {
      var item = parseInt(arr[i].innerHTML);
      if(!window.isNaN(item)) {
	    array.push(item);
	  }
	}
    ArraySorter.simpleSort(array);
    for(var i in array)
      str += "<div class='sorted_array_item'>" + array[i] + "</div>";
    document.getElementsByClassName('visual_sorted_array')[0].innerHTML = str;
  };
  document.getElementById("generate_array_button").onclick = generateArrayButtonClickHandler;
  document.getElementById("sort_array").onclick = sortArrayButtonClickHandler;
  for(var i in init_types)
    init_types[i] = "<option value = '" + init_types[i] + "'>" + init_types[i] + "</option>";
  for(var i in sort_methods)
    sort_methods[i] = "<option value = '" + sort_methods[i] + "'>" + sort_methods[i] + "</option>";
  document.getElementById("init_type").innerHTML = init_types;
  document.getElementById("sort_method").innerHTML = sort_methods;
}