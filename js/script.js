const button = document.querySelector('#search__btn');
const input = document.querySelector("#search");
const colorDiv = document.querySelector(".showColor");
const colors = ["red","blue","green","brown","purple","black"]

button.addEventListener('click', (e) => {
    e.preventDefault();
    colorDiv.innerHTML = " "
    const value = input.value;
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        if (value !== "") {
            if (color.includes(value)) {
                const newDiv = `<div class="color" style="background-color: ${color}"></div>`
                colorDiv.insertAdjacentHTML("afterbegin",newDiv)
            }     
        }
        else {
            return
        }
    } 
})