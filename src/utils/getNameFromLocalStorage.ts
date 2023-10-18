const getNameFromLocalStorage = () => {
    if (typeof localStorage === 'undefined') return;

    const storedName = localStorage.getItem('name');

    if (storedName === null) {
        return "";
    }

    return storedName;
}

export default getNameFromLocalStorage;