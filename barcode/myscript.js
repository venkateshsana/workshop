var list

// The initial method called on page load
function init() {
    // load details from data file
    loadDataAndParse('ShoppingItems.json')
}

function getItemWithBarCode(event) {
    
    event.preventDefault()
    
    // read the barcode id, and clear it from UI
    var barcode = document.getElementById("barcode").value
    document.getElementById("barcode").value = ''
    
    var details = "Not Found" 

    var position = findWithBarcode(barcode)
    if (position != -1) {
        // found the item
        // update details
        details = detailsOfItem(position)
    }

    document.getElementById("itemDetails").innerHTML = details
}

function loadDataAndParse(fileName) {

    function parseContents(fileContents) {
        // Parse JSON string into object
        list = JSON.parse(fileContents)
        console.log(list)
    }

    loadContents(fileName, parseContents)
}

// To load contents of a file
function loadContents(fileName, callback){

    var httpRequest = new XMLHttpRequest()

    function onStateChange() {
        if(httpRequest.readyState === 4 ){
            callback(httpRequest.responseText)
        }
    }

    httpRequest.onreadystatechange = onStateChange
    httpRequest.open('GET', fileName, true)
    httpRequest.send()
}

// To find the item with barcode in the list
// return
//   position when found
//   -1 when not found
function findWithBarcode(barcode) {
    for (var i = 0; i < list.length; i++) {
        if (barcode == list[i].id) {
            // found the item
            return i
        }
    }
    return -1
}

function detailsOfItem(index) {
    
    var details = "id: " + list[index].id
    details += "<br>"
    details += list[index].name
    details += "<br>"
    details += list[index].department
    details += "<br>"
    details += "Rs. " + list[index].average
    
    return details
}
