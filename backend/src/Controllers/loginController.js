// loginController.js

const jwt = require('jsonwebtoken');
const userService = require('../Services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar credenciales en la base de datos
    const user = await userService.getUserByEmailAndPassword(email, password);
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user.id }, 'Varto04072024', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  login,
};