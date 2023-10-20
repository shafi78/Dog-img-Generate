// Dog API ( To get Random Dog images )

let url = "https://dog.ceo/api/breeds/image/random";

btn = document.querySelector("button");

btn.addEventListener("click",async() => {
    let link = await getImage();
    console.log(link);

    let img = document.querySelector("#result");
    img.setAttribute("src",link) ;

})


async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    }

    catch(err) {
        console.log("Error : ",err);
        return "/";
    }
}