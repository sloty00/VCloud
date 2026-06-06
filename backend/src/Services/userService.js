const prisma = require('../prismaClient');

const createUser = async (data) => {
  return await prisma.user.create({ data });
};

const getAllUsers = async () => {
  return await prisma.user.findMany({ include: { groups: true } });
};

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        password,  // Not recommended for production, use hashed passwords
      },
      include: {
        groups: true, // Include the user's groups
      },
    });

    if (!user) {
      return null;
    }

    // Extract groupId from the first group (assuming a user can belong to one group for simplicity)
    const groupId = user.groups[0]?.groupId || null;

    return { ...user, groupId }; // Include groupId in the returned user object
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Internal server error');
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmailAndPassword,
}