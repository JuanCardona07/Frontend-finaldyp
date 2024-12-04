<template>
  <div class="container">
    <!-- Imagen de cerrar en la esquina superior derecha -->
    <div class="button-principal">
      <img 
        src="/cerrar.png"  @click="irPrincipal"   alt="Cerrar" class="img-cerrar"  style="cursor: pointer;"
      >
    </div>
    <h1 class="title">Bienvenido a MEG</h1>
    <form class="form-container">
      <!-- Botones -->
      <div class="button-group">
        <button type="button" @click="irARestaurantes" class="btn-submit">Registrar Restaurante</button>
        <button type="button" @click="irAHelloWorld" class="btn-submit">Buscar Restaurantes</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PrincipalPage',
  methods: {
    irPrincipal() {
      this.$router.push('/');
      alert(`Cerrando Sesión...`);
    },
    irARestaurantes() {
      this.$router.push('/Restaurantes'); // Redirige a la página Restaurantes
    },
    irAHelloWorld() {
      this.$router.push('/HelloWorld'); // Redirige a la página HelloWorld
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.container {
  position: relative; /* Permite posicionar elementos hijos dentro del contenedor */
  max-width: 800px;
  margin: 0 auto; /* Centrar el contenedor */
  padding: 30px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos horizontalmente */
  justify-content: center; /* Centra los elementos verticalmente */
  height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
}

/* Imagen de cerrar en la esquina superior derecha */
.img-cerrar {
  position: absolute;
  top: 20px; /* Espaciado desde la parte superior */
  right: 20px; /* Espaciado desde el lado derecho */
  cursor: pointer; /* Cambia el cursor al pasar sobre la imagen */
}

/* Título */
.title {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

/* Estilo para los botones */
.button-group {
  display: flex;
  flex-direction: row;  
  gap: 20px;  
  width: 100%; 
  justify-content: center; 
}

.button-group button {
  width: 200px; 
  padding: 16px;
  font-size: 18px; /* Aumenta el tamaño de la fuente */
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Botón principal */
.btn-submit {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.btn-submit:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

/* Adaptabilidad para pantallas pequeñas */
@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .button-group {
    flex-direction: column; /* Volver a la columna en pantallas pequeñas */
    margin-top: -20px; /* Ajusta el espacio entre los botones en pantallas pequeñas */
  }

  .button-group button {
    width: 90%; /* Ajusta el ancho de los botones en pantallas pequeñas */
    font-size: 16px; /* Ajusta el tamaño de la fuente en pantallas pequeñas */
  }
}
</style>
