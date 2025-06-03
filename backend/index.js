const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./db/db');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Servidor funcionando ✅'));
const programaRoutes = require('./routes/programaRoutes');
app.use('/api/programas', programaRoutes);


sequelize.authenticate()
  .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
  .catch(err => console.error('❌ Error en la conexión:', err));
 const Programa = require('./models/programa');

sequelize.sync({ alter: true }) // Crea o actualiza la tabla si no existe
  .then(() => console.log('🧠 Tablas sincronizadas'))
  .catch((err) => console.error('Error al sincronizar tablas:', err));
 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
