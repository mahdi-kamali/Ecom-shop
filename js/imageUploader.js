


const buttonElement = document.getElementById('button-element')
const imgElement = document.getElementById('image-element')
const uploaderElement = document.getElementById('uploader-element')
var upload = new Upload({ apiKey: "public_12a1xpe5agD1YmYKXeuwif2JYb69" })


function openPage(url) {
    const temp =
        `https://www.photopea.com/#%7B%22files%22:%5B%22${url}%22%5D,%22environment%22:%7B%7D%7D`
    window.open(temp);
}

buttonElement.onclick = (event) => {
    event.preventDefault()
    const url = imgElement.src
    const fileName = 'myFile.jpg'
    uploaderElement.innerText =
        'درحال هدایت به سایت طراحی لطفا منتظر بمانید این کار میتواند چند ثانیه طول بکشد ....'
    fetch(url)
        .then(async response => {
            const contentType = response.headers.get('content-type')
            const blob = await response.blob()
            const file = new File([blob], fileName, { contentType })
            // access file here
            uploadFile(file)
        })
}


var testMethods = upload.createFileInputHandler({
    onBegin: ({ cancel }) => {
        alert('در حال هدایت به سایت طراحی.....')
    },
    onUploaded: ({ fileUrl, fileId }) => {
        // alert(`File uploaded! ${fileUrl}`);
        const temp =
            `https://www.photopea.com/#%7B%22files%22:%5B%22${fileUrl}%22%5D,%22environment%22:%7B%7D%7D`

        openPage(temp)
    }
});



const uploadFile = async (fileObject) => {

    const { fileUrl, fileId } = await upload.uploadFile({
        file: fileObject
    });
    openPage(fileUrl)
}




//load src and convert to a File instance object
//work for any type of src, not only image src.
//return a promise that resolves with a File instance
function srcToFile(src, fileName, mimeType) {
    return (fetch(src)
        .then(function (res) { return res.arrayBuffer(); })
        .then(function (buf) { return new File([buf], fileName, { type: mimeType }); })
    );
}





