const $menu = document.querySelector('.menu')
const $navegacion = document.querySelector('.navegacion')
const $transparencia = document.querySelector('.transparencia')
const $primario = document.querySelectorAll('.enlace-flecha')

$menu.addEventListener('click', () => {
    $menu.classList.toggle('menu--activo')
    $navegacion.classList.toggle('navegacion--activo')
    $transparencia.classList.toggle('transparencia--activo')

})

$primario.forEach(primario => {
     primario.addEventListener('click', (e) => {
         primario.classList.toggle('enlace-flecha--activo')
         
     })
 })