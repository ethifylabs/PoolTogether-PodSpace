(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[16,17],{3283:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(3264),o=r(644),a=r(1),s=new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),f=function(){function t(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),e.common){if(e.chain||e.hardfork)throw new Error("Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!");this._common=e.common}else{var r=e.chain?e.chain:"mainnet",n=e.hardfork?e.hardfork:"petersburg";this._common=new o.default(r,n)}var s=[{name:"nonce",length:32,allowLess:!0,default:new a.Buffer([])},{name:"gasPrice",length:32,allowLess:!0,default:new a.Buffer([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new a.Buffer([])},{name:"to",allowZero:!0,length:20,default:new a.Buffer([])},{name:"value",length:32,allowLess:!0,default:new a.Buffer([])},{name:"data",alias:"input",allowZero:!0,default:new a.Buffer([])},{name:"v",allowZero:!0,default:new a.Buffer([])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new a.Buffer([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new a.Buffer([])}];i.defineProperties(this,s,t),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)}),this._validateV(this.v),this._overrideVSetterWithValidation()}return t.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},t.prototype.hash=function(t){var e;return void 0===t&&(t=!0),e=t?this.raw:this._implementsEIP155()?this.raw.slice(0,6).concat([i.toBuffer(this.getChainId()),i.stripZeros(i.toBuffer(0)),i.stripZeros(i.toBuffer(0))]):this.raw.slice(0,6),i.rlphash(e)},t.prototype.getChainId=function(){return this._common.chainId()},t.prototype.getSenderAddress=function(){if(this._from)return this._from;var t=this.getSenderPublicKey();return this._from=i.publicToAddress(t),this._from},t.prototype.getSenderPublicKey=function(){if(!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},t.prototype.verifySignature=function(){var t=this.hash(!1);if(this._common.gteHardfork("homestead")&&1===new i.BN(this.s).cmp(s))return!1;try{var e=i.bufferToInt(this.v),r=e>=2*this.getChainId()+35&&this._common.gteHardfork("spuriousDragon");this._senderPubKey=i.ecrecover(t,e,this.r,this.s,r?this.getChainId():void 0)}catch(n){return!1}return!!this._senderPubKey},t.prototype.sign=function(t){this.v=new a.Buffer([]),this.s=new a.Buffer([]),this.r=new a.Buffer([]);var e=this.hash(!1),r=i.ecsign(e,t);this._implementsEIP155()&&(r.v+=2*this.getChainId()+8),Object.assign(this,r)},t.prototype.getDataFee=function(){for(var t=this.raw[5],e=new i.BN(0),r=0;r<t.length;r++)0===t[r]?e.iaddn(this._common.param("gasPrices","txDataZero")):e.iaddn(this._common.param("gasPrices","txDataNonZero"));return e},t.prototype.getBaseFee=function(){var t=this.getDataFee().iaddn(this._common.param("gasPrices","tx"));return this._common.gteHardfork("homestead")&&this.toCreationAddress()&&t.iaddn(this._common.param("gasPrices","txCreation")),t},t.prototype.getUpfrontCost=function(){return new i.BN(this.gasLimit).imul(new i.BN(this.gasPrice)).iadd(new i.BN(this.value))},t.prototype.validate=function(t){void 0===t&&(t=!1);var e=[];return this.verifySignature()||e.push("Invalid Signature"),this.getBaseFee().cmp(new i.BN(this.gasLimit))>0&&e.push(["gas limit is too low. Need at least "+this.getBaseFee()]),!1===t?0===e.length:e.join(" ")},t.prototype.serialize=function(){return i.rlp.encode(this.raw)},t.prototype.toJSON=function(t){return void 0===t&&(t=!1),{}},t.prototype._validateV=function(t){if(void 0!==t&&0!==t.length&&this._common.gteHardfork("spuriousDragon")){var e=i.bufferToInt(t);if(27!==e&&28!==e)if(!(e===2*this.getChainId()+35||e===2*this.getChainId()+36))throw new Error("Incompatible EIP155-based V "+e+" and chain id "+this.getChainId()+". See the second parameter of the Transaction constructor to set the chain id.")}},t.prototype._isSigned=function(){return this.v.length>0&&this.r.length>0&&this.s.length>0},t.prototype._overrideVSetterWithValidation=function(){var t=this,e=Object.getOwnPropertyDescriptor(this,"v");Object.defineProperty(this,"v",n({},e,{set:function(r){void 0!==r&&t._validateV(i.toBuffer(r)),e.set(r)}}))},t.prototype._implementsEIP155=function(){var t=this._common.gteHardfork("spuriousDragon");if(!this._isSigned())return t;var e=i.bufferToInt(this.v);return(e===2*this.getChainId()+35||e===2*this.getChainId()+36)&&t},t}();e.default=f},3336:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3283);e.Transaction=n.default;var i=r(3337);e.FakeTransaction=i.default},3337:function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=r(3264),o=r(1),a=function(t){function e(e,r){void 0===e&&(e={}),void 0===r&&(r={});var n=t.call(this,e,r)||this;Object.defineProperty(n,"from",{enumerable:!0,configurable:!0,get:function(){return n.getSenderAddress()},set:function(t){t&&(n._from=i.toBuffer(t))}});var o=e;return o.from&&(n.from=i.toBuffer(o.from)),n}return n(e,t),e.prototype.hash=function(e){if(void 0===e&&(e=!0),e&&this._from&&""!==this._from.toString("hex")){var r=o.Buffer.concat([this._from,this._from.slice(0,12)]);this.sign(r)}return t.prototype.hash.call(this,e)},e}(r(3283).default);e.default=a}}]);
//# sourceMappingURL=16.c0b2aa25.chunk.js.map