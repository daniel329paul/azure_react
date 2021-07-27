import React from 'react'

export function RecordUploadForm() {
    const addRecordHandler = async ()=>{
        let user_id = parseInt(document.querySelector('#user_name').value);
        let user_name = document.querySelector('#user_name').value.trim();
        let user_email = document.querySelector('#user_email').value.trim();
        if(user_email != '' && user_name !='' && user_id != null){
            // call trigger
            let data = {'user_id':user_id, 'user_name': user_name, 'user_email': user_email};
            console.log(data);
            let url = 'https://fnds20334.azurewebsites.net/api/trigger1'
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              });
              console.log(response);
              return response.json();
        }
    };
    return (
        <div>
            <input type="number" id="user_id" placeholder="ID"/>
            <input type="text" id="user_name" placeholder="Name"/>
            <input type="text" id="user_email" placeholder="Email"/>
            <button onClick={addRecordHandler}>Add</button>
        </div>
    )
}


