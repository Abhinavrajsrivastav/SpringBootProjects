const API_KEY = "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"

const submitIcon = document.querySelector("#submitIcon");
const inputElement = document.querySelector("#inputText");
const imageSection = document.querySelector(".image-section");

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "256x256"
        })
    };

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        console.log(data);

        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            const imageElement = document.createElement("img");
            imageElement.setAttribute('src', imageObject.url);
            imageContainer.appendChild(imageElement);
            imageSection.append(imageContainer);
        });
    } catch (error) {
        console.log(error);
    }
};

submitIcon.addEventListener("click", getImages);
