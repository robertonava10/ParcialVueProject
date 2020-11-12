<template>
    
    <div>
         <h1>Crear Registo Libro</h1>
         <form @submit.prevent="addLibro">
             <p>
                Nombre del libro:
                <input type="text" v-model="Titulo"> 
             </p>
              <p>
                Autor:
                <input type="text" v-model="Autor"> 
             </p>
              <p>
                IdLibro:
                <input type="number" v-model="IdLibro"> 
             </p>
              <p>
                Editorial:
                <input type="text" v-model="Editorial"> 
             </p>
             <p>
                Clasificacion:
                <select v-model="Clasificacion">
                    <option value="terror">Terror</option>
                    <option value="drama">Drama</option>
                    <option value="romance">Romance</option>
                    <option value="misterio">Misterio</option>
                    <option value="clasicos">Clasicos</option>
                    <option value="novela">Novela</option>
                </select>
             </p>
             
             <button type="submit">¡AGREGAR LIBRO!</button>
         </form>
    </div>
</template>

<script>
 import {db} from '../firebase.js'
 import router from '../router'
    export default {
        name: "ToCrear",
        data(){
            return{
                Clasificacion:"",
                Titulo: "",
                Editorial: "",
                IdLibro:"",
                Autor:""
                

            }
        },
        methods: {
            async addLibro(){
                await db.collection('libros').add({
                 Clasificacion: this.Clasificacion,
                Titulo: this.Titulo ,
                Editorial: this.Editorial,
                IdLibro:this.IdLibro,
                Autor:this.Autor
                })
                this.Clasificacion="";
                this.Titulo="";
                this.Editorial="";
                this.Autor="";
                this.IdLibro="";
                router.push("/")
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>