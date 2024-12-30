const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async() => {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const result = await axios.get('https://icanhazdadjoke.com',config);
        const newLI = document.createElement('LI');
        newLI.append(result.data.joke);
        jokes.append(newLI);
    } catch(e){
        console.log("ERROR!!",e);
    };
}


button.addEventListener('click',getDadJoke);



