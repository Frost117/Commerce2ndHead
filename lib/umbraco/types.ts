export interface Products {
  items: Product[];
  total: number;
 }
 
 export interface Product {
  contentType: ContentType;
  createDate:  Date;
  cultures:    Cultures;
  Id:          string;
  Name:        string;
  Properties:  Properties;
  Route:       Route;
  updateDate:  Date;
  path:        string;  
 }
 
 export enum ContentType {
  Product = "product",
 }
 
 export interface Cultures {
 }
 
 export interface Properties {
  bgColor:          BgColor | null;
  heroImage:        Image[];
  images:           Image[];
  longDescription:  LongDescription | null;
  metaDescription:  string;
  metaTitle:        string;
  price:            Price;
  shortDescription: string;
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
  Bytes:      number;
  Crops:      Crop[];
  Extension:  string;
  FocalPoint: FocalPoint;
  Height:     number;
  Id:         string;
  MediaType:  string;
  Name:       string;
  Properties: Cultures;
  Url:        string;
  Width:      number;
 }
 
 export interface FocalPoint{
  left: number;
  top: number;
 }

 export interface Crop {
  alias:       Alias;
  coordinates: Coordinate[];
  height:      number;
  width:       number;
 }
 
 export interface Coordinate {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
 }

 export enum Alias {
  Hero = "hero",
 }

 export enum Extension {
  Jpg = "jpg",
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
  color: string;
  size?: string;
 }
 
 export interface Route {
  Path:      string;
  startItem: StartItem;
 }
 
 export interface StartItem {
  id:   string;
  path: Path;
 }
 
 export enum Path {
  Products = "products",
 }
 
 