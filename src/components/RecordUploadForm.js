import {useState, useEffect, React} from 'react'
export function RecordUploadForm() {
    const [fetchdata, setFetchdata] = useState([]);
    const addRecordHandler = async ()=>{
        let user_id = parseInt(document.querySelector('#user_id').value);
        let user_name = document.querySelector('#user_name').value.trim();
        let user_email = document.querySelector('#user_email').value.trim();
        if(user_email != '' && user_name !='' && user_id != null){
            // call trigger
            let data = {'user_id':user_id, 'user_name': user_name, 'user_email': user_email};
            let url = 'https://fnds20334.azurewebsites.net/api/trigger1'
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              });
            if (response.status == 200){
                alert('success');
                fetchRecordHandler()
            } 
            else alert('failed');
        }
    };
    const fetchRecordHandler = async ()=>{
        let url = 'https://fnds20334.azurewebsites.net/api/trigger1'
        const response = await fetch(url);
        const res_json = await response.json();
        if (response.status == 200) setFetchdata(res_json.data)
    };

    useEffect(()=>{
        console.log(fetchdata)
        
    },[fetchdata]);
    return (
        <div>
            <input type="number" id="user_id" placeholder="ID"/>
            <input type="text" id="user_name" placeholder="Name"/>
            <input type="text" id="user_email" placeholder="Email"/>
            <button onClick={addRecordHandler}>Add</button>
            <button onClick={fetchRecordHandler}>Fetch Record</button>
            <table className="fetch_wrapper">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
                {fetchdata.map((e,i)=>(
                  <tr key={i}>
                      <td>{e[0]}</td>
                      <td>{e[1]}</td>
                      <td>{e[2]}</td>
                  </tr>  
                ))}
            </table>
        </div>
    )
}


