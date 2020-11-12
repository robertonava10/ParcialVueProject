<template>
    
    <div>
         <h1>Listado de libros</h1>
         <ul>
             <li v-for="libro in libros" :key="libro.id">
                   {{libro.Clasificacion}} - {{libro.Titulo}} - {{libro.Editorial}} - {{libro.IdLibro}} -{{libro.Autor}} 
                   - 
                   <router-link :to="{name:'Editar',params: {id: libro.id}}">Editar</router-link>
             </li>
         </ul>
         
    </div>
</template>

<script>
import {db} from '../firebase.js'
    export default {
        name: "ToLista",
        data(){ 
            return{
                 libros:[]

            }
           
        },
        created(){
            this.listaLibros();
        },
        methods: {
            async listaLibros(){
                const data = await db.collection("libros").get();
                this.libros = data.docs.map(doc =>({id: doc.id, ...doc.data()}))
                console.log(this.libros)
            }
        },
        
    }
</script>


<style lang="scss" scoped>

</style>