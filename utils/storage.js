export const setStorage = (key, data) => {
    localStorage.setItem(key, data);
  };
  
  export const getStorage = (key) => localStorage.getItem(key) || 'en';
  
  export const removeStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // TYPES OF LS KEYS
  export const types = {
    IS_AUTHENTICATED: 'isAuthenticated',
  };
  