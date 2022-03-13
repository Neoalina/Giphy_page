searchBtn.onclick = function() {
    let gifName= document.getElementById('gifName').value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=xddHr5u2nJJZRzJHxKDwW7fLx6FqEJM8&q="+gifName+"&limit=5")
        .then(response => response.json())
        .then(pic => {
            for (let i=0; i<5; i++) {
                let img = document.createElement('img');
                let divPic = document.getElementById('pic');
                img.name="gif";
                img.src=pic.data[i].url;
                divPic.appendChild(img);
            }    
    })
    .catch(error => console.log(error));
}