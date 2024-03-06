const API_URL = "https://api.thedogapi.com/v1/"
const API_KEY = 
    "live_vg6RPsM5dcmYatb3QSGgjkrI3pCITpCEB0ldXXUBCYB5rlteqI7GhsR99l72W7eU"

function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch(`${API_URL}images/upload`, {
        method: "POST",
        headers: {
        "x-api-key": API_KEY,
        },
        body: formData,
    })
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById(
                "uploadResults"
            ).innerHTML = `<img src="${data.url}" width="50%" />`;
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.log(error);
        });
}