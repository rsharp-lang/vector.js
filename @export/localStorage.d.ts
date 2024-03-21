// export R# package module type define for javascript/typescript language
//
//    imports "localStorage" from "vjs";
//
// ref=SMRUCC.TypeScript.jsstd.isolationFs.localStorage@vjs, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null

/**
*/
declare namespace localStorage {
   /**
   */
   function clear(): any;
   /**
     * @param env default value Is ``null``.
   */
   function getItem(key: string, env?: object): any;
   /**
   */
   function removeItem(keyname: string): any;
   /**
     * @param env default value Is ``null``.
   */
   function setItem(key: string, value: any, env?: object): any;
}
