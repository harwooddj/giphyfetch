const img = document.querySelector("img");
const search = document.getElementById("search");
const refresh = document.getElementById("refresh");

const getImg = (url) => {
    fetch(url,
{mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        img.src = response.data.images.original.url;
    })
    .catch((error) => {
        alert("No image matching that search could be found");
    });
}

refresh.addEventListener("click", () => {
    console.log("clicked");

    if(search !== ""){
        let url = `https://api.giphy.com/v1/gifs/translate?api_key=XaqInFN8ED3xu31a8RdT1vEeNdpM0f2I&s=${search.value}`;
        getImg(url);
    }
    
});