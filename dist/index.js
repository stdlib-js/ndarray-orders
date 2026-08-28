"use strict";var e=function(s,r){return function(){try{return r||s((r={exports:{}}).exports,r),r.exports}catch(c){throw (r=0, c)}};};var o=e(function(O,j){j.exports=["row-major","column-major"]});var a=e(function(R,u){
var l=o();function v(){return l.slice()}u.exports=v
});var m=e(function(f,n){
var q=require('@stdlib/blas-base-layouts/dist').enum,t=q();function d(){return{"row-major":t["row-major"],"column-major":t["column-major"]}}n.exports=d
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),i=a(),w=m();p(i,"enum",w);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
