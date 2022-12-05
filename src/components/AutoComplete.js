import React,{useState,useEffect} from 'react'

import APIService from '../services/APIService';

const AutoComplete = () => {
    const [usersAPI, setUsersAPI] = useState([])

    useEffect(() => {
        const ApiService = new APIService();
        ApiService.get('users')
            // .then(res => { res.json() })

            .then(data => setUsersAPI(data))
    }, [])
    
    const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState([])

    const filterSearch = []

    const users = usersAPI.map((user)=>user.name);
    const handleAutoComplete = (e) => {
        setSearch((prev) => e.target.value)
        if (e.target.value) {
            users.forEach((x) => {
                if (x.substring(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
                    filterSearch.push(x) 
                }
            })
        }
        setResultSearch(filterSearch.map((x, index) => <div key={index} onClick={(e) => { setSearch((prev)=>x); setResultSearch((prev)=>[])} }  >{ x }</div>))
    }

  return (
      <div>
          <input type="text" placeholder="search" value={search} onChange={(e) =>handleAutoComplete(e) } />
          {resultSearch}
    </div>
  )
}

export default AutoComplete