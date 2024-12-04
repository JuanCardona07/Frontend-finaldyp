<template>
  <div class="container">
    <div class="button-principal">
      <img src="/image.png" @click="irPrincipal" style="cursor: pointer;">
    </div>

    <h2 class="title">Buscar Restaurantes<br><br></h2>

    <!-- Filtros -->
    <div class="form-row">
      <!-- Tipo de Cocina -->
      <div class="form-group">
        <label for="cuisine_type">Tipo de Cocina:</label>
        <select id="cuisine_type" v-model="filtros.tipoCocina" class="form-control">
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

      <!-- Horario de Apertura -->
      <div class="form-group">
        <label for="opening_hours">Disponibilidad de Hora:</label>
        <input type="number" id="opening_hours" v-model="filtros.horario" class="form-control" placeholder="ej., 18">
      </div>

      <!-- Métodos de Pago -->
      <div class="form-group">
        <label for="payment_methods">Métodos de Pago:</label>
        <select id="payment_methods" v-model="filtros.metodosPago" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="Cash">Efectivo</option>
          <option value="Mobile Payment">Pago Móvil</option>
          <option value="Debit Card">Tarjeta Débito</option>
        </select>
      </div>

      <!-- Vegetariano -->
      <div class="form-group">
        <label for="vegetarian">Vegetariano:</label>
        <select id="vegetarian" v-model="filtros.vegetariano" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>

      <!-- Entrega a Domicilio -->
      <div class="form-group">
        <label for="delivery">Entrega a Domicilio:</label>
        <select id="delivery" v-model="filtros.entregaDomicilio" class="form-control">
          <option value="">-- Seleccionar --</option>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
    <br><br>
    <!-- Nombre de usuario y botón de buscar -->
    <div class="form-row">
      <div class="form-group button-container">
        <button class="btn-submit" @click="obtenerRecomendaciones">Enviar</button>
      </div>
    </div>

    <!-- Estado de carga -->
    <div v-if="loading" class="alert info">Cargando...</div>
    <div v-if="error" class="alert error">{{ error }}</div>

    <!-- Lista de recomendaciones -->
   <ul v-if="recomendaciones.length" class="recommendation-list">
      <li v-for="(recomendacion, index) in recomendaciones" :key="index">
        {{ recomendacion.nombre }}: {{ recomendacion.porcentaje }}%
      </li>
    </ul>
        
     <!-- Mapa -->
    <div id="map-container">
      <div id="map"></div>
    </div>
     
  </div>
</template>

<script>
import L from "leaflet"; // Importa Leaflet

export default {
  data() {
    return {
      filtros: {
        tipoCocina: '',
        horario: '',
        metodosPago: '',
        vegetariano: '',
        entregaDomicilio: '',
      },
      recomendaciones: [],
      loading: false,
      error: null,
      mostrarMapa: false,
      usuario: '', // Nombre de usuario
      mapa: null, // Referencia al mapa
      coordenadas: [6.1557, -75.3754], // Coordenadas por defecto
    };
    
  },
  
  methods: {
    irPrincipal() {
      this.$router.push('/Principal');  // Redirige a la página Restaurantes
    },
    obtenerRecomendaciones() {
      this.loading = true;
      this.error = null;
      this.recomendaciones = [];

      const filteredRestaurants = this.filtrarRestaurantes();

      if (filteredRestaurants.length === 0) {
        this.error = 'No se encontraron restaurantes que coincidan con los criterios.';
        this.loading = false;
        return;
      }

      this.obtenerDatosRecomendados(filteredRestaurants);
    },
    filtrarRestaurantes() {
      // Simula el filtrado de restaurantes según los criterios seleccionados
      return [
        { nombre: 'El Brasero de David  ', porcentaje: 66.28 },
        { nombre: 'Restaurante La Abuela', porcentaje: 59.69 },
        { nombre: 'La Granja de Papá', porcentaje: 59.05 },
        { nombre: 'Café La Estación', porcentaje: 58.6 },
        { nombre: 'La Estancia', porcentaje: 58.18 },
      ];
    },
    async obtenerDatosRecomendados(restaurantes) {
      try {
        // Simula llamada a un servidor para obtener datos de recomendación
        setTimeout(() => {
          this.recomendaciones = restaurantes;
          this.mostrarMapa = true;
          this.cargarMapa();
          this.loading = false;
        }, 2000);
      } catch (error) {
        this.error = 'Hubo un error al obtener las recomendaciones.';
        this.loading = false;
      }
    },
    cargarMapa() {
  if (this.mapa) {
    this.mapa.remove(); // Elimina el mapa anterior, si existe
  }

  this.mapa = L.map("map", { zoomAnimation: false }).setView(this.coordenadas, 13);

  // Agrega capa de mapa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.mapa);

  // Marca la ubicación en el mapa
  L.marker(this.coordenadas).addTo(this.mapa).bindPopup("¡Aquí estamos!").openPopup();
  
  // Asegura que el mapa se ajuste si cambia el tamaño
  this.mapa.invalidateSize();
}

  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.form-group {
  flex: 1 1 calc(33% - 20px);
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
}

input,
select {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus,
select:focus {
  border-color: #28a745;
  outline: none;
}

.btn-submit {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-submit:hover {
  background-color: #45a049;
  transform: scale(1.02);
}

.alert {
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
}

.alert.info {
  background-color: #e7f3fe;
  color: #31708f;
}

.alert.error {
  background-color: #f8d7da;
  color: #721c24;
}

.recommendation-list {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
}

.recommendation-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#map-container {
  width: 100%; 
  height: 500px; 
  position: relative;
  border: 2px solid #ddd; 
  overflow: hidden; 
}

#map {
  width: 100%;
  height: 100%;
}

.button-principal {
  display: flex;
  flex-direction: row;  
  gap: 20px;  
  width: 100%;  
}





</style>