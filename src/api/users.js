const API_BASE_URL = 'http://localhost:8080';

export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (userId, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    // Utilisateur supprimé avec succès
    return true;
  } else {
    // Gérer les erreurs, par exemple :
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};