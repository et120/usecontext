const getUserData = async () => {
    const promise = await fetch('https://randomuser.me/api/');
    const data = await promise.json();
    return data.results[0];
};

export { getUserData };