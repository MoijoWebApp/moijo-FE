type StorageKey = {
  accessToken?: string;
  refreshToken?: string;
};

const initStorage = <T extends keyof StorageKey>(key: T, storage?: Storage) => {
  if (typeof window === 'undefined') {
    return {
      get: () => undefined,
      set: () => {},
    };
  }

  const storageKey = `${key}`;
  const storageInstance = storage ?? window.localStorage;

  const get = (): StorageKey[T] | undefined => {
    const value = storageInstance.getItem(storageKey);
    return value as StorageKey[T];
  };

  const set = (value: StorageKey[T]) => {
    if (value === undefined || value === null) {
      return storageInstance.removeItem(storageKey);
    }
    storageInstance.setItem(storageKey, String(value));
  };

  return { get, set };
};

export const authStorage = {
  accessToken: initStorage('accessToken', localStorage),
  refreshToken: initStorage('refreshToken', localStorage),
};
