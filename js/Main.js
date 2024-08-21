
let boton =document.getElementById("boton");
boton.addEventListener("click",traerdatos)

function traerdatos(){
let dni = document.getElementById("dni").value;
fetch("https://apiperu.dev/api/dni/"+dni+"?api_token=478cabbcefd9e0195be12e3725f768aa2226d82768163159514cc349df6e1f43")
.then((datos)=> datos.json())
.then((respuesta)=>{
    console.log(respuesta.data)
document.getElementById("doc").value=respuesta.data.numero
document.getElementById("nombre").value=respuesta.data.nombres
document.getElementById("apellido").value=respuesta.data.apellido_materno + " " + respuesta.data.apellido_paterno
document.getElementById("cui").value=respuesta.data.direccion

})

}