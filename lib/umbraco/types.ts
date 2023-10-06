export interface Product {
  contentType: ContentType;
  createDate:  Date;
  cultures:    Cultures;
  id:          string;
  Name:        string;
  Properties:  Properties;
  route:       Route;
  updateDate:  Date;
 }
 
 export enum ContentType {
  Product = "product",
 }
 
 export interface Cultures {
 }
 
 export interface Properties {
  bgColor:          BgColor | null;
  images:           Image[] | null;
  longDescription:  LongDescription | null;
  metaDescription:  null;
  metaTitle:        null;
  price:            Price | null;
  shortDescription: null | string;
  sku:              string;
  stock:            number;
  tags:             string[] | null;
  umbracoNaviHide:  boolean;
  umbracoUrlAlias:  null;
  umbracoUrlName:   null;
  variants:         Variants | null;
 }
 
 export interface BgColor {
  color: string;
  label: string;
 }
 
 export interface Image {
  bytes:      number;
  crops:      any[];
  extension:  Extension;
  focalPoint: null;
  height:     number;
  id:         string;
  mediaType:  MediaType;
  name:       string;
  properties: Cultures;
  url:        string;
  width:      number;
 }
 
 export enum Extension {
  PNG = "png",
 }
 
 export enum MediaType {
  Image = "Image",
 }
 
 export interface LongDescription {
  markup: string;
 }
 
 export interface Price {
  currency:   Currency;
  formatted:  Formatted;
  tax:        number;
  withTax:    number;
  withoutTax: number;
 }
 
 export interface Currency {
  $type: string;
  code:  string;
  id:    string;
 }
 
 export interface Formatted {
  tax:        string;
  withTax:    string;
  withoutTax: string;
 }
 
 export interface Variants {
  attributes:        Attribute[];
  items:             VariantsItem[];
  priceRange:        null;
  variantContentUrl: string;
 }
 
 export interface Attribute {
  alias:  string;
  name:   string;
  values: Value[];
 }
 
 export interface Value {
  alias: string;
  name:  string;
 }
 
 export interface VariantsItem {
  attributes: Attributes;
  content:    null;
  isDefault:  boolean;
 }
 
 export interface Attributes {
  age?:   string;
  color?: string;
  size?:  string;
 }
 
 export interface Route {
  path:      string;
  startItem: StartItem;
 }
 
 export interface StartItem {
  id:   string;
  path: Path;
 }
 
 export enum Path {
  Products = "products",
 }
 