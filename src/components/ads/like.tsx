import React from 'react'
import {  gql, useQuery, useMutation  } from '@apollo/client';
const ADS_QUERY =  gql`
      
      mutation like($title: String! ){
        like(title: $title){
            title
            Boolean
            }
        }   
      
    `;
function like() {
    <div><input type="checkbox" name="" id=""/></div>
}

export default like
