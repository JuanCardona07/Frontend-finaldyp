<!--
<template>
  <li v-for="producto in productos" v-bind:key="producto.id">
  {{producto.nombre}}
  {{producto.marca}}
  {{producto.tipo}}
  </li>
</template> -->

<template>
  <div class="centerTable">
    <h2>Productos ingresados en el sistema</h2>
    <table class="center.table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" v-bind:key="producto.id">
          <td>{{producto.nombre}}</td>
          <td>{{producto.marca}}</td>
          <td>{{producto.tipo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h2>Agregar nuevo producto</h2>
    <form>
      <label>Tipo:</label>
      <input type="text" v-model="nuevoProducto.tipo">
      <label>Marca:</label>
      <input type="text" v-model="nuevoProducto.marca">
      <label>Nombre:</label>
      <input type="text" v-model="nuevoProducto.nombre">
      <button type="button" @click="enviarProducto">Enviar</button>
    </form>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data() {
    return {
      productos: [],
      nuevoProducto: {
        tipo: '',
        marca: '',
        nombre: ''
      }
    };
  },
  
  async mounted() {
    try {
      var vue=this;
      var result = await axios({
        method: "GET",
        url: "http://localhost:8090/api/v1/products",
        data: {
          query: `
          {
            producto{
              id,
              tipo,
              marca
            }
          }
          `
        }
      });
      vue.productos=result.data;
      console.log(vue.productos);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async enviarProducto() {
      try {
        const response = await axios.post('http://localhost:8090/api/v1/products', {
          tipo: this.nuevoProducto.tipo,
          marca: this.nuevoProducto.marca,
          nombre: this.nuevoProducto.nombre
        });
      console.log(response.data);
      // hacer algo con la respuesta
      } catch (error) {
      console.error(error);
      // manejar el error
      }
      location.reload();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .center-table {
    margin: 0 auto;
  }
  .centerTable {
    display: flex;
    flex-direction: column;
  }
</style>
