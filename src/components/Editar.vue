<template>
    
    <div>
         <h1>Editar datos del libro</h1>
         <form @submit.prevent="newLibro">
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
         <hr>
         <button @click="eliminar = !eliminar" v-if="eliminar === false">Eliminar</button>
         <h2>
             <div v-if="eliminar===true">
                 ¿Seguro de eliminar libro?
                 <button @click="deleteLibro">Si</button>
                 <button @click="eliminar= !eliminar">No</button>
             </div>
         </h2>
    </div>
</template>

<script>
import {db} from '../firebase.js'
import router from '../router'
    export default {
        name: "Editar",
        data(){
            return{
                Clasificacion:"",
                Titulo: "",
                Editorial: "",
                IdLibro:"",
                Autor:"",
                eliminar: false,
            }
        },
        created() {
            this.getLibro();
        },
        methods: {
            async getLibro(){
                const id=this.$route.params.id;
                const data = await db.collection("libros").doc(id).get();
                const libro=data.data();
                this.Clasificacion=libro.Clasificacion;
                this.Titulo=libro.Titulo;
                this.Autor=libro.Autor;
                this.IdLibro=libro.IdLibro;
                this.Editorial=libro.Editorial;
            },
            async newLibro(){
                const id=this.$route.params.id;
                await db.collection("libros").doc(id).set({
                     Clasificacion: this.Clasificacion,
                     Titulo: this.Titulo,
                     Editorial: this.Editorial,
                     IdLibro:this.IdLibro,
                     Autor:this.Autor
                })
                router.push("/");
            },
            async deleteLibro(){
                const id = this.$route.params.id;
                await db.collection("libros").doc(id).delete()
                router.push("/");
            }
           
        }
    }
</script>

<style lang="scss" scoped>

</style>