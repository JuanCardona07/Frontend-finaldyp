<template>
  <div class="container">
    <div class="form-container">
      <h1>Registro de Usuario</h1>
      <form @submit.prevent="registrarUsuario">
        <input 
          type="text" 
          v-model="usuario" 
          placeholder="Ingrese su nombre de usuario" 
          required 
        />
        <input 
          type="password" 
          v-model="contrasena" 
          placeholder="Ingrese su contraseña" 
          required 
        />
        <button type="submit" class="btn-registrarse">Registrar</button>
      </form>
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
    registrarUsuario() {
      if (this.usuario && this.contrasena) {
        alert(`Usuario registrado exitosamente:\nUsuario: ${this.usuario}`);
        this.$router.push("/"); 
      } else {
        alert("Por favor, complete todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

.form-container h1 {
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

.btn-registrarse {
  background-color: #4CAF50;
  color: white;
}
</style>
