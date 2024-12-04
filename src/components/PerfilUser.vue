<template>
   <div class="container">
    
    <div class="form-container">
    <h1 class="title">Bienvenido a MEG</h1>
    <h3>Inicio de Sesión</h3>
    <form @submit.prevent="iniciarSesion">
      <input 
        type="text" 
        v-model="usuario" 
        placeholder="Ingrese su usuario" 
        required 
      />
      <input 
        type="password" 
        v-model="contrasena" 
        placeholder="Ingrese su contraseña" 
        required 
      />
      <button type="submit" class="btn-iniciar">Iniciar Sesión</button>
    </form>
    <button class="btn-registrarse" @click="registrarse">Registrarse</button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },
  methods: {
    iniciarSesion() {
      if (this.usuario && this.contrasena) {
        alert(`Iniciando sesión como: ${this.usuario}`);
        this.$router.push("/Principal");
      } else {
        alert("Por favor, complete todos los campos.");
      }
    },
    registrarse() {
      alert("Redirigiendo a la página de registro...");
      this.$router.push("/RegistroUser");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto; /* Centrar el contenedor */
  padding: 20px;
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

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-container h3 {
  margin-bottom: 20px;
}

.form-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-iniciar {
  background-color: #4CAF50;
  color: white;
}

.btn-registrarse {
  background-color: #007BFF;
  color: white;
}
</style>
