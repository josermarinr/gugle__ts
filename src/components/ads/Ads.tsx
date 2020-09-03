import { useState, useEffect } from 'react'
import {  gql, useQuery, useMutation  } from '@apollo/client';
import { Input } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import respond from '../../page/search/responseads'

const ADS_QUERY =  gql`
      
      query Ads($term: String! ){
        advertisements(research: $term){
            title
            description
            thumbnail
            }
        }   
      
    `;

 function Ads( term: any){

   
    const { loading, error, data } = useQuery(ADS_QUERY, {
      variables: { term },
     
    });
  
    if (loading) return null;
    if (error) return respond && console.log(error);
  
    console.log('escribiste'+ term)
    console.log(data)
   
      return { data }
    


}

export default Ads

