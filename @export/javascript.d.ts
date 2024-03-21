// export R# package module type define for javascript/typescript language
//
//    imports "javascript" from "vjs";
//
// ref=SMRUCC.TypeScript.JavaScript@vjs, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null

/**
*/
declare namespace javascript {
   /**
     * @param env default value Is ``null``.
   */
   function parse(script: string, env?: object): any;
}
