window.onload = () => {
 //Acá crearemos nuestro DOM
 // obtengo mi div que contendrá mi codigo js en html
 const contenedor = document.getElementById('contenedor_datos');
 document.getElementById('btnIngresar').addEventListener('click', (evento) => {
    evento.preventDefault();
    let name = document.getElementById('nombre').value;
    console.log(name);
    let lastName = document.getElementById('apellido').value;
    console.log(lastName);
    // Crearemos un elemento div que contenga los datos ingresados por el usuario
    const contenedor_datos = document.createElement('div');
    contenedor_datos.classList.add('contenedor');
    contenedor.appendChild(contenedor_datos);

    // Crear elementos para imprimir datos de usuario
    const contenedor_name = document.createElement('p');
    contenedor_name.classList.add('texto');
    let valor_contenedor_name = document.createTextNode(name);
    //asignamos padre (p) al valor que ingreso el usuario
    contenedor_name.appendChild(valor_contenedor_name);
    contenedor_datos.appendChild(contenedor_name);
 
  });
}