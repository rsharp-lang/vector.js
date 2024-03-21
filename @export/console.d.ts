// export R# package module type define for javascript/typescript language
//
//    imports "console" from "vjs";
//
// ref=SMRUCC.TypeScript.jsstd.console@vjs, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null

/**
*/
declare namespace console {
   /**
     * @param env default value Is ``null``.
   */
   function log(x: any, env?: object): any;
   /**
     * @param env default value Is ``null``.
   */
   function table(x: any, env?: object): any;
}
