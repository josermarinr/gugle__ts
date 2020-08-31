import React from 'react'
import './SearchPage.css'
import {Link} from 'react-router-dom'
import './../../components/search/Search'
import { useStateValue } from '../../StateProvider'
import UseGoogleSearch from '../../UseGoogleSearch';
import Response from './response'
import Search from './../../components/search/Search'
import { RootObject, Item, Pagemap, Sitenavigationelement, Hatomfeed, Hcard, Cseimage, Metatag, Csethumbnail, SearchInformation, Context, Queries, Request, Url } from './interface';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';




function SearchPage() {
    

    const [ {term} , dispatch]:any = useStateValue();
    //const {data}:any = UseGoogleSearch( term );
     
    
    //mock testing

     const  data :RootObject = Response;

    console.log(data)
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

    
            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                    About { data?.searchInformation.formattedTotalResults } result ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

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

    )
}

export default SearchPage
