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
  metatags: Metatag[];
  cse_image?: Cseimage[];
  hcard?: Hcard[];
  cse_thumbnail?: Csethumbnail[];
  imageobject?: Imageobject[];
  person?: Person[];
  organization?: Organization[];
  periodical?: Organization[];
  scholarlyarticle?: Scholarlyarticle[];
}

interface Scholarlyarticle {
  name: string;
  description: string;
  headline?: string;
  datepublished: string;
  mainentityofpage?: string;
}

interface Organization {
  name: string;
}

interface Person {
  name: string;
  url?: string;
  mainentityofpage?: string;
}

interface Imageobject {
  width: string;
  url: string;
  height: string;
}

interface Csethumbnail {
  src: string;
  width: string;
  height: string;
}

interface Hcard {
  fn: string;
  url: string;
}

interface Cseimage {
  src: string;
}

interface Metatag {
  viewport?: string;
  citation_keywords?: string;
  'og:image'?: string;
  citation_publication_date?: string;
  'theme-color'?: string;
  'twitter:card'?: string;
  citation_title?: string;
  citation_author_institution?: string;
  'og:site_name'?: string;
  'twitter:url'?: string;
  citation_publisher?: string;
  citation_journal_title?: string;
  ncbi_pdid?: string;
  ncbi_phid?: string;
  'og:description'?: string;
  ncbi_cost_center?: string;
  'og:image:secure_url'?: string;
  'twitter:image'?: string;
  uid?: string;
  ncbi_db?: string;
  citation_issn?: string;
  ncbi_pinger_stat_url?: string;
  log_category?: string;
  citation_language?: string;
  citation_lastpage?: string;
  'og:type'?: string;
  'twitter:title'?: string;
  citation_pmid?: string;
  handheldfriendly?: string;
  'twitter:domain'?: string;
  citation_journal_abbrev?: string;
  ncbi_app?: string;
  log_icons_present?: string;
  'og:title'?: string;
  citation_author?: string;
  log_op?: string;
  citation_issue?: string;
  log_source_db?: string;
  citation_firstpage?: string;
  log_displayeduids?: string;
  'twitter:description'?: string;
  citation_doi?: string;
  mobileoptimized?: string;
  citation_volume?: string;
  'og:url'?: string;
  'twitter:app:url:iphone'?: string;
  'twitter:app:id:googleplay'?: string;
  'og:image:width'?: string;
  'twitter:app:url:ipad'?: string;
  'al:android:package'?: string;
  'twitter:app:name:googleplay'?: string;
  title?: string;
  'al:ios:url'?: string;
  'twitter:app:id:iphone'?: string;
  'al:ios:app_store_id'?: string;
  'twitter:site'?: string;
  'al:ios:app_name'?: string;
  'og:image:height'?: string;
  'twitter:app:id:ipad'?: string;
  'al:web:url'?: string;
  'al:android:url'?: string;
  'fb:app_id'?: string;
  'twitter:app:url:googleplay'?: string;
  'twitter:app:name:ipad'?: string;
  'al:android:app_name'?: string;
  'twitter:app:name:iphone'?: string;
  'apple-itunes-app'?: string;
  citation_online_date?: string;
  citation_fulltext_html_url?: string;
  citation_pdf_url?: string;
  pbcontext?: string;
  apptitle?: string;
  citation_abstract_html_url?: string;
  epdf_available?: string;
  referrer?: string;
  'dc.identifier'?: string;
  'google-play-app'?: string;
  article_references?: string;
  citation_pmcid?: string;
  bioentities?: string;
  'dcterms:hasformat'?: string;
  'dc:type'?: string;
  owner?: string;
  'dc:language'?: string;
  'dc:subject'?: string;
  author?: string;
  'dc:date'?: string;
  'dc:identifier'?: string;
  'dc.date'?: string;
  'dcterms.hasformat'?: string;
  'dc.type'?: string;
  'dc.language'?: string;
  'msapplication-tilecolor'?: string;
  'msapplication-tileimage'?: string;
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