<template>
  <div class="container">
    <div class="button-principal">
      <img src="/image.png" @click="irPrincipal" style="cursor: pointer;">
    </div>
    <h2 class="title">Agregar nuevo Restaurante</h2>
    <form @submit.prevent="enviarRestaurante" class="form-container">
      <div class="form-group">
        <label for="nit">NIT:</label>
        <input id="nit" type="text" v-model="nuevoRestaurante.nit" placeholder="Ingrese NIT" required />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre Restaurante:</label>
        <input id="nombre" type="text" v-model="nuevoRestaurante.nombre" placeholder="Ingrese Nombre" required />
      </div>
      <div class="form-group">
        <label for="Tipo_cocina">Tipo de Cocina:</label>
        <select id="Tipo_cocina" v-model="nuevoRestaurante.Tipo_cocina" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="Italian">Italiana</option>
          <option value="Cafe">Café</option>
          <option value="Seafood">Mariscos</option>
          <option value="American">Americana</option>
          <option value="Grill">Parrilla</option>
          <option value="Colombian">Colombiana</option>
          <option value="Fusion">Fusión</option>
          <option value="Argentinian">Argentina</option>
        </select>
      </div>
      <div class="form-group">
        <label for="horario">Hora de Apertura:</label>
        <input id="horario" type="text" v-model="nuevoRestaurante.horario" placeholder="Ingrese Horario" required />
      </div>
      <div class="form-group">
        <label for="entregaDomicilio">Entrega a Domicilio:</label>
        <select id="entregaDomicilio" v-model="nuevoRestaurante.entregaDomicilio" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>

      <div class="form-group">
        <label for="metodosPago">Métodos de Pago:</label>
        <select id="metodosPago" v-model="nuevoRestaurante.metodosPago" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="Cash">Efectivo</option>
          <option value="Mobile Payment">Pago Móvil</option>
          <option value="Debit Card">Tarjeta Débito</option>
        </select>
      </div>

      <div class="form-group">
        <label for="vegetariano">Vegetariano:</label>
        <select id="vegetariano" v-model="nuevoRestaurante.vegetariano" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>

      <button type="submit" class="submit-btn">Registrar Restaurante</button>
    </form>

    <h2 class="title">Restaurantes ingresados en el sistema</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>NIT</th>
            <th>Nombre</th>
            <th>Tipo de cocina</th>
            <th>Hora Apertura</th>
            <th>Domicilio</th>
            <th>Método de pago</th>
            <th>Vegetariano</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="restaurante in restaurante" :key="restaurante.nit">
            <td>{{ restaurante.nit }}</td>
            <td>{{ restaurante.nombre }}</td>
            <td>{{ restaurante.Tipo_cocina }}</td>
            <td>{{ restaurante.horario }}</td>
            <td>{{ restaurante.entregaDomicilio }}</td>
            <td>{{ restaurante.metodosPago }}</td>
            <td>{{ restaurante.vegetariano }}</td>
          </tr>
        </tbody>
      </table>
      
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RestauranteForm',
  data() {
    return {
      restaurante: [],
      nuevoRestaurante: {
        nit: '',
        nombre: '',
        Tipo_cocina: '',
        horario: '',
        entregaDomicilio: '',
        metodosPago: '',
        vegetariano: '',
      },
    };
  },
  async mounted() {
    try {
      const result = await axios.get('http://localhost:8090/api/v1/restaurant');
      this.restaurante = result.data;
    } catch (error) {
      console.error('Error al cargar los restaurantes:', error);
    }
  },
  methods: {
    irPrincipal() {
      this.$router.push('/Principal');  // Redirige a la página Restaurantes
    },
    async enviarRestaurante() {
      try {
        const response = await axios.post('http://localhost:8090/api/v1/restaurant', this.nuevoRestaurante);
        this.restaurante.push(response.data);
        this.nuevoRestaurante = {
          nit: '',
          nombre: '',
          Tipo_cocina: '',
          horario: '',
          entregaDomicilio: '',
          metodosPago: '',
          vegetariano: '',
        };
      } catch (error) {
        console.error('Error al enviar el restaurante:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  color: #555;
}

input,
select {
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus,
select:focus {
  border-color: #28a745;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

.submit-btn {
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #218838;
  transform: translateY(-2px);
}
 /* Table styles */
 .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
  }
  
  .styled-table th,
  .styled-table td {
    padding: 12px;
    border: 1px solid #ddd;
  }
  
  .styled-table th {
    background-color: #28a745;
    color: white;
  }
  
  .styled-table tbody tr:nth-child(odd) {
    background-color: #f3f3f3;
  }
  .button-principal {
  display: flex;
  flex-direction: row;  
  gap: 20px;  
  width: 100%;  
}
</style>
