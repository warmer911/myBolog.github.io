var a=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},e=Symbol("test"),l=Object(e);if(typeof e=="string"||Object.prototype.toString.call(e)!=="[object Symbol]"||Object.prototype.toString.call(l)!=="[object Symbol]")return!1;var r=42;t[e]=r;for(e in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var o=Object.getOwnPropertySymbols(t);if(o.length!==1||o[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(t,e);if(f.value!==r||f.enumerable!==!0)return!1}return!0},n=typeof Symbol!="undefined"&&Symbol,s=a,b=function(){return typeof n!="function"||typeof Symbol!="function"||typeof n("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:s()};export{b as _};
