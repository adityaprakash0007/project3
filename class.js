let url = "https://catfact.ninja/docs/api-docs.json";

async function getfunction (){
    try {
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data.fact);
} catch(e) {
    console.log("error-" ,e);
}
}

console.log("bye");
