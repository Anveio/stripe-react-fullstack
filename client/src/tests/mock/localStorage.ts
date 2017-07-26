const localStorageMock = (): Partial<Storage> => {
  const storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
};

export const mockLocalStorage = () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock() });
};
