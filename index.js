const ourform =document.getElementById("theform")
const ourfield = document.getElementById("inputfield") 
const ourlist = document.getElementById("ourlist")

ourform.addEventListener("submit",(item)=>{
    item.preventDefault()
    createitem(ourfield.value)
})

function createitem(x){
    let ourtodo=`<li>${x}<button onclick="deleteitem(this)"> Delete</button></li>`
    ourlist.insertAdjacentHTML("beforeend",ourtodo)
    ourfield.value=" " 
    ourfield.focus()
}

function deleteitem(xx){
    xx.parentElement.remove()
}
