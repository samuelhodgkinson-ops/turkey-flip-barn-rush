var Lo=Object.defineProperty;var Po=(i,e,t)=>e in i?Lo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Q=(i,e,t)=>Po(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tr="160",Do=0,_r=1,Uo=2,Xa=1,Io=2,sn=3,xn=0,At=1,Nt=2,gn=0,ei=1,vr=2,xr=3,Mr=4,No=5,Rn=100,Fo=101,Oo=102,Sr=103,Er=104,Bo=200,zo=201,Go=202,Ho=203,qs=204,Ys=205,ko=206,Vo=207,Wo=208,Xo=209,qo=210,Yo=211,Ko=212,$o=213,jo=214,Zo=0,Jo=1,Qo=2,ji=3,el=4,tl=5,nl=6,il=7,nr=0,sl=1,rl=2,_n=0,al=1,ol=2,ll=3,cl=4,hl=5,ul=6,qa=300,ni=301,ii=302,Ks=303,$s=304,ss=306,mi=1e3,Vt=1001,js=1002,yt=1003,yr=1004,us=1005,Ut=1006,dl=1007,gi=1008,vn=1009,fl=1010,pl=1011,ir=1012,Ya=1013,pn=1014,mn=1015,_i=1016,Ka=1017,$a=1018,Ln=1020,ml=1021,Wt=1023,gl=1024,_l=1025,Pn=1026,si=1027,vl=1028,ja=1029,xl=1030,Za=1031,Ja=1033,ds=33776,fs=33777,ps=33778,ms=33779,br=35840,Tr=35841,Ar=35842,wr=35843,Qa=36196,Rr=37492,Cr=37496,Lr=37808,Pr=37809,Dr=37810,Ur=37811,Ir=37812,Nr=37813,Fr=37814,Or=37815,Br=37816,zr=37817,Gr=37818,Hr=37819,kr=37820,Vr=37821,gs=36492,Wr=36494,Xr=36495,Ml=36283,qr=36284,Yr=36285,Kr=36286,eo=3e3,Dn=3001,Sl=3200,El=3201,to=0,yl=1,Ft="",pt="srgb",on="srgb-linear",sr="display-p3",rs="display-p3-linear",Zi="linear",Ze="srgb",Ji="rec709",Qi="p3",Nn=7680,$r=519,bl=512,Tl=513,Al=514,no=515,wl=516,Rl=517,Cl=518,Ll=519,jr=35044,Zr="300 es",Zs=1035,an=2e3,es=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,Js=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function vs(i,e,t){return(1-t)*i+t*e}function Jr(i){return(i&i-1)===0&&i!==0}function Qs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],g=s[0],p=s[3],d=s[6],E=s[1],M=s[4],b=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*g+a*E+l*C,r[3]=o*p+a*M+l*A,r[6]=o*d+a*b+l*w,r[1]=c*g+h*E+u*C,r[4]=c*p+h*M+u*A,r[7]=c*d+h*b+u*w,r[2]=f*g+m*E+_*C,r[5]=f*p+m*M+_*A,r[8]=f*d+m*b+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=t*u+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Ge;function io(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dl(){const i=ts("canvas");return i.style.display="block",i}const Qr={};function pi(i){i in Qr||(Qr[i]=!0,console.warn(i))}const ea=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ta=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[on]:{transfer:Zi,primaries:Ji,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:Ze,primaries:Ji,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[rs]:{transfer:Zi,primaries:Qi,toReference:i=>i.applyMatrix3(ta),fromReference:i=>i.applyMatrix3(ea)},[sr]:{transfer:Ze,primaries:Qi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ta),fromReference:i=>i.applyMatrix3(ea).convertLinearToSRGB()}},Ul=new Set([on,rs]),Ye={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ul.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ai[e].toReference,s=Ai[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ai[i].primaries},getTransfer:function(i){return i===Ft?Zi:Ai[i].transfer}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fn;class so{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=ts("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Il=0;class ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ss(s[o].image)):r.push(Ss(s[o]))}else r=Ss(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nl=0;class wt extends ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Vt,s=Vt,r=Ut,o=gi,a=Wt,l=vn,c=wt.DEFAULT_ANISOTROPY,h=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=xi(),this.name="",this.source=new ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dn?pt:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mi:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mi:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Dn:eo}set encoding(e){pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?pt:Ft}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=qa;wt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(m+1)/2,C=(d+1)/2,A=(h+f)/4,w=(u+g)/4,G=(_+p)/4;return M>b&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=w/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=G/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=G/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-g)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?pt:Ft),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ao extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let p=1-a;const d=l*f+c*m+h*_+u*g,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,d*E);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const b=a*E;if(l=l*p+f*b,c=c*p+m*b,h=h*p+_*b,u=u*p+g*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*m-c*f,e[t+1]=l*_+h*f+c*u-a*m,e[t+2]=c*_+h*m+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Es.copy(this).projectOnVector(e),this.sub(Es)}reflect(e){return this.sub(Es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new P,na=new Mi;class Si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bt):Bt.fromBufferAttribute(r,o),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wi.copy(n.boundingBox)),wi.applyMatrix4(e.matrixWorld),this.union(wi)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Ri.subVectors(this.max,hi),On.subVectors(e.a,hi),Bn.subVectors(e.b,hi),zn.subVectors(e.c,hi),ln.subVectors(Bn,On),cn.subVectors(zn,Bn),En.subVectors(On,zn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-En.z,En.y,ln.z,0,-ln.x,cn.z,0,-cn.x,En.z,0,-En.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-En.y,En.x,0];return!ys(t,On,Bn,zn,Ri)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,On,Bn,zn,Ri))?!1:(Ci.crossVectors(ln,cn),t=[Ci.x,Ci.y,Ci.z],ys(t,On,Bn,zn,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new P,new P,new P,new P,new P,new P,new P,new P],Bt=new P,wi=new Si,On=new P,Bn=new P,zn=new P,ln=new P,cn=new P,En=new P,hi=new P,Ri=new P,Ci=new P,yn=new P;function ys(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yn.fromArray(i,r);const a=s.x*Math.abs(yn.x)+s.y*Math.abs(yn.y)+s.z*Math.abs(yn.z),l=e.dot(yn),c=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bl=new Si,ui=new P,bs=new P;class rr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ui,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(bs)),this.expandByPoint(ui.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new P,Ts=new P,Li=new P,hn=new P,As=new P,Pi=new P,ws=new P;class zl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ts.copy(e).add(t).multiplyScalar(.5),Li.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Ts);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Li),a=hn.dot(this.direction),l=-hn.dot(Li),c=hn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ts).addScaledVector(Li,f),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),s=Qt.dot(Qt)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,s,r){As.subVectors(t,e),Pi.subVectors(n,e),ws.crossVectors(As,Pi);let o=this.direction.dot(ws),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=a*this.direction.dot(Pi.crossVectors(hn,Pi));if(l<0)return null;const c=a*this.direction.dot(As.cross(hn));if(c<0||l+c>o)return null;const h=-a*hn.dot(ws);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,l,c,h,u,f,m,_,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,m,_,g,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gn.setFromMatrixColumn(e,0).length(),r=1/Gn.setFromMatrixColumn(e,1).length(),o=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,_=c*h,g=c*u;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,_=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gl,e,Hl)}lookAt(e,t,n){const s=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),un.crossVectors(n,Ct),un.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),un.crossVectors(n,Ct)),un.normalize(),Di.crossVectors(Ct,un),s[0]=un.x,s[4]=Di.x,s[8]=Ct.x,s[1]=un.y,s[5]=Di.y,s[9]=Ct.y,s[2]=un.z,s[6]=Di.z,s[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],E=n[3],M=n[7],b=n[11],C=n[15],A=s[0],w=s[4],G=s[8],x=s[12],T=s[1],z=s[5],H=s[9],ee=s[13],L=s[2],O=s[6],V=s[10],q=s[14],W=s[3],X=s[7],Y=s[11],te=s[15];return r[0]=o*A+a*T+l*L+c*W,r[4]=o*w+a*z+l*O+c*X,r[8]=o*G+a*H+l*V+c*Y,r[12]=o*x+a*ee+l*q+c*te,r[1]=h*A+u*T+f*L+m*W,r[5]=h*w+u*z+f*O+m*X,r[9]=h*G+u*H+f*V+m*Y,r[13]=h*x+u*ee+f*q+m*te,r[2]=_*A+g*T+p*L+d*W,r[6]=_*w+g*z+p*O+d*X,r[10]=_*G+g*H+p*V+d*Y,r[14]=_*x+g*ee+p*q+d*te,r[3]=E*A+M*T+b*L+C*W,r[7]=E*w+M*z+b*O+C*X,r[11]=E*G+M*H+b*V+C*Y,r[15]=E*x+M*ee+b*q+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],E=u*p*c-g*f*c+g*l*m-a*p*m-u*l*d+a*f*d,M=_*f*c-h*p*c-_*l*m+o*p*m+h*l*d-o*f*d,b=h*g*c-_*u*c+_*a*m-o*g*m-h*a*d+o*u*d,C=_*u*l-h*g*l-_*a*f+o*g*f+h*a*p-o*u*p,A=t*E+n*M+s*b+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(g*f*r-u*p*r-g*s*m+n*p*m+u*s*d-n*f*d)*w,e[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*d+n*l*d)*w,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*w,e[4]=M*w,e[5]=(h*p*r-_*f*r+_*s*m-t*p*m-h*s*d+t*f*d)*w,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*w,e[8]=b*w,e[9]=(_*u*r-h*g*r-_*n*m+t*g*m+h*n*d-t*u*d)*w,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*d+t*a*d)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*w,e[12]=C*w,e[13]=(h*g*s-_*u*s+_*n*f-t*g*f-h*n*p+t*u*p)*w,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*p-t*a*p)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,_=r*u,g=o*h,p=o*u,d=a*u,E=l*c,M=l*h,b=l*u,C=n.x,A=n.y,w=n.z;return s[0]=(1-(g+d))*C,s[1]=(m+b)*C,s[2]=(_-M)*C,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(f+d))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(_+M)*w,s[9]=(p-E)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gn.set(s[0],s[1],s[2]).length();const o=Gn.set(s[4],s[5],s[6]).length(),a=Gn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zt.copy(this);const c=1/r,h=1/o,u=1/a;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(a===an)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===es)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,m=(n+s)*h;let _,g;if(a===an)_=(o+r)*u,g=-2*u;else if(a===es)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gn=new P,zt=new at,Gl=new P(0,0,0),Hl=new P(1,1,1),un=new P,Di=new P,Ct=new P,ia=new at,sa=new Mi;class Ei{constructor(e=0,t=0,n=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sa.setFromEuler(this),this.setFromQuaternion(sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kl=0;const ra=new P,Hn=new Mi,en=new at,Ui=new P,di=new P,Vl=new P,Wl=new Mi,aa=new P(1,0,0),oa=new P(0,1,0),la=new P(0,0,1),Xl={type:"added"},ql={type:"removed"};class mt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new Ei,n=new Mi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(aa,e)}rotateY(e){return this.rotateOnAxis(oa,e)}rotateZ(e){return this.rotateOnAxis(la,e)}translateOnAxis(e,t){return ra.copy(e).applyQuaternion(this.quaternion),this.position.add(ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(aa,e)}translateY(e){return this.translateOnAxis(oa,e)}translateZ(e){return this.translateOnAxis(la,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ui.copy(e):Ui.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(di,Ui,this.up):en.lookAt(Ui,di,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Hn.setFromRotationMatrix(en),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,Vl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new P,tn=new P,Rs=new P,nn=new P,kn=new P,Vn=new P,ca=new P,Cs=new P,Ls=new P,Ps=new P;let Ii=!1;class Ht{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),tn.subVectors(n,t),Rs.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(tn),l=Gt.dot(Rs),c=tn.dot(tn),h=tn.dot(Rs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),tn.subVectors(e,t),Gt.cross(tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Gt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;kn.subVectors(s,n),Vn.subVectors(r,n),Cs.subVectors(e,n);const l=kn.dot(Cs),c=Vn.dot(Cs);if(l<=0&&c<=0)return t.copy(n);Ls.subVectors(e,s);const h=kn.dot(Ls),u=Vn.dot(Ls);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(kn,o);Ps.subVectors(e,r);const m=kn.dot(Ps),_=Vn.dot(Ps);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Vn,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return ca.subVectors(r,s),a=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(ca,a);const d=1/(p+g+f);return o=g*d,a=f*d,t.copy(n).addScaledVector(kn,o).addScaledVector(Vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Pl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ds(o,r,e+1/3),this.g=Ds(o,r,e),this.b=Ds(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Ye.fromWorkingColorSpace(vt.copy(this),e),Math.round(Tt(vt.r*255,0,255))*65536+Math.round(Tt(vt.g*255,0,255))*256+Math.round(Tt(vt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,s=vt.g,r=vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=pt){Ye.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,s=vt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Ni);const n=vs(dn.h,Ni.h,t),s=vs(dn.s,Ni.s,t),r=vs(dn.l,Ni.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new ke;ke.NAMES=lo;let Yl=0;class yi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ei,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$r,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$r&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kt extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new P,Fi=new fe;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),e}}class co extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ho extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kl=0;const Dt=new at,Us=new mt,Wn=new P,Lt=new Si,fi=new Si,ut=new P;class Ot extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(io(e)?ho:co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Us.lookAt(e),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Lt.min,fi.min),Lt.expandByPoint(ut),ut.addVectors(Lt.max,fi.max),Lt.expandByPoint(ut)):(Lt.expandByPoint(fi.min),Lt.expandByPoint(fi.max))}Lt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ut.fromBufferAttribute(a,c),l&&(Wn.fromBufferAttribute(e,c),ut.add(Wn)),s=Math.max(s,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new P,h[T]=new P;const u=new P,f=new P,m=new P,_=new fe,g=new fe,p=new fe,d=new P,E=new P;function M(T,z,H){u.fromArray(s,T*3),f.fromArray(s,z*3),m.fromArray(s,H*3),_.fromArray(o,T*2),g.fromArray(o,z*2),p.fromArray(o,H*2),f.sub(u),m.sub(u),g.sub(_),p.sub(_);const ee=1/(g.x*p.y-p.x*g.y);isFinite(ee)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ee),E.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(ee),c[T].add(d),c[z].add(d),c[H].add(d),h[T].add(E),h[z].add(E),h[H].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,z=b.length;T<z;++T){const H=b[T],ee=H.start,L=H.count;for(let O=ee,V=ee+L;O<V;O+=3)M(n[O+0],n[O+1],n[O+2])}const C=new P,A=new P,w=new P,G=new P;function x(T){w.fromArray(r,T*3),G.copy(w);const z=c[T];C.copy(z),C.sub(w.multiplyScalar(w.dot(z))).normalize(),A.crossVectors(G,z);const ee=A.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=ee}for(let T=0,z=b.length;T<z;++T){const H=b[T],ee=H.start,L=H.count;for(let O=ee,V=ee+L;O<V;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new at,bn=new zl,Oi=new rr,ua=new P,Xn=new P,qn=new P,Yn=new P,Is=new P,Bi=new P,zi=new fe,Gi=new fe,Hi=new fe,da=new P,fa=new P,pa=new P,ki=new P,Vi=new P;class le extends mt{constructor(e=new Ot,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Bi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Is.fromBufferAttribute(u,e),o?Bi.addScaledVector(Is,h):Bi.addScaledVector(Is.sub(t),h))}t.add(Bi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),bn.copy(e.ray).recast(e.near),!(Oi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Oi,ua)===null||bn.origin.distanceToSquared(ua)>(e.far-e.near)**2))&&(ha.copy(r).invert(),bn.copy(e.ray).applyMatrix4(ha),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=M;b<C;b+=3){const A=a.getX(b),w=a.getX(b+1),G=a.getX(b+2);s=Wi(this,d,e,n,c,h,u,A,w,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);s=Wi(this,o,e,n,c,h,u,E,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=M;b<C;b+=3){const A=b,w=b+1,G=b+2;s=Wi(this,d,e,n,c,h,u,A,w,G),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=p,M=p+1,b=p+2;s=Wi(this,o,e,n,c,h,u,E,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function $l(i,e,t,n,s,r,o,a){let l;if(e.side===At?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xn,a),l===null)return null;Vi.copy(a),Vi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vi);return c<t.near||c>t.far?null:{distance:c,point:Vi.clone(),object:i}}function Wi(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xn),i.getVertexPosition(l,qn),i.getVertexPosition(c,Yn);const h=$l(i,e,t,n,Xn,qn,Yn,ki);if(h){s&&(zi.fromBufferAttribute(s,a),Gi.fromBufferAttribute(s,l),Hi.fromBufferAttribute(s,c),h.uv=Ht.getInterpolation(ki,Xn,qn,Yn,zi,Gi,Hi,new fe)),r&&(zi.fromBufferAttribute(r,a),Gi.fromBufferAttribute(r,l),Hi.fromBufferAttribute(r,c),h.uv1=Ht.getInterpolation(ki,Xn,qn,Yn,zi,Gi,Hi,new fe),h.uv2=h.uv1),o&&(da.fromBufferAttribute(o,a),fa.fromBufferAttribute(o,l),pa.fromBufferAttribute(o,c),h.normal=Ht.getInterpolation(ki,Xn,qn,Yn,da,fa,pa,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Ht.getNormal(Xn,qn,Yn,u.normal),h.face=u}return h}class Je extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function _(g,p,d,E,M,b,C,A,w,G,x){const T=b/w,z=C/G,H=b/2,ee=C/2,L=A/2,O=w+1,V=G+1;let q=0,W=0;const X=new P;for(let Y=0;Y<V;Y++){const te=Y*z-ee;for(let ne=0;ne<O;ne++){const k=ne*T-H;X[g]=k*E,X[p]=te*M,X[d]=L,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[d]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(ne/w),u.push(1-Y/G),q+=1}}for(let Y=0;Y<G;Y++)for(let te=0;te<w;te++){const ne=f+te+O*Y,k=f+te+O*(Y+1),K=f+(te+1)+O*(Y+1),ce=f+(te+1)+O*Y;l.push(ne,k,ce),l.push(k,K,ce),W+=6}a.addGroup(m,W,x),m+=W,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=ri(i[t]);for(const s in n)e[s]=n[s]}return e}function jl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uo(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Zl={clone:ri,merge:Et};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fo extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,$n=1;class ec extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new It(Kn,$n,e,t);s.layers=this.layers,this.add(s);const r=new It(Kn,$n,e,t);r.layers=this.layers,this.add(r);const o=new It(Kn,$n,e,t);o.layers=this.layers,this.add(o);const a=new It(Kn,$n,e,t);a.layers=this.layers,this.add(a);const l=new It(Kn,$n,e,t);l.layers=this.layers,this.add(l);const c=new It(Kn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class po extends wt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ni,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?pt:Ft),this.texture=new po(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:gn});r.uniforms.tEquirect.value=t;const o=new le(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Ut),new ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ns=new P,nc=new P,ic=new Ge;class An{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ns.subVectors(n,t).cross(nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ns),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ic.getNormalMatrix(e),s=this.coplanarPoint(Ns).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new rr,Xi=new P;class ar{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],E=s[13],M=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-m,b-d).normalize(),n[1].setComponents(l+r,f+c,p+m,b+d).normalize(),n[2].setComponents(l+o,f+h,p+_,b+E).normalize(),n[3].setComponents(l-o,f-h,p-_,b-E).normalize(),n[4].setComponents(l-a,f-u,p-g,b-M).normalize(),t===an)n[5].setComponents(l+a,f+u,p+g,b+M).normalize();else if(t===es)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xi.x=s.normal.x>0?e.max.x:e.min.x,Xi.y=s.normal.y>0?e.max.y:e.min.y,Xi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mo(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,h){const u=c.array,f=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const f=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class rn extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<h;d++){const E=d*f-o;for(let M=0;M<c;M++){const b=M*u-r;_.push(b,-E,0),g.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,b=E+c*(d+1),C=E+1+c*(d+1),A=E+1+c*d;m.push(M,b,A),m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ac=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$c=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Su=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Au=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:rc,alphahash_pars_fragment:ac,alphamap_fragment:oc,alphamap_pars_fragment:lc,alphatest_fragment:cc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,batching_pars_vertex:fc,batching_vertex:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:_c,iridescence_fragment:vc,bumpmap_pars_fragment:xc,clipping_planes_fragment:Mc,clipping_planes_pars_fragment:Sc,clipping_planes_pars_vertex:Ec,clipping_planes_vertex:yc,color_fragment:bc,color_pars_fragment:Tc,color_pars_vertex:Ac,color_vertex:wc,common:Rc,cube_uv_reflection_fragment:Cc,defaultnormal_vertex:Lc,displacementmap_pars_vertex:Pc,displacementmap_vertex:Dc,emissivemap_fragment:Uc,emissivemap_pars_fragment:Ic,colorspace_fragment:Nc,colorspace_pars_fragment:Fc,envmap_fragment:Oc,envmap_common_pars_fragment:Bc,envmap_pars_fragment:zc,envmap_pars_vertex:Gc,envmap_physical_pars_fragment:Jc,envmap_vertex:Hc,fog_vertex:kc,fog_pars_vertex:Vc,fog_fragment:Wc,fog_pars_fragment:Xc,gradientmap_pars_fragment:qc,lightmap_fragment:Yc,lightmap_pars_fragment:Kc,lights_lambert_fragment:$c,lights_lambert_pars_fragment:jc,lights_pars_begin:Zc,lights_toon_fragment:Qc,lights_toon_pars_fragment:eh,lights_phong_fragment:th,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:sh,lights_fragment_begin:rh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:ch,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:uh,map_fragment:dh,map_pars_fragment:fh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:_h,morphcolor_vertex:vh,morphnormal_vertex:xh,morphtarget_pars_vertex:Mh,morphtarget_vertex:Sh,normal_fragment_begin:Eh,normal_fragment_maps:yh,normal_pars_fragment:bh,normal_pars_vertex:Th,normal_vertex:Ah,normalmap_pars_fragment:wh,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Uh,premultiplied_alpha_fragment:Ih,project_vertex:Nh,dithering_fragment:Fh,dithering_pars_fragment:Oh,roughnessmap_fragment:Bh,roughnessmap_pars_fragment:zh,shadowmap_pars_fragment:Gh,shadowmap_pars_vertex:Hh,shadowmap_vertex:kh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:Kh,specularmap_pars_fragment:$h,tonemapping_fragment:jh,tonemapping_pars_fragment:Zh,transmission_fragment:Jh,transmission_pars_fragment:Qh,uv_pars_fragment:eu,uv_pars_vertex:tu,uv_vertex:nu,worldpos_vertex:iu,background_vert:su,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:ou,cube_vert:lu,cube_frag:cu,depth_vert:hu,depth_frag:uu,distanceRGBA_vert:du,distanceRGBA_frag:fu,equirect_vert:pu,equirect_frag:mu,linedashed_vert:gu,linedashed_frag:_u,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:Mu,meshlambert_frag:Su,meshmatcap_vert:Eu,meshmatcap_frag:yu,meshnormal_vert:bu,meshnormal_frag:Tu,meshphong_vert:Au,meshphong_frag:wu,meshphysical_vert:Ru,meshphysical_frag:Cu,meshtoon_vert:Lu,meshtoon_frag:Pu,points_vert:Du,points_frag:Uu,shadow_vert:Iu,shadow_frag:Nu,sprite_vert:Fu,sprite_frag:Ou},se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kt={basic:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Et([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Et([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Et([se.points,se.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Et([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Et([se.common,se.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Et([se.sprite,se.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Et([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Et([se.lights,se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Kt.physical={uniforms:Et([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const qi={r:0,b:0,g:0};function Bu(i,e,t,n,s,r,o){const a=new ke(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(p,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ss)?(h===void 0&&(h=new le(new Je(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ri(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(M.colorSpace)!==Ze,(u!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new le(new rn(2,2),new In({name:"BackgroundMaterial",uniforms:ri(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==Ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(qi,uo(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function zu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(L,O,V,q,W){let X=!1;if(o){const Y=g(q,V,O);c!==Y&&(c=Y,m(c.object)),X=d(L,q,V,W),X&&E(L,q,V,W)}else{const Y=O.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=V.id,c.wireframe=Y,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,G(L,O,V,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,O,V){const q=V.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let Y=X[q];return Y===void 0&&(Y=p(f()),X[q]=Y),Y}function p(L){const O=[],V=[],q=[];for(let W=0;W<s;W++)O[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,O,V,q){const W=c.attributes,X=O.attributes;let Y=0;const te=V.getAttributes();for(const ne in te)if(te[ne].location>=0){const K=W[ne];let ce=X[ne];if(ce===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function E(L,O,V,q){const W={},X=O.attributes;let Y=0;const te=V.getAttributes();for(const ne in te)if(te[ne].location>=0){let K=X[ne];K===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),W[ne]=ce,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function M(){const L=c.newAttributes;for(let O=0,V=L.length;O<V;O++)L[O]=0}function b(L){C(L,0)}function C(L,O){const V=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;V[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),W[L]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),W[L]=O)}function A(){const L=c.newAttributes,O=c.enabledAttributes;for(let V=0,q=O.length;V<q;V++)O[V]!==L[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function w(L,O,V,q,W,X,Y){Y===!0?i.vertexAttribIPointer(L,O,V,W,X):i.vertexAttribPointer(L,O,V,q,W,X)}function G(L,O,V,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=q.attributes,X=V.getAttributes(),Y=O.defaultAttributeValues;for(const te in X){const ne=X[te];if(ne.location>=0){let k=W[te];if(k===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const K=k.normalized,ce=k.itemSize,ve=t.get(k);if(ve===void 0)continue;const _e=ve.buffer,Le=ve.type,De=ve.bytesPerElement,be=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||k.gpuType===Ya);if(k.isInterleavedBufferAttribute){const Ve=k.data,U=Ve.stride,xt=k.offset;if(Ve.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)C(ne.location+Me,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Me=0;Me<ne.locationSize;Me++)b(ne.location+Me);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Me=0;Me<ne.locationSize;Me++)w(ne.location+Me,ce/ne.locationSize,Le,K,U*De,(xt+ce/ne.locationSize*Me)*De,be)}else{if(k.isInstancedBufferAttribute){for(let Ve=0;Ve<ne.locationSize;Ve++)C(ne.location+Ve,k.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ve=0;Ve<ne.locationSize;Ve++)b(ne.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ve=0;Ve<ne.locationSize;Ve++)w(ne.location+Ve,ce/ne.locationSize,Le,K,ce*De,ce/ne.locationSize*Ve*De,be)}}else if(Y!==void 0){const K=Y[te];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(ne.location,K);break;case 3:i.vertexAttrib3fv(ne.location,K);break;case 4:i.vertexAttrib4fv(ne.location,K);break;default:i.vertexAttrib1fv(ne.location,K)}}}}A()}function x(){H();for(const L in a){const O=a[L];for(const V in O){const q=O[V];for(const W in q)_(q[W].object),delete q[W];delete O[V]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const V in O){const q=O[V];for(const W in q)_(q[W].object),delete q[W];delete O[V]}delete a[L.id]}function z(L){for(const O in a){const V=a[O];if(V[L.id]===void 0)continue;const q=V[L.id];for(const W in q)_(q[W].object),delete q[W];delete V[L.id]}}function H(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:ee,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function Gu(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Hu(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,b=o||e.has("OES_texture_float"),C=M&&b,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:A}}function ku(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new An,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,M=E*4;let b=d.clippingState||null;l.value=b,b=h(_,f,M,m);for(let C=0;C!==M;++C)b[C]=t[C];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,b=m;M!==g;++M,b+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Vu(i){let e=new WeakMap;function t(o,a){return a===Ks?o.mapping=ni:a===$s&&(o.mapping=ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ks||a===$s)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class go extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jn=4,ma=[.125,.215,.35,.446,.526,.582],Cn=20,Fs=new go,ga=new ke;let Os=null,Bs=0,zs=0;const wn=(1+Math.sqrt(5))/2,jn=1/wn,_a=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,wn,jn),new P(0,wn,-jn),new P(jn,0,wn),new P(-jn,0,wn),new P(wn,jn,0),new P(-wn,jn,0)];class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Bs,zs),e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:_i,format:Wt,colorSpace:on,depthBuffer:!1},s=xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wu(r)),this._blurMaterial=Xu(r,e,t)}return s}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,s){const a=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ga),h.toneMapping=_n,h.autoClear=!1;const m=new kt({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new le(new Je,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(ga),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Yi(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ni||e.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_a[(s-1)%_a.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Cn;p>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const d=[];let E=0;for(let w=0;w<Cn;++w){const G=w/g,x=Math.exp(-G*G/2);d.push(x),w===0?E+=x:w<p&&(E+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const b=this._sizeLods[s],C=3*b*(s>M-Jn?s-M+Jn:0),A=4*(this._cubeSize-b);Yi(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(u,Fs)}}function Wu(i){const e=[],t=[],n=[];let s=i;const r=i-Jn+1+ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Jn?l=ma[o-i+Jn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,d=1,E=new Float32Array(g*_*m),M=new Float32Array(p*_*m),b=new Float32Array(d*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,G=A>2?0:-1,x=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];E.set(x,g*_*A),M.set(f,p*_*A);const T=[A,A,A,A,A,A];b.set(T,d*_*A)}const C=new Ot;C.setAttribute("position",new jt(E,g)),C.setAttribute("uv",new jt(M,p)),C.setAttribute("faceIndex",new jt(b,d)),e.push(C),s>Jn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xa(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xu(i,e,t){const n=new Float32Array(Cn),s=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ma(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Sa(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ks||l===$s,h=l===ni||l===ii;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new va(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new va(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ku(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let M=0,b=E.length;M<b;M+=3){const C=E[M+0],A=E[M+1],w=E[M+2];f.push(C,A,A,w,w,C)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,b=E.length/3-1;M<b;M+=3){const C=M+0,A=M+1,w=M+2;f.push(C,A,A,w,w,C)}}else return;const p=new(io(f)?ho:co)(f,1);p.version=g;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $u(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,a,m*l),t.update(_,r,1)}function u(m,_,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let d=0;for(let E=0;E<g;E++)d+=_[E];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function ju(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zu(i,e){return i[0]-e[0]}function Ju(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Qu(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let O=function(){ee.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),b===!0&&(x=2),C===!0&&(x=3);let T=h.attributes.position.count*x,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*z*4*g),ee=new ao(H,T,z,g);ee.type=mn,ee.needsUpdate=!0;const L=x*4;for(let V=0;V<g;V++){const q=A[V],W=w[V],X=G[V],Y=T*z*4*V;for(let te=0;te<q.count;te++){const ne=te*L;M===!0&&(o.fromBufferAttribute(q,te),H[Y+ne+0]=o.x,H[Y+ne+1]=o.y,H[Y+ne+2]=o.z,H[Y+ne+3]=0),b===!0&&(o.fromBufferAttribute(W,te),H[Y+ne+4]=o.x,H[Y+ne+5]=o.y,H[Y+ne+6]=o.z,H[Y+ne+7]=0),C===!0&&(o.fromBufferAttribute(X,te),H[Y+ne+8]=o.x,H[Y+ne+9]=o.y,H[Y+ne+10]=o.z,H[Y+ne+11]=X.itemSize===4?o.w:1)}}p={count:g,texture:ee,size:new fe(T,z)},r.set(h,p),h.addEventListener("dispose",O)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<_;b++){const C=g[b];C[0]=b,C[1]=f[b]}g.sort(Ju);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Zu);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const C=a[b],A=C[0],w=C[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+b)!==p[A]&&h.setAttribute("morphTarget"+b,p[A]),d&&h.getAttribute("morphNormal"+b)!==d[A]&&h.setAttribute("morphNormal"+b,d[A]),s[b]=w,E+=w):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),d&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}const M=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ed(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _o extends wt{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=pn),n===void 0&&h===si&&(n=Ln),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vo=new wt,xo=new _o(1,1);xo.compareFunction=no;const Mo=new ao,So=new Ol,Eo=new po,Ea=[],ya=[],ba=new Float32Array(16),Ta=new Float32Array(9),Aa=new Float32Array(4);function oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ea[s];if(r===void 0&&(r=new Float32Array(s),Ea[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function as(i,e){let t=ya[e];t===void 0&&(t=new Int32Array(e),ya[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function td(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function rd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Aa.set(n),i.uniformMatrix2fv(this.addr,!1,Aa),lt(t,n)}}function ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ta.set(n),i.uniformMatrix3fv(this.addr,!1,Ta),lt(t,n)}}function od(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;ba.set(n),i.uniformMatrix4fv(this.addr,!1,ba),lt(t,n)}}function ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function dd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function gd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?xo:vo;t.setTexture2D(e||r,s)}function _d(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||So,s)}function vd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Eo,s)}function xd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mo,s)}function Md(i){switch(i){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return xd}}function Sd(i,e){i.uniform1fv(this.addr,e)}function Ed(i,e){const t=oi(e,this.size,2);i.uniform2fv(this.addr,t)}function yd(i,e){const t=oi(e,this.size,3);i.uniform3fv(this.addr,t)}function bd(i,e){const t=oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Td(i,e){const t=oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ad(i,e){const t=oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wd(i,e){const t=oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rd(i,e){i.uniform1iv(this.addr,e)}function Cd(i,e){i.uniform2iv(this.addr,e)}function Ld(i,e){i.uniform3iv(this.addr,e)}function Pd(i,e){i.uniform4iv(this.addr,e)}function Dd(i,e){i.uniform1uiv(this.addr,e)}function Ud(i,e){i.uniform2uiv(this.addr,e)}function Id(i,e){i.uniform3uiv(this.addr,e)}function Nd(i,e){i.uniform4uiv(this.addr,e)}function Fd(i,e,t){const n=this.cache,s=e.length,r=as(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vo,r[o])}function Od(i,e,t){const n=this.cache,s=e.length,r=as(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||So,r[o])}function Bd(i,e,t){const n=this.cache,s=e.length,r=as(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Eo,r[o])}function zd(i,e,t){const n=this.cache,s=e.length,r=as(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mo,r[o])}function Gd(i){switch(i){case 5126:return Sd;case 35664:return Ed;case 35665:return yd;case 35666:return bd;case 35674:return Td;case 35675:return Ad;case 35676:return wd;case 5124:case 35670:return Rd;case 35667:case 35671:return Cd;case 35668:case 35672:return Ld;case 35669:case 35673:return Pd;case 5125:return Dd;case 36294:return Ud;case 36295:return Id;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Od;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return zd}}class Hd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Md(t.type)}}class kd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gd(t.type)}}class Vd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function wa(i,e){i.seq.push(e),i.map[e.id]=e}function Wd(i,e,t){const n=i.name,s=n.length;for(Gs.lastIndex=0;;){const r=Gs.exec(n),o=Gs.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wa(t,c===void 0?new Hd(a,i,e):new kd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Vd(a),wa(t,u)),t=u}}}class $i{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Wd(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ra(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xd=37297;let qd=0;function Yd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Kd(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===Qi&&t===Ji?n="LinearDisplayP3ToLinearSRGB":e===Ji&&t===Qi&&(n="LinearSRGBToLinearDisplayP3"),i){case on:case rs:return[n,"LinearTransferOETF"];case pt:case sr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ca(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yd(i.getShaderSource(e),o)}else return s}function $d(i,e){const t=Kd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jd(i,e){let t;switch(e){case al:t="Linear";break;case ol:t="Reinhard";break;case ll:t="OptimizedCineon";break;case cl:t="ACESFilmic";break;case ul:t="AgX";break;case hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qn).join(`
`)}function Jd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qn).join(`
`)}function Qd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ef(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qn(i){return i!==""}function La(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tf=/^[ \t]*#include +<([\w\d./]+)>/gm;function er(i){return i.replace(tf,sf)}const nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(i,e){let t=Ie[e];if(t===void 0){const n=nf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return er(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(rf,af)}function af(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ua(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function of(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function lf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:e="ENVMAP_MODE_REFRACTION";break}return e}function hf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nr:e="ENVMAP_BLENDING_MULTIPLY";break;case sl:e="ENVMAP_BLENDING_MIX";break;case rl:e="ENVMAP_BLENDING_ADD";break}return e}function uf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function df(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=of(t),c=lf(t),h=cf(t),u=hf(t),f=uf(t),m=t.isWebGL2?"":Zd(t),_=Jd(t),g=Qd(r),p=s.createProgram();let d,E,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qn).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qn).join(`
`),E.length>0&&(E+=`
`)):(d=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),E=[m,Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ie.tonemapping_pars_fragment:"",t.toneMapping!==_n?jd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,$d("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qn).join(`
`)),o=er(o),o=La(o,t),o=Pa(o,t),a=er(a),a=La(a,t),a=Pa(a,t),o=Da(o),a=Da(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=M+d+o,C=M+E+a,A=Ra(s,s.VERTEX_SHADER,b),w=Ra(s,s.FRAGMENT_SHADER,C);s.attachShader(p,A),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function G(H){if(i.debug.checkShaderErrors){const ee=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(w).trim();let V=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,w);else{const W=Ca(s,A,"vertex"),X=Ca(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+W+`
`+X)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:V,programLog:ee,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:E}})}s.deleteShader(A),s.deleteShader(w),x=new $i(s,p),T=ef(s,p)}let x;this.getUniforms=function(){return x===void 0&&G(this),x};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,Xd)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}}class mf{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}}function gf(i,e,t,n,s,r,o){const a=new oo,l=new pf,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,T,z,H,ee){const L=H.fog,O=ee.geometry,V=x.isMeshStandardMaterial?H.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),W=q&&q.mapping===ss?q.image.height:null,X=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=Y!==void 0?Y.length:0;let ne=0;O.morphAttributes.position!==void 0&&(ne=1),O.morphAttributes.normal!==void 0&&(ne=2),O.morphAttributes.color!==void 0&&(ne=3);let k,K,ce,ve;if(X){const Mt=Kt[X];k=Mt.vertexShader,K=Mt.fragmentShader}else k=x.vertexShader,K=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);const _e=i.getRenderTarget(),Le=ee.isInstancedMesh===!0,De=ee.isBatchedMesh===!0,be=!!x.map,Ve=!!x.matcap,U=!!q,xt=!!x.aoMap,Me=!!x.lightMap,Re=!!x.bumpMap,pe=!!x.normalMap,Qe=!!x.displacementMap,Ne=!!x.emissiveMap,y=!!x.metalnessMap,v=!!x.roughnessMap,N=x.anisotropy>0,Z=x.clearcoat>0,j=x.iridescence>0,J=x.sheen>0,me=x.transmission>0,oe=N&&!!x.anisotropyMap,ue=Z&&!!x.clearcoatMap,ye=Z&&!!x.clearcoatNormalMap,Fe=Z&&!!x.clearcoatRoughnessMap,$=j&&!!x.iridescenceMap,Xe=j&&!!x.iridescenceThicknessMap,He=J&&!!x.sheenColorMap,we=J&&!!x.sheenRoughnessMap,xe=!!x.specularMap,de=!!x.specularColorMap,Ue=!!x.specularIntensityMap,We=me&&!!x.transmissionMap,tt=me&&!!x.thicknessMap,Be=!!x.gradientMap,ie=!!x.alphaMap,R=x.alphaTest>0,re=!!x.alphaHash,ae=!!x.extensions,Te=!!O.attributes.uv1,Se=!!O.attributes.uv2,Ke=!!O.attributes.uv3;let $e=_n;return x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:k,fragmentShader:K,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:De,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:on,map:be,matcap:Ve,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Me,bumpMap:Re,normalMap:pe,displacementMap:f&&Qe,emissiveMap:Ne,normalMapObjectSpace:pe&&x.normalMapType===yl,normalMapTangentSpace:pe&&x.normalMapType===to,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:oe,clearcoat:Z,clearcoatMap:ue,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,iridescence:j,iridescenceMap:$,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:He,sheenRoughnessMap:we,specularMap:xe,specularColorMap:de,specularIntensityMap:Ue,transmission:me,transmissionMap:We,thicknessMap:tt,gradientMap:Be,opaque:x.transparent===!1&&x.blending===ei,alphaMap:ie,alphaTest:R,alphaHash:re,combine:x.combine,mapUv:be&&g(x.map.channel),aoMapUv:xt&&g(x.aoMap.channel),lightMapUv:Me&&g(x.lightMap.channel),bumpMapUv:Re&&g(x.bumpMap.channel),normalMapUv:pe&&g(x.normalMap.channel),displacementMapUv:Qe&&g(x.displacementMap.channel),emissiveMapUv:Ne&&g(x.emissiveMap.channel),metalnessMapUv:y&&g(x.metalnessMap.channel),roughnessMapUv:v&&g(x.roughnessMap.channel),anisotropyMapUv:oe&&g(x.anisotropyMap.channel),clearcoatMapUv:ue&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:Ue&&g(x.specularIntensityMap.channel),transmissionMapUv:We&&g(x.transmissionMap.channel),thicknessMapUv:tt&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pe||N),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:Ke,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(be||ie),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nt,flipSided:x.side===At,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)T.push(z),T.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(E(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function E(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function b(x){const T=_[x.type];let z;if(T){const H=Kt[T];z=Zl.clone(H.uniforms)}else z=x.uniforms;return z}function C(x,T){let z;for(let H=0,ee=c.length;H<ee;H++){const L=c[H];if(L.cacheKey===T){z=L,++z.usedTimes;break}}return z===void 0&&(z=new df(i,T,x,r),c.push(z)),z}function A(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:G}}function _f(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function vf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ia(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Na(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,_,g,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=p),e++,d}function a(u,f,m,_,g,p){const d=o(u,f,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,_,g,p){const d=o(u,f,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||vf),n.length>1&&n.sort(f||Ia),s.length>1&&s.sort(f||Ia)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function xf(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Na,i.set(n,[o])):s>=r.length?(o=new Na,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Sf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ef=0;function yf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bf(i,e){const t=new Mf,n=Sf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);const r=new P,o=new at,a=new at;function l(h,u){let f=0,m=0,_=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let g=0,p=0,d=0,E=0,M=0,b=0,C=0,A=0,w=0,G=0,x=0;h.sort(yf);const T=u===!0?Math.PI:1;for(let H=0,ee=h.length;H<ee;H++){const L=h[H],O=L.color,V=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*V*T,m+=O.g*V*T,_+=O.b*V*T;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],V);x++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const Y=L.shadow,te=n.get(L);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,s.directionalShadow[g]=te,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=L.shadow.matrix,b++}s.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(V*T),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[d]=X;const Y=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&G++),s.spotLightMatrix[d]=Y.matrix,L.castShadow){const te=n.get(L);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,s.spotShadow[d]=te,s.spotShadowMap[d]=W,A++}d++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=X,E++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,te=n.get(L);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=L.shadow.matrix,C++}s.point[p]=X,p++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*T),X.groundColor.copy(L.groundColor).multiplyScalar(V*T),s.hemi[M]=X,M++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const z=s.hash;(z.directionalLength!==g||z.pointLength!==p||z.spotLength!==d||z.rectAreaLength!==E||z.hemiLength!==M||z.numDirectionalShadows!==b||z.numPointShadows!==C||z.numSpotShadows!==A||z.numSpotMaps!==w||z.numLightProbes!==x)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=E,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+w-G,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=x,z.directionalLength=g,z.pointLength=p,z.spotLength=d,z.rectAreaLength=E,z.hemiLength=M,z.numDirectionalShadows=b,z.numPointShadows=C,z.numSpotShadows=A,z.numSpotMaps=w,z.numLightProbes=x,s.version=Ef++)}function c(h,u){let f=0,m=0,_=0,g=0,p=0;const d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const b=h[E];if(b.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(b.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),_++}else if(b.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Fa(i,e){const t=new bf(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tf(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Fa(i,e),t.set(r,[l])):o>=a.length?(l=new Fa(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Af extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wf extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lf(i,e,t){let n=new ar;const s=new fe,r=new fe,o=new dt,a=new Af({depthPacking:El}),l=new wf,c={},h=t.maxTextureSize,u={[xn]:At,[At]:xn,[Nt]:Nt},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Rf,fragmentShader:Cf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ot;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new le(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let d=this.type;this.render=function(A,w,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),H=i.state;H.setBlending(gn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ee=d!==sn&&this.type===sn,L=d===sn&&this.type!==sn;for(let O=0,V=A.length;O<V;O++){const q=A[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const X=W.getFrameExtents();if(s.multiply(X),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||ee===!0||L===!0){const te=this.type!==sn?{minFilter:yt,magFilter:yt}:{};W.map!==null&&W.map.dispose(),W.map=new Un(s.x,s.y,te),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Y=W.getViewportCount();for(let te=0;te<Y;te++){const ne=W.getViewport(te);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),H.viewport(o),W.updateMatrices(q,te),n=W.getFrustum(),b(w,G,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===sn&&E(W,G),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(x,T,z)};function E(A,w){const G=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,G,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,G,m,g,null)}function M(A,w,G,x){let T=null;const z=G.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)T=z;else if(T=G.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=T.uuid,ee=w.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let O=L[ee];O===void 0&&(O=T.clone(),L[ee]=O,w.addEventListener("dispose",C)),T=O}if(T.visible=w.visible,T.wireframe=w.wireframe,x===sn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=i.properties.get(T);H.light=G}return T}function b(A,w,G,x,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),L=A.material;if(Array.isArray(L)){const O=ee.groups;for(let V=0,q=O.length;V<q;V++){const W=O[V],X=L[W.materialIndex];if(X&&X.visible){const Y=M(A,X,x,T);A.onBeforeShadow(i,A,w,G,ee,Y,W),i.renderBufferDirect(G,null,ee,Y,A,W),A.onAfterShadow(i,A,w,G,ee,Y,W)}}}else if(L.visible){const O=M(A,L,x,T);A.onBeforeShadow(i,A,w,G,ee,O,null),i.renderBufferDirect(G,null,ee,O,A,null),A.onAfterShadow(i,A,w,G,ee,O,null)}}const H=A.children;for(let ee=0,L=H.length;ee<L;ee++)b(H[ee],w,G,x,T)}function C(A){A.target.removeEventListener("dispose",C);for(const G in c){const x=c[G],T=A.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function Pf(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const re=new dt;let ae=null;const Te=new dt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!R&&(i.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){R=Se},setClear:function(Se,Ke,$e,ct,Mt){Mt===!0&&(Se*=ct,Ke*=ct,$e*=ct),re.set(Se,Ke,$e,ct),Te.equals(re)===!1&&(i.clearColor(Se,Ke,$e,ct),Te.copy(re))},reset:function(){R=!1,ae=null,Te.set(-1,0,0,0)}}}function r(){let R=!1,re=null,ae=null,Te=null;return{setTest:function(Se){Se?De(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Se){re!==Se&&!R&&(i.depthMask(Se),re=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Se}},setLocked:function(Se){R=Se},setClear:function(Se){Te!==Se&&(i.clearDepth(Se),Te=Se)},reset:function(){R=!1,re=null,ae=null,Te=null}}}function o(){let R=!1,re=null,ae=null,Te=null,Se=null,Ke=null,$e=null,ct=null,Mt=null;return{setTest:function(je){R||(je?De(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(je){re!==je&&!R&&(i.stencilMask(je),re=je)},setFunc:function(je,St,qt){(ae!==je||Te!==St||Se!==qt)&&(i.stencilFunc(je,St,qt),ae=je,Te=St,Se=qt)},setOp:function(je,St,qt){(Ke!==je||$e!==St||ct!==qt)&&(i.stencilOp(je,St,qt),Ke=je,$e=St,ct=qt)},setLocked:function(je){R=je},setClear:function(je){Mt!==je&&(i.clearStencil(je),Mt=je)},reset:function(){R=!1,re=null,ae=null,Te=null,Se=null,Ke=null,$e=null,ct=null,Mt=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,E=null,M=null,b=null,C=null,A=null,w=null,G=null,x=new ke(0,0,0),T=0,z=!1,H=null,ee=null,L=null,O=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let te=null,ne={};const k=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ce=new dt().fromArray(k),ve=new dt().fromArray(K);function _e(R,re,ae,Te){const Se=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(R,Ke),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ae;$e++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(re+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Ke}const Le={};Le[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(ji),Ne(!1),y(_r),De(i.CULL_FACE),pe(gn);function De(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function be(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Ve(R,re){return m[R]!==re?(i.bindFramebuffer(R,re),m[R]=re,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function U(R,re){let ae=g,Te=!1;if(R)if(ae=_.get(re),ae===void 0&&(ae=[],_.set(re,ae)),R.isWebGLMultipleRenderTargets){const Se=R.texture;if(ae.length!==Se.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,$e=Se.length;Ke<$e;Ke++)ae[Ke]=i.COLOR_ATTACHMENT0+Ke;ae.length=Se.length,Te=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function xt(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const Me={[Rn]:i.FUNC_ADD,[Fo]:i.FUNC_SUBTRACT,[Oo]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[Sr]=i.MIN,Me[Er]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Me[Sr]=R.MIN_EXT,Me[Er]=R.MAX_EXT)}const Re={[Bo]:i.ZERO,[zo]:i.ONE,[Go]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[qo]:i.SRC_ALPHA_SATURATE,[Wo]:i.DST_COLOR,[ko]:i.DST_ALPHA,[Ho]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Xo]:i.ONE_MINUS_DST_COLOR,[Vo]:i.ONE_MINUS_DST_ALPHA,[Yo]:i.CONSTANT_COLOR,[Ko]:i.ONE_MINUS_CONSTANT_COLOR,[$o]:i.CONSTANT_ALPHA,[jo]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(R,re,ae,Te,Se,Ke,$e,ct,Mt,je){if(R===gn){d===!0&&(be(i.BLEND),d=!1);return}if(d===!1&&(De(i.BLEND),d=!0),R!==No){if(R!==E||je!==z){if((M!==Rn||A!==Rn)&&(i.blendEquation(i.FUNC_ADD),M=Rn,A=Rn),je)switch(R){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case xr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,C=null,w=null,G=null,x.set(0,0,0),T=0,E=R,z=je}return}Se=Se||re,Ke=Ke||ae,$e=$e||Te,(re!==M||Se!==A)&&(i.blendEquationSeparate(Me[re],Me[Se]),M=re,A=Se),(ae!==b||Te!==C||Ke!==w||$e!==G)&&(i.blendFuncSeparate(Re[ae],Re[Te],Re[Ke],Re[$e]),b=ae,C=Te,w=Ke,G=$e),(ct.equals(x)===!1||Mt!==T)&&(i.blendColor(ct.r,ct.g,ct.b,Mt),x.copy(ct),T=Mt),E=R,z=!1}function Qe(R,re){R.side===Nt?be(i.CULL_FACE):De(i.CULL_FACE);let ae=R.side===At;re&&(ae=!ae),Ne(ae),R.blending===ei&&R.transparent===!1?pe(gn):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){H!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),H=R)}function y(R){R!==Do?(De(i.CULL_FACE),R!==ee&&(R===_r?i.cullFace(i.BACK):R===Uo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),ee=R}function v(R){R!==L&&(W&&i.lineWidth(R),L=R)}function N(R,re,ae){R?(De(i.POLYGON_OFFSET_FILL),(O!==re||V!==ae)&&(i.polygonOffset(re,ae),O=re,V=ae)):be(i.POLYGON_OFFSET_FILL)}function Z(R){R?De(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function j(R){R===void 0&&(R=i.TEXTURE0+q-1),te!==R&&(i.activeTexture(R),te=R)}function J(R,re,ae){ae===void 0&&(te===null?ae=i.TEXTURE0+q-1:ae=te);let Te=ne[ae];Te===void 0&&(Te={type:void 0,texture:void 0},ne[ae]=Te),(Te.type!==R||Te.texture!==re)&&(te!==ae&&(i.activeTexture(ae),te=ae),i.bindTexture(R,re||Le[R]),Te.type=R,Te.texture=re)}function me(){const R=ne[te];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(R){ce.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function We(R){ve.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ve.copy(R))}function tt(R,re){let ae=u.get(re);ae===void 0&&(ae=new WeakMap,u.set(re,ae));let Te=ae.get(R);Te===void 0&&(Te=i.getUniformBlockIndex(re,R.name),ae.set(R,Te))}function Be(R,re){const Te=u.get(re).get(R);h.get(re)!==Te&&(i.uniformBlockBinding(re,Te,R.__bindingPointIndex),h.set(re,Te))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,ne={},m={},_=new WeakMap,g=[],p=null,d=!1,E=null,M=null,b=null,C=null,A=null,w=null,G=null,x=new ke(0,0,0),T=0,z=!1,H=null,ee=null,L=null,O=null,V=null,ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:be,bindFramebuffer:Ve,drawBuffers:U,useProgram:xt,setBlending:pe,setMaterial:Qe,setFlipSided:Ne,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:Z,activeTexture:j,bindTexture:J,unbindTexture:me,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:xe,texImage3D:de,updateUBOMapping:tt,uniformBlockBinding:Be,texStorage2D:He,texStorage3D:we,texSubImage2D:ye,texSubImage3D:Fe,compressedTexSubImage2D:$,compressedTexSubImage3D:Xe,scissor:Ue,viewport:We,reset:ie}}function Df(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):ts("canvas")}function g(y,v,N,Z){let j=1;if((y.width>Z||y.height>Z)&&(j=Z/Math.max(y.width,y.height)),j<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=v?Qs:Math.floor,me=J(j*y.width),oe=J(j*y.height);u===void 0&&(u=_(me,oe));const ue=N?_(me,oe):u;return ue.width=me,ue.height=oe,ue.getContext("2d").drawImage(y,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+me+"x"+oe+")."),ue}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Jr(y.width)&&Jr(y.height)}function d(y){return a?!1:y.wrapS!==Vt||y.wrapT!==Vt||y.minFilter!==yt&&y.minFilter!==Ut}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==yt&&y.minFilter!==Ut}function M(y){i.generateMipmap(y)}function b(y,v,N,Z,j=!1){if(a===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=v;if(v===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),v===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){const me=j?Zi:Ye.getTransfer(Z);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=me===Ze?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==yt&&y.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function A(y){return y===yt||y===yr||y===us?i.NEAREST:i.LINEAR}function w(y){const v=y.target;v.removeEventListener("dispose",w),x(v),v.isVideoTexture&&h.delete(v)}function G(y){const v=y.target;v.removeEventListener("dispose",G),z(v)}function x(y){const v=n.get(y);if(v.__webglInit===void 0)return;const N=y.source,Z=f.get(N);if(Z){const j=Z[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(y),Object.keys(Z).length===0&&f.delete(N)}n.remove(y)}function T(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const N=y.source,Z=f.get(N);delete Z[v.__cacheKey],o.memory.textures--}function z(y){const v=y.texture,N=n.get(y),Z=n.get(v);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(N.__webglFramebuffer[j]))for(let J=0;J<N.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(N.__webglFramebuffer[j][J]);else i.deleteFramebuffer(N.__webglFramebuffer[j]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[j])}else{if(Array.isArray(N.__webglFramebuffer))for(let j=0;j<N.__webglFramebuffer.length;j++)i.deleteFramebuffer(N.__webglFramebuffer[j]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let j=0;j<N.__webglColorRenderbuffer.length;j++)N.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[j]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let j=0,J=v.length;j<J;j++){const me=n.get(v[j]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(v[j])}n.remove(v),n.remove(y)}let H=0;function ee(){H=0}function L(){const y=H;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),H+=1,y}function O(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function V(y,v){const N=n.get(y);if(y.isVideoTexture&&Qe(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,y,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function q(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ce(N,y,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function W(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ce(N,y,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function X(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ve(N,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const Y={[mi]:i.REPEAT,[Vt]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},te={[yt]:i.NEAREST,[yr]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},ne={[bl]:i.NEVER,[Ll]:i.ALWAYS,[Tl]:i.LESS,[no]:i.LEQUAL,[Al]:i.EQUAL,[Cl]:i.GEQUAL,[wl]:i.GREATER,[Rl]:i.NOTEQUAL};function k(y,v,N){if(N?(i.texParameteri(y,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Y[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,te[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,te[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Vt||v.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,A(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==yt&&v.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===yt||v.minFilter!==us&&v.minFilter!==gi||v.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const J=O(v);if(J!==y.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[J].usedTimes++;const me=j[y.__cacheKey];me!==void 0&&(j[y.__cacheKey].usedTimes--,me.usedTimes===0&&T(v)),y.__cacheKey=J,y.__webglTexture=j[J].texture}return N}function ce(y,v,N){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const j=K(y,v),J=v.source;t.bindTexture(Z,y.__webglTexture,i.TEXTURE0+N);const me=n.get(J);if(J.version!==me.__version||j===!0){t.activeTexture(i.TEXTURE0+N);const oe=Ye.getPrimaries(Ye.workingColorSpace),ue=v.colorSpace===Ft?null:Ye.getPrimaries(v.colorSpace),ye=v.colorSpace===Ft||oe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Fe=d(v)&&p(v.image)===!1;let $=g(v.image,Fe,!1,s.maxTextureSize);$=Ne(v,$);const Xe=p($)||a,He=r.convert(v.format,v.colorSpace);let we=r.convert(v.type),xe=b(v.internalFormat,He,we,v.colorSpace,v.isVideoTexture);k(Z,v,Xe);let de;const Ue=v.mipmaps,We=a&&v.isVideoTexture!==!0&&xe!==Qa,tt=me.__version===void 0||j===!0,Be=C(v,$,Xe);if(v.isDepthTexture)xe=i.DEPTH_COMPONENT,a?v.type===mn?xe=i.DEPTH_COMPONENT32F:v.type===pn?xe=i.DEPTH_COMPONENT24:v.type===Ln?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:v.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pn&&xe===i.DEPTH_COMPONENT&&v.type!==ir&&v.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=pn,we=r.convert(v.type)),v.format===si&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,v.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ln,we=r.convert(v.type))),tt&&(We?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,He,we,null));else if(v.isDataTexture)if(Ue.length>0&&Xe){We&&tt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],We?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,we,de.data):t.texImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,He,we,de.data);v.generateMipmaps=!1}else We?(tt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,He,we,$.data)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,He,we,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,xe,Ue[0].width,Ue[0].height,$.depth);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==Wt?He!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,He,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,He,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,He,we,de.data)}else{We&&tt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==Wt?He!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,we,de.data):t.texImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,He,we,de.data)}else if(v.isDataArrayTexture)We?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,He,we,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,He,we,$.data);else if(v.isData3DTexture)We?(tt&&t.texStorage3D(i.TEXTURE_3D,Be,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,He,we,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,He,we,$.data);else if(v.isFramebufferTexture){if(tt)if(We)t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height);else{let ie=$.width,R=$.height;for(let re=0;re<Be;re++)t.texImage2D(i.TEXTURE_2D,re,xe,ie,R,0,He,we,null),ie>>=1,R>>=1}}else if(Ue.length>0&&Xe){We&&tt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],We?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,He,we,de):t.texImage2D(i.TEXTURE_2D,ie,xe,He,we,de);v.generateMipmaps=!1}else We?(tt&&t.texStorage2D(i.TEXTURE_2D,Be,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,we,$)):t.texImage2D(i.TEXTURE_2D,0,xe,He,we,$);E(v,Xe)&&M(Z),me.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ve(y,v,N){if(v.image.length!==6)return;const Z=K(y,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const J=n.get(j);if(j.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const me=Ye.getPrimaries(Ye.workingColorSpace),oe=v.colorSpace===Ft?null:Ye.getPrimaries(v.colorSpace),ue=v.colorSpace===Ft||me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,$=[];for(let ie=0;ie<6;ie++)!ye&&!Fe?$[ie]=g(v.image[ie],!1,!0,s.maxCubemapSize):$[ie]=Fe?v.image[ie].image:v.image[ie],$[ie]=Ne(v,$[ie]);const Xe=$[0],He=p(Xe)||a,we=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),de=b(v.internalFormat,we,xe,v.colorSpace),Ue=a&&v.isVideoTexture!==!0,We=J.__version===void 0||Z===!0;let tt=C(v,Xe,He);k(i.TEXTURE_CUBE_MAP,v,He);let Be;if(ye){Ue&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){Be=$[ie].mipmaps;for(let R=0;R<Be.length;R++){const re=Be[R];v.format!==Wt?we!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,we,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,we,xe,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,we,xe,re.data)}}}else{Be=v.mipmaps,Ue&&We&&(Be.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,$[0].width,$[0].height));for(let ie=0;ie<6;ie++)if(Fe){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,$[ie].width,$[ie].height,we,xe,$[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,$[ie].width,$[ie].height,0,we,xe,$[ie].data);for(let R=0;R<Be.length;R++){const ae=Be[R].image[ie].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,ae.width,ae.height,we,xe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,ae.width,ae.height,0,we,xe,ae.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,xe,$[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,we,xe,$[ie]);for(let R=0;R<Be.length;R++){const re=Be[R];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,we,xe,re.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,we,xe,re.image[ie])}}}E(v,He)&&M(i.TEXTURE_CUBE_MAP),J.__version=j.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _e(y,v,N,Z,j,J){const me=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),ue=b(N.internalFormat,me,oe,N.colorSpace);if(!n.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>J),$=Math.max(1,v.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,J,ue,Fe,$,v.depth,0,me,oe,null):t.texImage2D(j,J,ue,Fe,$,0,me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(N).__webglTexture,0,Re(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(N).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(y,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let Z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||pe(v)){const j=v.depthTexture;j&&j.isDepthTexture&&(j.type===mn?Z=i.DEPTH_COMPONENT32F:j.type===pn&&(Z=i.DEPTH_COMPONENT24));const J=Re(v);pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const Z=Re(v);N&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let j=0;j<Z.length;j++){const J=Z[j],me=r.convert(J.format,J.colorSpace),oe=r.convert(J.type),ue=b(J.internalFormat,me,oe,J.colorSpace),ye=Re(v);N&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ue,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ue,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ue,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,j=Re(v);if(v.depthTexture.format===Pn)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===si)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(y){const v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Le(v.__webglDepthbuffer[Z],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Le(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(y,v,N){const Z=n.get(y);v!==void 0&&_e(Z.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&be(y)}function U(y){const v=y.texture,N=n.get(y),Z=n.get(v);y.addEventListener("dispose",G),y.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++);const j=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,me=p(y)||a;if(j){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)N.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const oe=y.texture;for(let ue=0,ye=oe.length;ue<ye;ue++){const Fe=n.get(oe[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&pe(y)===!1){const oe=J?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const ye=oe[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Fe=r.convert(ye.format,ye.colorSpace),$=r.convert(ye.type),Xe=b(ye.internalFormat,Fe,$,ye.colorSpace,y.isXRRenderTarget===!0),He=Re(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Xe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),k(i.TEXTURE_CUBE_MAP,v,me);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(N.__webglFramebuffer[oe][ue],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else _e(N.__webglFramebuffer[oe],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);E(v,me)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const oe=y.texture;for(let ue=0,ye=oe.length;ue<ye;ue++){const Fe=oe[ue],$=n.get(Fe);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),k(i.TEXTURE_2D,Fe,me),_e(N.__webglFramebuffer,y,Fe,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),E(Fe,me)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?oe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Z.__webglTexture),k(oe,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(N.__webglFramebuffer[ue],y,v,i.COLOR_ATTACHMENT0,oe,ue);else _e(N.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,oe,0);E(v,me)&&M(oe),t.unbindTexture()}y.depthBuffer&&be(y)}function xt(y){const v=p(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0,j=N.length;Z<j;Z++){const J=N[Z];if(E(J,v)){const me=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(J).__webglTexture;t.bindTexture(me,oe),M(me),t.unbindTexture()}}}function Me(y){if(a&&y.samples>0&&pe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,Z=y.height;let j=i.COLOR_BUFFER_BIT;const J=[],me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(y),ue=y.isWebGLMultipleRenderTargets===!0;if(ue)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){J.push(i.COLOR_ATTACHMENT0+ye),y.depthBuffer&&J.push(me);const Fe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Fe===!1&&(y.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),ue){const $=n.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ye]);const Fe=n.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(y){return Math.min(s.maxSamples,y.samples)}function pe(y){const v=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Ne(y,v){const N=y.colorSpace,Z=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Zs||N!==on&&N!==Ft&&(Ye.getTransfer(N)===Ze?a===!1?e.has("EXT_sRGB")===!0&&Z===Wt?(y.format=Zs,y.minFilter=Ut,y.generateMipmaps=!1):v=so.sRGBToLinear(v):(Z!==Wt||j!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=U,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function Uf(i,e,t){const n=t.isWebGL2;function s(r,o=Ft){let a;const l=Ye.getTransfer(o);if(r===vn)return i.UNSIGNED_BYTE;if(r===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(r===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(r===fl)return i.BYTE;if(r===pl)return i.SHORT;if(r===ir)return i.UNSIGNED_SHORT;if(r===Ya)return i.INT;if(r===pn)return i.UNSIGNED_INT;if(r===mn)return i.FLOAT;if(r===_i)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ml)return i.ALPHA;if(r===Wt)return i.RGBA;if(r===gl)return i.LUMINANCE;if(r===_l)return i.LUMINANCE_ALPHA;if(r===Pn)return i.DEPTH_COMPONENT;if(r===si)return i.DEPTH_STENCIL;if(r===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vl)return i.RED;if(r===ja)return i.RED_INTEGER;if(r===xl)return i.RG;if(r===Za)return i.RG_INTEGER;if(r===Ja)return i.RGBA_INTEGER;if(r===ds||r===fs||r===ps||r===ms)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ms)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===br||r===Tr||r===Ar||r===wr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ar)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qa)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rr||r===Cr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rr)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lr||r===Pr||r===Dr||r===Ur||r===Ir||r===Nr||r===Fr||r===Or||r===Br||r===zr||r===Gr||r===Hr||r===kr||r===Vr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Lr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ur)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ir)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Or)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Br)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vr)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gs||r===Wr||r===Xr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===gs)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ml||r===qr||r===Yr||r===Kr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===gs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ln?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class If extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $t extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ff extends ai{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const E=[],M=[],b=new fe;let C=null;const A=new It;A.layers.enable(1),A.viewport=new dt;const w=new It;w.layers.enable(2),w.viewport=new dt;const G=[A,w],x=new If;x.layers.enable(1),x.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getGripSpace()},this.getHand=function(k){let K=E[k];return K===void 0&&(K=new Hs,E[k]=K),K.getHandSpace()};function H(k){const K=M.indexOf(k.inputSource);if(K===-1)return;const ce=E[K];ce!==void 0&&(ce.update(k.inputSource,k.frame,c||o),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",L);for(let k=0;k<E.length;k++){const K=M[k];K!==null&&(M[k]=null,E[k].disconnect(K))}T=null,z=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Un(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?si:Pn,ce=g.stencil?Ln:pn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Un(f.textureWidth,f.textureHeight,{format:Wt,type:vn,depthTexture:new _o(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(k){for(let K=0;K<k.removed.length;K++){const ce=k.removed[K],ve=M.indexOf(ce);ve>=0&&(M[ve]=null,E[ve].disconnect(ce))}for(let K=0;K<k.added.length;K++){const ce=k.added[K];let ve=M.indexOf(ce);if(ve===-1){for(let Le=0;Le<E.length;Le++)if(Le>=M.length){M.push(ce),ve=Le;break}else if(M[Le]===null){M[Le]=ce,ve=Le;break}if(ve===-1)break}const _e=E[ve];_e&&_e.connect(ce)}}const O=new P,V=new P;function q(k,K,ce){O.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const ve=O.distanceTo(V),_e=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,De=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),Ve=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],xt=(_e[8]-1)/_e[0],Me=(Le[8]+1)/Le[0],Re=De*xt,pe=De*Me,Qe=ve/(-xt+Me),Ne=Qe*-xt;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ne),k.translateZ(Qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const y=De+Qe,v=be+Qe,N=Re-Ne,Z=pe+(ve-Ne),j=Ve*be/v*y,J=U*be/v*y;k.projectionMatrix.makePerspective(N,Z,j,J,y,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;x.near=w.near=A.near=k.near,x.far=w.far=A.far=k.far,(T!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,z=x.far);const K=k.parent,ce=x.cameras;W(x,K);for(let ve=0;ve<ce.length;ve++)W(ce[ve],K);ce.length===2?q(x,A,w):x.projectionMatrix.copy(A.projectionMatrix),X(k,x,K)};function X(k,K,ce){ce===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Js*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Y=null;function te(k,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ve=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let _e=0;_e<ce.length;_e++){const Le=ce[_e];let De=null;if(m!==null)De=m.getViewport(Le);else{const Ve=u.getViewSubImage(f,Le);De=Ve.viewport,_e===0&&(e.setRenderTargetTextures(d,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(d))}let be=G[_e];be===void 0&&(be=new It,be.layers.enable(_e),be.viewport=new dt,G[_e]=be),be.matrix.fromArray(Le.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Le.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(be)}}for(let ce=0;ce<E.length;ce++){const ve=M[ce],_e=E[ce];ve!==null&&_e!==void 0&&_e.update(ve,K,c||o)}Y&&Y(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const ne=new mo;ne.setAnimationLoop(te),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function Of(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,uo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,M,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===At&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===At&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bf(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const b=M.program;n.uniformBlockBinding(E,b)}function c(E,M){let b=s[E.id];b===void 0&&(_(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(E,C);const A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const M=u();E.__bindingPointIndex=M;const b=i.createBuffer(),C=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],b=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,w=b.length;A<w;A++){const G=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,T=G.length;x<T;x++){const z=G[x];if(m(z,A,x,C)===!0){const H=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let O=0;O<ee.length;O++){const V=ee[O],q=g(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+L,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,b,C){const A=E.value,w=M+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const G=C[w];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return C[w]=A,!0}else if(G.equals(A)===!1)return G.copy(A),!0}return!1}function _(E){const M=E.uniforms;let b=0;const C=16;for(let w=0,G=M.length;w<G;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,z=x.length;T<z;T++){const H=x[T],ee=Array.isArray(H.value)?H.value:[H.value];for(let L=0,O=ee.length;L<O;L++){const V=ee[L],q=g(V),W=b%C;W!==0&&C-W<q.boundary&&(b+=C-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=q.storage}}}const A=b%C;return A>0&&(b+=C-A),E.__size=b,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class yo{constructor(e={}){const{canvas:t=Dl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const M=this;let b=!1,C=0,A=0,w=null,G=-1,x=null;const T=new dt,z=new dt;let H=null;const ee=new ke(0);let L=0,O=t.width,V=t.height,q=1,W=null,X=null;const Y=new dt(0,0,O,V),te=new dt(0,0,O,V);let ne=!1;const k=new ar;let K=!1,ce=!1,ve=null;const _e=new at,Le=new fe,De=new P,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?q:1}let U=n;function xt(S,D){for(let F=0;F<S.length;F++){const B=S[F],I=t.getContext(B,D);if(I!==null)return I}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&D.shift(),U=xt(D,S),U===null)throw xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,Re,pe,Qe,Ne,y,v,N,Z,j,J,me,oe,ue,ye,Fe,$,Xe,He,we,xe,de,Ue,We;function tt(){Me=new Yu(U),Re=new Hu(U,Me,e),Me.init(Re),de=new Uf(U,Me,Re),pe=new Pf(U,Me,Re),Qe=new ju(U),Ne=new _f,y=new Df(U,Me,pe,Ne,Re,de,Qe),v=new Vu(M),N=new qu(M),Z=new sc(U,Re),Ue=new zu(U,Me,Z,Re),j=new Ku(U,Z,Qe,Ue),J=new ed(U,j,Z,Qe),He=new Qu(U,Re,y),Fe=new ku(Ne),me=new gf(M,v,N,Me,Re,Ue,Fe),oe=new Of(M,Ne),ue=new xf,ye=new Tf(Me,Re),Xe=new Bu(M,v,N,pe,J,f,l),$=new Lf(M,J,Re),We=new Bf(U,Qe,Re,pe),we=new Gu(U,Me,Qe,Re),xe=new $u(U,Me,Qe,Re),Qe.programs=me.programs,M.capabilities=Re,M.extensions=Me,M.properties=Ne,M.renderLists=ue,M.shadowMap=$,M.state=pe,M.info=Qe}tt();const Be=new Ff(M,U);this.xr=Be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(O,V,!1))},this.getSize=function(S){return S.set(O,V)},this.setSize=function(S,D,F=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,V=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(O*q,V*q).floor()},this.setDrawingBufferSize=function(S,D,F){O=S,V=D,q=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,F,B){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,F,B),pe.viewport(T.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(te)},this.setScissor=function(S,D,F,B){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,D,F,B),pe.scissor(z.copy(te).multiplyScalar(q).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){pe.setScissorTest(ne=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(S=!0,D=!0,F=!0){let B=0;if(S){let I=!1;if(w!==null){const he=w.texture.format;I=he===Ja||he===Za||he===ja}if(I){const he=w.texture.type,ge=he===vn||he===pn||he===ir||he===Ln||he===Ka||he===$a,Ee=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Oe=Ee.r,Ce=Ee.g,Pe=Ee.b;ge?(m[0]=Oe,m[1]=Ce,m[2]=Pe,m[3]=Ae,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Oe,_[1]=Ce,_[2]=Pe,_[3]=Ae,U.clearBufferiv(U.COLOR,0,_))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),ye.dispose(),Ne.dispose(),v.dispose(),N.dispose(),J.dispose(),Ue.dispose(),We.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Mt),Be.removeEventListener("sessionend",je),ve&&(ve.dispose(),ve=null),St.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Qe.autoReset,D=$.enabled,F=$.autoUpdate,B=$.needsUpdate,I=$.type;tt(),Qe.autoReset=S,$.enabled=D,$.autoUpdate=F,$.needsUpdate=B,$.type=I}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){const D=S.target;D.removeEventListener("dispose",ae),Te(D)}function Te(S){Se(S),Ne.remove(S)}function Se(S){const D=Ne.get(S).programs;D!==void 0&&(D.forEach(function(F){me.releaseProgram(F)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,B,I,he){D===null&&(D=be);const ge=I.isMesh&&I.matrixWorld.determinant()<0,Ee=Ao(S,D,F,B,I);pe.setMaterial(B,ge);let Ae=F.index,Oe=1;if(B.wireframe===!0){if(Ae=j.getWireframeAttribute(F),Ae===void 0)return;Oe=2}const Ce=F.drawRange,Pe=F.attributes.position;let st=Ce.start*Oe,Rt=(Ce.start+Ce.count)*Oe;he!==null&&(st=Math.max(st,he.start*Oe),Rt=Math.min(Rt,(he.start+he.count)*Oe)),Ae!==null?(st=Math.max(st,0),Rt=Math.min(Rt,Ae.count)):Pe!=null&&(st=Math.max(st,0),Rt=Math.min(Rt,Pe.count));const ht=Rt-st;if(ht<0||ht===1/0)return;Ue.setup(I,B,Ee,F,Ae);let Zt,et=we;if(Ae!==null&&(Zt=Z.get(Ae),et=xe,et.setIndex(Zt)),I.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*Ve()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(I.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),pe.setLineWidth(ze*Ve()),I.isLineSegments?et.setMode(U.LINES):I.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else I.isPoints?et.setMode(U.POINTS):I.isSprite&&et.setMode(U.TRIANGLES);if(I.isBatchedMesh)et.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)et.renderInstances(st,ht,I.count);else if(F.isInstancedBufferGeometry){const ze=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,os=Math.min(F.instanceCount,ze);et.renderInstances(st,ht,os)}else et.render(st,ht)};function Ke(S,D,F){S.transparent===!0&&S.side===Nt&&S.forceSinglePass===!1?(S.side=At,S.needsUpdate=!0,Ti(S,D,F),S.side=xn,S.needsUpdate=!0,Ti(S,D,F),S.side=Nt):Ti(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),p=ye.get(F),p.init(),E.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(M._useLegacyLights);const B=new Set;return S.traverse(function(I){const he=I.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const Ee=he[ge];Ke(Ee,F,I),B.add(Ee)}else Ke(he,F,I),B.add(he)}),E.pop(),p=null,B},this.compileAsync=function(S,D,F=null){const B=this.compile(S,D,F);return new Promise(I=>{function he(){if(B.forEach(function(ge){Ne.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){I(S);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function ct(S){$e&&$e(S)}function Mt(){St.stop()}function je(){St.start()}const St=new mo;St.setAnimationLoop(ct),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){$e=S,Be.setAnimationLoop(S),S===null?St.stop():St.start()},Be.addEventListener("sessionstart",Mt),Be.addEventListener("sessionend",je),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(D),D=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,D,w),p=ye.get(S,E.length),p.init(),E.push(p),_e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ce),g=ue.get(S,d.length),g.init(),d.push(g),qt(S,D,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,K===!0&&Fe.beginShadows();const F=p.state.shadowsArray;if($.render(F,S,D),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(g,S),p.setupLights(M._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let I=0,he=B.length;I<he;I++){const ge=B[I];ur(g,S,ge,ge.viewport)}}else ur(g,S,D);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(M,S,D),Ue.resetDefaultState(),G=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function qt(S,D,F,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){B&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const ge=J.update(S),Ee=S.material;Ee.visible&&g.push(S,ge,Ee,F,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){const ge=J.update(S),Ee=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),De.copy(ge.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){const Ae=ge.groups;for(let Oe=0,Ce=Ae.length;Oe<Ce;Oe++){const Pe=Ae[Oe],st=Ee[Pe.materialIndex];st&&st.visible&&g.push(S,ge,st,F,De.z,Pe)}}else Ee.visible&&g.push(S,ge,Ee,F,De.z,null)}}const he=S.children;for(let ge=0,Ee=he.length;ge<Ee;ge++)qt(he[ge],D,F,B)}function ur(S,D,F,B){const I=S.opaque,he=S.transmissive,ge=S.transparent;p.setupLightsView(F),K===!0&&Fe.setGlobalState(M.clippingPlanes,F),he.length>0&&To(I,he,D,F),B&&pe.viewport(T.copy(B)),I.length>0&&bi(I,D,F),he.length>0&&bi(he,D,F),ge.length>0&&bi(ge,D,F),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function To(S,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const he=Re.isWebGL2;ve===null&&(ve=new Un(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?_i:vn,minFilter:gi,samples:he?4:0})),M.getDrawingBufferSize(Le),he?ve.setSize(Le.x,Le.y):ve.setSize(Qs(Le.x),Qs(Le.y));const ge=M.getRenderTarget();M.setRenderTarget(ve),M.getClearColor(ee),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Ee=M.toneMapping;M.toneMapping=_n,bi(S,F,B),y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve);let Ae=!1;for(let Oe=0,Ce=D.length;Oe<Ce;Oe++){const Pe=D[Oe],st=Pe.object,Rt=Pe.geometry,ht=Pe.material,Zt=Pe.group;if(ht.side===Nt&&st.layers.test(B.layers)){const et=ht.side;ht.side=At,ht.needsUpdate=!0,dr(st,F,B,Rt,ht,Zt),ht.side=et,ht.needsUpdate=!0,Ae=!0}}Ae===!0&&(y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve)),M.setRenderTarget(ge),M.setClearColor(ee,L),M.toneMapping=Ee}function bi(S,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let I=0,he=S.length;I<he;I++){const ge=S[I],Ee=ge.object,Ae=ge.geometry,Oe=B===null?ge.material:B,Ce=ge.group;Ee.layers.test(F.layers)&&dr(Ee,D,F,Ae,Oe,Ce)}}function dr(S,D,F,B,I,he){S.onBeforeRender(M,D,F,B,I,he),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(M,D,F,B,S,he),I.transparent===!0&&I.side===Nt&&I.forceSinglePass===!1?(I.side=At,I.needsUpdate=!0,M.renderBufferDirect(F,D,B,I,S,he),I.side=xn,I.needsUpdate=!0,M.renderBufferDirect(F,D,B,I,S,he),I.side=Nt):M.renderBufferDirect(F,D,B,I,S,he),S.onAfterRender(M,D,F,B,I,he)}function Ti(S,D,F){D.isScene!==!0&&(D=be);const B=Ne.get(S),I=p.state.lights,he=p.state.shadowsArray,ge=I.state.version,Ee=me.getParameters(S,I.state,he,D,F),Ae=me.getProgramCacheKey(Ee);let Oe=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||B.environment),Oe===void 0&&(S.addEventListener("dispose",ae),Oe=new Map,B.programs=Oe);let Ce=Oe.get(Ae);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ge)return pr(S,Ee),Ce}else Ee.uniforms=me.getUniforms(S),S.onBuild(F,Ee,M),S.onBeforeCompile(Ee,M),Ce=me.acquireProgram(Ee,Ae),Oe.set(Ae,Ce),B.uniforms=Ee.uniforms;const Pe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),pr(S,Ee),B.needsLights=Ro(S),B.lightsStateVersion=ge,B.needsLights&&(Pe.ambientLightColor.value=I.state.ambient,Pe.lightProbe.value=I.state.probe,Pe.directionalLights.value=I.state.directional,Pe.directionalLightShadows.value=I.state.directionalShadow,Pe.spotLights.value=I.state.spot,Pe.spotLightShadows.value=I.state.spotShadow,Pe.rectAreaLights.value=I.state.rectArea,Pe.ltc_1.value=I.state.rectAreaLTC1,Pe.ltc_2.value=I.state.rectAreaLTC2,Pe.pointLights.value=I.state.point,Pe.pointLightShadows.value=I.state.pointShadow,Pe.hemisphereLights.value=I.state.hemi,Pe.directionalShadowMap.value=I.state.directionalShadowMap,Pe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Pe.spotShadowMap.value=I.state.spotShadowMap,Pe.spotLightMatrix.value=I.state.spotLightMatrix,Pe.spotLightMap.value=I.state.spotLightMap,Pe.pointShadowMap.value=I.state.pointShadowMap,Pe.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function fr(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=$i.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function pr(S,D){const F=Ne.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Ao(S,D,F,B,I){D.isScene!==!0&&(D=be),y.resetTextureUnits();const he=D.fog,ge=B.isMeshStandardMaterial?D.environment:null,Ee=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:on,Ae=(B.isMeshStandardMaterial?N:v).get(B.envMap||ge),Oe=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!F.morphAttributes.position,st=!!F.morphAttributes.normal,Rt=!!F.morphAttributes.color;let ht=_n;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=M.toneMapping);const Zt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=Zt!==void 0?Zt.length:0,ze=Ne.get(B),os=p.state.lights;if(K===!0&&(ce===!0||S!==x)){const Pt=S===x&&B.id===G;Fe.setState(B,S,Pt)}let nt=!1;B.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==os.state.version||ze.outputColorSpace!==Ee||I.isBatchedMesh&&ze.batching===!1||!I.isBatchedMesh&&ze.batching===!0||I.isInstancedMesh&&ze.instancing===!1||!I.isInstancedMesh&&ze.instancing===!0||I.isSkinnedMesh&&ze.skinning===!1||!I.isSkinnedMesh&&ze.skinning===!0||I.isInstancedMesh&&ze.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ze.instancingColor===!1&&I.instanceColor!==null||ze.envMap!==Ae||B.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Ce||ze.morphTargets!==Pe||ze.morphNormals!==st||ze.morphColors!==Rt||ze.toneMapping!==ht||Re.isWebGL2===!0&&ze.morphTargetsCount!==et)&&(nt=!0):(nt=!0,ze.__version=B.version);let Mn=ze.currentProgram;nt===!0&&(Mn=Ti(B,D,I));let mr=!1,li=!1,ls=!1;const gt=Mn.getUniforms(),Sn=ze.uniforms;if(pe.useProgram(Mn.program)&&(mr=!0,li=!0,ls=!0),B.id!==G&&(G=B.id,li=!0),mr||x!==S){gt.setValue(U,"projectionMatrix",S.projectionMatrix),gt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Pt=gt.map.cameraPosition;Pt!==void 0&&Pt.setValue(U,De.setFromMatrixPosition(S.matrixWorld)),Re.logarithmicDepthBuffer&&gt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,li=!0,ls=!0)}if(I.isSkinnedMesh){gt.setOptional(U,I,"bindMatrix"),gt.setOptional(U,I,"bindMatrixInverse");const Pt=I.skeleton;Pt&&(Re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),gt.setValue(U,"boneTexture",Pt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(gt.setOptional(U,I,"batchingTexture"),gt.setValue(U,"batchingTexture",I._matricesTexture,y));const cs=F.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0&&Re.isWebGL2===!0)&&He.update(I,F,Mn),(li||ze.receiveShadow!==I.receiveShadow)&&(ze.receiveShadow=I.receiveShadow,gt.setValue(U,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Sn.envMap.value=Ae,Sn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),li&&(gt.setValue(U,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&wo(Sn,ls),he&&B.fog===!0&&oe.refreshFogUniforms(Sn,he),oe.refreshMaterialUniforms(Sn,B,q,V,ve),$i.upload(U,fr(ze),Sn,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($i.upload(U,fr(ze),Sn,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(U,"center",I.center),gt.setValue(U,"modelViewMatrix",I.modelViewMatrix),gt.setValue(U,"normalMatrix",I.normalMatrix),gt.setValue(U,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let hs=0,Co=Pt.length;hs<Co;hs++)if(Re.isWebGL2){const gr=Pt[hs];We.update(gr,Mn),We.bind(gr,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function wo(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Ro(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,F){Ne.get(S.texture).__webglTexture=D,Ne.get(S.depthTexture).__webglTexture=F;const B=Ne.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Ne.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){w=S,C=D,A=F;let B=!0,I=null,he=!1,ge=!1;if(S){const Ae=Ne.get(S);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?y.setupRenderTarget(S):Ae.__hasExternalTextures&&y.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Ce=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?I=Ce[D][F]:I=Ce[D],he=!0):Re.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?I=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[F]:I=Ce,T.copy(S.viewport),z.copy(S.scissor),H=S.scissorTest}else T.copy(Y).multiplyScalar(q).floor(),z.copy(te).multiplyScalar(q).floor(),H=ne;if(pe.bindFramebuffer(U.FRAMEBUFFER,I)&&Re.drawBuffers&&B&&pe.drawBuffers(S,I),pe.viewport(T),pe.scissor(z),pe.setScissorTest(H),he){const Ae=Ne.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,F)}else if(ge){const Ae=Ne.get(S.texture),Oe=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,Oe)}G=-1},this.readRenderTargetPixels=function(S,D,F,B,I,he,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){pe.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Ae=S.texture,Oe=Ae.format,Ce=Ae.type;if(Oe!==Wt&&de.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===_i&&(Me.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ce!==vn&&de.convert(Ce)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===mn&&(Re.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&F>=0&&F<=S.height-I&&U.readPixels(D,F,B,I,de.convert(Oe),de.convert(Ce),he)}finally{const Ae=w!==null?Ne.get(w).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,D,F=0){const B=Math.pow(2,-F),I=Math.floor(D.image.width*B),he=Math.floor(D.image.height*B);y.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,S.x,S.y,I,he),pe.unbindTexture()},this.copyTextureToTexture=function(S,D,F,B=0){const I=D.image.width,he=D.image.height,ge=de.convert(F.format),Ee=de.convert(F.type);y.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,I,he,ge,Ee,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,ge,Ee,D.image),B===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,B,I=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=S.max.x-S.min.x+1,ge=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Ae=de.convert(B.format),Oe=de.convert(B.type);let Ce;if(B.isData3DTexture)y.setTexture3D(B,0),Ce=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),Ce=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Pe=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rt=U.getParameter(U.UNPACK_SKIP_PIXELS),ht=U.getParameter(U.UNPACK_SKIP_ROWS),Zt=U.getParameter(U.UNPACK_SKIP_IMAGES),et=F.isCompressedTexture?F.mipmaps[I]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Ce,I,D.x,D.y,D.z,he,ge,Ee,Ae,Oe,et.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ce,I,D.x,D.y,D.z,he,ge,Ee,Ae,et.data)):U.texSubImage3D(Ce,I,D.x,D.y,D.z,he,ge,Ee,Ae,Oe,et),U.pixelStorei(U.UNPACK_ROW_LENGTH,Pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt),I===0&&B.generateMipmaps&&U.generateMipmap(Ce),pe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,pe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sr?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Dn:eo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?pt:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zf extends yo{}zf.prototype.isWebGL1Renderer=!0;class ns{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new ns(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gf extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Oa extends wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,h=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xt extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const g=[],p=n/2;let d=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(m,2));function E(){const b=new P,C=new P;let A=0;const w=(t-e)/n;for(let G=0;G<=r;G++){const x=[],T=G/r,z=T*(t-e)+e;for(let H=0;H<=s;H++){const ee=H/s,L=ee*l+a,O=Math.sin(L),V=Math.cos(L);C.x=z*O,C.y=-T*n+p,C.z=z*V,u.push(C.x,C.y,C.z),b.set(O,w,V).normalize(),f.push(b.x,b.y,b.z),m.push(ee,1-T),x.push(_++)}g.push(x)}for(let G=0;G<s;G++)for(let x=0;x<r;x++){const T=g[x][G],z=g[x+1][G],H=g[x+1][G+1],ee=g[x][G+1];h.push(T,z,ee),h.push(z,H,ee),A+=6}c.addGroup(d,A,0),d+=A}function M(b){const C=_,A=new fe,w=new P;let G=0;const x=b===!0?e:t,T=b===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const z=_;for(let H=0;H<=s;H++){const L=H/s*l+a,O=Math.cos(L),V=Math.sin(L);w.x=x*V,w.y=p*T,w.z=x*O,u.push(w.x,w.y,w.z),f.push(0,T,0),A.x=O*.5+.5,A.y=V*.5*T+.5,m.push(A.x,A.y),_++}for(let H=0;H<s;H++){const ee=C+H,L=z+H;b===!0?h.push(L,L+1,ee):h.push(L+1,L,ee),G+=3}c.addGroup(d,G,b===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yt extends Xt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new P,b=new P,C=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],b),m(t[A+2],C),l(M,b,C,E)}function l(E,M,b,C){const A=C+1,w=[];for(let G=0;G<=A;G++){w[G]=[];const x=E.clone().lerp(b,G/A),T=M.clone().lerp(b,G/A),z=A-G;for(let H=0;H<=z;H++)H===0&&G===A?w[G][H]=x:w[G][H]=x.clone().lerp(T,H/z)}for(let G=0;G<A;G++)for(let x=0;x<2*(A-G)-1;x++){const T=Math.floor(x/2);x%2===0?(f(w[G][T+1]),f(w[G+1][T]),f(w[G][T])):(f(w[G][T+1]),f(w[G+1][T+1]),f(w[G+1][T]))}}function c(E){const M=new P;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(E),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){const E=new P;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const b=p(E)/2/Math.PI+.5,C=d(E)/Math.PI+.5;o.push(b,1-C)}_(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],b=o[E+2],C=o[E+4],A=Math.max(M,b,C),w=Math.min(M,b,C);A>.9&&w<.1&&(M<.2&&(o[E+0]+=1),b<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,M){const b=E*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function _(){const E=new P,M=new P,b=new P,C=new P,A=new fe,w=new fe,G=new fe;for(let x=0,T=0;x<r.length;x+=9,T+=6){E.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),b.set(r[x+6],r[x+7],r[x+8]),A.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),G.set(o[T+4],o[T+5]),C.copy(E).add(M).add(b).divideScalar(3);const z=p(C);g(A,T+0,E,z),g(w,T+2,M,z),g(G,T+4,b,z)}}function g(E,M,b,C){C<0&&E.x===1&&(o[M]=E.x-1),b.x===0&&b.z===0&&(o[M]=C/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.vertices,e.indices,e.radius,e.details)}}class cr extends lr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cr(e.radius,e.detail)}}class ft extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,m=[],_=[],g=[],p=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),p.push(A+b,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const M=h[d][E+1],b=h[d][E],C=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&m.push(M,b,A),(d!==n-1||l<Math.PI)&&m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){const g=_/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){const g=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,E=(s+1)*m+_;o.push(g,p,E),o.push(p,d,E)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qe extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hr extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hf extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ks=new at,Ba=new P,za=new P;class kf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ba),za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(za),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vf extends kf{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xf extends hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ga(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ga();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ga(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tr);const Yf={turkey:{kind:"bird",body:8014379,alt:9788212,accent:12597547,bronzeBody:13467442,bronzeAccent:16766073,scale:1,radius:.5,hoverY:0,tailFan:!0},hen:{kind:"bird",body:15921126,alt:15262416,accent:13777450,bronzeBody:15253839,bronzeAccent:16773280,scale:.85,radius:.42,hoverY:0,tailFan:!1},chicken:{kind:"bird",body:10242598,alt:8010270,accent:13777450,bronzeBody:14263361,bronzeAccent:16769162,scale:.8,radius:.4,hoverY:0,tailFan:!1},salmon:{kind:"fish",body:14250859,alt:13130322,accent:11584720,bronzeBody:14721072,bronzeAccent:16773296,scale:1,radius:.5,hoverY:1.4},shrimp:{kind:"shrimp",body:15764074,alt:14708810,accent:16765104,bronzeBody:15777856,bronzeAccent:16773296,scale:.9,radius:.38,hoverY:1.1},pig:{kind:"pig",body:15574694,alt:14716815,accent:14254208,bronzeBody:14266954,bronzeAccent:16773280,scale:1.15,radius:.65,hoverY:0},worker:{kind:"worker",body:3829413,alt:2767445,accent:15255968,bronzeBody:9067040,bronzeAccent:16766073,scale:1,radius:.5,hoverY:0}},Kf={barn:{bg:1709072,fogColor:1709072,fogNear:30,fogFar:80,floorColor:13347679,strawFloor:!0,wallColor:8016432,wallHeight:6,hemiSky:16773328,hemiGround:4205080,hemiInt:.9,dirColor:16770736,dirInt:.7,ambInt:.25,obstacleColor:13216078,troughColor:5978656,mudColor:4863270,decor:"beams",underwater:!1},henhouse:{bg:2365970,fogColor:2365970,fogNear:28,fogFar:70,floorColor:14206090,strawFloor:!0,wallColor:9071162,wallHeight:5.5,hemiSky:16774364,hemiGround:4863008,hemiInt:1,dirColor:16773312,dirInt:.8,ambInt:.3,obstacleColor:14203240,troughColor:6965800,mudColor:5915696,decor:"beams",underwater:!1},savanna:{bg:10405600,fogColor:13624280,fogNear:45,fogFar:120,floorColor:13153381,strawFloor:!1,wallColor:9071162,wallHeight:2.6,hemiSky:12574975,hemiGround:10259002,hemiInt:1.1,dirColor:16773824,dirInt:1,ambInt:.4,obstacleColor:9075258,troughColor:4876938,mudColor:6969904,decor:"trees",underwater:!1},ocean:{bg:1006200,fogColor:1142944,fogNear:18,fogFar:60,floorColor:13222026,strawFloor:!1,wallColor:871014,wallHeight:8,hemiSky:10477823,hemiGround:671829,hemiInt:1,dirColor:12577535,dirInt:.7,ambInt:.35,obstacleColor:14256714,troughColor:2787962,mudColor:2779786,decor:"bubbles",underwater:!0},deepocean:{bg:537162,fogColor:671578,fogNear:14,fogFar:48,floorColor:10130032,strawFloor:!1,wallColor:469306,wallHeight:8,hemiSky:6271184,hemiGround:336688,hemiInt:.9,dirColor:9425134,dirInt:.6,ambInt:.3,obstacleColor:12614218,troughColor:2058858,mudColor:1725808,decor:"bubbles",underwater:!0},pigpen:{bg:6978186,fogColor:9080714,fogNear:35,fogFar:95,floorColor:6967864,strawFloor:!1,wallColor:8018484,wallHeight:2.4,hemiSky:13623532,hemiGround:4864038,hemiInt:1,dirColor:16773328,dirInt:.85,ambInt:.35,obstacleColor:13216078,troughColor:4863008,mudColor:3811868,decor:"fences",underwater:!1},office:{bg:14673128,fogColor:15133680,fogNear:40,fogFar:110,floorColor:5923952,strawFloor:!1,wallColor:14212320,wallHeight:4,hemiSky:16777215,hemiGround:9080984,hemiInt:1.1,dirColor:16777215,dirInt:.6,ambInt:.5,obstacleColor:9476256,troughColor:3820138,mudColor:3824266,decor:"ceiling",underwater:!1}},Zn=[{index:0,name:"Basic Barn",subtitle:"Learn the ropes. Flip the flock of turkeys.",species:"turkey",theme:"barn",critterLabel:"TURKEYS",specialLabel:"Golden Turkey",flipVerb:"Flip",barnWidth:36,barnDepth:36,normalCount:15,bronzeCount:1,targetScore:18,baseSpeed:2.4,fleeSpeed:4.2,evasiveness:.4,blocking:.25,hasEquipment:!1},{index:1,name:"Hen House",subtitle:"Layer hens are jumpy. Flip the flock.",species:"hen",theme:"henhouse",critterLabel:"HENS",specialLabel:"Golden Hen",flipVerb:"Flip",barnWidth:40,barnDepth:40,normalCount:18,bronzeCount:1,targetScore:22,baseSpeed:2.7,fleeSpeed:4.6,evasiveness:.5,blocking:.35,hasEquipment:!1},{index:2,name:"Savanna Scramble",subtitle:"Free-range chickens on an African field.",species:"chicken",theme:"savanna",critterLabel:"CHICKENS",specialLabel:"Golden Rooster",flipVerb:"Flip",barnWidth:50,barnDepth:50,normalCount:22,bronzeCount:2,targetScore:28,baseSpeed:3,fleeSpeed:5.1,evasiveness:.6,blocking:.4,hasEquipment:!1},{index:3,name:"Salmon Run",subtitle:"Dive in and flip the salmon underwater.",species:"salmon",theme:"ocean",critterLabel:"SALMON",specialLabel:"King Salmon",flipVerb:"Flip",barnWidth:48,barnDepth:48,normalCount:24,bronzeCount:2,targetScore:32,baseSpeed:3.2,fleeSpeed:5.4,evasiveness:.7,blocking:.45,hasEquipment:!1},{index:4,name:"Shrimp Reef",subtitle:"Deeper water, darting shrimp. Flip them all.",species:"shrimp",theme:"deepocean",critterLabel:"SHRIMP",specialLabel:"Tiger Prawn",flipVerb:"Flip",barnWidth:52,barnDepth:52,normalCount:28,bronzeCount:2,targetScore:36,baseSpeed:3.5,fleeSpeed:5.8,evasiveness:.82,blocking:.55,hasEquipment:!0},{index:5,name:"The Pig Pen",subtitle:"Muddy, crowded and chaotic. Flip the hogs.",species:"pig",theme:"pigpen",critterLabel:"PIGS",specialLabel:"Prize Hog",flipVerb:"Flip",barnWidth:46,barnDepth:46,normalCount:20,bronzeCount:2,targetScore:32,baseSpeed:3,fleeSpeed:5,evasiveness:.7,blocking:.7,hasEquipment:!1},{index:6,name:"The Office",subtitle:"Flip your colleagues before the meeting. Mind the carts!",species:"worker",theme:"office",critterLabel:"STAFF",specialLabel:"The Manager",flipVerb:"Flip",barnWidth:54,barnDepth:54,normalCount:26,bronzeCount:3,targetScore:42,baseSpeed:3.6,fleeSpeed:6.1,evasiveness:.9,blocking:.8,hasEquipment:!0}],Ha=60,$f=1,jf=5,Zf=4,Jf=5,Vs=-1,Ws=-2,Qf=3.6,fn=1;class ep{constructor(){Q(this,"texCache",new Map);Q(this,"theme");Q(this,"themeName")}build(e){this.themeName=e.theme,this.theme=Kf[e.theme];const t=new $t,n=e.barnWidth/2,s=e.barnDepth/2,r=[],o=[],a=[];this.buildFloorAndDecor(t,e),this.buildWalls(t,r,n,s),this.layoutGeneric(t,r,o,a,e,n,s);const l=this.buildSpawnPoints(r,n,s);return{group:t,obstacles:r,troughs:o,equipment:a,halfW:n,halfD:s,spawnPoints:l,playerStart:new fe(0,s-4),theme:this.theme}}strawTexture(){if(this.texCache.has("straw"))return this.texCache.get("straw");const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.fillStyle="#cbab5f",t.fillRect(0,0,128,128);for(let s=0;s<400;s++){const r=Math.random()*128,o=Math.random()*128,a=4+Math.random()*10,l=Math.random()*Math.PI;t.strokeStyle=Math.random()>.5?"#b89a4e":"#d8bd76",t.lineWidth=1,t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(l)*a,o+Math.sin(l)*a),t.stroke()}const n=new Oa(e);return n.wrapS=n.wrapT=mi,this.texCache.set("straw",n),n}noiseTexture(e,t,n){const s="n"+e+t+n;if(this.texCache.has(s))return this.texCache.get(s);const r=document.createElement("canvas");r.width=r.height=128;const o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,0,128,128);for(let l=0;l<900;l++){const c=Math.random()*128,h=Math.random()*128,u=1+Math.random()*3;o.fillStyle=Math.random()>.5?t:n,o.fillRect(c,h,u,u)}const a=new Oa(r);return a.wrapS=a.wrapT=mi,this.texCache.set(s,a),a}hex(e){return"#"+e.toString(16).padStart(6,"0")}buildFloorAndDecor(e,t){let n;if(this.theme.strawFloor){const r=this.strawTexture();r.repeat.set(t.barnWidth/4,t.barnDepth/4),n=new qe({map:r})}else{const r=this.hex(this.theme.floorColor),o=this.noiseTexture(r,this.shade(this.theme.floorColor,-.18),this.shade(this.theme.floorColor,.15));o.repeat.set(t.barnWidth/3,t.barnDepth/3),n=new qe({map:o})}const s=new le(new rn(t.barnWidth,t.barnDepth),n);switch(s.rotation.x=-Math.PI/2,e.add(s),this.theme.decor){case"beams":this.addBeams(e,t);break;case"trees":this.addTrees(e,t);break;case"bubbles":this.addUnderwaterDecor(e,t);break;case"fences":this.addFences(e,t);break;case"ceiling":this.addCeiling(e,t);break}}shade(e,t){const n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(a+(t>0?(255-a)*t:a*t))));return this.hex(o(n)<<16|o(s)<<8|o(r))}addBeams(e,t){const n=new qe({color:5913890}),s=this.theme.wallHeight,r=Math.max(3,Math.floor(t.barnWidth/5));for(let o=0;o<=r;o++){const a=-t.barnWidth/2+o*t.barnWidth/r,l=new le(new Je(.4,.4,t.barnDepth),n);l.position.set(a,s-.5,0),e.add(l)}}addTrees(e,t){const n=t.barnWidth/2-2,s=t.barnDepth/2-2,r=new qe({color:7031339}),o=new qe({color:5929530});for(let l=0;l<10;l++){const c=Math.floor(Math.random()*4);let h=(Math.random()*2-1)*n,u=(Math.random()*2-1)*s;c===0?u=-s+1:c===1?u=s-1:c===2?h=-n+1:h=n-1;const f=new le(new Xt(.25,.35,3,6),r);f.position.set(h,1.5,u),e.add(f);const m=new le(new ft(1.8,7,5),o);m.scale.set(1,.5,1),m.position.set(h,3.4,u),e.add(m)}const a=new le(new vi(4,20),new kt({color:16773792}));a.position.set(n-6,14,-s-8),e.add(a)}addUnderwaterDecor(e,t){const n=t.barnWidth/2-1.5,s=t.barnDepth/2-1.5,r=new qe({color:3111498});for(let a=0;a<16;a++){const l=Math.random();let c=(Math.random()*2-1)*n,h=(Math.random()*2-1)*s;l<.5?c=(Math.random()>.5?1:-1)*n:h=(Math.random()>.5?1:-1)*s;const u=2+Math.random()*3,f=new le(new Xt(.06,.14,u,5),r);f.position.set(c,u/2,h),f.rotation.z=(Math.random()-.5)*.4,e.add(f)}const o=new le(new rn(t.barnWidth,t.barnDepth),new kt({color:2790848,transparent:!0,opacity:.28,side:Nt}));o.rotation.x=-Math.PI/2,o.position.y=this.theme.wallHeight-.5,e.add(o)}addFences(e,t){const n=new qe({color:7031339}),s=t.barnWidth/2,r=t.barnDepth/2,o=3;for(let a=-s;a<=s;a+=o)for(const l of[-r,r]){const c=new le(new Je(.18,1.4,.18),n);c.position.set(a,.7,l),e.add(c)}for(let a=-r;a<=r;a+=o)for(const l of[-s,s]){const c=new le(new Je(.18,1.4,.18),n);c.position.set(l,.7,a),e.add(c)}}addCeiling(e,t){const n=new le(new rn(t.barnWidth,t.barnDepth),new qe({color:15659250}));n.rotation.x=Math.PI/2,n.position.y=this.theme.wallHeight-.1,e.add(n);const s=new kt({color:16777215}),r=Math.floor(t.barnWidth/6),o=Math.floor(t.barnDepth/6);for(let a=0;a<r;a++)for(let l=0;l<o;l++){const c=-t.barnWidth/2+(a+.5)*6,h=-t.barnDepth/2+(l+.5)*6,u=new le(new rn(2.4,1.2),s);u.rotation.x=Math.PI/2,u.position.set(c,this.theme.wallHeight-.15,h),e.add(u)}}buildWalls(e,t,n,s){const r=this.theme.wallHeight,o=new qe({color:this.theme.wallColor}),a=(l,c,h,u)=>{const f=new Je(h,r,u),m=new le(f,o);m.position.set(l,r/2,c),e.add(m),t.push({kind:"wall",x:l,z:c,w:h,d:u,h:r,solid:!0,blocksSight:!0})};a(0,-s,n*2+fn,fn),a(0,s,n*2+fn,fn),a(-n,0,fn,s*2+fn),a(n,0,fn,s*2+fn)}addSolid(e,t,n,s,r=2,o=1.4,a=1.4){const l=this.themeName,c=new $t;if(l==="savanna"){const h=new le(new ft(Math.max(r,o)*.6,7,5),new qe({color:5204532}));h.scale.set(1,.7,1),h.position.y=a*.5,c.add(h)}else if(l==="ocean"||l==="deepocean"){const h=new le(new cr(Math.max(r,o)*.55,0),new qe({color:this.theme.obstacleColor}));h.position.y=a*.5,c.add(h);for(let u=0;u<3;u++){const f=new le(new Yt(.12,.9,5),new qe({color:14711434}));f.position.set((Math.random()-.5)*r,a*.6+Math.random()*.4,(Math.random()-.5)*o),c.add(f)}}else if(l==="office"){const h=new le(new Je(r,a*.6,o),new qe({color:9080726}));h.position.y=a*.3,c.add(h);const u=new le(new Je(.8,.55,.1),new qe({color:2237995}));u.position.set(0,a*.6+.35,0),c.add(u);const f=new le(new rn(.7,.45),new kt({color:2789584}));f.position.set(0,a*.6+.35,.06),c.add(f)}else{const h=new le(new Je(r,a,o),new qe({color:this.theme.obstacleColor}));h.position.y=a/2;const u=new kt({color:9071146});for(const f of[-r*.25,r*.25]){const m=new le(new Je(.06,a*1.01,o*1.01),u);m.position.set(f,0,0),h.add(m)}c.add(h)}c.position.set(n,0,s),e.add(c),t.push({kind:"hay",x:n,z:s,w:r,d:o,h:a,solid:!0,blocksSight:!0})}addTrough(e,t,n,s,r){const c=this.themeName,h=new $t;if(c==="savanna"){const u=new le(new vi(1.5,16),new qe({color:3832485}));u.rotation.x=-Math.PI/2,u.position.y=.03,h.add(u)}else if(c==="ocean"||c==="deepocean")for(const u of[.2,-.2]){const f=new le(new ft(.8,8,5,0,Math.PI*2,0,Math.PI/2),new qe({color:this.theme.troughColor}));f.position.set(0,.3,u),f.rotation.x=u>0?.4:Math.PI-.4,h.add(f)}else if(c==="office"){const u=new le(new Je(.7,1,.7),new qe({color:15659765}));u.position.y=.5,h.add(u);const f=new le(new Xt(.3,.3,.6,10),new qe({color:3842256,transparent:!0,opacity:.7}));f.position.y=1.3,h.add(f)}else{const u=new le(new Je(2.6,.5,.9),new qe({color:this.theme.troughColor}));u.position.y=.5/2,h.add(u);const f=new le(new Je(2.6*.88,.12,.9*.7),new qe({color:14266954}));f.position.y=.5-.05,h.add(f)}h.position.set(s,0,r),e.add(h),n.push(new fe(s,r)),t.push({kind:"trough",x:s,z:r,w:2.6,d:.9,h:.5,solid:!0,blocksSight:!1})}addMud(e,t,n,s,r=4,o=4){const a=new le(new rn(r,o),new qe({color:this.theme.mudColor}));a.rotation.x=-Math.PI/2,a.position.set(n,.02,s),e.add(a),t.push({kind:"mud",x:n,z:s,w:r,d:o,h:0,solid:!1,blocksSight:!1})}addGate(e,t,n,s,r,o){const a=this.themeName;let l=9067050;a==="office"?l=12106946:(a==="ocean"||a==="deepocean")&&(l=3111498);const c=new le(new Je(r,2.2,o),new qe({color:l}));c.position.set(n,1.1,s),e.add(c),t.push({kind:"gate",x:n,z:s,w:r,d:o,h:2.2,solid:!0,blocksSight:!1})}addEquipment(e,t,n,s,r){const c=new $t,h=this.themeName==="office"?5595248:11545387,u=new le(new Je(2.4,1.8,1.6),new qe({color:h}));u.position.y=1.8/2+.3,c.add(u);const f=new le(new Je(2.4*1.02,.4,1.6*1.02),new kt({color:15909376}));f.position.y=1.8*.5,c.add(f);const m=new qe({color:2236962});for(const _ of[-2.4/2+.3,2.4/2-.3])for(const g of[-1.6/2+.3,1.6/2-.3]){const p=new le(new Xt(.4,.4,.3,10),m);p.rotation.z=Math.PI/2,p.position.set(_,.4,g),c.add(p)}c.position.set(n.x,0,n.y),e.add(c),t.push({spec:{kind:"equipment",x:n.x,z:n.y,w:2.4,d:1.6,h:1.8,solid:!0,blocksSight:!1},mesh:c,a:n.clone(),b:s.clone(),t:0,dir:1,speed:r})}layoutGeneric(e,t,n,s,r,o,a){const l=[],c=new fe(0,a-4),h=m=>{for(let _=0;_<40;_++){const g=(Math.random()*2-1)*(o-m),p=(Math.random()*2-1)*(a-m),d=new fe(g,p);if(d.length()<5||d.distanceTo(c)<6)continue;let E=!0;for(const M of l)if(d.distanceTo(M)<5){E=!1;break}if(E)return d}return null},u=6+r.index;for(let m=0;m<u;m++){const _=h(4);if(!_)continue;l.push(_);const g=1.8+Math.random()*1.2,p=1.2+Math.random()*1;this.addSolid(e,t,_.x,_.y,g,p,1.4)}r.index>=1&&(this.addGate(e,t,-o*.3,-a*.2,o*.7,.6),r.index>=3&&this.addGate(e,t,o*.35,a*.15,.6,a*.7)),this.addTrough(e,t,n,-o+4,0),this.addTrough(e,t,n,o-4,-a*.3),r.index>=2&&this.addTrough(e,t,n,0,-a+5);const f=r.theme==="pigpen"?4:r.index>=2?2+(r.index>=4?1:0):0;for(let m=0;m<f;m++){const _=h(5);_&&this.addMud(e,t,_.x,_.y,4+Math.random()*3,4+Math.random()*3)}r.hasEquipment&&(this.addEquipment(e,s,new fe(-o+6,-2),new fe(o-6,-2),3),this.addEquipment(e,s,new fe(4,a-6),new fe(4,-a+6),2.6))}buildSpawnPoints(e,t,n){const s=[];for(let o=-t+3;o<=t-3;o+=3)for(let a=-n+3;a<=n-3;a+=3){let l=!0;for(const c of e)if(c.solid&&Math.abs(o-c.x)<c.w/2+1&&Math.abs(a-c.z)<c.d/2+1){l=!1;break}l&&s.push(new fe(o,a))}return s}}const Ki=.45,ka=1.7,tp=7.6,np=12,ip=.45,Va=60,sp=12;class rp{constructor(e,t){Q(this,"camera");Q(this,"pos",new P(0,ka,0));Q(this,"vel",new fe);Q(this,"yaw",0);Q(this,"pitch",0);Q(this,"enabled",!1);Q(this,"onMud",!1);Q(this,"sprinting",!1);Q(this,"keys",{});Q(this,"domElement");Q(this,"mouseSensitivity",.0022);this.camera=e,this.domElement=t,this.bindEvents()}bindEvents(){document.addEventListener("keydown",e=>{this.keys[e.code]=!0,this.enabled&&(e.code.startsWith("Arrow")||e.code==="Space")&&e.preventDefault()}),document.addEventListener("keyup",e=>{this.keys[e.code]=!1}),document.addEventListener("mousemove",e=>{if(!this.enabled)return;this.yaw-=e.movementX*this.mouseSensitivity,this.pitch-=e.movementY*this.mouseSensitivity;const t=Math.PI/2-.05;this.pitch=Math.max(-t,Math.min(t,this.pitch))}),document.addEventListener("pointerlockchange",()=>{this.enabled=document.pointerLockElement===this.domElement})}requestLock(){this.domElement.requestPointerLock()}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}reset(e){this.pos.set(e.x,ka,e.y),this.vel.set(0,0),this.yaw=Math.atan2(-e.x,-e.y)+Math.PI,this.yaw=Math.atan2(0-e.x,0-e.y),this.pitch=0}get position2D(){return new fe(this.pos.x,this.pos.z)}forwardDir(){return new fe(Math.sin(this.yaw),Math.cos(this.yaw))}update(e,t,n,s){let r=0,o=0;this.keys.KeyW&&(o+=1),this.keys.KeyS&&(o-=1),this.keys.ArrowUp&&(o-=1),this.keys.ArrowDown&&(o+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(r+=1),this.sprinting=!!(this.keys.ShiftLeft||this.keys.ShiftRight);const a=Math.sin(this.yaw),l=Math.cos(this.yaw);let c=a*o+l*r,h=l*o-a*r;const u=Math.hypot(c,h);u>0&&(c/=u,h/=u);let f=this.sprinting?np:tp;this.onMud&&(f*=ip);const m=c*f,_=h*f;if(u>0)this.vel.x+=(m-this.vel.x)*Math.min(1,Va*e*.05),this.vel.y+=(_-this.vel.y)*Math.min(1,Va*e*.05);else{const b=Math.max(0,1-sp*e*.1);this.vel.multiplyScalar(b)}let g=this.pos.x+this.vel.x*e,p=this.pos.z+this.vel.y*e;g=this.resolveAxis(g,this.pos.z,!0,t),p=this.resolveAxis(g,p,!1,t);const d=n-.8,E=s-.8;g=Math.max(-d,Math.min(d,g)),p=Math.max(-E,Math.min(E,p)),this.pos.x=g,this.pos.z=p,this.onMud=!1;for(const b of t)if(b.kind==="mud"&&Math.abs(this.pos.x-b.x)<b.w/2&&Math.abs(this.pos.z-b.z)<b.d/2){this.onMud=!0;break}this.camera.position.copy(this.pos);const M=new Ei(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(M)}resolveAxis(e,t,n,s){for(const r of s){if(!r.solid)continue;const o=r.x-r.w/2-Ki,a=r.x+r.w/2+Ki,l=r.z-r.d/2-Ki,c=r.z+r.d/2+Ki;e>o&&e<a&&t>l&&t<c&&(n?(this.vel.x>0?e=o:this.vel.x<0&&(e=a),this.vel.x=0):(this.vel.y>0?t=l:this.vel.y<0&&(t=c),this.vel.y=0))}return n?e:t}}class ap{constructor(e,t,n,s,r,o,a){Q(this,"group");Q(this,"pos");Q(this,"vel",new fe);Q(this,"heading",0);Q(this,"isBronze");Q(this,"active",!0);Q(this,"speed");Q(this,"fleeSpeed");Q(this,"radius");Q(this,"hoverY");Q(this,"species");Q(this,"wanderAngle",Math.random()*Math.PI*2);Q(this,"flockId");Q(this,"style");Q(this,"body");Q(this,"flipTime",0);Q(this,"bobPhase",Math.random()*Math.PI*2);this.pos=new fe(e,t),this.isBronze=n,this.species=s,this.style=Yf[s],this.speed=r*(n?1.35:1),this.fleeSpeed=o*(n?1.4:1),this.flockId=a,this.radius=this.style.radius*(n?1.15:1),this.hoverY=this.style.hoverY,this.group=new $t,this.body=this.build(),this.group.add(this.body),this.group.position.set(e,this.hoverY,t)}col(e,t){return this.isBronze?t:e}build(){const e=new $t,t=this.style,n=t.scale*(this.isBronze?1.18:1);switch(e.scale.setScalar(n),t.kind){case"bird":this.buildBird(e);break;case"fish":this.buildFish(e);break;case"shrimp":this.buildShrimp(e);break;case"pig":this.buildPig(e);break;case"worker":this.buildWorker(e);break}if(this.isBronze){const s=new is(.75,.05,6,18),r=new kt({color:this.style.bronzeAccent}),o=new le(s,r);o.rotation.x=Math.PI/2,o.position.y=.06,e.add(o)}return e}mat(e){return new qe({color:e})}eyes(e,t,n,s=.1){const r=new kt({color:1118481});for(const o of[-s,s]){const a=new le(new ft(.05,5,4),r);a.position.set(o,t,n),e.add(a)}}buildBird(e){const t=this.style,n=this.col(t.body,t.bronzeBody),s=this.col(t.accent,t.bronzeAccent),r=new ft(.55,8,6);r.scale(1,.85,1.15);const o=new le(r,this.mat(n));if(o.position.y=.55,e.add(o),t.tailFan){const u=new le(new vi(.7,7,0,Math.PI),new qe({color:this.col(t.alt,t.bronzeAccent),side:Nt}));u.position.set(0,.75,-.5),u.rotation.x=-Math.PI/2+.5,e.add(u)}else{const u=new le(new Yt(.22,.4,5),this.mat(this.col(t.alt,t.bronzeAccent)));u.position.set(0,.7,-.5),u.rotation.x=-1.1,e.add(u)}const a=new le(new ft(.26,7,6),this.mat(n));if(a.position.set(0,1,.45),e.add(a),!t.tailFan){const u=new le(new Je(.06,.16,.26),this.mat(s));u.position.set(0,1.24,.45),e.add(u)}const l=new le(new Yt(.09,.22,6),this.mat(15906565));l.position.set(0,1,.72),l.rotation.x=Math.PI/2,e.add(l);const c=new le(new ft(.08,6,5),this.mat(s));c.position.set(0,.86,.66),e.add(c);const h=this.mat(15906565);for(const u of[-.18,.18]){const f=new le(new Xt(.05,.05,.45,5),h);f.position.set(u,.22,.05),e.add(f)}this.eyes(e,1.05,.65)}buildFish(e){const t=this.style,n=this.col(t.body,t.bronzeBody),s=new ft(.5,8,6);s.scale(.6,.8,1.7);const r=new le(s,this.mat(n));r.position.y=.4,e.add(r);const o=new le(new ft(.5,8,6).scale(.45,.4,1.5),this.mat(this.col(t.accent,t.bronzeAccent)));o.position.set(0,.2,0),e.add(o);const a=new qe({color:this.col(t.alt,t.bronzeAccent),side:Nt}),l=new le(new Yt(.4,.5,4),a);l.position.set(0,.4,-.95),l.rotation.x=-Math.PI/2,l.scale.set(1,1,.4),e.add(l);const c=new le(new Yt(.2,.35,4),a);c.position.set(0,.75,0),e.add(c);for(const h of[-.35,.35]){const u=new le(new Yt(.14,.3,4),a);u.position.set(h,.35,.2),u.rotation.z=h>0?-1.2:1.2,e.add(u)}this.eyes(e,.5,.7,.16)}buildShrimp(e){const t=this.style,n=this.col(t.body,t.bronzeBody),s=5;for(let a=0;a<s;a++){const l=.28-a*.03,c=new le(new ft(l,6,5),this.mat(n)),h=a/(s-1);c.position.set(0,.5-Math.sin(h*1.6)*.15,.4-h*.8),e.add(c)}const r=new le(new Yt(.2,.25,4),this.mat(this.col(t.accent,t.bronzeAccent)));r.position.set(0,.55,-.55),r.rotation.x=Math.PI/2,r.scale.set(1.4,1,.4),e.add(r);const o=this.mat(this.col(t.alt,t.bronzeAccent));for(const a of[-.06,.06]){const l=new le(new Xt(.012,.012,.6,4),o);l.position.set(a,.55,.65),l.rotation.x=1.1,e.add(l)}this.eyes(e,.56,.5,.09)}buildPig(e){const t=this.style,n=this.col(t.body,t.bronzeBody),s=new ft(.6,8,6);s.scale(1.15,.9,1.3);const r=new le(s,this.mat(n));r.position.y=.6,e.add(r);const o=new le(new ft(.4,8,6),this.mat(n));o.position.set(0,.65,.7),e.add(o);const a=new le(new Xt(.16,.18,.16,8),this.mat(this.col(t.accent,t.bronzeAccent)));a.position.set(0,.6,1.02),a.rotation.x=Math.PI/2,e.add(a);for(const h of[-.22,.22]){const u=new le(new Yt(.14,.22,4),this.mat(this.col(t.alt,t.bronzeAccent)));u.position.set(h,.95,.62),e.add(u)}const l=this.mat(this.col(t.alt,t.bronzeBody));for(const h of[-.32,.32])for(const u of[-.35,.45]){const f=new le(new Xt(.11,.11,.4,6),l);f.position.set(h,.2,u),e.add(f)}const c=new le(new is(.1,.03,5,10,Math.PI*1.5),this.mat(n));c.position.set(0,.7,-.75),e.add(c),this.eyes(e,.75,.95,.14)}buildWorker(e){const t=this.style,n=this.col(t.body,t.bronzeBody),s=this.col(t.alt,1710626),r=15255968;for(const h of[-.15,.15]){const u=new le(new Je(.2,.7,.22),this.mat(s));u.position.set(h,.35,0),e.add(u)}const o=new le(new Je(.55,.7,.32),this.mat(n));o.position.set(0,1.05,0),e.add(o);const a=new le(new Je(.09,.4,.04),this.mat(this.isBronze?t.bronzeAccent:11545387));a.position.set(0,1.05,.17),e.add(a);for(const h of[-.37,.37]){const u=new le(new Je(.16,.65,.2),this.mat(n));u.position.set(h,1.05,0),e.add(u)}const l=new le(new ft(.24,8,6),this.mat(r));l.position.set(0,1.62,0),e.add(l);const c=new le(new ft(.25,8,6,0,Math.PI*2,0,Math.PI/2),this.mat(this.isBronze?5592405:3811866));c.position.set(0,1.64,0),e.add(c),this.eyes(e,1.64,.22,.09)}syncTransform(e,t){if(this.group.position.set(this.pos.x,this.hoverY,this.pos.y),this.group.rotation.y=this.heading,this.active){const n=this.vel.length(),s=Math.sin(t*10+this.bobPhase)*.05*(.4+n),r=this.hoverY>0?Math.sin(t*3+this.bobPhase)*.2:0;this.group.position.y=this.hoverY+Math.max(-.2,s)+r,this.group.rotation.z=this.hoverY>0?Math.sin(t*5+this.bobPhase)*.15:0}else{this.flipTime+=e;const n=Math.min(1,this.flipTime/.45),s=1-Math.pow(1-n,3);this.group.rotation.z=s*Math.PI,this.group.rotation.x=s*.3,this.group.position.y=this.hoverY>0?this.hoverY+.3:0}}setHeadingFromVel(){this.vel.lengthSq()>1e-4&&(this.heading=Math.atan2(this.vel.x,this.vel.y))}flip(){this.active=!1,this.vel.set(0,0),this.flipTime=0}dispose(){this.group.traverse(e=>{const t=e;if(t.geometry&&t.geometry.dispose(),t.material){const n=t.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n.dispose()}})}}const Wa=new fe,Xs=new fe;class op{constructor(){Q(this,"steer",new fe)}update(e,t,n,s,r){const o=4+s.evasiveness*3;for(let a=0;a<e.length;a++){const l=e[a];if(!l.active)continue;this.steer.set(0,0);const h=Wa.copy(t).sub(l.pos).length(),u=h<o;if(u){const m=Xs.copy(l.pos).sub(t);m.lengthSq()<.001&&m.set(Math.random()-.5,Math.random()-.5),m.normalize();const _=1-h/o;this.steer.addScaledVector(m,2.5+_*2.5);const g=this.hideVector(l,t,n);g&&this.steer.addScaledVector(g,1.6)}else{if(l.wanderAngle+=(Math.random()-.5)*(1.5+s.evasiveness*2)*r*4,this.steer.x+=Math.sin(l.wanderAngle)*.6,this.steer.y+=Math.cos(l.wanderAngle)*.6,this.addFlocking(l,e,this.steer),n.troughs.length&&(a+Math.floor(l.wanderAngle))%3===0){const m=this.nearestTrough(l.pos,n.troughs);if(m){const _=Xs.copy(m).sub(l.pos);_.length()>2.5&&this.steer.addScaledVector(_.normalize(),.5)}}if(s.blocking>0&&h<o+8&&h>o&&a%3===0){const m=Xs.copy(t).sub(l.pos).normalize();this.steer.addScaledVector(m,s.blocking*1.6)}}this.addSeparation(l,e,this.steer),this.addObstacleRepulsion(l,n,this.steer);const f=u?l.fleeSpeed:l.speed;this.steer.lengthSq()>1e-4?(this.steer.normalize(),l.vel.lerp(this.steer.multiplyScalar(f),Math.min(1,r*6))):l.vel.multiplyScalar(.9),this.integrate(l,n,r),l.setHeadingFromVel()}}nearestTrough(e,t){let n=null,s=1/0;for(const r of t){const o=e.distanceToSquared(r);o<s&&(s=o,n=r)}return n}hideVector(e,t,n){let s=null,r=1/0;for(const l of n.obstacles){if(!l.blocksSight||l.kind==="wall")continue;const c=(e.pos.x-l.x)**2+(e.pos.y-l.z)**2;c<r&&c<12*12&&(r=c,s=l)}if(!s)return null;const o=new fe(s.x-t.x,s.z-t.y);return o.lengthSq()<.001?null:(o.normalize(),new fe(s.x+o.x*2.2,s.z+o.y*2.2).sub(e.pos).normalize())}addFlocking(e,t,n){const s=new fe,r=new fe;let o=0;for(const a of t){if(a===e||!a.active||a.flockId!==e.flockId)continue;e.pos.distanceTo(a.pos)<6&&(s.add(a.pos),r.add(a.vel),o++)}if(o>0){s.divideScalar(o);const a=s.sub(e.pos);a.lengthSq()>.001&&n.addScaledVector(a.normalize(),.4),r.lengthSq()>.001&&n.addScaledVector(r.normalize(),.3)}}addSeparation(e,t,n){for(const s of t){if(s===e||!s.active)continue;const r=e.pos.distanceTo(s.pos);if(r<1.3&&r>1e-4){const o=Wa.copy(e.pos).sub(s.pos).divideScalar(r);n.addScaledVector(o,(1.3-r)*1.5)}}}addObstacleRepulsion(e,t,n){for(const s of t.obstacles){if(!s.solid)continue;const r=Math.max(s.x-s.w/2,Math.min(e.pos.x,s.x+s.w/2)),o=Math.max(s.z-s.d/2,Math.min(e.pos.y,s.z+s.d/2)),a=e.pos.x-r,l=e.pos.y-o,c=a*a+l*l,h=1.6;if(c<h*h){const u=Math.sqrt(c)||.001;n.x+=a/u*(h-u)*1.4,n.y+=l/u*(h-u)*1.4}}}integrate(e,t,n){let s=e.pos.x+e.vel.x*n,r=e.pos.y+e.vel.y*n;s=this.resolve(e,s,e.pos.y,!0,t),r=this.resolve(e,s,r,!1,t);const o=t.halfW-1,a=t.halfD-1;(s<-o||s>o)&&(e.vel.x*=-.5),(r<-a||r>a)&&(e.vel.y*=-.5),s=Math.max(-o,Math.min(o,s)),r=Math.max(-a,Math.min(a,r)),e.pos.set(s,r)}resolve(e,t,n,s,r){const o=e.radius;for(const a of r.obstacles){if(!a.solid)continue;const l=a.x-a.w/2-o,c=a.x+a.w/2+o,h=a.z-a.d/2-o,u=a.z+a.d/2+o;t>l&&t<c&&n>h&&n<u&&(s?(t=e.vel.x>0?l:c,e.vel.x=0):(n=e.vel.y>0?h:u,e.vel.y=0))}return s?t:n}}class lp{constructor(){Q(this,"totalScore",0);Q(this,"totalTurkeys",0);Q(this,"totalBronze",0);Q(this,"totalMissed",0);Q(this,"bestCombo",1);Q(this,"levelScore",0);Q(this,"levelMissed",0);Q(this,"levelBronze",0);Q(this,"combo",1);Q(this,"comboTimer",0)}startLevel(){this.levelScore=0,this.levelMissed=0,this.levelBronze=0,this.combo=1,this.comboTimer=0}update(e){this.comboTimer>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1))}flip(e){this.comboTimer>0?this.combo=Math.min(Jf,this.combo+1):this.combo=1,this.comboTimer=Zf;const n=(e?jf:$f)*this.combo;return this.levelScore+=n,this.totalScore+=n,this.totalTurkeys+=1,e&&(this.levelBronze+=1,this.totalBronze+=1),this.combo>this.bestCombo&&(this.bestCombo=this.combo),n}miss(){return this.levelMissed+=1,this.totalMissed+=1,this.levelScore+=Vs,this.totalScore+=Vs,this.combo=1,this.comboTimer=0,Vs}hazard(){return this.levelScore+=Ws,this.totalScore+=Ws,Ws}applyLevelBonuses(e){const t=[];e&&t.push({label:"Target reached",value:10}),this.levelMissed<3&&t.push({label:"Fewer than 3 misses",value:5}),this.levelBronze>=1&&t.push({label:"Bronze turkey flipped",value:5});for(const n of t)this.levelScore+=n.value,this.totalScore+=n.value;return t}grade(){const e=this.totalScore;return e>=180?"S":e>=140?"A":e>=100?"B":e>=70?"C":"D"}resetGame(){this.totalScore=0,this.totalTurkeys=0,this.totalBronze=0,this.totalMissed=0,this.bestCombo=1,this.startLevel()}}class cp{constructor(e){Q(this,"particles",[]);Q(this,"scene");Q(this,"shake",0);Q(this,"visionEl");Q(this,"vision",0);this.scene=e;const t=new ft(.12,5,4),n=new kt({color:16777215,transparent:!0});for(let s=0;s<220;s++){const r=new le(t,n.clone());r.visible=!1,e.add(r),this.particles.push({mesh:r,vel:new P,life:0,maxLife:1,active:!1})}this.visionEl=document.createElement("div"),this.visionEl.style.cssText=`
      position:fixed;inset:0;pointer-events:none;z-index:50;
      background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(220,235,255,0.8));
      opacity:0;transition:none;`,document.body.appendChild(this.visionEl)}spawnSpray(e,t){const n=t?90:42,s=t?6.5:4.5;let r=0;for(const o of this.particles){if(o.active)continue;o.active=!0,o.mesh.visible=!0,o.mesh.position.set(e.x,e.y+.6,e.z);const a=Math.random()*Math.PI*2,l=.6+Math.random()*1,c=.4+Math.random()*1;o.vel.set(Math.cos(a)*c*s,l*s,Math.sin(a)*c*s),o.maxLife=.6+Math.random()*.5,o.life=o.maxLife;const h=(t?1.4:1)*(.6+Math.random()*.8);if(o.mesh.scale.setScalar(h),r++,r>=n)break}this.vision=Math.max(this.vision,t?.95:.7),this.shake=Math.max(this.shake,t?.55:.32)}update(e){for(const t of this.particles){if(!t.active)continue;if(t.life-=e,t.life<=0){t.active=!1,t.mesh.visible=!1;continue}t.vel.y-=14*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.position.y<.1&&(t.mesh.position.y=.1,t.vel.y*=-.35,t.vel.x*=.6,t.vel.z*=.6);const n=t.mesh.material;n.opacity=Math.min(1,t.life/t.maxLife)}this.vision>0&&(this.vision-=e*1.8,this.vision<0&&(this.vision=0),this.visionEl.style.opacity=String(this.vision)),this.shake>0&&(this.shake-=e*1.6,this.shake<0&&(this.shake=0))}shakeOffset(){if(this.shake<=0)return new P;const e=this.shake*.4;return new P((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e)}clear(){for(const e of this.particles)e.active=!1,e.mesh.visible=!1;this.vision=0,this.shake=0,this.visionEl.style.opacity="0"}}class hp{constructor(e){Q(this,"root");Q(this,"hudBar");Q(this,"prompt");Q(this,"crosshair");Q(this,"overlay");Q(this,"overlayContent");Q(this,"popups");Q(this,"fTime");Q(this,"fScore");Q(this,"fCombo");Q(this,"fLevel");Q(this,"fTarget");Q(this,"fActive");Q(this,"fActiveLabel");Q(this,"fMissed");this.root=e,this.build()}build(){this.crosshair=document.createElement("div"),this.crosshair.id="crosshair",this.crosshair.innerHTML="<span></span><span></span>",this.root.appendChild(this.crosshair),this.hudBar=document.createElement("div"),this.hudBar.id="hud",this.hudBar.innerHTML=`
      <div class="hud-cell"><label>TIME</label><b id="h-time">60</b></div>
      <div class="hud-cell"><label>SCORE</label><b id="h-score">0</b></div>
      <div class="hud-cell"><label>COMBO</label><b id="h-combo">x1</b></div>
      <div class="hud-cell"><label>LEVEL</label><b id="h-level">1</b></div>
      <div class="hud-cell"><label>TARGET</label><b id="h-target">20</b></div>
      <div class="hud-cell"><label id="h-active-label">TURKEYS</label><b id="h-active">15</b></div>
      <div class="hud-cell"><label>MISSED</label><b id="h-missed">0</b></div>`,this.root.appendChild(this.hudBar),this.prompt=document.createElement("div"),this.prompt.id="prompt",this.prompt.textContent="Left-click or E to Flip",this.prompt.style.display="none",this.root.appendChild(this.prompt),this.popups=document.createElement("div"),this.popups.id="popups",this.root.appendChild(this.popups),this.overlay=document.createElement("div"),this.overlay.id="overlay",this.overlayContent=document.createElement("div"),this.overlayContent.id="overlay-content",this.overlay.appendChild(this.overlayContent),this.root.appendChild(this.overlay),this.fTime=this.q("h-time"),this.fScore=this.q("h-score"),this.fCombo=this.q("h-combo"),this.fLevel=this.q("h-level"),this.fTarget=this.q("h-target"),this.fActive=this.q("h-active"),this.fActiveLabel=this.q("h-active-label"),this.fMissed=this.q("h-missed"),this.setHudVisible(!1)}q(e){return this.hudBar.querySelector("#"+e)}setHudVisible(e){this.hudBar.style.display=e?"flex":"none",this.crosshair.style.display=e?"block":"none"}setCritterLabel(e){this.fActiveLabel.textContent=e}setFlipVerb(e){this.prompt.textContent=`Left-click or E to ${e}`}update(e){this.fTime.textContent=Math.ceil(e.time).toString(),this.fTime.classList.toggle("danger",e.time<=10),this.fScore.textContent=e.score.toString(),this.fCombo.textContent="x"+e.combo,this.fCombo.classList.toggle("hot",e.combo>=3),this.fLevel.textContent=e.level+1+"/7",this.fTarget.textContent=e.target.toString(),this.fActive.textContent=e.active.toString(),this.fMissed.textContent=e.missed.toString()}showPrompt(e){this.prompt.style.display=e?"block":"none"}popup(e,t){const n=document.createElement("div");n.className="popup "+t,n.textContent=e,n.style.left=50+(Math.random()*16-8)+"%",this.popups.appendChild(n),setTimeout(()=>n.remove(),950)}show(e){this.overlayContent.innerHTML=e,this.overlay.style.display="flex"}hideOverlay(){this.overlay.style.display="none"}showStart(e){this.setHudVisible(!1),this.show(`
      <h1>🦃 FLIP RUSH<br><span class="accent">BARN &amp; BEYOND</span></h1>
      <p class="tag">Flip as many critters as you can across 7 wild levels — turkeys,
      hens, chickens, salmon, shrimp, pigs and... office staff.</p>
      <div class="instructions">
        <div><kbd>↑</kbd> Back &nbsp; <kbd>↓</kbd> Forward &nbsp; <kbd>←</kbd><kbd>→</kbd> Strafe &nbsp;(or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>) &nbsp; · &nbsp; <kbd>Mouse</kbd> Look</div>
        <div><kbd>Left-click</kbd> or <kbd>E</kbd> Flip when in range &nbsp; · &nbsp; <kbd>Shift</kbd> Sprint</div>
        <div><kbd>Click</kbd> Lock mouse &nbsp; · &nbsp; <kbd>Esc</kbd> Release</div>
        <div class="hint">Build combos by flipping fast (up to 5×). Hunt the rare
        <b class="bronze">Golden</b> critters for 5 points. Score carries across all
        levels — top the <b>leaderboard</b> at the end. Mind mud, gates and machinery.</div>
      </div>
      <button id="btn-start">START GAME</button>
      <p class="grades">Grades — S:180+ · A:140 · B:100 · C:70 · D:&lt;70</p>
    `),this.bind("btn-start",e)}showLevelIntro(e,t){this.setHudVisible(!1),this.show(`
      <h2>LEVEL ${e.index+1} / 7</h2>
      <h1 class="accent">${e.name}</h1>
      <p class="tag">${e.subtitle}</p>
      <div class="instructions">
        <div>Target this level: <b>${e.targetScore}</b></div>
        <div>${e.normalCount} ${e.critterLabel.toLowerCase()} + ${e.bronzeCount} ${e.specialLabel}${e.bronzeCount>1?"s":""} · 60 seconds</div>
      </div>
      <button id="btn-go">CLICK TO ENTER</button>
    `),this.bind("btn-go",t)}showLevelComplete(e,t,n,s,r){this.setHudVisible(!1);const o=n.length?n.map(a=>`<div class="bonus">+${a.value} &nbsp;${a.label}</div>`).join(""):'<div class="bonus muted">No bonuses</div>';this.show(`
      <h2 class="win">LEVEL ${e.index+1} COMPLETE!</h2>
      <div class="instructions">
        <div>Level score: <b>${t}</b></div>
        ${o}
        <div class="total">Running total: <b>${s}</b></div>
      </div>
      <button id="btn-next">NEXT LEVEL ▶</button>
    `),this.bind("btn-next",r)}showLevelFail(e,t,n,s,r){this.setHudVisible(!1),this.show(`
      <h2 class="lose">LEVEL ${e.index+1} FAILED</h2>
      <p class="tag">You scored <b>${t}</b> but needed <b>${n}</b>.</p>
      <div class="btn-row">
        <button id="btn-retry">RETRY LEVEL</button>
        <button id="btn-restart" class="secondary">RESTART GAME</button>
      </div>
    `),this.bind("btn-retry",s),this.bind("btn-restart",r)}showFinal(e,t,n){this.setHudVisible(!1);const s=t.qualifies(e.totalScore);this.show(`
      <h2 class="${e.won?"win":"lose"}">
        ${e.won?"RUN COMPLETE!":"GAME OVER"}
      </h2>
      <div class="grade-badge grade-${e.grade}">${e.grade}</div>
      <div class="instructions results">
        <div>Total score <b>${e.totalScore}</b></div>
        <div>Levels cleared <b>${e.levelsCleared} / 7</b></div>
        <div>Critters flipped <b>${e.flipped}</b></div>
        <div>Golden flipped <b>${e.golden}</b></div>
        <div>Missed attempts <b>${e.missed}</b></div>
        <div>Best combo <b>x${e.bestCombo}</b></div>
      </div>
      <div id="lb-section"></div>
      <button id="btn-again">PLAY AGAIN</button>
    `),this.bind("btn-again",n);const r=this.overlayContent.querySelector("#lb-section");if(s){r.innerHTML=`
        <h3 class="lb-title">🏆 NEW HIGH SCORE — ENTER YOUR NAME</h3>
        <div class="name-row">
          <input id="lb-name" maxlength="12" placeholder="AAA" autocomplete="off" />
          <button id="lb-save">SAVE</button>
        </div>
        <div id="lb-table"></div>`;const o=r.querySelector("#lb-name"),a=r.querySelector("#lb-save"),l=r.querySelector("#lb-table");l.innerHTML=this.renderTable(t.load(),-1),setTimeout(()=>o.focus(),50);const c=()=>{var m;const{list:h,rank:u}=t.add(o.value,e.totalScore);(m=r.querySelector(".name-row"))==null||m.remove();const f=r.querySelector(".lb-title");f&&(f.textContent="🏆 LEADERBOARD"),l.innerHTML=this.renderTable(h,u)};a.addEventListener("click",c),o.addEventListener("keydown",h=>{h.key==="Enter"&&c()})}else r.innerHTML=`
        <h3 class="lb-title">🏆 LEADERBOARD</h3>
        <div id="lb-table">${this.renderTable(t.load(),-1)}</div>`}renderTable(e,t){return e.length?`<div class="lb-table">${e.map((s,r)=>`
        <div class="lb-row${r===t?" me":""}">
          <span class="lb-rank">${r+1}</span>
          <span class="lb-name">${this.escape(s.name)}</span>
          <span class="lb-score">${s.score}</span>
        </div>`).join("")}</div>`:'<div class="lb-empty">No scores yet — be the first!</div>'}escape(e){return e.replace(/[<>&"]/g,t=>t==="<"?"&lt;":t===">"?"&gt;":t==="&"?"&amp;":"&quot;")}bind(e,t){const n=this.overlayContent.querySelector("#"+e);n&&n.addEventListener("click",t)}}class up{constructor(){Q(this,"key","tfbr_leaderboard_v1");Q(this,"max",10)}load(){try{const e=localStorage.getItem(this.key);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t.filter(n=>typeof n.score=="number"&&typeof n.name=="string").sort((n,s)=>s.score-n.score).slice(0,this.max):[]}catch{return[]}}add(e,t){const s={name:(e||"ANON").trim().slice(0,12).toUpperCase()||"ANON",score:t,date:new Date().toISOString().slice(0,10)},r=this.load();r.push(s),r.sort((l,c)=>c.score-l.score);const o=r.slice(0,this.max);try{localStorage.setItem(this.key,JSON.stringify(o))}catch{}let a=-1;for(let l=0;l<o.length;l++)if(o[l].name===s.name&&o[l].score===s.score&&o[l].date===s.date){a=l;break}return{list:o,rank:a}}qualifies(e){const t=this.load();return t.length<this.max||e>t[t.length-1].score}}class dp{constructor(e){Q(this,"renderer");Q(this,"scene");Q(this,"camera");Q(this,"clock",new qf);Q(this,"levelManager",new ep);Q(this,"ai",new op);Q(this,"scoring",new lp);Q(this,"leaderboard",new up);Q(this,"effects");Q(this,"hud");Q(this,"player");Q(this,"hemiLight");Q(this,"dirLight");Q(this,"ambLight");Q(this,"world",null);Q(this,"worldGroup",null);Q(this,"turkeys",[]);Q(this,"state","start");Q(this,"levelIndex",0);Q(this,"timeLeft",Ha);Q(this,"currentTarget",null);Q(this,"hazardCooldown",0);Q(this,"loop",()=>{requestAnimationFrame(this.loop);const e=Math.min(.05,this.clock.getDelta()),t=this.clock.elapsedTime;this.state==="playing"&&this.world&&(this.timeLeft-=e,this.scoring.update(e),this.player.update(e,this.world.obstacles,this.world.halfW,this.world.halfD),this.ai.update(this.turkeys,this.player.position2D,this.world,Zn[this.levelIndex],e),this.updateEquipment(e),this.updateTarget(),this.hud.update({time:Math.max(0,this.timeLeft),score:this.scoring.levelScore,combo:this.scoring.combo,level:this.levelIndex,target:Zn[this.levelIndex].targetScore,active:this.activeCount(),missed:this.scoring.levelMissed}),this.timeLeft<=0&&(this.hud.showPrompt(!1),this.endLevel()));for(const n of this.turkeys)n.syncTransform(e,t);if(this.effects.update(e),this.state==="playing"||this.state==="paused"){const n=this.effects.shakeOffset();this.camera.position.add(n)}this.renderer.render(this.scene,this.camera)});this.scene=new Gf,this.scene.background=new ke(1709072),this.scene.fog=new ns(1709072,30,80),this.camera=new It(78,window.innerWidth/window.innerHeight,.1,300),this.renderer=new yo({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.id="game-canvas",e.appendChild(this.renderer.domElement),this.setupLights(),this.effects=new cp(this.scene),this.hud=new hp(e),this.player=new rp(this.camera,this.renderer.domElement),this.bindInput(),window.addEventListener("resize",()=>this.onResize()),this.hud.showStart(()=>this.startGame()),this.loop(),window.__game=this}setupLights(){this.hemiLight=new Hf(16773328,4205080,.9),this.scene.add(this.hemiLight),this.dirLight=new Wf(16770736,.7),this.dirLight.position.set(20,40,10),this.scene.add(this.dirLight),this.ambLight=new Xf(16777215,.25),this.scene.add(this.ambLight)}applyTheme(e){this.scene.background=new ke(e.bg),this.scene.fog=new ns(e.fogColor,e.fogNear,e.fogFar),this.hemiLight.color.setHex(e.hemiSky),this.hemiLight.groundColor.setHex(e.hemiGround),this.hemiLight.intensity=e.hemiInt,this.dirLight.color.setHex(e.dirColor),this.dirLight.intensity=e.dirInt,this.ambLight.intensity=e.ambInt}bindInput(){this.renderer.domElement.addEventListener("mousedown",e=>{e.button===0&&(this.state==="playing"&&this.player.enabled?this.tryFlip():(this.state==="playing"||this.state==="paused")&&this.player.requestLock())}),document.addEventListener("keydown",e=>{e.repeat||e.code==="KeyE"&&this.state==="playing"&&this.player.enabled&&this.tryFlip()}),document.addEventListener("pointerlockchange",()=>{this.state==="playing"&&!this.player.enabled?this.state="paused":this.state==="paused"&&this.player.enabled&&(this.state="playing")})}startGame(){this.scoring.resetGame(),this.levelIndex=0,this.hud.hideOverlay(),this.enterLevelIntro()}enterLevelIntro(){this.state="intro";const e=Zn[this.levelIndex];this.buildLevel(e),this.hud.setCritterLabel(e.critterLabel),this.hud.setFlipVerb(e.flipVerb),this.hud.showLevelIntro(e,()=>{this.hud.hideOverlay(),this.beginPlay()})}beginPlay(){this.state="playing",this.timeLeft=Ha,this.scoring.startLevel(),this.hud.setHudVisible(!0),this.player.requestLock()}buildLevel(e){this.teardownLevel();const t=this.levelManager.build(e);this.world=t,this.worldGroup=t.group,this.scene.add(t.group),this.applyTheme(t.theme),this.turkeys=[];const n=t.spawnPoints.slice();this.shuffle(n);const s=e.normalCount+e.bronzeCount;let r=0;for(let o=0;o<s;o++){const a=o>=e.normalCount,l=n[o%n.length],c=l.x+(Math.random()-.5)*2,h=l.y+(Math.random()-.5)*2;o%4===0&&r++;const u=new ap(c,h,a,e.species,e.baseSpeed,e.fleeSpeed,r);this.turkeys.push(u),this.scene.add(u.group)}this.player.reset(t.playerStart),this.effects.clear()}teardownLevel(){for(const e of this.turkeys)this.scene.remove(e.group),e.dispose();this.turkeys=[],this.worldGroup&&(this.scene.remove(this.worldGroup),this.worldGroup=null),this.world=null}endLevel(){this.player.releaseLock();const e=Zn[this.levelIndex];if(this.scoring.levelScore>=e.targetScore){const n=this.scoring.applyLevelBonuses(!0);this.levelIndex>=Zn.length-1?this.showFinal(!0):(this.state="levelComplete",this.hud.setHudVisible(!1),this.hud.showLevelComplete(e,this.scoring.levelScore,n,this.scoring.totalScore,()=>{this.levelIndex++,this.hud.hideOverlay(),this.enterLevelIntro()}))}else this.state="levelFail",this.hud.setHudVisible(!1),this.hud.showLevelFail(e,this.scoring.levelScore,e.targetScore,()=>{this.scoring.totalScore-=this.scoring.levelScore,this.hud.hideOverlay(),this.enterLevelIntro()},()=>{this.hud.hideOverlay(),this.startGame()})}showFinal(e){this.state="final",this.player.releaseLock(),this.teardownLevel(),this.hud.setHudVisible(!1),this.hud.showFinal({totalScore:this.scoring.totalScore,flipped:this.scoring.totalTurkeys,golden:this.scoring.totalBronze,missed:this.scoring.totalMissed,bestCombo:this.scoring.bestCombo,grade:this.scoring.grade(),won:e,levelsCleared:e?Zn.length:this.levelIndex},this.leaderboard,()=>{this.hud.hideOverlay(),this.startGame()})}tryFlip(){if(this.currentTarget&&this.currentTarget.active){const e=this.currentTarget;e.flip();const t=this.scoring.flip(e.isBronze);this.effects.spawnSpray(new P(e.pos.x,e.hoverY+.6,e.pos.y),e.isBronze),this.hud.popup((e.isBronze?"GOLDEN! ":"")+"+"+t+(this.scoring.combo>1?` (x${this.scoring.combo})`:""),e.isBronze?"bronze":"good"),this.currentTarget=null}else{const e=this.scoring.miss();this.hud.popup(e.toString(),"bad")}}updateTarget(){if(!this.world)return;const e=this.player.position2D,t=this.player.forwardDir();let n=null,s=-1/0;for(const r of this.turkeys){if(!r.active)continue;const o=r.pos.x-e.x,a=r.pos.y-e.y,l=Math.hypot(o,a);if(l>Qf)continue;const c=o/(l||1)*t.x+a/(l||1)*t.y;if(c<-.35)continue;const h=c*2-l;h>s&&(s=h,n=r)}this.currentTarget=n,this.hud.showPrompt(!!n)}updateEquipment(e){if(!this.world)return;for(const n of this.world.equipment){n.t+=n.speed*e*n.dir;const s=n.a.distanceTo(n.b);n.t>s?(n.t=s,n.dir=-1):n.t<0&&(n.t=0,n.dir=1);const r=s>0?n.t/s:0,o=n.a.x+(n.b.x-n.a.x)*r,a=n.a.y+(n.b.y-n.a.y)*r;n.mesh.position.set(o,0,a),n.spec.x=o,n.spec.z=a}this.hazardCooldown>0&&(this.hazardCooldown-=e);const t=this.player.position2D;for(const n of this.world.equipment){const s=n.spec;if(Math.abs(t.x-s.x)<s.w/2+.5&&Math.abs(t.y-s.z)<s.d/2+.5&&this.hazardCooldown<=0){const r=this.scoring.hazard();this.hud.popup(r.toString()+" HAZARD","bad"),this.effects.spawnSpray(new P(t.x,.6,t.y),!1),this.hazardCooldown=1.2}}}activeCount(){let e=0;for(const t of this.turkeys)t.active&&e++;return e}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}}const bo=document.getElementById("app");if(!bo)throw new Error("Missing #app root element");new dp(bo);
