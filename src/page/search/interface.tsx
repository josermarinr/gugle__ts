
export default interface RootObject {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

interface Pagemap {
  cse_thumbnail?: Csethumbnail[];
  metatags: Metatag[];
  cse_image?: Cseimage[];
  imageobject?: Imageobject[];
  person?: Person[];
  videoobject?: Videoobject[];
}

interface Videoobject {
  embedurl: string;
  playertype: string;
  isfamilyfriendly: string;
  uploaddate: string;
  description: string;
  videoid: string;
  url: string;
  duration: string;
  unlisted: string;
  name: string;
  paid: string;
  width: string;
  regionsallowed: string;
  genre: string;
  interactioncount: string;
  channelid: string;
  datepublished: string;
  thumbnailurl: string;
  height: string;
}

interface Person {
  name: string;
  url: string;
}

interface Imageobject {
  width: string;
  url: string;
  height: string;
}

interface Cseimage {
  src: string;
}

interface Metatag {
  'og:image'?: string;
  'fb:app_id'?: string;
  google?: string;
  'og:description'?: string;
  referrer?: string;
  'twitter:card'?: string;
  'og:site_name'?: string;
  'twitter:site'?: string;
  'msvalidate.01'?: string;
  viewport?: string;
  'og:title'?: string;
  'fb:admins'?: string;
  'twitter:app:url:iphone'?: string;
  'twitter:app:id:googleplay'?: string;
  'og:image:width'?: string;
  'twitter:url'?: string;
  'twitter:app:url:ipad'?: string;
  'al:android:package'?: string;
  'twitter:app:name:googleplay'?: string;
  title?: string;
  'al:ios:url'?: string;
  'twitter:app:id:iphone'?: string;
  'al:ios:app_store_id'?: string;
  'twitter:image'?: string;
  'twitter:player'?: string;
  'twitter:player:height'?: string;
  'og:video:type'?: string;
  'og:video:height'?: string;
  'og:video:url'?: string;
  'og:type'?: string;
  'twitter:title'?: string;
  'al:ios:app_name'?: string;
  'og:image:height'?: string;
  'twitter:app:id:ipad'?: string;
  'al:web:url'?: string;
  'og:video:secure_url'?: string;
  'og:video:tag'?: string;
  'og:video:width'?: string;
  'al:android:url'?: string;
  'twitter:app:url:googleplay'?: string;
  'twitter:app:name:ipad'?: string;
  'twitter:description'?: string;
  'og:url'?: string;
  'twitter:player:width'?: string;
  'al:android:app_name'?: string;
  'twitter:app:name:iphone'?: string;
  'theme-color'?: string;
  'article:published_time'?: string;
  handheldfriendly?: string;
  'article:modified_time'?: string;
  mobileoptimized?: string;
}

interface Csethumbnail {
  src: string;
  width: string;
  height: string;
}

interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

interface Context {
  title: string;
}

interface Queries {
  request: Request[];
  nextPage: Request[];
}

interface Request {
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

interface Url {
  type: string;
  template: string;
}