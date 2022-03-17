const Btn = document.getElementsByTagName("button");
const cardContainer = document.querySelectorAll(".card_container");
for(button of Btn){
    button.addEventListener("click", () => {
      console.log("mmn")
    });
}







/*increase/decrease */
const addvalue = document.querySelector("#increase")
const subtractvalue = document.querySelector("#decrease")
function increaseValue() {
    addvalue.addEventListener("click", () => {

        var value = parseInt(document.getElementById("number").value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById("number").value = value;
        console.log("tttt")
    })
}

function decreaseValue(){
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value ;
    value < 1 ? value = 1: "";
    value--;
    document.getElementById("number").value = value;

}

increaseValue();


