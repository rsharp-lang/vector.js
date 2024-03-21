// export R# package module type define for javascript/typescript language
//
//    imports "JSON" from "vjs";
//
// ref=SMRUCC.TypeScript.jsstd.JSON@vjs, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null

/**
*/
declare namespace JSON {
   /**
     * @param env default value Is ``null``.
   */
   function parse(json: string, env?: object): any;
   /**
     * @param env default value Is ``null``.
   */
   function stringify(obj: any, env?: object): any;
}
