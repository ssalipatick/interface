// declare elements
var display_table = document.getElementById("display_table")
var product_input = document.getElementById('product_input');
var pack_size_input = document.getElementById('pack_size_input');
var quantity_input = document.getElementById('quantity_input');

var globalRowAddingLock = 0;

// add event listners
product_input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        pack_size_input.focus()
    }
});
pack_size_input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        quantity_input.focus()
    }
});
quantity_input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
    	if(!globalRowAddingLock){
    	add();
    	}
    }
});


function add() {
    globalRowAddingLock = 1;
    //Get details in the form
    product = product_input.value
    pack_size = pack_size_input.value
    quantity = quantity_input.value

    // validate the data

    // add data to table
    add_row(product, pack_size, quantity)

    // Show user that value is entered

    // reset all values

    product_input.value =''
    pack_size_input.value = ''
    quantity_input.value = ''

    product_input.focus();


    globalRowAddingLock = 0;
}

function add_row(product, pack_size, quantity) {
    var display_table_tbody =display_table.getElementsByTagName('tbody')[0];

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = display_table_tbody.insertRow(-1);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var item_cell = row.insertCell(0);
    var product_cell = row.insertCell(1);
    var pack_size_cell = row.insertCell(2);
    var quantity_cell = row.insertCell(3);
    var action_cell = row.insertCell(4);

    // Add some text to the new cells:
    // item_cell.innerHTML = "NEW CELL1";
    product_cell.innerHTML = '<div contenteditable= true>' + product + '</div>';
    pack_size_cell.innerHTML = '<div contenteditable= true>' + pack_size + '</div>';
    quantity_cell.innerHTML = '<div contenteditable= true>' + quantity + '</div>';
    action_cell.innerHTML = '<div onclick="deleteRow(this)"/>x</div>';
row.scrollIntoView();
    
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}