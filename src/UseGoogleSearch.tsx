import { useState, useEffect } from 'react'
import API_KEY from './API_KEY';
import { ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


const CONTEXT_KEY = '880e5e8254c95712d'



function UseGoogleSearch(term: any) {
    const [data, setData] = useState(null);

    useEffect( ()=>{
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` //endpoint
            )
            .then( response => response.json() )
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    }, [term])
   
return {data}
}

export default UseGoogleSearch
