export const isLoggedIn = () => {
    return localStorage.getItem('currentUser') !== null;
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  };
  
  export const login = () => {
    return localStorage.getItem('currentUser') !== null;
  };
  
  export const logout = () => {
    localStorage.removeItem('currentUser');
    return true;
  };


  export const registerUser = (user) => {
    if (user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }
  