import AuthRepository from 'src/repositories/authRepository'; // Import the AuthRepository

function useAuthUseCases() {
  const authRepository = new AuthRepository();

  const login = async (username, password) => {
    try {
      const user = await authRepository.login(username, password);
      // Dispatch Redux action or update the state as needed
      return user;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await authRepository.logout();
    // Dispatch Redux action or update the state as needed
  };

  return { login, logout };
}

export { useAuthUseCases };