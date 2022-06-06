// Below is a function that adds any new word added to the list
function addList() {
    // Below finds the list element in the 'Testimonials' html file 
    let text = document.getElementById("txt")
    var li = document.createElement('li')

    // Below creates a new list item and adds it to the unorderd list
    li.innerHTML = text.value
    list = document.getElementById("list")
    list.appendChild(li)

    // Below clears the input section
    text.value = ''
}