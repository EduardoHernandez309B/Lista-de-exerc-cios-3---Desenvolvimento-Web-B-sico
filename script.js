 document.addEventListener("DOMContentLoaded", function () {
            const hamburguer = document.querySelector('.hamburguer');
            const menu = document.querySelector('.menu');
            const links = document.querySelectorAll('.nav-links a'); 

            hamburguer.addEventListener('click', () => {
                menu.classList.toggle('active');
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                });
            });
        });

        const btnTopo = document.getElementById('btnTopo');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50){
                btnTopo.classList.add('mostrar');
            }else{
                btnTopo.classList.remove('mostrar');
            }
        });

        btnTopo.addEventListener('click', () => {
            window.scrollTo({
                top:0,
                behavior: 'smooth'
            });
        });