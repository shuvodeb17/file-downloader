const userInput = document.getElementById('user-inupt');
const userBtn = document.getElementById('dow-btn');
userBtn.addEventListener('click', function (e) {
    e.preventDefault()
    userBtn.innerText = 'Downloading File....'
    fetchFile(userInput.value);
})

function fetchFile(url) {
    // featching file and returning response as blob
    fetch(url)
        .then(response => response.blob())
        .then(file => {
            // URL.createObjectURL create a url of passed object
            let tempUrl = URL.createObjectURL(file);
            let aTag = document.createElement('a')
            aTag.href = tempUrl;
            aTag.download = url.replace('filename');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            url.revekeObject(tempUrl);
            userBtn.innerText = 'Download File';
        }).catch(() => {
            userBtn.innerText = 'Download File';
        })
}