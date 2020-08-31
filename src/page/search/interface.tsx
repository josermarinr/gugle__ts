export interface RootObject {
    kind: string;
    url: Url;
    queries: Queries;
    context: Context;
    searchInformation: SearchInformation;
    items: Item[];
  }
  
 export interface Item {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: Pagemap;
  }
  
 export interface Pagemap {
    cse_thumbnail?: Csethumbnail[];
    metatags: Metatag[];
    cse_image: Cseimage[];
    hcard?: Hcard[];
    hatomfeed?: Hatomfeed[];
    thumbnail?: Csethumbnail[];
    document?: Context[];
    sitenavigationelement?: Sitenavigationelement[];
  }
  
 export interface Sitenavigationelement {
    name: string;
    url: string;
  }
  
 export interface Hatomfeed {
  }
  
 export interface Hcard {
    url_text?: string;
    fn: string;
    nickname?: string;
    category?: string;
    url?: string;
    bday?: string;
    label?: string;
  }
  
 export interface Cseimage {
    src: string;
    width?: string;
    type?: string;
    height?: string;
  }
  
  export interface Metatag {
    'og:image'?: string;
    'msapplication-square70x70logo'?: string;
    'og:image:alt'?: string;
    'og:type'?: string;
    'og:image:width'?: string;
    'og:title'?: string;
    'og:image:height'?: string;
    'msapplication-wide310x150logo'?: string;
    pid?: string;
    'msapplication-square150x150logo'?: string;
    'article:author'?: string;
    sid?: string;
    viewport?: string;
    'msapplication-square310x310logo'?: string;
    'og:locale'?: string;
    swtmpl?: string;
    'fb:admins'?: string;
    'og:url'?: string;
    referrer?: string;
    'twitter:card'?: string;
    'og:site_name'?: string;
    'article:modified_time'?: string;
    bingbot?: string;
    'msapplication-tileimage'?: string;
    'og:description'?: string;
    'theme-color'?: string;
    'og:determiner'?: string;
    'twitter:site'?: string;
    'twitter:description'?: string;
    'twitter:app:id:googleplay'?: string;
    'twitter:url'?: string;
    'twitter:app:name:googleplay'?: string;
    medium?: string;
    'twitter:app:id:iphone'?: string;
    title?: string;
    news_keywords?: string;
    'article:content_tier'?: string;
    'twitter:title'?: string;
    'fb:pages'?: string;
    'fb:app_id'?: string;
    'twitter:app:name:iphone'?: string;
    'article:opinion'?: string;
    'msapplication-tilecolor'?: string;
    'msapplication-config'?: string;
    image?: string;
    'og:updated_time'?: string;
    url?: string;
    ogdescription?: string;
  }
  
 export interface Csethumbnail {
    src: string;
    width: string;
    height: string;
  }
  
 export interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  }
  
 export interface Context {
    title: string;
  }
  
 export interface Queries {
    request: Request[];
    nextPage: Request[];
  }
  
 export interface Request {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
  }
  
  export interface Url {
    type: string;
    template: string;
  }