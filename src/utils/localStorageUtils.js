
export function getFromLocalStorage(key, defaultValue) {
    const data = localStorage.getItem(key);
    if(!data){
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return getFromLocalStorage(key, defaultValue);
    } else {
        return JSON.parse(data);
    }
}

export function setToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
