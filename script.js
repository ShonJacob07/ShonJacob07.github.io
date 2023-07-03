// window.addEventListener("scroll", function() {
//     var navbar = document.querySelector(".navbar");
//     navbar.classList.toggle("fixed", window.scrollY > 0);
//   });

const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.hover-btn');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        cards[index].classList.add('active');
        button.remove();

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('btn', 'btn-danger', 'close-btn');
        closeBtn.innerHTML = '&times;';

        cards[index].appendChild(closeBtn);

        closeBtn.addEventListener('click', () => {
            cards[index].classList.remove('active');
            closeBtn.remove();
            cards[index].querySelector('.card-body').appendChild(button);
            cards[index].querySelector('.hidden-content').style.display = 'none';
        });

        cards[index].querySelector('.hidden-content').style.display = 'block';
    });
});

