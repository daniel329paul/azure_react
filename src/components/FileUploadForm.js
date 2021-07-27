import React from 'react'

export function FileUploadForm() {
    
    const  submitHander = async ()=>{
        var formData = new FormData(document.querySelector('#form'))
        console.log(formData)
        if(formData){
            // call trigger
            let url = 'https://fnds20334b.azurewebsites.net/api/HttpTrigger1'
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                  'Content-Type': 'application/json'
                },
                body: formData // body data type must match "Content-Type" header
              });
              console.log(response.json());
              return response.json();
        }
    };
    return (
        <form id="form" action="https://fnds20334b.azurewebsites.net/api/HttpTrigger1" method="POST" encType="multipart/form-data">
            <input type="file" id="files" name="files"/>
            <input type="submit" />
        </form>
    )
}

