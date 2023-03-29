const main = document.getElementById("main");
const desserts = document.getElementById("dessert");
const drinks = document.getElementById("drinks");

const menu = document.querySelector(".menu");

main.addEventListener("click", () => {
    main.classList.add('text-decoration-underline','fw-bold')
    desserts.classList.remove('text-decoration-underline','fw-bold')
    drinks.classList.remove('text-decoration-underline','fw-bold')
  menu.innerHTML = `
    <div class="col1">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$20.00</p>
            <p class="fs-4 mb-1">Murgh Tikka Masala</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$35.00</p>
            <p class="fs-4 mb-1">Fish Moilee</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$15.00</p>
            <p class="fs-4 mb-1">Safed Gosht</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    <div class="col2">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$10.00</p>
            <p class="fs-4 mb-1">French Toast Combo</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$8.35</p>
            <p class="fs-4 mb-1">Vegie Omelet</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$22.00</p>
            <p class="fs-4 mb-1">Chorizo & Egg Omelet</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    `
});

drinks.addEventListener("click", () => {
    main.classList.remove('text-decoration-underline','fw-bold')
    desserts.classList.remove('text-decoration-underline','fw-bold')
    drinks.classList.add('text-decoration-underline','fw-bold')
  menu.innerHTML = `
    <div class="col1">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$32.00</p>
            <p class="fs-4 mb-1">Spring Water</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$14.00</p>
            <p class="fs-4 mb-1">Coke, Diet Coke, Coke Zero</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$93.00</p>
            <p class="fs-4 mb-1">Orange Fanta</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    <div class="col2">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$18.00</p>
            <p class="fs-4 mb-1">Lemonade, Lemon Squash</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$38.35</p>
            <p class="fs-4 mb-1">Sparkling Mineral Water</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$69.00</p>
            <p class="fs-4 mb-1">Lemon, Lime & Bitters</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    `
});

desserts.addEventListener("click", () => {
    main.classList.remove('text-decoration-underline','fw-bold')
    desserts.classList.add('text-decoration-underline','fw-bold')
    drinks.classList.remove('text-decoration-underline','fw-bold')
  menu.innerHTML = `
    <div class="col1">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$11.00</p>
            <p class="fs-4 mb-1">Banana Split</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$72.00</p>
            <p class="fs-4 mb-1">Sticky Toffee Pudding</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$26.00</p>
            <p class="fs-4 mb-1">Pecan</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    <div class="col2">
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$42.00</p>
            <p class="fs-4 mb-1">Apple Strudel</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$7.35</p>
            <p class="fs-4 mb-1">Pancakes</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div class="mb-5">
            <p class="text-warning fs-4 mb-2">$22.00</p>
            <p class="fs-4 mb-1">Ice Cream Sundae</p>
            <p class="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    </div>
    `
});