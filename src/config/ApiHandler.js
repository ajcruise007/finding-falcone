
const ApiHandler = async(url) => {
    return await(await fetch(url)).json();
}


export default ApiHandler;