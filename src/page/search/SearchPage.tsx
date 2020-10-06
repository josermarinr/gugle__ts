import process from 'process'
import React from 'react'
import './SearchPage.css'
import {Link} from 'react-router-dom'
import Search from './../../components/search/Search'

import { useStateValue } from '../../StateProvider'
import UseGoogleSearch from '../../UseGoogleSearch';
import Response from './response'
import RootObject from './interface';
import { RootObject as advers, Data} from './adsinterface';
import responseads from './responseads'
import Ads from '../../components/ads/Ads'
import respu from './default'


import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';





function SearchPage() {
    
    const [ {term} , dispatch]:any = useStateValue();
   
    


    let adver : any;
    //  if(ads !== null){
    //      
    //  }else{
        //  adver  = responseads
    //  }
    // let adver: any;
    // if (process.env.REACT_DEBUG_MODE) {
    //     adver = responseads
    // } else {
        adver = Ads( term );
    // }

     
    const { data }:any  = UseGoogleSearch( term );
     
     
    
   
     
    //mock testing
 
    //const   data  : any = respu;
    //let adver:any  = responseads
    // mylog(adver)

    console.log(term)
  

    let state = {
        ads : '',
        like: false,
    };
    const [nameAds, setNameAds] = useState("");

    const likeAds = (e:any) => {
        e.preventDefault();

        const input = e.target;
        console.log(e)
       if(state.like === true){
        state.like = false
       }{
        state.like = true
       }
        
        state.ads += (setNameAds(e.target.name) );
        
      };
      console.log(state)
      const savinLocalStorage = () =>{
          const {ads, like} = state;
          const stringLike: string = `${like}`;
          localStorage.setItem('pub', ads);
          localStorage.setItem('like', stringLike);
      }
      savinLocalStorage()
    return (
  
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/">
                    <img className='searchPage__logo'
                    src='https://cdn.1min30.com/wp-content/uploads/2017/07/Le-logo-Google.png'
                    alt="google"/>
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButttons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                            <SearchIcon/>
                            <Link to="/all">all</Link>
                            </div>

                            <div className="searchPage__option">
                            <DescriptionIcon/>
                            <Link to="/news">news</Link>
                            </div>

                            <div className="searchPage__option">
                            <ImageIcon/>
                            <Link to="/image">images</Link>
                            </div>

                            <div className="searchPage__option">
                            <LocalOfferIcon/>
                            <Link to="/shopping">shopping</Link>
                            </div>

                            <div className="searchPage__option">
                            <RoomIcon/>
                            <Link to="/maps">maps</Link>
                            </div>

                            <div className="searchPage__option">
                            <MoreVertIcon/>
                            <Link to="/more">more</Link>
                            </div>
                            
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option"> 
                                <Link to="/settings">settings</Link>
                            </div>

                            <div className="searchPage__option"> 
                                <Link to="/tools">tools</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

         
            {term && (
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
              
                       About { data?.searchInformation.formattedTotalResults } result ({ data?.searchInformation.formattedSearchTime } seconds) for {term}   
                    </p>
                    
                <div className="corpus">
                         <div className="searchPage__ads">
                 
                        <div className='ads'>
                            <h2>See result about</h2>
                            
                                 <div className="ads_body">
                            
                                 <div className="corpusads">
                                
                                            <p className="title__ads">{adver?.data.advertisements.title}</p>
                                             <p className="description__ads">{adver?.data.advertisements.description}</p>  
                                         
                                 </div>
 
                                     <div className="header">
                                       
                                            <img src={'https://workshop-advertisement.osc-fr1.scalingo.io/' + adver?.data.advertisements.thumbnail}  alt={adver?.data.advertisements.thumbnail} className='ads__image' />   
                                        
                                    
                                        
                                     </div>
 
                             </div>
                 
                            
                            <div className="likeads">
                            
                            <ThumbUpAltIcon   />
                            </div>
                        </div>
                    </div> 
                     

                     
                  <div className="results">
                      
                            {data?.items.map( (item:any)  => (
                                <div className="searchPage__result">
                                <a href={item.link}>
                                {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src &&(
                                    <img src={item.pagemap?.cse_image?.length>0&& item.pagemap?.cse_image[0]?.src} alt="" className="searchPage__resultImage"/>
                                )}
                                {item.displayLink}  
                                </a>
                                
                                    <a  href={item.link} className="searchPage__resultTitle" >
                                    <h2>{item.title}</h2>
                                    
                                    </a>
                                    <p className="searchPage__resultSnippet">
                                    {item.snippet} 
                                    </p>
                                </div>
                            ))}
                        </div>
                  
                </div> 
                    
            </div>
        
        )}
        </div>
    )
}

export default SearchPage
