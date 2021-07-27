import React from 'react'

export function FileUploadForm() {
    
    const  submitHander = async ()=>{
        let user_name = document.querySelector('#user_name').value.trim();
        let user_email = document.querySelector('#user_email').value.trim();
        if(user_email != '' && user_name !=''){
            // call trigger
            let data = {'user_name': user_name, 'user_email': user_email};
            let url = 'https://fnds20334.azurewebsites.net/api/trigger1'
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              });
              console.log(response.json());
              return response.json();
        }
    };
    return (
        <div>
            <input type="file" id="az_file_input"/>
            <button onClick={submitHander}>upload</button>
        </div>
    )
}

