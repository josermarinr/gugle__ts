import { useState, useEffect } from 'react'
import {  gql, useQuery, useMutation  } from '@apollo/client';
import { Input } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


const ADS_QUERY =  gql`
      
      query advertisements($term: String! ){
        advertisements(research: $term){
            title
            description
            thumbnail
            }
        }   
      
    `;

 function gettingAds(  term  ){


          const { loading, error, data } = useQuery(ADS_QUERY, {
            variables: { term },
          });
      
        if (loading) return null;
        if (error) return `Error! ${error}`;
      
        console.log('escribiste'+ term)
        console.log(data)
      

}

export default gettingAds

