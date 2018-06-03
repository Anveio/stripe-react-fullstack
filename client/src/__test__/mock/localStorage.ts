const localStorageMock = (): Partial<Storage> => {
  const storage = {};

  return {
    setItem: function(key: string, value?: string) {
      storage[key] = value || '';
    },
    getItem: function(key: string) {
      return storage[key] || null;
    },
    removeItem: function(key: string) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i: number) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
};

export const mockLocalStorage = () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock() });
};
