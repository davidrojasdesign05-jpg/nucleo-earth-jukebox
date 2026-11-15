(()=>{var dd=Object.create;var Iu=Object.defineProperty;var pd=Object.getOwnPropertyDescriptor;var md=Object.getOwnPropertyNames;var gd=Object.getPrototypeOf,vd=Object.prototype.hasOwnProperty;var _d=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var xd=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of md(e))!vd.call(i,s)&&s!==t&&Iu(i,s,{get:()=>e[s],enumerable:!(n=pd(e,s))||n.enumerable});return i};var Pu=(i,e,t)=>(t=i!=null?dd(gd(i)):{},xd(e||!i||!i.__esModule?Iu(t,"default",{value:i,enumerable:!0}):t,i));var Jc=_d((wv,Kc)=>{var $g=(()=>{let e=[0,2,4,7,9],t=["bajo","arpegio","pulso","canto"],n={jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},s=d=>Math.min(1,Math.max(0,d)),r=d=>440*Math.pow(2,(d-69)/12);function a(d,y){let b=Math.imul(d>>>0,374761393)+Math.imul(y>>>0,668265263)>>>0;return b=Math.imul(b^b>>>13,1274126177)>>>0,b=(b^b>>>16)>>>0,b/4294967296}function o(d,y,b){let _=[];for(let C=0;C<y;C++)_.push(C*d%y<d);return _.map((C,A)=>_[((A-b)%y+y)%y])}let l=d=>d.reduce((y,b,_)=>b?y|1<<_:y,0);function c(d,y){let b=n[d],_=s(y.vit/100),C=s(y.div/100),A=s(y.est/100),w=s(y.pre/100),I=Math.max(1,Math.round(C*4)),S=s((A-.2)/.5),M=Math.round((.25+.75*_)*1e3),R=b.voices.map((F,B)=>{let G=t.indexOf(F.id)<I,X=Math.round(F.rot*S),W=o(F.k,16,X),J=W.map((re,ge)=>re?Math.floor(a(B+1,ge+1)*1e3):1e3),V=Math.min(...J),ne=W.map((re,ge)=>re&&(J[ge]<M||J[ge]===V));return{...F,active:G,rot:X,pattern:W,alive:ne,patternMask:l(W),mask:G?l(ne):0}});return{signatureId:d,tempo:b.tempo,voices:R,v:_,d:C,s:A,p:w,feverCents:y.fever||0,scaleSize:2+Math.round(C*3),jitterMs:Math.round((1-A)*70),detuneCents:Math.round((1-A)*40),bioCutoffHz:Math.round(12e3*Math.pow(.18333333333333332,w)),reverbWet:Math.round((.34-.26*w)*1e3)/1e3,anthroGain:Math.round(w*w*.55*1e3)/1e3,velocity:Math.round((.5+.5*_)*1e3)/1e3}}let u=d=>d.reduce((y,b)=>y+b,0)/d.length,h={jungla:{label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",vitals(d){let y=Math.max(...d.map(C=>C.value)),b=d.reduce((C,A)=>C+A.value,0),_=0;return d.map(C=>{_+=C.value;let A=_/b,w=C.value/y;return{year:C.year,value:C.value,vit:95-55*A,div:100-50*A,est:92-50*w,pre:5+80*w,fever:0}})}},hielo:{label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",vitals(d){let y=u(d.slice(0,10).map(b=>b.value));return d.map((b,_)=>{let C=s((y-b.value)/(y-3)),A=_===0?0:s(Math.abs(b.value-d[_-1].value)/1.5);return{year:b.year,value:b.value,vit:95-60*C,div:100-55*C,est:95-30*C-35*A,pre:5+75*C,fever:0}})}},gases:{label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",vitals(d){let y=d[0].value,b=Math.max(...d.map(A=>A.value)),_=d.map((A,w)=>w===0?d[1].value-A.value:A.value-d[w-1].value),C=Math.max(..._);return d.map((A,w)=>{let I=s((A.value-y)/(b-y)),S=s(_[w]/C),M=w===0?0:s(Math.abs(_[w]-_[w-1])/1.5);return{year:A.year,value:A.value,vit:95-45*I,div:100-45*I,est:95-35*I-20*M,pre:5+75*S,fever:50*I}})}}};function f(d,y,b){if(!d.melody)return-1;let _=Math.floor(y*d.melody.length/16);return Math.min(d.melody[_],b-1)}let p=d=>n[d].pressure||{type:"machine"},g=["bajo","canto","arpegio","pulso"];function v(d,y){for(let b of g){let _=d.voices.find(C=>C.id===b);if(_&&_.mask>>y&1)return{voice:b,hz:_.haptic.hz,amp:Math.round(_.haptic.amp*d.velocity*1e3)/1e3,ms:_.haptic.ms}}return null}return{REFERENCE:{vit:95,div:100,est:95,pre:5,fever:0},STEPS:16,PENTA:e,KEEP_ORDER:t,HAPTIC_PRIORITY:g,SIGNATURES:n,DASHBOARDS:h,clamp01:s,midiHz:r,hash01:a,euclid:o,maskOf:l,derive:c,hapticForStep:v,melodyDegree:f,pressureOf:p}})();typeof Kc<"u"&&(Kc.exports=$g)});var yd=0,Lu=1,Md=2;var ef=1,bd=2,qn=3,Un=0,Zt=1,Ft=2,_i=0,vs=1,pa=2,Du=3,Nu=4,Sd=5,Bi=100,Ed=101,Td=102,Ad=103,wd=104,Cd=200,Rd=201,Id=202,Pd=203,Yo=204,$o=205,Ld=206,Dd=207,Nd=208,Ud=209,zd=210,Od=211,Fd=212,Bd=213,kd=214,Zo=0,Ko=1,Jo=2,Ms=3,Qo=4,el=5,tl=6,nl=7,tf=0,Hd=1,Gd=2,xi=0,Vd=1,Wd=2,Xd=3,jd=4,qd=5,Yd=6,$d=7,Uu="attached",Zd="detached",nf=300,bs=301,Ss=302,il=303,sl=304,Va=306,Gi=1e3,$n=1001,lr=1002,Bt=1003,lc=1004;var ms=1005;var $t=1006,sr=1007;var Nn=1008;var Jn=1009,sf=1010,rf=1011,cr=1012,cc=1013,Vi=1014,An=1015,br=1016,uc=1017,hc=1018,Es=1020,af=35902,of=1021,lf=1022,un=1023,cf=1024,uf=1025,_s=1026,Ts=1027,fc=1028,dc=1029,hf=1030,pc=1031;var mc=1033,ca=33776,ua=33777,ha=33778,fa=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,ul=37492,hl=37496,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,vl=37813,_l=37814,xl=37815,yl=37816,Ml=37817,bl=37818,Sl=37819,El=37820,Tl=37821,da=36492,Al=36494,wl=36495,ff=36283,Cl=36284,Rl=36285,Il=36286;var As=2300,ws=2301,go=2302,zu=2400,Ou=2401,Fu=2402,Kd=2500;var df=0,Wa=1,Sr=2,Jd=3200,Qd=3201;var pf=0,ep=1,gi="",bt="srgb",kt="srgb-linear",Xa="linear",rt="srgb";var es=7680;var Bu=519,tp=512,np=513,ip=514,mf=515,sp=516,rp=517,ap=518,op=519,Pl=35044,gc=35048;var ku="300 es",Zn=2e3,ma=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,rr=Math.PI/180,Cs=180/Math.PI;function wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function vc(i,e){return(i%e+e)%e}function lp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cp(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function up(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function hp(i,e=1){return e-Math.abs(vc(i,e*2)-e)}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mp(i,e){return i+Math.random()*(e-i)}function gp(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(Hu=i);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _p(i){return i*rr}function xp(i){return i*Cs}function yp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gf={DEG2RAD:rr,RAD2DEG:Cs,generateUUID:wn,clamp:Ot,euclideanModulo:vc,mapLinear:lp,inverseLerp:cp,lerp:ar,damp:up,pingpong:hp,smoothstep:fp,smootherstep:dp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:vp,degToRad:_p,radToDeg:xp,isPowerOfTwo:yp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:Sp,normalize:it,denormalize:Tn},Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],b=s[4],_=s[7],C=s[2],A=s[5],w=s[8];return r[0]=a*v+o*y+l*C,r[3]=a*m+o*b+l*A,r[6]=a*d+o*_+l*w,r[1]=c*v+u*y+h*C,r[4]=c*m+u*b+h*A,r[7]=c*d+u*_+h*w,r[2]=f*v+p*y+g*C,r[5]=f*m+p*b+g*A,r[8]=f*d+p*_+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vo=new ze;function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=ur("canvas");return i.style.display="block",i}var Gu={};function nr(i){i in Gu||(Gu[i]=!0,console.warn(i))}function Tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ap(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var We={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Xa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vu=[.64,.33,.3,.6,.15,.06],Wu=[.2126,.7152,.0722],Xu=[.3127,.329],ju=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[kt]:{primaries:Vu,whitePoint:Xu,transfer:Xa,toXYZ:ju,fromXYZ:qu,luminanceCoefficients:Wu,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:Vu,whitePoint:Xu,transfer:rt,toXYZ:ju,fromXYZ:qu,luminanceCoefficients:Wu,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});var ts,Ll=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=ur("canvas")),ts.width=e.width,ts.height=e.height;let n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cp=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rp=0,It=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=$t,a=Nn,o=un,l=Jn,c=i.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=wn(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=nf;It.DEFAULT_ANISOTROPY=1;var Ze=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(p+1)/2,C=(d+1)/2,A=(u+f)/4,w=(h+v)/4,I=(g+m)/4;return b>_&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=w/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},va=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o,d=l*f+c*p+u*g+h*v,y=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let C=Math.sqrt(b),A=Math.atan2(C,d*y);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let _=o*y;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new P,Yu=new nn,hn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Or.subVectors(this.max,Ys),ns.subVectors(e.a,Ys),is.subVectors(e.b,Ys),ss.subVectors(e.c,Ys),ui.subVectors(is,ns),hi.subVectors(ss,is),Li.subVectors(ns,ss);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Li.z,Li.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Li.y,Li.x,0];return!yo(t,ns,is,ss,Or)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,ns,is,ss,Or))?!1:(Fr.crossVectors(ui,hi),t=[Fr.x,Fr.y,Fr.z],yo(t,ns,is,ss,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,zr=new hn,ns=new P,is=new P,ss=new P,ui=new P,hi=new P,Li=new P,Ys=new P,Or=new P,Fr=new P,Di=new P;function yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ip=new hn,$s=new P,Mo=new P,sn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);let t=$s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Mo)),this.expandByPoint($s.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new P,bo=new P,Br=new P,fi=new P,So=new P,kr=new P,Eo=new P,Wi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=fi.dot(this.direction),l=-fi.dot(Br),c=fi.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bo).addScaledVector(Br,f),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),kr.subVectors(n,e),Eo.crossVectors(So,kr);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let l=o*this.direction.dot(kr.crossVectors(fi,kr));if(l<0)return null;let c=o*this.direction.dot(So.cross(fi));if(c<0||l+c>a)return null;let u=-o*fi.dot(Eo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Lp)}lookAt(e,t,n){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),di.crossVectors(n,en),di.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),di.crossVectors(n,en)),di.normalize(),Hr.crossVectors(en,di),s[0]=di.x,s[4]=Hr.x,s[8]=en.x,s[1]=di.y,s[5]=Hr.y,s[9]=en.y,s[2]=di.z,s[6]=Hr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],b=n[7],_=n[11],C=n[15],A=s[0],w=s[4],I=s[8],S=s[12],M=s[1],R=s[5],F=s[9],B=s[13],G=s[2],X=s[6],W=s[10],J=s[14],V=s[3],ne=s[7],re=s[11],ge=s[15];return r[0]=a*A+o*M+l*G+c*V,r[4]=a*w+o*R+l*X+c*ne,r[8]=a*I+o*F+l*W+c*re,r[12]=a*S+o*B+l*J+c*ge,r[1]=u*A+h*M+f*G+p*V,r[5]=u*w+h*R+f*X+p*ne,r[9]=u*I+h*F+f*W+p*re,r[13]=u*S+h*B+f*J+p*ge,r[2]=g*A+v*M+m*G+d*V,r[6]=g*w+v*R+m*X+d*ne,r[10]=g*I+v*F+m*W+d*re,r[14]=g*S+v*B+m*J+d*ge,r[3]=y*A+b*M+_*G+C*V,r[7]=y*w+b*R+_*X+C*ne,r[11]=y*I+b*F+_*W+C*re,r[15]=y*S+b*B+_*J+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,C=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,A=t*y+n*b+s*_+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=y*w,e[1]=(v*f*r-h*m*r-v*s*p+n*m*p+h*s*d-n*f*d)*w,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*w,e[4]=b*w,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*w,e[8]=_*w,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*d-t*h*d)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=C*w,e[13]=(u*v*s-g*h*s+g*n*f-t*v*f-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,v=a*u,m=a*h,d=o*h,y=l*c,b=l*u,_=l*h,C=n.x,A=n.y,w=n.z;return s[0]=(1-(v+d))*C,s[1]=(p+_)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(f+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+b)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);let c=1/r,u=1/a,h=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Zn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===Zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ma)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u,g,v;if(o===Zn)g=(a+r)*h,v=-2*h;else if(o===ma)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rs=new P,Sn=new we,Pp=new P(0,0,0),Lp=new P(1,1,1),di=new P,Hr=new P,en=new P,$u=new we,Zu=new nn,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,Ku=new P,as=new nn,Vn=new we,Gr=new P,Zs=new P,Np=new P,Up=new nn,Ju=new P(1,0,0),Qu=new P(0,1,0),eh=new P(0,0,1),th={type:"added"},zp={type:"removed"},os={type:"childadded",child:null},To={type:"childremoved",child:null},mt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zn,n=new nn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new ze}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Zs,Gr,this.up):Vn.lookAt(Gr,Zs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Vn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zp),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new P,Wn=new P,Ao=new P,Xn=new P,ls=new P,cs=new P,nh=new P,wo=new P,Co=new P,Ro=new P,Io=new Ze,Po=new Ze,Lo=new Ze,ki=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Wn.subVectors(n,t),Ao.subVectors(e,t);let a=En.dot(En),o=En.dot(Wn),l=En.dot(Ao),c=Wn.dot(Wn),u=Wn.dot(Ao),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Io.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Io.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Wn.subVectors(e,t),En.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),cs.subVectors(r,n),wo.subVectors(e,n);let l=ls.dot(wo),c=cs.dot(wo);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,s);let u=ls.dot(Co),h=cs.dot(Co);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ls,a);Ro.subVectors(e,r);let p=ls.dot(Ro),g=cs.dot(Ro);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(cs,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return nh.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(nh,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=vc(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return We.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ot(zt.r*255,0,255))*65536+Math.round(Ot(zt.g*255,0,255))*256+Math.round(Ot(zt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=bt){We.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Vr);let n=ar(pi.h,Vr.h,t),s=ar(pi.s,Vr.s,t),r=ar(pi.l,Vr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ee;Ee.NAMES=_f;var Op=0,rn=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=wn(),this.name="",this.blending=vs,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},St=class extends rn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new P,Wr=new Le,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}};var _a=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xa=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fp=0,cn=new we,No=new mt,us=new P,tn=new hn,Ks=new hn,Rt=new P,dt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?xa:_a)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,Ks.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Ks.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Ks.min),tn.expandByPoint(Ks.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Rt.add(us)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,u=new P,h=new P,f=new Le,p=new Le,g=new Le,v=new P,m=new P;function d(I,S,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(v),o[S].add(v),o[M].add(v),l[I].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,S=y.length;I<S;++I){let M=y[I],R=M.start,F=M.count;for(let B=R,G=R+F;B<G;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new P,_=new P,C=new P,A=new P;function w(I){C.fromBufferAttribute(s,I),A.copy(C);let S=o[I];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(A,S);let R=_.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,R)}for(let I=0,S=y.length;I<S;++I){let M=y[I],R=M.start,F=M.count;for(let B=R,G=R+F;B<G;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new At(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new we,Ni=new Wi,Xr=new sn,sh=new P,jr=new P,qr=new P,Yr=new P,Uo=new P,$r=new P,rh=new P,Zr=new P,Ke=class extends mt{constructor(e=new dt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Uo.fromBufferAttribute(h,e),a?$r.addScaledVector(Uo,u):$r.addScaledVector(Uo.sub(t),u))}t.add($r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Xr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Xr,sh)===null||Ni.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=b;_<C;_+=3){let A=o.getX(_),w=o.getX(_+1),I=o.getX(_+2);s=Kr(this,d,e,n,c,u,h,A,w,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=Kr(this,a,e,n,c,u,h,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=b;_<C;_+=3){let A=_,w=_+1,I=_+2;s=Kr(this,d,e,n,c,u,h,A,w,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=m,b=m+1,_=m+2;s=Kr(this,a,e,n,c,u,h,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Bp(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Un,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:i}}function Kr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,jr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Yr);let u=Bp(i,e,t,n,jr,qr,Yr,rh);if(u){let h=new P;ki.getBarycoord(rh,jr,qr,Yr,h),s&&(u.uv=ki.getInterpolatedAttribute(s,o,l,c,h,new Le)),r&&(u.uv1=ki.getInterpolatedAttribute(r,o,l,c,h,new Le)),a&&(u.normal=ki.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};ki.getNormal(jr,qr,Yr,f.normal),u.face=f,u.barycoord=h}return u}var Mi=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(v,m,d,y,b,_,C,A,w,I,S){let M=_/w,R=C/I,F=_/2,B=C/2,G=A/2,X=w+1,W=I+1,J=0,V=0,ne=new P;for(let re=0;re<W;re++){let ge=re*R-B;for(let De=0;De<X;De++){let Ye=De*M-F;ne[v]=Ye*y,ne[m]=ge*b,ne[d]=G,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[d]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(De/w),h.push(1-re/I),J+=1}}for(let re=0;re<I;re++)for(let ge=0;ge<w;ge++){let De=f+ge+X*re,Ye=f+ge+X*(re+1),q=f+(ge+1)+X*(re+1),Q=f+(ge+1)+X*re;l.push(De,Ye,Q),l.push(Ye,q,Q),V+=6}o.addGroup(p,V,S),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function kp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Hp={clone:Rs,merge:Wt},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends rn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ya=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new P,ah=new Le,oh=new Le,Tt=class extends ya{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ah,oh),t.subVectors(oh,ah)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,fs=1,Ul=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(hs,fs,e,t);s.layers=this.layers,this.add(s);let r=new Tt(hs,fs,e,t);r.layers=this.layers,this.add(r);let a=new Tt(hs,fs,e,t);a.layers=this.layers,this.add(a);let o=new Tt(hs,fs,e,t);o.layers=this.layers,this.add(o);let l=new Tt(hs,fs,e,t);l.layers=this.layers,this.add(l);let c=new Tt(hs,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends It{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zl=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ma(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:_i});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=$t),new Ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},zo=new P,Wp=new P,Xp=new ze,Yn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zo.subVectors(n,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xp.getNormalMatrix(e),s=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new sn,Jr=new P,fr=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],b=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+u,m+g,_+y).normalize(),n[3].setComponents(l-a,f-u,m-g,_-y).normalize(),n[4].setComponents(l-o,f-h,m-v,_-b).normalize(),t===Zn)n[5].setComponents(l+o,f+h,m+v,_+b).normalize();else if(t===ma)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Jr.x=s.normal.x>0?e.max.x:e.min.x,Jr.y=s.normal.y>0?e.max.y:e.min.y,Jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jp(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Is=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let y=d*f-a;for(let b=0;b<c;b++){let _=b*h-r;g.push(_,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let b=y+c*d,_=y+c*(d+1),C=y+1+c*(d+1),A=y+1+c*d;p.push(b,_,A),p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,X0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,j0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e1=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,t1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,o1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,l1=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,c1=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,u1=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,h1=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,f1=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,d1=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p1=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,m1=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,g1=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,v1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_1=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,x1=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,y1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,M1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,S1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,T1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Be={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:h0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:_0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:b0,colorspace_fragment:S0,colorspace_pars_fragment:E0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:w0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:I0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:U0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:O0,lights_pars_begin:F0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:j0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:um,normal_fragment_maps:hm,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:xm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Im,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:zm,specularmap_pars_fragment:Om,tonemapping_fragment:Fm,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:jm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:$m,cube_vert:Zm,cube_frag:Km,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:s1,linedashed_frag:r1,meshbasic_vert:a1,meshbasic_frag:o1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:u1,meshmatcap_frag:h1,meshnormal_vert:f1,meshnormal_frag:d1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:x1,points_vert:y1,points_frag:M1,shadow_vert:b1,shadow_frag:S1,sprite_vert:E1,sprite_frag:T1},se={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([se.lights,se.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Dn.physical={uniforms:Wt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Qr={r:0,b:0,g:0},zi=new zn,A1=new we;function w1(i,e,t,n,s,r,a){let o=new Ee(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1,_=g(y);_===null?d(o,l):_&&_.isColor&&(d(_,1),b=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Va)?(u===void 0&&(u=new Ke(new Mi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Rs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(b.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(zi)),u.material.toneMapped=We.getTransfer(_.colorSpace)!==rt,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ke(new Is(2,2),new On({name:"BackgroundMaterial",uniforms:Rs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=We.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,b){y.getRGB(Qr,xf(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:m}}function C1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,R,F,B,G){let X=!1,W=h(B,F,R);r!==W&&(r=W,c(r.object)),X=p(M,B,F,G),X&&g(M,B,F,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(M,R,F,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,F){let B=F.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let X=G[R.id];X===void 0&&(X={},G[R.id]=X);let W=X[B];return W===void 0&&(W=f(l()),X[B]=W),W}function f(M){let R=[],F=[],B=[];for(let G=0;G<t;G++)R[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,R,F,B){let G=r.attributes,X=R.attributes,W=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let re=G[V],ge=X[V];if(ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(M,R,F,B){let G={},X=R.attributes,W=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let re=X[V];re===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));let ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),G[V]=ge,W++}r.attributes=G,r.attributesNum=W,r.index=B}function v(){let M=r.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){let F=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;F[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),G[M]!==R&&(i.vertexAttribDivisor(M,R),G[M]=R)}function y(){let M=r.newAttributes,R=r.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==M[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function b(M,R,F,B,G,X,W){W===!0?i.vertexAttribIPointer(M,R,F,G,X):i.vertexAttribPointer(M,R,F,B,G,X)}function _(M,R,F,B){v();let G=B.attributes,X=F.getAttributes(),W=R.defaultAttributeValues;for(let J in X){let V=X[J];if(V.location>=0){let ne=G[J];if(ne===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){let re=ne.normalized,ge=ne.itemSize,De=e.get(ne);if(De===void 0)continue;let Ye=De.buffer,q=De.type,Q=De.bytesPerElement,ve=q===i.INT||q===i.UNSIGNED_INT||ne.gpuType===cc;if(ne.isInterleavedBufferAttribute){let ie=ne.data,Ae=ie.stride,Re=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe,ie.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<V.locationSize;Oe++)b(V.location+Oe,ge/V.locationSize,q,re,Ae*Q,(Re+ge/V.locationSize*Oe)*Q,ve)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)d(V.location+ie,ne.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<V.locationSize;ie++)m(V.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ie=0;ie<V.locationSize;ie++)b(V.location+ie,ge/V.locationSize,q,re,ge*Q,ge/V.locationSize*ie*Q,ve)}}else if(W!==void 0){let re=W[J];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(V.location,re);break;case 3:i.vertexAttrib3fv(V.location,re);break;case 4:i.vertexAttrib4fv(V.location,re);break;default:i.vertexAttrib1fv(V.location,re)}}}}y()}function C(){I();for(let M in n){let R=n[M];for(let F in R){let B=R[F];for(let G in B)u(B[G].object),delete B[G];delete R[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let F in R){let B=R[F];for(let G in B)u(B[G].object),delete B[G];delete R[F]}delete n[M.id]}function w(M){for(let R in n){let F=n[R];if(F[M.id]===void 0)continue;let B=F[M.id];for(let G in B)u(B[G].object),delete B[G];delete F[M.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function R1(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function I1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let I=w===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function P1(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,b=y*4,_=d.clippingState||null;l.value=_,_=u(g,f,b,p);for(let C=0;C!==b;++C)_[C]=t[C];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function L1(i){let e=new WeakMap;function t(a,o){return o===il?a.mapping=bs:o===sl&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===il||o===sl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ps=class extends ya{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=4,lh=[.125,.215,.35,.446,.526,.582],Hi=20,Oo=new Ps,ch=new Ee,Fo=null,Bo=0,ko=0,Ho=!1,Fi=(1+Math.sqrt(5))/2,ds=1/Fi,uh=[new P(-Fi,ds,0),new P(Fi,ds,0),new P(-ds,0,Fi),new P(ds,0,Fi),new P(0,Fi,-ds),new P(0,Fi,ds),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ba=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Bo,ko),this._renderer.xr.enabled=Ho,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:br,format:un,colorSpace:kt,depthBuffer:!1},s=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(r)),this._blurMaterial=N1(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s){let o=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ch),u.toneMapping=xi,u.autoClear=!1;let p=new St({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Ke(new Mi,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(ch),v=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let b=this._cubeSize;ea(s,y*b,d>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ke(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let d=[],y=0;for(let w=0;w<Hi;++w){let I=w/v,S=Math.exp(-I*I/2);d.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let _=this._sizeLods[s],C=3*_*(s>b-gs?s-b+gs:0),A=4*(this._cubeSize-_);ea(t,C,A,3*_,2*_),l.setRenderTarget(t),l.render(h,Oo)}};function D1(i){let e=[],t=[],n=[],s=i,r=i-gs+1+lh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-gs?l=lh[a-i+gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),b=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let A=0;A<p;A++){let w=A%3*2/3-1,I=A>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(S,v*g*A),b.set(f,m*g*A);let M=[A,A,A,A,A,A];_.set(M,d*g*A)}let C=new dt;C.setAttribute("position",new At(y,v)),C.setAttribute("uv",new At(b,m)),C.setAttribute("faceIndex",new At(_,d)),e.push(C),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(i,e,t){let n=new Qn(i,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N1(i,e,t){let n=new Float32Array(Hi),s=new P(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function fh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function dh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function U1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===il||l===sl,u=l===bs||l===Ss;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ba(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ba(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function z1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O1(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let b=0,_=y.length;b<_;b+=3){let C=y[b+0],A=y[b+1],w=y[b+2];f.push(C,A,A,w,w,C)}}else if(g!==void 0){let y=g.array;v=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let C=b+0,A=b+1,w=b+2;f.push(C,A,A,w,w,C)}}else return;let m=new(vf(f)?xa:_a)(f,1);m.version=v;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function F1(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function B1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function k1(i,e,t){let n=new WeakMap,s=new Ze;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*C*4*h),w=new va(A,_,C,h);w.type=An,w.needsUpdate=!0;let I=b*4;for(let M=0;M<h;M++){let R=m[M],F=d[M],B=y[M],G=_*C*4*M;for(let X=0;X<R.count;X++){let W=X*I;p===!0&&(s.fromBufferAttribute(R,X),A[G+W+0]=s.x,A[G+W+1]=s.y,A[G+W+2]=s.z,A[G+W+3]=0),g===!0&&(s.fromBufferAttribute(F,X),A[G+W+4]=s.x,A[G+W+5]=s.y,A[G+W+6]=s.z,A[G+W+7]=0),v===!0&&(s.fromBufferAttribute(B,X),A[G+W+8]=s.x,A[G+W+9]=s.y,A[G+W+10]=s.z,A[G+W+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new Le(_,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function H1(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Sa=class extends It{constructor(e,t,n,s,r,a,o,l,c,u=_s){if(u!==_s&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Vi),n===void 0&&u===Ts&&(n=Es),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mf=new It,ph=new Sa(1,1),bf=new va,Sf=new Nl,Ef=new Ma,mh=[],gh=[],vh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ja(i,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function W1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function X1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function j1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),Ct(t,n)}}function q1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;_h.set(n),i.uniformMatrix3fv(this.addr,!1,_h),Ct(t,n)}}function Y1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Ct(t,n)}}function $1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function K1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function J1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Q1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function t2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function n2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function i2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=mf,r=ph):r=Mf,t.setTexture2D(e||r,s)}function s2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sf,s)}function r2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ef,s)}function a2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function o2(i){switch(i){case 5126:return G1;case 35664:return V1;case 35665:return W1;case 35666:return X1;case 35674:return j1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return $1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return J1;case 5125:return Q1;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return a2}}function l2(i,e){i.uniform1fv(this.addr,e)}function c2(i,e){let t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function u2(i,e){let t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function h2(i,e){let t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function f2(i,e){let t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d2(i,e){let t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p2(i,e){let t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m2(i,e){i.uniform1iv(this.addr,e)}function g2(i,e){i.uniform2iv(this.addr,e)}function v2(i,e){i.uniform3iv(this.addr,e)}function _2(i,e){i.uniform4iv(this.addr,e)}function x2(i,e){i.uniform1uiv(this.addr,e)}function y2(i,e){i.uniform2uiv(this.addr,e)}function M2(i,e){i.uniform3uiv(this.addr,e)}function b2(i,e){i.uniform4uiv(this.addr,e)}function S2(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mf,r[a])}function E2(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sf,r[a])}function T2(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ef,r[a])}function A2(i,e,t){let n=this.cache,s=e.length,r=ja(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bf,r[a])}function w2(i){switch(i){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return h2;case 35674:return f2;case 35675:return d2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return _2;case 5125:return x2;case 36294:return y2;case 36295:return M2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return E2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}var Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o2(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w2(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Go=/(\w+)(\])?(\[|\.)?/g;function yh(i,e){i.seq.push(e),i.map[e.id]=e}function C2(i,e,t){let n=i.name,s=n.length;for(Go.lastIndex=0;;){let r=Go.exec(n),a=Go.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yh(t,c===void 0?new Ol(o,i,e):new Fl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Bl(o),yh(t,h)),t=h}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C2(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Mh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R2=37297,I2=0;function P2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bh=new ze;function L2(i){We._getMatrix(bh,We.workingColorSpace,i);let e=`mat3( ${bh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Xa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+P2(i.getShaderSource(e),a)}else return s}function D2(i,e){let t=L2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N2(i,e){let t;switch(e){case Vd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="Cineon";break;case jd:t="ACESFilmic";break;case Yd:t="AgX";break;case $d:t="Neutral";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ta=new P;function U2(){We.getLuminanceCoefficients(ta);let i=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function O2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function Eh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(B2,H2)}var k2=new Map;function H2(i,e){let t=Be[e];if(t===void 0){let n=k2.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}var G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(G2,V2)}function V2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j2(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function q2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function Y2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $2(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=W2(t),c=X2(t),u=j2(t),h=q2(t),f=Y2(t),p=z2(t),g=O2(r),v=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Be.tonemapping_pars_fragment:"",t.toneMapping!==xi?N2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,D2("linearToOutputTexel",t.outputColorSpace),U2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=kl(a),a=Eh(a,t),a=Th(a,t),o=kl(o),o=Eh(o,t),o=Th(o,t),a=Ah(a),o=Ah(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=y+m+a,_=y+d+o,C=Mh(s,s.VERTEX_SHADER,b),A=Mh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,C),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(A).trim(),X=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,A);else{let J=Sh(s,C,"vertex"),V=Sh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+J+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(C),s.deleteShader(A),I=new ys(s,v),S=F2(s,v)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,R2)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}var Z2=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gl(e),t.set(e,n)),n}},Gl=class{constructor(e){this.id=Z2++,this.code=e,this.usedTimes=0}};function K2(i,e,t,n,s,r,a){let o=new hr,l=new Hl,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,F,B){let G=F.fog,X=B.geometry,W=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=J&&J.mapping===Va?J.image.height:null,ne=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=re!==void 0?re.length:0,De=0;X.morphAttributes.position!==void 0&&(De=1),X.morphAttributes.normal!==void 0&&(De=2),X.morphAttributes.color!==void 0&&(De=3);let Ye,q,Q,ve;if(ne){let nt=Dn[ne];Ye=nt.vertexShader,q=nt.fragmentShader}else Ye=S.vertexShader,q=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);let ie=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,at=!!S.map,Ge=!!S.matcap,ut=!!J,L=!!S.aoMap,Et=!!S.lightMap,ke=!!S.bumpMap,He=!!S.normalMap,fe=!!S.displacementMap,st=!!S.emissiveMap,Se=!!S.metalnessMap,T=!!S.roughnessMap,x=S.anisotropy>0,z=S.clearcoat>0,$=S.dispersion>0,K=S.iridescence>0,Y=S.sheen>0,Me=S.transmission>0,oe=x&&!!S.anisotropyMap,de=z&&!!S.clearcoatMap,qe=z&&!!S.clearcoatNormalMap,ee=z&&!!S.clearcoatRoughnessMap,pe=K&&!!S.iridescenceMap,Ce=K&&!!S.iridescenceThicknessMap,Ie=Y&&!!S.sheenColorMap,me=Y&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,Fe=!!S.specularColorMap,ot=!!S.specularIntensityMap,D=Me&&!!S.transmissionMap,ae=Me&&!!S.thicknessMap,j=!!S.gradientMap,Z=!!S.alphaMap,he=S.alphaTest>0,ce=!!S.alphaHash,Ne=!!S.extensions,gt=xi;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(gt=i.toneMapping);let Nt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:q,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:kt,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:Ge,envMap:ut,envMapMode:ut&&J.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Et,bumpMap:ke,normalMap:He,displacementMap:f&&fe,emissiveMap:st,normalMapObjectSpace:He&&S.normalMapType===ep,normalMapTangentSpace:He&&S.normalMapType===pf,metalnessMap:Se,roughnessMap:T,anisotropy:x,anisotropyMap:oe,clearcoat:z,clearcoatMap:de,clearcoatNormalMap:qe,clearcoatRoughnessMap:ee,dispersion:$,iridescence:K,iridescenceMap:pe,iridescenceThicknessMap:Ce,sheen:Y,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:ot,transmission:Me,transmissionMap:D,thicknessMap:ae,gradientMap:j,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:ce,combine:S.combine,mapUv:at&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Et&&v(S.lightMap.channel),bumpMapUv:ke&&v(S.bumpMap.channel),normalMapUv:He&&v(S.normalMap.channel),displacementMapUv:fe&&v(S.displacementMap.channel),emissiveMapUv:st&&v(S.emissiveMap.channel),metalnessMapUv:Se&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:oe&&v(S.anisotropyMap.channel),clearcoatMapUv:de&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(S.sheenRoughnessMap.channel),specularMapUv:Xe&&v(S.specularMap.channel),specularColorMapUv:Fe&&v(S.specularColorMap.channel),specularIntensityMapUv:ot&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ae&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(He||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(at||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let M=g[S.type],R;if(M){let F=Dn[M];R=Hp.clone(F.uniforms)}else R=S.uniforms;return R}function C(S,M){let R;for(let F=0,B=u.length;F<B;F++){let G=u[F];if(G.cacheKey===M){R=G,++R.usedTimes;break}}return R===void 0&&(R=new $2(i,M,S,r),u.push(R)),R}function A(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:I}}function J2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Q2),n.length>1&&n.sort(f||Ch),s.length>1&&s.sort(f||Ch)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function eg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rh,i.set(n,[a])):s>=r.length?(a=new Rh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ig=0;function sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rg(i){let e=new tg,t=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new we,a=new we;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,b=0,_=0,C=0,A=0,w=0;c.sort(sg);for(let S=0,M=c.length;S<M;S++){let R=c[S],F=R.color,B=R.intensity,G=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],B);w++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[v]=W;let J=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,J.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=X,_++}v++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=W,g++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=w,n.version=ig++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let b=c[d];if(b.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Ih(i){let e=new rg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ag(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ih(i),e.set(s,[o])):r>=a.length?(o=new Ih(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vl=class extends rn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends rn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function cg(i,e,t){let n=new fr,s=new Le,r=new Le,a=new Ze,o=new Vl({depthPacking:Qd}),l=new Wl,c={},u=t.maxTextureSize,h={[Un]:Zt,[Zt]:Un,[Ft]:Ft},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:og,fragmentShader:lg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let d=this.type;this.render=function(A,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=d!==qn&&this.type===qn,G=d===qn&&this.type!==qn;for(let X=0,W=A.length;X<W;X++){let J=A[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();if(s.multiply(ne),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){let ge=this.type!==qn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new Qn(s.x,s.y,ge),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let re=V.getViewportCount();for(let ge=0;ge<re;ge++){let De=V.getViewport(ge);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),F.viewport(a),V.updateMatrices(J,ge),n=V.getFrustum(),_(w,I,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&y(V,I),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function y(A,w){let I=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,I,p,v,null)}function b(A,w,I,S){let M=null,R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=M.uuid,B=w.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let X=G[B];X===void 0&&(X=M.clone(),G[B]=X,w.addEventListener("dispose",C)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,S===qn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=I}return M}function _(A,w,I,S,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let B=e.update(A),G=A.material;if(Array.isArray(G)){let X=B.groups;for(let W=0,J=X.length;W<J;W++){let V=X[W],ne=G[V.materialIndex];if(ne&&ne.visible){let re=b(A,ne,S,M);A.onBeforeShadow(i,A,w,I,B,re,V),i.renderBufferDirect(I,null,B,re,A,V),A.onAfterShadow(i,A,w,I,B,re,V)}}}else if(G.visible){let X=b(A,G,S,M);A.onBeforeShadow(i,A,w,I,B,X,null),i.renderBufferDirect(I,null,B,X,A,null),A.onAfterShadow(i,A,w,I,B,X,null)}}let F=A.children;for(let B=0,G=F.length;B<G;B++)_(F[B],w,I,S,M)}function C(A){A.target.removeEventListener("dispose",C);for(let I in c){let S=c[I],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var ug={[Zo]:Ko,[Jo]:tl,[Qo]:nl,[Ms]:el,[Ko]:Zo,[tl]:Jo,[nl]:Qo,[el]:Ms};function hg(i,e){function t(){let D=!1,ae=new Ze,j=null,Z=new Ze(0,0,0,0);return{setMask:function(he){j!==he&&!D&&(i.colorMask(he,he,he,he),j=he)},setLocked:function(he){D=he},setClear:function(he,ce,Ne,gt,Nt){Nt===!0&&(he*=gt,ce*=gt,Ne*=gt),ae.set(he,ce,Ne,gt),Z.equals(ae)===!1&&(i.clearColor(he,ce,Ne,gt),Z.copy(ae))},reset:function(){D=!1,j=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,j=null,Z=null,he=null;return{setReversed:function(ce){if(ae!==ce){let Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let gt=he;he=null,this.setClear(gt)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?ie(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ce){j!==ce&&!D&&(i.depthMask(ce),j=ce)},setFunc:function(ce){if(ae&&(ce=ug[ce]),Z!==ce){switch(ce){case Zo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case el:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ce}},setLocked:function(ce){D=ce},setClear:function(ce){he!==ce&&(ae&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){D=!1,j=null,Z=null,he=null,ae=!1}}}function s(){let D=!1,ae=null,j=null,Z=null,he=null,ce=null,Ne=null,gt=null,Nt=null;return{setTest:function(nt){D||(nt?ie(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!D&&(i.stencilMask(nt),ae=nt)},setFunc:function(nt,yn,Bn){(j!==nt||Z!==yn||he!==Bn)&&(i.stencilFunc(nt,yn,Bn),j=nt,Z=yn,he=Bn)},setOp:function(nt,yn,Bn){(ce!==nt||Ne!==yn||gt!==Bn)&&(i.stencilOp(nt,yn,Bn),ce=nt,Ne=yn,gt=Bn)},setLocked:function(nt){D=nt},setClear:function(nt){Nt!==nt&&(i.clearStencil(nt),Nt=nt)},reset:function(){D=!1,ae=null,j=null,Z=null,he=null,ce=null,Ne=null,gt=null,Nt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,b=null,_=null,C=null,A=null,w=new Ee(0,0,0),I=0,S=!1,M=null,R=null,F=null,B=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let ne=null,re={},ge=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ye=new Ze().fromArray(ge),q=new Ze().fromArray(De);function Q(D,ae,j,Z){let he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(D,ce),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<j;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ae+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}let ve={};ve[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ms),ke(!1),He(Lu),ie(i.CULL_FACE),L(_i);function ie(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Re(D,ae){return h[D]!==ae?(i.bindFramebuffer(D,ae),h[D]=ae,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Oe(D,ae){let j=p,Z=!1;if(D){j=f.get(ae),j===void 0&&(j=[],f.set(ae,j));let he=D.textures;if(j.length!==he.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ne=he.length;ce<Ne;ce++)j[ce]=i.COLOR_ATTACHMENT0+ce;j.length=he.length,Z=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Z=!0);Z&&i.drawBuffers(j)}function at(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Ge={[Bi]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};Ge[Ad]=i.MIN,Ge[wd]=i.MAX;let ut={[Cd]:i.ZERO,[Rd]:i.ONE,[Id]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Od]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ae,j,Z,he,ce,Ne,gt,Nt,nt){if(D===_i){v===!0&&(Ae(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),D!==Sd){if(D!==m||nt!==S){if((d!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),d=Bi,_=Bi),nt)switch(D){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,C=null,A=null,w.set(0,0,0),I=0,m=D,S=nt}return}he=he||ae,ce=ce||j,Ne=Ne||Z,(ae!==d||he!==_)&&(i.blendEquationSeparate(Ge[ae],Ge[he]),d=ae,_=he),(j!==y||Z!==b||ce!==C||Ne!==A)&&(i.blendFuncSeparate(ut[j],ut[Z],ut[ce],ut[Ne]),y=j,b=Z,C=ce,A=Ne),(gt.equals(w)===!1||Nt!==I)&&(i.blendColor(gt.r,gt.g,gt.b,Nt),w.copy(gt),I=Nt),m=D,S=!1}function Et(D,ae){D.side===Ft?Ae(i.CULL_FACE):ie(i.CULL_FACE);let j=D.side===Zt;ae&&(j=!j),ke(j),D.blending===vs&&D.transparent===!1?L(_i):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function He(D){D!==yd?(ie(i.CULL_FACE),D!==R&&(D===Lu?i.cullFace(i.BACK):D===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),R=D}function fe(D){D!==F&&(W&&i.lineWidth(D),F=D)}function st(D,ae,j){D?(ie(i.POLYGON_OFFSET_FILL),(B!==ae||G!==j)&&(i.polygonOffset(ae,j),B=ae,G=j)):Ae(i.POLYGON_OFFSET_FILL)}function Se(D){D?ie(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+X-1),ne!==D&&(i.activeTexture(D),ne=D)}function x(D,ae,j){j===void 0&&(ne===null?j=i.TEXTURE0+X-1:j=ne);let Z=re[j];Z===void 0&&(Z={type:void 0,texture:void 0},re[j]=Z),(Z.type!==D||Z.texture!==ae)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(D,ae||ve[D]),Z.type=D,Z.texture=ae)}function z(){let D=re[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Ye.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function me(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Xe(D,ae){let j=c.get(ae);j===void 0&&(j=new WeakMap,c.set(ae,j));let Z=j.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ae,D.name),j.set(D,Z))}function Fe(D,ae){let Z=c.get(ae).get(D);l.get(ae)!==Z&&(i.uniformBlockBinding(ae,Z,D.__bindingPointIndex),l.set(ae,Z))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,re={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,b=null,_=null,C=null,A=null,w=new Ee(0,0,0),I=0,S=!1,M=null,R=null,F=null,B=null,G=null,Ye.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ae,bindFramebuffer:Re,drawBuffers:Oe,useProgram:at,setBlending:L,setMaterial:Et,setFlipSided:ke,setCullFace:He,setLineWidth:fe,setPolygonOffset:st,setScissorTest:Se,activeTexture:T,bindTexture:x,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:pe,texImage3D:Ce,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:qe,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ie,viewport:me,reset:ot}}function Ph(i,e,t,n){let s=fg(n);switch(t){case of:return i*e;case cf:return i*e;case uf:return i*e*2;case fc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case hf:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case lf:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(e,8)/2;case cl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case Al:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ff:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(i){switch(i){case Jn:case sf:return{byteLength:1,components:1};case cr:case rf:case br:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case Vi:case cc:case An:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):ur("canvas")}function v(T,x,z){let $=1,K=Se(T);if((K.width>z||K.height>z)&&($=z/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor($*K.width),Me=Math.floor($*K.height);h===void 0&&(h=g(Y,Me));let oe=x?g(Y,Me):h;return oe.width=Y,oe.height=Me,oe.getContext("2d").drawImage(T,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Me+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,z,$,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){let Me=K?Xa:We.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Me===rt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(T,x){let z;return T?x===null||x===Vi||x===Es?z=i.DEPTH24_STENCIL8:x===An?z=i.DEPTH32F_STENCIL8:x===cr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vi||x===Es?z=i.DEPTH_COMPONENT24:x===An?z=i.DEPTH_COMPONENT32F:x===cr&&(z=i.DEPTH_COMPONENT16),z}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&u.delete(x)}function w(T){let x=T.target;x.removeEventListener("dispose",w),M(x)}function I(T){let x=n.get(T);if(x.__webglInit===void 0)return;let z=T.source,$=f.get(z);if($){let K=$[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(T),Object.keys($).length===0&&f.delete(z)}n.remove(T)}function S(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let z=T.source,$=f.get(z);delete $[x.__cacheKey],a.memory.textures--}function M(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let K=0;K<x.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[$][K]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=T.textures;for(let $=0,K=z.length;$<K;$++){let Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(T)}let R=0;function F(){R=0}function B(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function G(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function X(T,x){let z=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,x);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function W(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function J(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function V(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){Q(z,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let ne={[Gi]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},re={[Bt]:i.NEAREST,[lc]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},ge={[tp]:i.NEVER,[op]:i.ALWAYS,[np]:i.LESS,[mf]:i.LEQUAL,[ip]:i.EQUAL,[ap]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function De(T,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===sr||x.magFilter===ms||x.magFilter===Nn||x.minFilter===$t||x.minFilter===sr||x.minFilter===ms||x.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ne[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,re[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==ms&&x.minFilter!==Nn||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let $=x.source,K=f.get($);K===void 0&&(K={},f.set($,K));let Y=G(x);if(Y!==T.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[Y].usedTimes++;let Me=K[T.__cacheKey];Me!==void 0&&(K[T.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),T.__cacheKey=Y,T.__webglTexture=K[Y].texture}return z}function q(T,x,z){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let K=Ye(T,x),Y=x.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+z);let Me=n.get(Y);if(Y.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+z);let oe=We.getPrimaries(We.workingColorSpace),de=x.colorSpace===gi?null:We.getPrimaries(x.colorSpace),qe=x.colorSpace===gi||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ee=v(x.image,!1,s.maxTextureSize);ee=st(x,ee);let pe=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type),Ie=b(x.internalFormat,pe,Ce,x.colorSpace,x.isVideoTexture);De($,x);let me,Xe=x.mipmaps,Fe=x.isVideoTexture!==!0,ot=Me.__version===void 0||K===!0,D=Y.dataReady,ae=C(x,ee);if(x.isDepthTexture)Ie=_(x.format===Ts,x.type),ot&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ie,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,pe,Ce,null));else if(x.isDataTexture)if(Xe.length>0){Fe&&ot&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,Xe[0].width,Xe[0].height);for(let j=0,Z=Xe.length;j<Z;j++)me=Xe[j],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,pe,Ce,me.data);x.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Ce,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,pe,Ce,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Xe[0].width,Xe[0].height,ee.depth);for(let j=0,Z=Xe.length;j<Z;j++)if(me=Xe[j],x.format!==un)if(pe!==null)if(Fe){if(D)if(x.layerUpdates.size>0){let he=Ph(me.width,me.height,x.format,x.type);for(let ce of x.layerUpdates){let Ne=me.data.subarray(ce*he/me.data.BYTES_PER_ELEMENT,(ce+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ce,me.width,me.height,1,pe,Ne)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ee.depth,pe,Ce,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,ee.depth,0,pe,Ce,me.data)}else{Fe&&ot&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,Xe[0].width,Xe[0].height);for(let j=0,Z=Xe.length;j<Z;j++)me=Xe[j],x.format!==un?pe!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,pe,Ce,me.data)}else if(x.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,ee.width,ee.height,ee.depth),D)if(x.layerUpdates.size>0){let j=Ph(ee.width,ee.height,x.format,x.type);for(let Z of x.layerUpdates){let he=ee.data.subarray(Z*j/ee.data.BYTES_PER_ELEMENT,(Z+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,pe,Ce,he)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ce,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ee.width,ee.height,ee.depth,0,pe,Ce,ee.data);else if(x.isData3DTexture)Fe?(ot&&t.texStorage3D(i.TEXTURE_3D,ae,Ie,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ce,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ee.width,ee.height,ee.depth,0,pe,Ce,ee.data);else if(x.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(i.TEXTURE_2D,ae,Ie,ee.width,ee.height);else{let j=ee.width,Z=ee.height;for(let he=0;he<ae;he++)t.texImage2D(i.TEXTURE_2D,he,Ie,j,Z,0,pe,Ce,null),j>>=1,Z>>=1}}else if(Xe.length>0){if(Fe&&ot){let j=Se(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ie,j.width,j.height)}for(let j=0,Z=Xe.length;j<Z;j++)me=Xe[j],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,pe,Ce,me):t.texImage2D(i.TEXTURE_2D,j,Ie,pe,Ce,me);x.generateMipmaps=!1}else if(Fe){if(ot){let j=Se(ee);t.texStorage2D(i.TEXTURE_2D,ae,Ie,j.width,j.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ce,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ie,pe,Ce,ee);m(x)&&d($),Me.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,z){if(x.image.length!==6)return;let $=Ye(T,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let Y=n.get(K);if(K.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+z);let Me=We.getPrimaries(We.workingColorSpace),oe=x.colorSpace===gi?null:We.getPrimaries(x.colorSpace),de=x.colorSpace===gi||Me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let qe=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!qe&&!ee?pe[Z]=v(x.image[Z],!0,s.maxCubemapSize):pe[Z]=ee?x.image[Z].image:x.image[Z],pe[Z]=st(x,pe[Z]);let Ce=pe[0],Ie=r.convert(x.format,x.colorSpace),me=r.convert(x.type),Xe=b(x.internalFormat,Ie,me,x.colorSpace),Fe=x.isVideoTexture!==!0,ot=Y.__version===void 0||$===!0,D=K.dataReady,ae=C(x,Ce);De(i.TEXTURE_CUBE_MAP,x);let j;if(qe){Fe&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Xe,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){j=pe[Z].mipmaps;for(let he=0;he<j.length;he++){let ce=j[he];x.format!==un?Ie!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,ce.width,ce.height,Ie,me,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Xe,ce.width,ce.height,0,Ie,me,ce.data)}}}else{if(j=x.mipmaps,Fe&&ot){j.length>0&&ae++;let Z=Se(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Ie,me,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,pe[Z].width,pe[Z].height,0,Ie,me,pe[Z].data);for(let he=0;he<j.length;he++){let Ne=j[he].image[Z].image;Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ne.width,Ne.height,Ie,me,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Xe,Ne.width,Ne.height,0,Ie,me,Ne.data)}}else{Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,me,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Ie,me,pe[Z]);for(let he=0;he<j.length;he++){let ce=j[he];Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ie,me,ce.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Xe,Ie,me,ce.image[Z])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Y.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ve(T,x,z,$,K,Y){let Me=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),de=b(z.internalFormat,Me,oe,z.colorSpace),qe=n.get(x),ee=n.get(z);if(ee.__renderTarget=x,!qe.__hasExternalTextures){let pe=Math.max(1,x.width>>Y),Ce=Math.max(1,x.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,de,pe,Ce,x.depth,0,Me,oe,null):t.texImage2D(K,Y,de,pe,Ce,0,Me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ee.__webglTexture,0,ke(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ee.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let $=x.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=_(x.stencilBuffer,K),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=ke(x);He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let $=x.textures;for(let K=0;K<$.length;K++){let Y=$[K],Me=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),de=b(Y.internalFormat,Me,oe,Y.colorSpace),qe=ke(x);z&&He(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,de,x.width,x.height):He(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let K=$.__webglTexture,Y=ke(x);if(x.depthTexture.format===_s)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ts)He(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Re(T){let x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=$}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),ie(x.__webglDepthbuffer[$],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ie(x.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(T,x,z){let $=n.get(T);x!==void 0&&ve($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Re(T)}function at(T){let x=T.texture,z=n.get(T),$=n.get(x);T.addEventListener("dispose",w);let K=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let de=0;de<x.mipmaps.length;de++)z.__webglFramebuffer[oe][de]=i.createFramebuffer()}else z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)z.__webglFramebuffer[oe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Me)for(let oe=0,de=K.length;oe<de;oe++){let qe=n.get(K[oe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&He(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let de=K[oe];z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);let qe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),pe=b(de.internalFormat,qe,ee,de.colorSpace,T.isXRRenderTarget===!0),Ce=ke(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),De(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ve(z.__webglFramebuffer[oe][de],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ve(z.__webglFramebuffer[oe],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,de=K.length;oe<de;oe++){let qe=K[oe],ee=n.get(qe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),De(i.TEXTURE_2D,qe),ve(z.__webglFramebuffer,T,qe,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(qe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),De(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ve(z.__webglFramebuffer[de],T,x,i.COLOR_ATTACHMENT0,oe,de);else ve(z.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,oe,0);m(x)&&d(oe),t.unbindTexture()}T.depthBuffer&&Re(T)}function Ge(T){let x=T.textures;for(let z=0,$=x.length;z<$;z++){let K=x[z];if(m(K)){let Y=y(T),Me=n.get(K).__webglTexture;t.bindTexture(Y,Me),d(Y),t.unbindTexture()}}}let ut=[],L=[];function Et(T){if(T.samples>0){if(He(T)===!1){let x=T.textures,z=T.width,$=T.height,K=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),oe=x.length>1;if(oe)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<x.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let qe=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,K,i.NEAREST),l===!0&&(ut.length=0,L.length=0,ut.push(i.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let qe=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ke(T){return Math.min(s.maxSamples,T.samples)}function He(T){let x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(T){let x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function st(T,x){let z=T.colorSpace,$=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==kt&&z!==gi&&(We.getTransfer(z)===rt?($!==un||K!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He}function pg(i,e){function t(n,s=gi){let r,a=We.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===lf)return i.RGB;if(n===un)return i.RGBA;if(n===cf)return i.LUMINANCE;if(n===uf)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===ca||n===ua||n===ha||n===fa)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ul||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===ul)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl||n===yl||n===Ml||n===bl||n===Sl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===Al||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===Cl||n===Rl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xl=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mg={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:gg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=new jl,m=t.getContextAttributes(),d=null,y=null,b=[],_=[],C=new Le,A=null,w=new Tt;w.viewport=new Ze;let I=new Tt;I.viewport=new Ze;let S=[w,I],M=new Xl,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=b[q];return Q===void 0&&(Q=new or,b[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=b[q];return Q===void 0&&(Q=new or,b[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=b[q];return Q===void 0&&(Q=new or,b[q]=Q),Q.getHandSpace()};function B(q){let Q=_.indexOf(q.inputSource);if(Q===-1)return;let ve=b[Q];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let q=0;q<b.length;q++){let Q=_[q];Q!==null&&(_[q]=null,b[q].disconnect(Q))}R=null,F=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ve=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ts:_s,ve=m.stencil?Es:Vi);let Ae={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Qn(f.textureWidth,f.textureHeight,{format:un,type:Jn,depthTexture:new Sa(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(q){for(let Q=0;Q<q.removed.length;Q++){let ve=q.removed[Q],ie=_.indexOf(ve);ie>=0&&(_[ie]=null,b[ie].disconnect(ve))}for(let Q=0;Q<q.added.length;Q++){let ve=q.added[Q],ie=_.indexOf(ve);if(ie===-1){for(let Re=0;Re<b.length;Re++)if(Re>=_.length){_.push(ve),ie=Re;break}else if(_[Re]===null){_[Re]=ve,ie=Re;break}if(ie===-1)break}let Ae=b[ie];Ae&&Ae.connect(ve)}}let W=new P,J=new P;function V(q,Q,ve){W.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let ie=W.distanceTo(J),Ae=Q.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),at=Ae[14]/(Ae[10]+1),Ge=(Ae[9]+1)/Ae[5],ut=(Ae[9]-1)/Ae[5],L=(Ae[8]-1)/Ae[0],Et=(Re[8]+1)/Re[0],ke=Oe*L,He=Oe*Et,fe=ie/(-L+Et),st=fe*-L;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Se=Oe+fe,T=at+fe,x=ke-st,z=He+(ie-st),$=Ge*at/T*Se,K=ut*at/T*Se;q.projectionMatrix.makePerspective(x,z,$,K,Se,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,ve=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),M.near=I.near=w.near=Q,M.far=I.far=w.far=ve,(R!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,F=M.far),w.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;let ie=q.parent,Ae=M.cameras;ne(M,ie);for(let Re=0;Re<Ae.length;Re++)ne(Ae[Re],ie);Ae.length===2?V(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),re(q,M,ie)};function re(q,Q,ve){ve===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ge=null;function De(q,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){let ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ie=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let Re=0;Re<ve.length;Re++){let Oe=ve[Re],at=null;if(p!==null)at=p.getViewport(Oe);else{let ut=h.getViewSubImage(f,Oe);at=ut.viewport,Re===0&&(e.setRenderTargetTextures(y,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(y))}let Ge=S[Re];Ge===void 0&&(Ge=new Tt,Ge.layers.enable(Re),Ge.viewport=new Ze,S[Re]=Ge),Ge.matrix.fromArray(Oe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Oe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(at.x,at.y,at.width,at.height),Re===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(Ge)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let Re=h.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,s.renderState)}}for(let ve=0;ve<b.length;ve++){let ie=_[ve],Ae=b[ve];ie!==null&&Ae!==void 0&&Ae.update(ie,Q,c||a)}ge&&ge(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Ye=new yf;Ye.setAnimationLoop(De),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}},Oi=new zn,_g=new we;function xg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,xf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,Oi.copy(_),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Oi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let _=b.program;n.uniformBlockBinding(y,_)}function c(y,b){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let C=b.program;n.updateUBOMapping(y,C);let A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){let b=h();y.__bindingPointIndex=b;let _=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=s[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,w=_.length;A<w;A++){let I=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,M=I.length;S<M;S++){let R=I[S];if(p(R,A,S,C)===!0){let F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],G=0;for(let X=0;X<B.length;X++){let W=B[X],J=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,b,_,C){let A=y.value,w=b+"_"+_;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let I=C[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){let b=y.uniforms,_=0,C=16;for(let w=0,I=b.length;w<I;w++){let S=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,R=S.length;M<R;M++){let F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,X=B.length;G<X;G++){let W=B[G],J=v(W),V=_%C,ne=V%J.boundary,re=V+ne;_+=ne,re!==0&&C-re<J.storage&&(_+=C-re),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=J.storage}}}let A=_%C;return A>0&&(_+=C-A),y.__size=_,y.__cache={},this}function v(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ea=class{constructor(e={}){let{canvas:t=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=xi,this.toneMappingExposure=1;let _=this,C=!1,A=0,w=0,I=null,S=-1,M=null,R=new Ze,F=new Ze,B=null,G=new Ee(0),X=0,W=t.width,J=t.height,V=1,ne=null,re=null,ge=new Ze(0,0,W,J),De=new Ze(0,0,W,J),Ye=!1,q=new fr,Q=!1,ve=!1,ie=new we,Ae=new we,Re=new P,Oe=new Ze,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function ut(){return I===null?V:1}let L=n;function Et(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){let N="webgl2";if(L=Et(N,E),L===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,He,fe,st,Se,T,x,z,$,K,Y,Me,oe,de,qe,ee,pe,Ce,Ie,me,Xe,Fe,ot,D;function ae(){ke=new z1(L),ke.init(),Fe=new pg(L,ke),He=new I1(L,ke,e,Fe),fe=new hg(L,ke),He.reverseDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),st=new B1(L),Se=new J2,T=new dg(L,ke,fe,Se,He,Fe,st),x=new L1(_),z=new U1(_),$=new jp(L),ot=new C1(L,$),K=new O1(L,$,st,ot),Y=new H1(L,K,$,st),Ie=new k1(L,He,T),ee=new P1(Se),Me=new K2(_,x,z,ke,He,ot,ee),oe=new xg(_,Se),de=new eg,qe=new ag(ke),Ce=new w1(_,x,z,fe,Y,p,l),pe=new cg(_,Y,He),D=new yg(L,st,He,fe),me=new R1(L,ke,st),Xe=new F1(L,ke,st),st.programs=Me.programs,_.capabilities=He,_.extensions=ke,_.properties=Se,_.renderLists=de,_.shadowMap=pe,_.state=fe,_.info=st}ae();let j=new ql(_,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,J,!1))},this.getSize=function(E){return E.set(W,J)},this.setSize=function(E,N,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,J=N,t.width=Math.floor(E*V),t.height=Math.floor(N*V),k===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(E,N,k){W=E,J=N,V=k,t.width=Math.floor(E*k),t.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,N,k,H){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,N,k,H),fe.viewport(R.copy(ge).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(De)},this.setScissor=function(E,N,k,H){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,N,k,H),fe.scissor(F.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){fe.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,N=!0,k=!0){let H=0;if(E){let U=!1;if(I!==null){let te=I.texture.format;U=te===mc||te===pc||te===dc}if(U){let te=I.texture.type,ue=te===Jn||te===Vi||te===cr||te===Es||te===uc||te===hc,_e=Ce.getClearColor(),xe=Ce.getClearAlpha(),Pe=_e.r,Ue=_e.g,ye=_e.b;ue?(g[0]=Pe,g[1]=Ue,g[2]=ye,g[3]=xe,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Pe,v[1]=Ue,v[2]=ye,v[3]=xe,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),qe.dispose(),Se.dispose(),x.dispose(),z.dispose(),Y.dispose(),ot.dispose(),D.dispose(),Me.dispose(),j.dispose(),j.removeEventListener("sessionstart",bu),j.removeEventListener("sessionend",Su),Pi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let E=st.autoReset,N=pe.enabled,k=pe.autoUpdate,H=pe.needsUpdate,U=pe.type;ae(),st.autoReset=E,pe.enabled=N,pe.autoUpdate=k,pe.needsUpdate=H,pe.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){let N=E.target;N.removeEventListener("dispose",Ne),gt(N)}function gt(E){Nt(E),Se.remove(E)}function Nt(E){let N=Se.get(E).programs;N!==void 0&&(N.forEach(function(k){Me.releaseProgram(k)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,H,U,te){N===null&&(N=at);let ue=U.isMesh&&U.matrixWorld.determinant()<0,_e=ud(E,N,k,H,U);fe.setMaterial(H,ue);let xe=k.index,Pe=1;if(H.wireframe===!0){if(xe=K.getWireframeAttribute(k),xe===void 0)return;Pe=2}let Ue=k.drawRange,ye=k.attributes.position,$e=Ue.start*Pe,lt=(Ue.start+Ue.count)*Pe;te!==null&&($e=Math.max($e,te.start*Pe),lt=Math.min(lt,(te.start+te.count)*Pe)),xe!==null?($e=Math.max($e,0),lt=Math.min(lt,xe.count)):ye!=null&&($e=Math.max($e,0),lt=Math.min(lt,ye.count));let ht=lt-$e;if(ht<0||ht===1/0)return;ot.setup(U,H,_e,k,xe);let Yt,Qe=me;if(xe!==null&&(Yt=$.get(xe),Qe=Xe,Qe.setIndex(Yt)),U.isMesh)H.wireframe===!0?(fe.setLineWidth(H.wireframeLinewidth*ut()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(U.isLine){let be=H.linewidth;be===void 0&&(be=1),fe.setLineWidth(be*ut()),U.isLineSegments?Qe.setMode(L.LINES):U.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else U.isPoints?Qe.setMode(L.POINTS):U.isSprite&&Qe.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let be=U._multiDrawStarts,kn=U._multiDrawCounts,et=U._multiDrawCount,Mn=xe?$.get(xe).bytesPerElement:1,Qi=Se.get(H).currentProgram.getUniforms();for(let Qt=0;Qt<et;Qt++)Qi.setValue(L,"_gl_DrawID",Qt),Qe.render(be[Qt]/Mn,kn[Qt])}else if(U.isInstancedMesh)Qe.renderInstances($e,ht,U.count);else if(k.isInstancedBufferGeometry){let be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,kn=Math.min(k.instanceCount,be);Qe.renderInstances($e,ht,kn)}else Qe.render($e,ht)};function nt(E,N,k){E.transparent===!0&&E.side===Ft&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,Ur(E,N,k),E.side=Un,E.needsUpdate=!0,Ur(E,N,k),E.side=Ft):Ur(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),d=qe.get(k),d.init(N),b.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let H=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let te=U.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){let _e=te[ue];nt(_e,k,U),H.add(_e)}else nt(te,k,U),H.add(te)}),b.pop(),d=null,H},this.compileAsync=function(E,N,k=null){let H=this.compile(E,N,k);return new Promise(U=>{function te(){if(H.forEach(function(ue){Se.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){U(E);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let yn=null;function Bn(E){yn&&yn(E)}function bu(){Pi.stop()}function Su(){Pi.start()}let Pi=new yf;Pi.setAnimationLoop(Bn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){yn=E,j.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},j.addEventListener("sessionstart",bu),j.addEventListener("sessionend",Su),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,I),d=qe.get(E,b.length),d.init(N),b.push(d),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,ve),m=de.get(E,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){let te=_.xr.getDepthSensingMesh();te!==null&&mo(te,N,-1/0,_.sortObjects)}mo(E,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,re),Ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ge&&Ce.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ee.beginShadows();let k=d.state.shadowsArray;pe.render(k,E,N),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){let te=N.cameras;if(U.length>0)for(let ue=0,_e=te.length;ue<_e;ue++){let xe=te[ue];Tu(H,U,E,xe)}Ge&&Ce.render(E);for(let ue=0,_e=te.length;ue<_e;ue++){let xe=te[ue];Eu(m,E,xe,xe.viewport)}}else U.length>0&&Tu(H,U,E,N),Ge&&Ce.render(E),Eu(m,E,N);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,N),ot.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],Q===!0&&ee.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function mo(E,N,k,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){H&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);let ue=Y.update(E),_e=E.material;_e.visible&&m.push(E,ue,_e,k,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let ue=Y.update(E),_e=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(_e)){let xe=ue.groups;for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){let ye=xe[Pe],$e=_e[ye.materialIndex];$e&&$e.visible&&m.push(E,ue,$e,k,Oe.z,ye)}}else _e.visible&&m.push(E,ue,_e,k,Oe.z,null)}}let te=E.children;for(let ue=0,_e=te.length;ue<_e;ue++)mo(te[ue],N,k,H)}function Eu(E,N,k,H){let U=E.opaque,te=E.transmissive,ue=E.transparent;d.setupLightsView(k),Q===!0&&ee.setGlobalState(_.clippingPlanes,k),H&&fe.viewport(R.copy(H)),U.length>0&&Nr(U,N,k),te.length>0&&Nr(te,N,k),ue.length>0&&Nr(ue,N,k),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Tu(E,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Qn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?br:Jn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let te=d.state.transmissionRenderTarget[H.id],ue=H.viewport||R;te.setSize(ue.z,ue.w);let _e=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(G),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Ce.render(k);let xe=_.toneMapping;_.toneMapping=xi;let Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Q===!0&&ee.setGlobalState(_.clippingPlanes,H),Nr(E,k,H),T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ye=0,$e=N.length;ye<$e;ye++){let lt=N[ye],ht=lt.object,Yt=lt.geometry,Qe=lt.material,be=lt.group;if(Qe.side===Ft&&ht.layers.test(H.layers)){let kn=Qe.side;Qe.side=Zt,Qe.needsUpdate=!0,Au(ht,k,H,Yt,Qe,be),Qe.side=kn,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget(te),T.updateRenderTargetMipmap(te))}_.setRenderTarget(_e),_.setClearColor(G,X),Pe!==void 0&&(H.viewport=Pe),_.toneMapping=xe}function Nr(E,N,k){let H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,te=E.length;U<te;U++){let ue=E[U],_e=ue.object,xe=ue.geometry,Pe=H===null?ue.material:H,Ue=ue.group;_e.layers.test(k.layers)&&Au(_e,N,k,xe,Pe,Ue)}}function Au(E,N,k,H,U,te){E.onBeforeRender(_,N,k,H,U,te),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,N,k,H,E,te),U.transparent===!0&&U.side===Ft&&U.forceSinglePass===!1?(U.side=Zt,U.needsUpdate=!0,_.renderBufferDirect(k,N,H,U,E,te),U.side=Un,U.needsUpdate=!0,_.renderBufferDirect(k,N,H,U,E,te),U.side=Ft):_.renderBufferDirect(k,N,H,U,E,te),E.onAfterRender(_,N,k,H,U,te)}function Ur(E,N,k){N.isScene!==!0&&(N=at);let H=Se.get(E),U=d.state.lights,te=d.state.shadowsArray,ue=U.state.version,_e=Me.getParameters(E,U.state,te,N,k),xe=Me.getProgramCacheKey(_e),Pe=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?z:x).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Ne),Pe=new Map,H.programs=Pe);let Ue=Pe.get(xe);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ue)return Cu(E,_e),Ue}else _e.uniforms=Me.getUniforms(E),E.onBeforeCompile(_e,_),Ue=Me.acquireProgram(_e,xe),Pe.set(xe,Ue),H.uniforms=_e.uniforms;let ye=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Cu(E,_e),H.needsLights=fd(E),H.lightsStateVersion=ue,H.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function wu(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ys.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Cu(E,N){let k=Se.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function ud(E,N,k,H,U){N.isScene!==!0&&(N=at),T.resetTextureUnits();let te=N.fog,ue=H.isMeshStandardMaterial?N.environment:null,_e=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:kt,xe=(H.isMeshStandardMaterial?z:x).get(H.envMap||ue),Pe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,lt=!!k.morphAttributes.color,ht=xi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=_.toneMapping);let Yt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=Yt!==void 0?Yt.length:0,be=Se.get(H),kn=d.state.lights;if(Q===!0&&(ve===!0||E!==M)){let ln=E===M&&H.id===S;ee.setState(H,E,ln)}let et=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==kn.state.version||be.outputColorSpace!==_e||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==xe||H.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ee.numPlanes||be.numIntersection!==ee.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==Ue||be.morphTargets!==ye||be.morphNormals!==$e||be.morphColors!==lt||be.toneMapping!==ht||be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,be.__version=H.version);let Mn=be.currentProgram;et===!0&&(Mn=Ur(H,N,U));let Qi=!1,Qt=!1,js=!1,ft=Mn.getUniforms(),Ln=be.uniforms;if(fe.useProgram(Mn.program)&&(Qi=!0,Qt=!0,js=!0),H.id!==S&&(S=H.id,Qt=!0),Qi||M!==E){fe.buffers.depth.getReversed()?(ie.copy(E.projectionMatrix),Ap(ie),wp(ie),ft.setValue(L,"projectionMatrix",ie)):ft.setValue(L,"projectionMatrix",E.projectionMatrix),ft.setValue(L,"viewMatrix",E.matrixWorldInverse);let li=ft.map.cameraPosition;li!==void 0&&li.setValue(L,Re.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Qt=!0,js=!0)}if(U.isSkinnedMesh){ft.setOptional(L,U,"bindMatrix"),ft.setOptional(L,U,"bindMatrixInverse");let ln=U.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ft.setValue(L,"boneTexture",ln.boneTexture,T))}U.isBatchedMesh&&(ft.setOptional(L,U,"batchingTexture"),ft.setValue(L,"batchingTexture",U._matricesTexture,T),ft.setOptional(L,U,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",U._indirectTexture,T),ft.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",U._colorsTexture,T));let qs=k.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ie.update(U,k,Mn),(Qt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,ft.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ln.envMap.value=xe,Ln.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Ln.envMapIntensity.value=N.environmentIntensity),Qt&&(ft.setValue(L,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&hd(Ln,js),te&&H.fog===!0&&oe.refreshFogUniforms(Ln,te),oe.refreshMaterialUniforms(Ln,H,V,J,d.state.transmissionRenderTarget[E.id]),ys.upload(L,wu(be),Ln,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ys.upload(L,wu(be),Ln,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(L,"center",U.center),ft.setValue(L,"modelViewMatrix",U.modelViewMatrix),ft.setValue(L,"normalMatrix",U.normalMatrix),ft.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ln=H.uniformsGroups;for(let li=0,ci=ln.length;li<ci;li++){let Ru=ln[li];D.update(Ru,Mn),D.bind(Ru,Mn)}}return Mn}function hd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function fd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,N,k){Se.get(E.texture).__webglTexture=N,Se.get(E.depthTexture).__webglTexture=k;let H=Se.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let k=Se.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){I=E,A=N,w=k;let H=!0,U=null,te=!1,ue=!1;if(E){let xe=Se.get(E);if(xe.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(xe.__hasExternalTextures)T.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ye=E.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Se.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);let Ue=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][k]:U=Ue[N],te=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,R.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else R.copy(ge).multiplyScalar(V).floor(),F.copy(De).multiplyScalar(V).floor(),B=Ye;if(fe.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&fe.drawBuffers(E,U),fe.viewport(R),fe.scissor(F),fe.setScissorTest(B),te){let xe=Se.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,k)}else if(ue){let xe=Se.get(E.texture),Pe=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Pe)}S=-1},this.readRenderTargetPixels=function(E,N,k,H,U,te,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){fe.bindFramebuffer(L.FRAMEBUFFER,_e);try{let xe=E.texture,Pe=xe.format,Ue=xe.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&k>=0&&k<=E.height-U&&L.readPixels(N,k,H,U,Fe.convert(Pe),Fe.convert(Ue),te)}finally{let xe=I!==null?Se.get(I).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,H,U,te,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){let xe=E.texture,Pe=xe.format,Ue=xe.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-H&&k>=0&&k<=E.height-U){fe.bindFramebuffer(L.FRAMEBUFFER,_e);let ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(N,k,H,U,Fe.convert(Pe),Fe.convert(Ue),0);let $e=I!==null?Se.get(I).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,$e);let lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tp(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(ye),L.deleteSync(lt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-k),U=Math.floor(E.image.width*H),te=Math.floor(E.image.height*H),ue=N!==null?N.x:0,_e=N!==null?N.y:0;T.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ue,_e,U,te),fe.unbindTexture()},this.copyTextureToTexture=function(E,N,k=null,H=null,U=0){E.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let te,ue,_e,xe,Pe,Ue,ye,$e,lt,ht=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(te=k.max.x-k.min.x,ue=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,xe=k.min.x,Pe=k.min.y,Ue=k.isBox3?k.min.z:0):(te=ht.width,ue=ht.height,_e=ht.depth||1,xe=0,Pe=0,Ue=0),H!==null?(ye=H.x,$e=H.y,lt=H.z):(ye=0,$e=0,lt=0);let Yt=Fe.convert(N.format),Qe=Fe.convert(N.type),be;N.isData3DTexture?(T.setTexture3D(N,0),be=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),be=L.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let kn=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qi=L.getParameter(L.UNPACK_SKIP_ROWS),Qt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let js=E.isDataArrayTexture||E.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ln=Se.get(E),qs=Se.get(N),ln=Se.get(Ln.__renderTarget),li=Se.get(qs.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,ln.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<_e;ci++)js&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,U,Ue+ci),E.isDepthTexture?(ft&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,U,lt+ci),L.blitFramebuffer(xe,Pe,te,ue,ye,$e,te,ue,L.DEPTH_BUFFER_BIT,L.NEAREST)):ft?L.copyTexSubImage3D(be,U,ye,$e,lt+ci,xe,Pe,te,ue):L.copyTexSubImage2D(be,U,ye,$e,lt+ci,xe,Pe,te,ue);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(be,U,ye,$e,lt,te,ue,_e,Yt,Qe,ht.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(be,U,ye,$e,lt,te,ue,_e,Yt,ht.data):L.texSubImage3D(be,U,ye,$e,lt,te,ue,_e,Yt,Qe,ht):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,ye,$e,te,ue,Yt,Qe,ht.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,ye,$e,ht.width,ht.height,Yt,ht.data):L.texSubImage2D(L.TEXTURE_2D,U,ye,$e,te,ue,Yt,Qe,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,kn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt),U===0&&N.generateMipmaps&&L.generateMipmap(be),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,H=null,U=0){return E.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,k,H,U)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){A=0,w=0,I=null,fe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Ta=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},dr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new P,pr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Lh=new P,Dh=new Ze,Nh=new Ze,Mg=new P,Uh=new we,na=new P,Vo=new sn,zh=new we,Wo=new Wi,Aa=class extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(s),e.ray.intersectsSphere(Vo)!==!1&&(zh.copy(s).invert(),Wo.copy(e.ray).applyMatrix4(zh),!(this.boundingBox!==null&&Wo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Dh.fromBufferAttribute(s.attributes.skinIndex,e),Nh.fromBufferAttribute(s.attributes.skinWeight,e),Lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Nh.getComponent(r);if(a!==0){let o=Dh.getComponent(r);Uh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mg.copy(Lh).applyMatrix4(Uh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},mr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wa=class extends It{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Bt,u=Bt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oh=new we,bg=new we,Ca=class i{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:bg;Oh.multiplyMatrices(o,t[r]),Oh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wa(t,e,e,un,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new mr),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ei=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new we,Fh=new we,ia=[],Bh=new hn,Sg=new we,Js=new Ke,Qs=new sn,Xi=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Bh.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Qs.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Fh.multiplyMatrices(n,ps),Js.matrixWorld=Fh,Js.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){let l=ia[a];l.instanceId=r,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wa(new Float32Array(s*this.count),s,this.count,fc,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var an=class extends rn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ra=new P,Ia=new P,kh=new we,er=new Wi,sa=new sn,Xo=new P,Hh=new P,Cn=class extends mt{constructor(e=new dt,t=new an){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ra.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ra.distanceTo(Ia);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;kh.copy(s).invert(),er.copy(e.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=u.getX(v),y=u.getX(v+1),b=ra(this,e,er,l,d,y);b&&t.push(b)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=ra(this,e,er,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=ra(this,e,er,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=ra(this,e,er,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ra(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Ra.fromBufferAttribute(a,s),Ia.fromBufferAttribute(a,r),t.distanceSqToSegment(Ra,Ia,Xo,Hh)>n)return;Xo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Xo);if(!(l<e.near||l>e.far))return{distance:l,point:Hh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Gh=new P,Vh=new P,ji=class extends Cn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gh.distanceTo(Vh);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ls=class extends Cn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends rn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wh=new we,Yl=new Wi,aa=new sn,oa=new P,Pa=class extends mt{constructor(e=new dt,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Wh.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(Wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);oa.fromBufferAttribute(h,m),Xh(oa,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)oa.fromBufferAttribute(h,g),Xh(oa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xh(i,e,t,n,s,r,a){let o=Yl.distanceSqToPoint(i);if(o<t){let l=new P;Yl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var La=class extends It{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Da=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new Le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vr=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function y(){let _=new P,C=new P,A=0,w=(t-e)/n;for(let I=0;I<=r;I++){let S=[],M=I/r,R=M*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,G=B*l+o,X=Math.sin(G),W=Math.cos(G);C.x=R*X,C.y=-M*n+m,C.z=R*W,h.push(C.x,C.y,C.z),_.set(X,w,W).normalize(),f.push(_.x,_.y,_.z),p.push(B,1-M),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let M=v[S][I],R=v[S+1][I],F=v[S+1][I+1],B=v[S][I+1];(e>0||S!==0)&&(u.push(M,R,B),A+=3),(t>0||S!==r-1)&&(u.push(R,F,B),A+=3)}c.addGroup(d,A,0),d+=A}function b(_){let C=g,A=new Le,w=new P,I=0,S=_===!0?e:t,M=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let R=g;for(let F=0;F<=s;F++){let G=F/s*l+o,X=Math.cos(G),W=Math.sin(G);w.x=S*W,w.y=m*M,w.z=S*X,h.push(w.x,w.y,w.z),f.push(0,M,0),A.x=X*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let F=0;F<s;F++){let B=C+F,G=R+F;_===!0?u.push(G,G+1,B):u.push(G+1,G,B),I+=3}c.addGroup(d,I,_===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $l=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new P,_=new P,C=new P;for(let A=0;A<t.length;A+=3)p(t[A+0],b),p(t[A+1],_),p(t[A+2],C),l(b,_,C,y)}function l(y,b,_,C){let A=C+1,w=[];for(let I=0;I<=A;I++){w[I]=[];let S=y.clone().lerp(_,I/A),M=b.clone().lerp(_,I/A),R=A-I;for(let F=0;F<=R;F++)F===0&&I===A?w[I][F]=S:w[I][F]=S.clone().lerp(M,F/R)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){let M=Math.floor(S/2);S%2===0?(f(w[I][M+1]),f(w[I+1][M]),f(w[I][M])):(f(w[I][M+1]),f(w[I+1][M+1]),f(w[I+1][M]))}}function c(y){let b=new P;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let y=new P;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let _=m(y)/2/Math.PI+.5,C=d(y)/Math.PI+.5;a.push(_,1-C)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){let b=a[y+0],_=a[y+2],C=a[y+4],A=Math.max(b,_,C),w=Math.min(b,_,C);A>.9&&w<.1&&(b<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,b){let _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let y=new P,b=new P,_=new P,C=new P,A=new Le,w=new Le,I=new Le;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),C.copy(y).add(b).add(_).divideScalar(3);let R=m(C);v(A,M+0,y,R),v(w,M+2,b,R),v(I,M+4,_,R)}}function v(y,b,_,C){C<0&&y.x===1&&(a[b]=y.x-1),_.x===0&&_.z===0&&(a[b]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ds=class i extends $l{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _r=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new P,g=new Le;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let y=d+m,b=y,_=y+n+1,C=y+n+2,A=y+1;o.push(b,_,A),o.push(_,C,A)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var qi=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,f=new P,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let y=[],b=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let A=C/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(A+_,1-b),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let b=u[d][y+1],_=u[d][y],C=u[d+1][y],A=u[d+1][y+1];(d!==0||a>0)&&p.push(b,_,A),(d!==n-1||l<Math.PI)&&p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xr=class extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,p=h.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),jh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),jh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function jh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var fn=class extends rn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends fn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function la(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Tg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Tf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:r=e,o=2*t-n;break;case Fu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ou:a=e,l=2*n-t;break;case Fu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let C=0;C!==o;++C)r[C]=d*a[u+C]+y*a[c+C]+b*a[l+C]+_*a[h+C];return r}},Kl=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Jl=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Eg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ws;var Si=class extends dn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=As;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends dn{};Na.prototype.ValueTypeName="color";var ti=class extends dn{};ti.prototype.ValueTypeName="number";var Ql=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ni=class extends dn{InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion";ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends dn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=As;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends dn{};ii.prototype.ValueTypeName="vector";var Ua=class{constructor(e="",t=-1,n=[],s=Kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Tg(l);l=qh(l,1,u),c=qh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ti(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,v){if(p.length!==0){let m=[],d=[];Tf(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(let v in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let b=f[g];m.push(b.time),d.push(b.morphTarget===v?1:0)}s.push(new ti(".morphTargetInfluence["+v+"]",m,d))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(ii,p+".position",f,"pos",s),n(ni,p+".quaternion",f,"rot",s),n(ii,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ag(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return Na;case"quaternion":return ni;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ag(i.type);if(i.times===void 0){let t=[],n=[];Tf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ec=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Cg=new ec,si=class{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var jn={},tc=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends si{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=jn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:b,value:_})=>{if(b)d.close();else{v+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,w=u.length;A<w;A++){let I=u[A];I.onProgress&&I.onProgress(C)}d.enqueue(_),y()}},b=>{d.error(b)})}}});return new Response(m)}else throw new tc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{vi.add(e,c);let u=jn[e];delete jn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var nc=class extends si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ur("img");function l(){u(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var za=class extends si{constructor(e){super(e)}load(e,t,n,s){let r=new It,a=new nc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ns=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oa=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jo=new we,Yh=new P,$h=new P,Mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ic=class extends Mr{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fa=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zh=new we,tr=new P,qo=new P,sc=class extends Mr{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),qo.copy(n.position),qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qo),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}},Ba=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rc=class extends Mr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ti=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ka=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,l),r.manager.itemStart(e)}};var Ha=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Kh(){return performance.now()}var xc="\\[\\]\\.:\\/",Rg=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Ig="[^"+xc.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",yc),Lg=/(WCOD+)?/.source.replace("WCOD",Ig),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Ug=new RegExp("^"+Pg+Lg+Dg+Ng+"$"),zg=["material","materials","bones","map"],ac=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=ac;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var Jh=new we,Ga=class{constructor(e,t,n=0,s=1/0){this.ray=new Wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,n=[]){return oc(e,this,n,t),n.sort(Qh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)oc(e[s],this,n,t);return n.sort(Qh),n}};function Qh(i,e){return i.distance-e.distance}function oc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)oc(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Mc(i,e){if(e===df)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Sr||e===Wa){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Sr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var qa=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cc(t)}),this.register(function(t){return new Rc(t)}),this.register(function(t){return new Fc(t)}),this.register(function(t){return new Bc(t)}),this.register(function(t){return new kc(t)}),this.register(function(t){return new Pc(t)}),this.register(function(t){return new Lc(t)}),this.register(function(t){return new Dc(t)}),this.register(function(t){return new Nc(t)}),this.register(function(t){return new wc(t)}),this.register(function(t){return new Uc(t)}),this.register(function(t){return new Ic(t)}),this.register(function(t){return new Oc(t)}),this.register(function(t){return new zc(t)}),this.register(function(t){return new Tc(t)}),this.register(function(t){return new Hc(t)}),this.register(function(t){return new Gc(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ti.extractUrlBase(e);a=Ti.resolveURL(c,this.path)}else a=Ti.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new yr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===If){try{a[Ve.KHR_BINARY_GLTF]=new Vc(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:a[h]=new Ac;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[h]=new Wc(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[h]=new Xc;break;case Ve.KHR_MESH_QUANTIZATION:a[h]=new jc;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Fg(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tc=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ee(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],kt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Us(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ba(u),c.distance=h;break;case"spot":c=new Fa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ac=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},wc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(o,o)}return Promise.all(r)}},Rc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ic=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Pc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,bt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Lc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Dc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}},Nc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Uc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,bt)),Promise.all(r)}},zc=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Oc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Fc=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Bc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},kc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hc=class{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Gc=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let v=new we,m=new P,d=new nn,y=new P(1,1,1),b=new Xi(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,v.compose(m,d,y));for(let _ in l)if(_==="_COLOR_0"){let C=l[_];b.instanceColor=new ei(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},If="glTF",Er=12,Af={JSON:1313821514,BIN:5130562},Vc=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==If)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Er,r=new DataView(e,Er),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Af.JSON){let c=new Uint8Array(e,Er+a,o);this.content=n.decode(c)}else if(l===Af.BIN){let c=Er+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Yc[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Yc[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Os[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},o,c,kt,f)})})}},Xc=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},jc=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Ya=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,y=1-m,b=d-f+h;for(let _=0;_!==o;_++){let C=a[v+_+o],A=a[v+_+l]*u,w=a[g+_+o],I=a[g+_]*u;r[_]=y*C+b*A+m*w+d*I}return r}},Bg=new nn,qc=class extends Ya{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Bg.fromArray(r).normalize().toArray(r),r}},pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:Bt,9729:$t,9984:lc,9985:sr,9986:ms,9987:Nn},Cf={33071:$n,33648:lr,10497:Gi},bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kg={CUBICSPLINE:void 0,LINEAR:ws,STEP:As},Sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hg(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function Yi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gg(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Vg(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wg(i){let e,t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ec(t.attributes):e=i.indices+":"+Ec(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ec(i.targets[n]);return e}function Ec(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $c(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jg=new we,Zc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new za(this.options.manager):this.textureLoader=new ka(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Yi(r,o,s),ri(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ti.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=bc[s.type],o=Os[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new At(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=bc[s.type],c=Os[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,b=t.cache.get(y);b||(v=new c(o,d*p,s.count*p/u),b=new dr(v,p/u),t.cache.add(y,b)),m=new pr(b,l,f%p/u,g)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),m=new At(v,l,g);if(s.sparse!==void 0){let d=bc.SCALAR,y=Os[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,C=new y(a[1],b,s.sparse.count*d),A=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=C.length;w<I;w++){let S=C[w];if(m.setX(S,A[w*l]),l>=2&&m.setY(S,A[w*l+1]),l>=3&&m.setZ(S,A[w*l+2]),l>=4&&m.setW(S,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=wf[f.magFilter]||$t,u.minFilter=wf[f.minFilter]||Nn,u.wrapS=Cf[f.wrapS]||Gi,u.wrapT=Cf[f.wrapT]||Gi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bt&&u.minFilter!==$t,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let m=new It(v);m.needsUpdate=!0,f(m)}),t.load(Ti.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ri(h,a),h.userData.mimeType=a.mimeType||Xg(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new gr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new an,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let h=s[Ve.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],kt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,bt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ft);let u=r.alphaMode||Sc.OPAQUE;if(u===Sc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Sc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==St&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==St){let h=r.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],kt)}return r.emissiveTexture!==void 0&&a!==St&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&Yi(s,h,r),h})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Rf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Wg(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Rf(new dt,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Hg(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],d,y=c[p];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Aa(v,y):new Ke(v,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?d.geometry=Mc(d.geometry,Wa):m.mode===pn.TRIANGLE_FAN&&(d.geometry=Mc(d.geometry,Sr));else if(m.mode===pn.LINES)d=new ji(v,y);else if(m.mode===pn.LINE_STRIP)d=new Cn(v,y);else if(m.mode===pn.LINE_LOOP)d=new Ls(v,y);else if(m.mode===pn.POINTS)d=new Pa(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Vg(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),ri(d,r),m.extensions&&Yi(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Yi(s,h[0],r),h[0];let f=new vt;r.extensions&&Yi(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(gf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ps(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new we;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ca(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],v=p.target,m=v.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let y=0,b=f.length;y<b;y++){let _=f[y],C=p[y],A=g[y],w=v[y],I=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,C,A,w,I);if(S)for(let M=0;M<S.length;M++)d.push(S[M])}return new Ua(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,jg)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new mr:c.length>1?u=new vt:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ri(u,r),r.extensions&&Yi(n,u,r),r.matrix!==void 0){let h=new we;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;n.name&&(r.name=s.createUniqueName(n.name)),ri(r,n),n.extensions&&Yi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof rn||f instanceof It)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Ai[r.path]===Ai.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ai[r.path]){case Ai.weights:c=ti;break;case Ai.rotation:c=ni;break;case Ai.position:case Ai.scale:c=ii;break;default:n.itemSize===1?c=ti:c=ii;break}let u=s.interpolation!==void 0?kg[s.interpolation]:ws,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Ai[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$c(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ni?qc:Ya;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qg(i,e,t){let n=e.attributes,s=new hn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let u=$c(Os[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let v=$c(Os[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Rf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Yc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return We.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),ri(i,e),qg(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Gg(i,e.targets,t):i})}var Tr={radius:2.5,points:[0,0,2.5,0,1.3889,2.0787,0,2.0787,1.3889,0,2.452,.4877,0,2.5,0,0,2.452,-.4877,0,2.0787,-1.3889,0,0,-2.5,.0952,.4784,2.452,.1866,.9383,2.3097,.271,1.3622,2.0787,.3449,1.7338,1.7678,.4055,2.0387,1.3889,.4506,2.2653,.9567,.4784,2.4048,.4877,.4877,2.452,0,.4784,2.4048,-.4877,.4506,2.2653,-.9567,.4055,2.0387,-1.3889,.3449,1.7338,-1.7678,.271,1.3622,-2.0787,.1866,.9383,-2.3097,.0952,.4784,-2.452,.1866,.4506,2.452,.3661,.8839,2.3097,.5315,1.2832,2.0787,.6765,1.6332,1.7678,.7955,1.9204,1.3889,.8839,2.1339,.9567,.9383,2.2653,.4877,.9567,2.3097,0,.9383,2.2653,-.4877,.8839,2.1339,-.9567,.7955,1.9204,-1.3889,.6765,1.6332,-1.7678,.5315,1.2832,-2.0787,.3661,.8839,-2.3097,.1866,.4506,-2.452,.271,.4055,2.452,.5315,.7955,2.3097,.7716,1.1548,2.0787,.9821,1.4698,1.7678,1.1548,1.7284,1.3889,1.2832,1.9204,.9567,1.3622,2.0387,.4877,1.3889,2.0787,0,1.3622,2.0387,-.4877,1.2832,1.9204,-.9567,1.1548,1.7284,-1.3889,.9821,1.4698,-1.7678,.7716,1.1548,-2.0787,.5315,.7955,-2.3097,.271,.4055,-2.452,.3449,.3449,2.452,.6765,.6765,2.3097,.9821,.9821,2.0787,1.25,1.25,1.7678,1.4698,1.4698,1.3889,1.6332,1.6332,.9567,1.7338,1.7338,.4877,1.7678,1.7678,0,1.7338,1.7338,-.4877,1.6332,1.6332,-.9567,1.4698,1.4698,-1.3889,1.25,1.25,-1.7678,.9821,.9821,-2.0787,.6765,.6765,-2.3097,.3449,.3449,-2.452,.4055,.271,2.452,.7955,.5315,2.3097,1.1548,.7716,2.0787,1.4698,.9821,1.7678,1.7284,1.1548,1.3889,1.9204,1.2832,.9567,2.0387,1.3622,.4877,2.0787,1.3889,0,2.0387,1.3622,-.4877,1.9204,1.2832,-.9567,1.7284,1.1548,-1.3889,1.4698,.9821,-1.7678,1.1548,.7716,-2.0787,.7955,.5315,-2.3097,.4055,.271,-2.452,.4506,.1866,2.452,.8839,.3661,2.3097,1.2832,.5315,2.0787,1.6332,.6765,1.7678,1.9204,.7955,1.3889,2.1339,.8839,.9567,2.2653,.9383,.4877,2.3097,.9567,0,2.2653,.9383,-.4877,2.1339,.8839,-.9567,1.9204,.7955,-1.3889,1.6332,.6765,-1.7678,1.2832,.5315,-2.0787,.8839,.3661,-2.3097,.4506,.1866,-2.452,.4784,.0952,2.452,.9383,.1866,2.3097,1.3622,.271,2.0787,1.7338,.3449,1.7678,2.0387,.4055,1.3889,2.2653,.4506,.9567,2.4048,.4784,.4877,2.452,.4877,0,2.4048,.4784,-.4877,2.2653,.4506,-.9567,2.0387,.4055,-1.3889,1.7338,.3449,-1.7678,1.3622,.271,-2.0787,.9383,.1866,-2.3097,.4784,.0952,-2.452,.4877,-0,2.452,.9567,-0,2.3097,1.3889,-0,2.0787,1.7678,0,1.7678,2.0787,-0,1.3889,2.3097,0,.9567,2.452,-0,.4877,2.5,-0,0,2.452,-0,-.4877,2.3097,0,-.9567,2.0787,-0,-1.3889,1.7678,0,-1.7678,1.3889,-0,-2.0787,.9567,-0,-2.3097,.4877,-0,-2.452,.4784,-.0952,2.452,.9383,-.1866,2.3097,1.3622,-.271,2.0787,1.7338,-.3449,1.7678,2.0387,-.4055,1.3889,2.2653,-.4506,.9567,2.4048,-.4784,.4877,2.452,-.4877,0,2.4048,-.4784,-.4877,2.2653,-.4506,-.9567,2.0387,-.4055,-1.3889,1.7338,-.3449,-1.7678,1.3622,-.271,-2.0787,.9383,-.1866,-2.3097,.4784,-.0952,-2.452,.4506,-.1866,2.452,.8839,-.3661,2.3097,1.2832,-.5315,2.0787,1.6332,-.6765,1.7678,1.9204,-.7955,1.3889,2.1339,-.8839,.9567,2.2653,-.9383,.4877,2.3097,-.9567,0,2.2653,-.9383,-.4877,2.1339,-.8839,-.9567,1.9204,-.7955,-1.3889,1.6332,-.6765,-1.7678,1.2832,-.5315,-2.0787,.8839,-.3661,-2.3097,.4506,-.1866,-2.452,.4055,-.271,2.452,.7955,-.5315,2.3097,1.1548,-.7716,2.0787,1.4698,-.9821,1.7678,1.7284,-1.1548,1.3889,1.9204,-1.2832,.9567,2.0387,-1.3622,.4877,2.0787,-1.3889,0,2.0387,-1.3622,-.4877,1.9204,-1.2832,-.9567,1.7284,-1.1548,-1.3889,1.4698,-.9821,-1.7678,1.1548,-.7716,-2.0787,.7955,-.5315,-2.3097,.4055,-.271,-2.452,.3449,-.3449,2.452,.6765,-.6765,2.3097,.9821,-.9821,2.0787,1.25,-1.25,1.7678,1.4698,-1.4698,1.3889,1.6332,-1.6332,.9567,1.7338,-1.7338,.4877,1.7678,-1.7678,0,1.7338,-1.7338,-.4877,1.6332,-1.6332,-.9567,1.4698,-1.4698,-1.3889,1.25,-1.25,-1.7678,.9821,-.9821,-2.0787,.6765,-.6765,-2.3097,.3449,-.3449,-2.452,.271,-.4055,2.452,.5315,-.7955,2.3097,.7716,-1.1548,2.0787,.9821,-1.4698,1.7678,1.1548,-1.7284,1.3889,1.2832,-1.9204,.9567,1.3622,-2.0387,.4877,1.3889,-2.0787,0,1.3622,-2.0387,-.4877,1.2832,-1.9204,-.9567,1.1548,-1.7284,-1.3889,.9821,-1.4698,-1.7678,.7716,-1.1548,-2.0787,.5315,-.7955,-2.3097,.271,-.4055,-2.452,.1866,-.4506,2.452,.3661,-.8839,2.3097,.5315,-1.2832,2.0787,.6765,-1.6332,1.7678,.7955,-1.9204,1.3889,.8839,-2.1339,.9567,.9383,-2.2653,.4877,.9567,-2.3097,0,.9383,-2.2653,-.4877,.8839,-2.1339,-.9567,.7955,-1.9204,-1.3889,.6765,-1.6332,-1.7678,.5315,-1.2832,-2.0787,.3661,-.8839,-2.3097,.1866,-.4506,-2.452,.0952,-.4784,2.452,.1866,-.9383,2.3097,.271,-1.3622,2.0787,.3449,-1.7338,1.7678,.4055,-2.0387,1.3889,.4506,-2.2653,.9567,.4784,-2.4048,.4877,.4877,-2.452,0,.4784,-2.4048,-.4877,.4506,-2.2653,-.9567,.4055,-2.0387,-1.3889,.3449,-1.7338,-1.7678,.271,-1.3622,-2.0787,.1866,-.9383,-2.3097,.0952,-.4784,-2.452,-0,-.4877,2.452,-0,-.9567,2.3097,-0,-1.3889,2.0787,-0,-1.7678,1.7678,-0,-2.0787,1.3889,0,-2.3097,.9567,-0,-2.452,.4877,-0,-2.5,0,-0,-2.452,-.4877,0,-2.3097,-.9567,-0,-2.0787,-1.3889,-0,-1.7678,-1.7678,-0,-1.3889,-2.0787,-0,-.9567,-2.3097,-0,-.4877,-2.452,-.0952,-.4784,2.452,-.1866,-.9383,2.3097,-.271,-1.3622,2.0787,-.3449,-1.7338,1.7678,-.4055,-2.0387,1.3889,-.4506,-2.2653,.9567,-.4784,-2.4048,.4877,-.4877,-2.452,0,-.4784,-2.4048,-.4877,-.4506,-2.2653,-.9567,-.4055,-2.0387,-1.3889,-.3449,-1.7338,-1.7678,-.271,-1.3622,-2.0787,-.1866,-.9383,-2.3097,-.0952,-.4784,-2.452,-.1866,-.4506,2.452,-.3661,-.8839,2.3097,-.5315,-1.2832,2.0787,-.6765,-1.6332,1.7678,-.7955,-1.9204,1.3889,-.8839,-2.1339,.9567,-.9383,-2.2653,.4877,-.9567,-2.3097,0,-.9383,-2.2653,-.4877,-.8839,-2.1339,-.9567,-.7955,-1.9204,-1.3889,-.6765,-1.6332,-1.7678,-.5315,-1.2832,-2.0787,-.3661,-.8839,-2.3097,-.1866,-.4506,-2.452,-.271,-.4055,2.452,-.5315,-.7955,2.3097,-.7716,-1.1548,2.0787,-.9821,-1.4698,1.7678,-1.1548,-1.7284,1.3889,-1.2832,-1.9204,.9567,-1.3622,-2.0387,.4877,-1.3889,-2.0787,0,-1.3622,-2.0387,-.4877,-1.2832,-1.9204,-.9567,-1.1548,-1.7284,-1.3889,-.9821,-1.4698,-1.7678,-.7716,-1.1548,-2.0787,-.5315,-.7955,-2.3097,-.271,-.4055,-2.452,-.3449,-.3449,2.452,-.6765,-.6765,2.3097,-.9821,-.9821,2.0787,-1.25,-1.25,1.7678,-1.4698,-1.4698,1.3889,-1.6332,-1.6332,.9567,-1.7338,-1.7338,.4877,-1.7678,-1.7678,0,-1.7338,-1.7338,-.4877,-1.6332,-1.6332,-.9567,-1.4698,-1.4698,-1.3889,-1.25,-1.25,-1.7678,-.9821,-.9821,-2.0787,-.6765,-.6765,-2.3097,-.3449,-.3449,-2.452,-.4055,-.271,2.452,-.7955,-.5315,2.3097,-1.1548,-.7716,2.0787,-1.4698,-.9821,1.7678,-1.7284,-1.1548,1.3889,-1.9204,-1.2832,.9567,-2.0387,-1.3622,.4877,-2.0787,-1.3889,0,-2.0387,-1.3622,-.4877,-1.9204,-1.2832,-.9567,-1.7284,-1.1548,-1.3889,-1.4698,-.9821,-1.7678,-1.1548,-.7716,-2.0787,-.7955,-.5315,-2.3097,-.4055,-.271,-2.452,-.4506,-.1866,2.452,-.8839,-.3661,2.3097,-1.2832,-.5315,2.0787,-1.6332,-.6765,1.7678,-1.9204,-.7955,1.3889,-2.1339,-.8839,.9567,-2.2653,-.9383,.4877,-2.3097,-.9567,0,-2.2653,-.9383,-.4877,-2.1339,-.8839,-.9567,-1.9204,-.7955,-1.3889,-1.6332,-.6765,-1.7678,-1.2832,-.5315,-2.0787,-.8839,-.3661,-2.3097,-.4506,-.1866,-2.452,-.4784,-.0952,2.452,-.9383,-.1866,2.3097,-1.3622,-.271,2.0787,-1.7338,-.3449,1.7678,-2.0387,-.4055,1.3889,-2.2653,-.4506,.9567,-2.4048,-.4784,.4877,-2.452,-.4877,0,-2.4048,-.4784,-.4877,-2.2653,-.4506,-.9567,-2.0387,-.4055,-1.3889,-1.7338,-.3449,-1.7678,-1.3622,-.271,-2.0787,-.9383,-.1866,-2.3097,-.4784,-.0952,-2.452,-.4877,0,2.452,-.9567,0,2.3097,-1.3889,0,2.0787,-1.7678,0,1.7678,-2.0787,0,1.3889,-2.3097,0,.9567,-2.452,0,.4877,-2.5,0,0,-2.452,0,-.4877,-2.3097,0,-.9567,-2.0787,0,-1.3889,-1.7678,0,-1.7678,-1.3889,0,-2.0787,-.9567,0,-2.3097,-.4877,0,-2.452,-.4784,.0952,2.452,-.9383,.1866,2.3097,-1.3622,.271,2.0787,-1.7338,.3449,1.7678,-2.0387,.4055,1.3889,-2.2653,.4506,.9567,-2.4048,.4784,.4877,-2.452,.4877,0,-2.4048,.4784,-.4877,-2.2653,.4506,-.9567,-2.0387,.4055,-1.3889,-1.7338,.3449,-1.7678,-1.3622,.271,-2.0787,-.9383,.1866,-2.3097,-.4784,.0952,-2.452,-.4506,.1866,2.452,-.8839,.3661,2.3097,-1.2832,.5315,2.0787,-1.6332,.6765,1.7678,-1.9204,.7955,1.3889,-2.1339,.8839,.9567,-2.2653,.9383,.4877,-2.3097,.9567,0,-2.2653,.9383,-.4877,-2.1339,.8839,-.9567,-1.9204,.7955,-1.3889,-1.6332,.6765,-1.7678,-1.2832,.5315,-2.0787,-.8839,.3661,-2.3097,-.4506,.1866,-2.452,-.4055,.271,2.452,-.7955,.5315,2.3097,-1.1548,.7716,2.0787,-1.4698,.9821,1.7678,-1.7284,1.1548,1.3889,-1.9204,1.2832,.9567,-2.0387,1.3622,.4877,-2.0787,1.3889,0,-2.0387,1.3622,-.4877,-1.9204,1.2832,-.9567,-1.7284,1.1548,-1.3889,-1.4698,.9821,-1.7678,-1.1548,.7716,-2.0787,-.7955,.5315,-2.3097,-.4055,.271,-2.452,-.3449,.3449,2.452,-.6765,.6765,2.3097,-.9821,.9821,2.0787,-1.25,1.25,1.7678,-1.4698,1.4698,1.3889,-1.6332,1.6332,.9567,-1.7338,1.7338,.4877,-1.7678,1.7678,0,-1.7338,1.7338,-.4877,-1.6332,1.6332,-.9567,-1.4698,1.4698,-1.3889,-1.25,1.25,-1.7678,-.9821,.9821,-2.0787,-.6765,.6765,-2.3097,-.3449,.3449,-2.452,-.271,.4055,2.452,-.5315,.7955,2.3097,-.7716,1.1548,2.0787,-.9821,1.4698,1.7678,-1.1548,1.7284,1.3889,-1.2832,1.9204,.9567,-1.3622,2.0387,.4877,-1.3889,2.0787,0,-1.3622,2.0387,-.4877,-1.2832,1.9204,-.9567,-1.1548,1.7284,-1.3889,-.9821,1.4698,-1.7678,-.7716,1.1548,-2.0787,-.5315,.7955,-2.3097,-.271,.4055,-2.452,-.1866,.4506,2.452,-.3661,.8839,2.3097,-.5315,1.2832,2.0787,-.6765,1.6332,1.7678,-.7955,1.9204,1.3889,-.8839,2.1339,.9567,-.9383,2.2653,.4877,-.9567,2.3097,0,-.9383,2.2653,-.4877,-.8839,2.1339,-.9567,-.7955,1.9204,-1.3889,-.6765,1.6332,-1.7678,-.5315,1.2832,-2.0787,-.3661,.8839,-2.3097,-.1866,.4506,-2.452,-.0952,.4784,2.452,-.1866,.9383,2.3097,-.271,1.3622,2.0787,-.3449,1.7338,1.7678,-.4055,2.0387,1.3889,-.4506,2.2653,.9567,-.4784,2.4048,.4877,-.4877,2.452,0,-.4784,2.4048,-.4877,-.4506,2.2653,-.9567,-.4055,2.0387,-1.3889,-.3449,1.7338,-1.7678,-.271,1.3622,-2.0787,-.1866,.9383,-2.3097,-.0952,.4784,-2.452,0,.4877,2.452,0,.9567,2.3097,0,1.7678,1.7678,0,2.3097,.9567,0,2.3097,-.9567,0,1.7678,-1.7678,0,1.3889,-2.0787,0,.9567,-2.3097,0,.4877,-2.452,0,2.476,.2439,0,2.476,-.2439,.1409,.7083,2.3808,.2288,1.1503,2.1942,.3079,1.548,1.9232,.3752,1.8863,1.5783,.4281,2.152,1.1728,.4645,2.3351,.7222,.483,2.4284,.2439,.483,2.4284,-.2439,.4645,2.3351,-.7222,.4281,2.152,-1.1728,.3752,1.8863,-1.5783,.3079,1.548,-1.9232,.2288,1.1503,-2.1942,.1409,.7083,-2.3808,.2392,2.4284,-.4877,.2439,2.476,0,.1355,1.3756,2.0787,.2028,2.0587,-1.3889,.2028,2.0587,1.3889,.2392,2.4284,.4877,.2764,.6672,2.3808,.4488,1.0835,2.1942,.604,1.4582,1.9232,.736,1.7768,1.5783,.8397,2.0272,1.1728,.9111,2.1996,.7222,.9475,2.2875,.2439,.9475,2.2875,-.2439,.9111,2.1996,-.7222,.8397,2.0272,-1.1728,.736,1.7768,-1.5783,.604,1.4582,-1.9232,.4488,1.0835,-2.1942,.2764,.6672,-2.3808,.1409,.4645,-2.452,.2764,.9111,-2.3097,.7222,2.3808,0,.7083,2.3351,.4877,.1409,.4645,2.452,.7083,2.3351,-.4877,.2764,.9111,2.3097,.6672,2.1996,-.9567,.4012,1.3227,2.0787,.6005,1.9796,-1.3889,.5107,1.6835,1.7678,.5107,1.6835,-1.7678,.6005,1.9796,1.3889,.4012,1.3227,-2.0787,.6672,2.1996,.9567,.4012,.6005,2.3808,.6516,.9752,2.1942,.8769,1.3123,1.9232,1.0685,1.5991,1.5783,1.219,1.8244,1.1728,1.3227,1.9796,.7222,1.3756,2.0587,.2439,1.3756,2.0587,-.2439,1.3227,1.9796,-.7222,1.219,1.8244,-1.1728,1.0685,1.5991,-1.5783,.8769,1.3123,-1.9232,.6516,.9752,-2.1942,.4012,.6005,-2.3808,.8293,1.5515,-1.7678,.9752,1.8244,-1.3889,.9752,1.8244,1.3889,.8293,1.5515,1.7678,.6516,1.219,-2.0787,1.0835,2.0272,.9567,.4488,.8397,-2.3097,1.1503,2.152,.4877,.2288,.4281,-2.452,1.1728,2.1942,0,.2288,.4281,2.452,1.1503,2.152,-.4877,.4488,.8397,2.3097,1.0835,2.0272,-.9567,.6516,1.219,2.0787,.5107,.5107,2.3808,.8293,.8293,2.1942,1.1161,1.1161,1.9232,1.3599,1.3599,1.5783,1.5515,1.5515,1.1728,1.6835,1.6835,.7222,1.7508,1.7508,.2439,1.7508,1.7508,-.2439,1.6835,1.6835,-.7222,1.5515,1.5515,-1.1728,1.3599,1.3599,-1.5783,1.1161,1.1161,-1.9232,.8293,.8293,-2.1942,.5107,.5107,-2.3808,.3079,.3752,2.452,.3079,.3752,-2.452,1.548,1.8863,-.4877,1.5783,1.9232,0,.604,.736,2.3097,1.4582,1.7768,-.9567,.8769,1.0685,2.0787,1.3123,1.5991,-1.3889,1.1161,1.3599,1.7678,1.1161,1.3599,-1.7678,1.3123,1.5991,1.3889,.8769,1.0685,-2.0787,1.4582,1.7768,.9567,.604,.736,-2.3097,1.548,1.8863,.4877,.6005,.4012,2.3808,.9752,.6516,2.1942,1.3123,.8769,1.9232,1.5991,1.0685,1.5783,1.8244,1.219,1.1728,1.9796,1.3227,.7222,2.0587,1.3756,.2439,2.0587,1.3756,-.2439,1.9796,1.3227,-.7222,1.8244,1.219,-1.1728,1.5991,1.0685,-1.5783,1.3123,.8769,-1.9232,.9752,.6516,-2.1942,.6005,.4012,-2.3808,1.5991,1.3123,1.3889,1.3599,1.1161,1.7678,1.0685,.8769,-2.0787,1.3599,1.1161,-1.7678,1.7768,1.4582,.9567,.736,.604,-2.3097,1.8863,1.548,.4877,.3752,.3079,-2.452,1.9232,1.5783,0,.3752,.3079,2.452,1.8863,1.548,-.4877,.736,.604,2.3097,1.7768,1.4582,-.9567,1.0685,.8769,2.0787,1.5991,1.3123,-1.3889,.6672,.2764,2.3808,1.0835,.4488,2.1942,1.4582,.604,1.9232,1.7768,.736,1.5783,2.0272,.8397,1.1728,2.1996,.9111,.7222,2.2875,.9475,.2439,2.2875,.9475,-.2439,2.1996,.9111,-.7222,2.0272,.8397,-1.1728,1.7768,.736,-1.5783,1.4582,.604,-1.9232,1.0835,.4488,-2.1942,.6672,.2764,-2.3808,2.152,1.1503,-.4877,2.1942,1.1728,0,.8397,.4488,2.3097,.4281,.2288,2.452,2.0272,1.0835,-.9567,1.219,.6516,2.0787,1.8244,.9752,-1.3889,1.5515,.8293,1.7678,1.5515,.8293,-1.7678,1.8244,.9752,1.3889,1.219,.6516,-2.0787,2.0272,1.0835,.9567,.8397,.4488,-2.3097,2.152,1.1503,.4877,.4281,.2288,-2.452,.7083,.1409,2.3808,1.1503,.2288,2.1942,1.548,.3079,1.9232,1.8863,.3752,1.5783,2.152,.4281,1.1728,2.3351,.4645,.7222,2.4284,.483,.2439,2.4284,.483,-.2439,2.3351,.4645,-.7222,2.152,.4281,-1.1728,1.8863,.3752,-1.5783,1.548,.3079,-1.9232,1.1503,.2288,-2.1942,.7083,.1409,-2.3808,1.3227,.4012,-2.0787,1.6835,.5107,-1.7678,2.1996,.6672,.9567,1.9796,.6005,1.3889,.9111,.2764,-2.3097,2.3351,.7083,.4877,.4645,.1409,-2.452,2.3808,.7222,0,.4645,.1409,2.452,2.3351,.7083,-.4877,.9111,.2764,2.3097,2.1996,.6672,-.9567,1.3227,.4012,2.0787,1.9796,.6005,-1.3889,1.6835,.5107,1.7678,.7222,-0,2.3808,1.1728,-0,2.1942,1.5783,-0,1.9232,1.9232,-0,1.5783,2.1942,-0,1.1728,2.3808,-0,.7222,2.476,-0,.2439,2.476,-0,-.2439,2.3808,-0,-.7222,2.1942,-0,-1.1728,1.9232,-0,-1.5783,1.5783,-0,-1.9232,1.1728,-0,-2.1942,.7222,-0,-2.3808,.9475,.0933,2.3097,.483,.0476,2.452,2.2875,.2253,-.9567,2.4284,.2392,-.4877,1.3756,.1355,2.0787,2.0587,.2028,-1.3889,1.7508,.1724,1.7678,1.7508,.1724,-1.7678,2.0587,.2028,1.3889,1.3756,.1355,-2.0787,2.2875,.2253,.9567,.9475,.0933,-2.3097,2.4284,.2392,.4877,.483,.0476,-2.452,2.476,.2439,0,.7083,-.1409,2.3808,1.1503,-.2288,2.1942,1.548,-.3079,1.9232,1.8863,-.3752,1.5783,2.152,-.4281,1.1728,2.3351,-.4645,.7222,2.4284,-.483,.2439,2.4284,-.483,-.2439,2.3351,-.4645,-.7222,2.152,-.4281,-1.1728,1.8863,-.3752,-1.5783,1.548,-.3079,-1.9232,1.1503,-.2288,-2.1942,.7083,-.1409,-2.3808,2.2875,-.2253,.9567,2.0587,-.2028,1.3889,.9475,-.0933,-2.3097,1.3756,-.1355,-2.0787,2.4284,-.2392,.4877,.483,-.0476,-2.452,2.476,-.2439,0,.483,-.0476,2.452,2.4284,-.2392,-.4877,.9475,-.0933,2.3097,2.2875,-.2253,-.9567,1.3756,-.1355,2.0787,2.0587,-.2028,-1.3889,1.7508,-.1724,1.7678,1.7508,-.1724,-1.7678,.6672,-.2764,2.3808,1.0835,-.4488,2.1942,1.4582,-.604,1.9232,1.7768,-.736,1.5783,2.0272,-.8397,1.1728,2.1996,-.9111,.7222,2.2875,-.9475,.2439,2.2875,-.9475,-.2439,2.1996,-.9111,-.7222,2.0272,-.8397,-1.1728,1.7768,-.736,-1.5783,1.4582,-.604,-1.9232,1.0835,-.4488,-2.1942,.6672,-.2764,-2.3808,2.1996,-.6672,-.9567,2.3351,-.7083,-.4877,1.3227,-.4012,2.0787,.9111,-.2764,2.3097,1.9796,-.6005,-1.3889,1.6835,-.5107,1.7678,1.6835,-.5107,-1.7678,1.9796,-.6005,1.3889,1.3227,-.4012,-2.0787,2.1996,-.6672,.9567,.9111,-.2764,-2.3097,2.3351,-.7083,.4877,.4645,-.1409,-2.452,2.3808,-.7222,0,.4645,-.1409,2.452,.6005,-.4012,2.3808,.9752,-.6516,2.1942,1.3123,-.8769,1.9232,1.5991,-1.0685,1.5783,1.8244,-1.219,1.1728,1.9796,-1.3227,.7222,2.0587,-1.3756,.2439,2.0587,-1.3756,-.2439,1.9796,-1.3227,-.7222,1.8244,-1.219,-1.1728,1.5991,-1.0685,-1.5783,1.3123,-.8769,-1.9232,.9752,-.6516,-2.1942,.6005,-.4012,-2.3808,.8397,-.4488,-2.3097,1.219,-.6516,-2.0787,2.152,-1.1503,.4877,2.0272,-1.0835,.9567,.4281,-.2288,-2.452,2.1942,-1.1728,0,.4281,-.2288,2.452,2.152,-1.1503,-.4877,.8397,-.4488,2.3097,2.0272,-1.0835,-.9567,1.219,-.6516,2.0787,1.8244,-.9752,-1.3889,1.5515,-.8293,1.7678,1.5515,-.8293,-1.7678,1.8244,-.9752,1.3889,.5107,-.5107,2.3808,.8293,-.8293,2.1942,1.1161,-1.1161,1.9232,1.3599,-1.3599,1.5783,1.5515,-1.5515,1.1728,1.6835,-1.6835,.7222,1.7508,-1.7508,.2439,1.7508,-1.7508,-.2439,1.6835,-1.6835,-.7222,1.5515,-1.5515,-1.1728,1.3599,-1.3599,-1.5783,1.1161,-1.1161,-1.9232,.8293,-.8293,-2.1942,.5107,-.5107,-2.3808,1.5991,-1.3123,-1.3889,1.7768,-1.4582,-.9567,1.3599,-1.1161,1.7678,1.0685,-.8769,2.0787,1.3599,-1.1161,-1.7678,1.5991,-1.3123,1.3889,1.0685,-.8769,-2.0787,1.7768,-1.4582,.9567,.736,-.604,-2.3097,1.8863,-1.548,.4877,.3752,-.3079,-2.452,1.9232,-1.5783,0,.3752,-.3079,2.452,1.8863,-1.548,-.4877,.736,-.604,2.3097,.4012,-.6005,2.3808,.6516,-.9752,2.1942,.8769,-1.3123,1.9232,1.0685,-1.5991,1.5783,1.219,-1.8244,1.1728,1.3227,-1.9796,.7222,1.3756,-2.0587,.2439,1.3756,-2.0587,-.2439,1.3227,-1.9796,-.7222,1.219,-1.8244,-1.1728,1.0685,-1.5991,-1.5783,.8769,-1.3123,-1.9232,.6516,-.9752,-2.1942,.4012,-.6005,-2.3808,.3079,-.3752,-2.452,.604,-.736,-2.3097,1.5783,-1.9232,0,1.548,-1.8863,.4877,.3079,-.3752,2.452,1.548,-1.8863,-.4877,.604,-.736,2.3097,1.4582,-1.7768,-.9567,.8769,-1.0685,2.0787,1.3123,-1.5991,-1.3889,1.1161,-1.3599,1.7678,1.1161,-1.3599,-1.7678,1.3123,-1.5991,1.3889,.8769,-1.0685,-2.0787,1.4582,-1.7768,.9567,.2764,-.6672,2.3808,.4488,-1.0835,2.1942,.604,-1.4582,1.9232,.736,-1.7768,1.5783,.8397,-2.0272,1.1728,.9111,-2.1996,.7222,.9475,-2.2875,.2439,.9475,-2.2875,-.2439,.9111,-2.1996,-.7222,.8397,-2.0272,-1.1728,.736,-1.7768,-1.5783,.604,-1.4582,-1.9232,.4488,-1.0835,-2.1942,.2764,-.6672,-2.3808,.8293,-1.5515,1.7678,.6516,-1.219,2.0787,.8293,-1.5515,-1.7678,.9752,-1.8244,-1.3889,.9752,-1.8244,1.3889,.6516,-1.219,-2.0787,1.0835,-2.0272,.9567,.4488,-.8397,-2.3097,1.1503,-2.152,.4877,.2288,-.4281,-2.452,1.1728,-2.1942,0,.2288,-.4281,2.452,1.1503,-2.152,-.4877,.4488,-.8397,2.3097,1.0835,-2.0272,-.9567,.1409,-.7083,2.3808,.2288,-1.1503,2.1942,.3079,-1.548,1.9232,.3752,-1.8863,1.5783,.4281,-2.152,1.1728,.4645,-2.3351,.7222,.483,-2.4284,.2439,.483,-2.4284,-.2439,.4645,-2.3351,-.7222,.4281,-2.152,-1.1728,.3752,-1.8863,-1.5783,.3079,-1.548,-1.9232,.2288,-1.1503,-2.1942,.1409,-.7083,-2.3808,.7222,-2.3808,0,.7083,-2.3351,.4877,.1409,-.4645,2.452,.1409,-.4645,-2.452,.7083,-2.3351,-.4877,.2764,-.9111,2.3097,.6672,-2.1996,-.9567,.4012,-1.3227,2.0787,.6005,-1.9796,-1.3889,.5107,-1.6835,1.7678,.5107,-1.6835,-1.7678,.6005,-1.9796,1.3889,.4012,-1.3227,-2.0787,.6672,-2.1996,.9567,.2764,-.9111,-2.3097,-0,-.7222,2.3808,-0,-1.1728,2.1942,-0,-1.5783,1.9232,-0,-1.9232,1.5783,-0,-2.1942,1.1728,-0,-2.3808,.7222,-0,-2.476,.2439,-0,-2.476,-.2439,-0,-2.3808,-.7222,-0,-2.1942,-1.1728,-0,-1.9232,-1.5783,-0,-1.5783,-1.9232,-0,-1.1728,-2.1942,-0,-.7222,-2.3808,.1724,-1.7508,-1.7678,.2028,-2.0587,-1.3889,.2028,-2.0587,1.3889,.1724,-1.7508,1.7678,.1355,-1.3756,-2.0787,.2253,-2.2875,.9567,.0933,-.9475,-2.3097,.2392,-2.4284,.4877,.0476,-.483,-2.452,.2439,-2.476,0,.0476,-.483,2.452,.2392,-2.4284,-.4877,.0933,-.9475,2.3097,.2253,-2.2875,-.9567,.1355,-1.3756,2.0787,-.1409,-.7083,2.3808,-.2288,-1.1503,2.1942,-.3079,-1.548,1.9232,-.3752,-1.8863,1.5783,-.4281,-2.152,1.1728,-.4645,-2.3351,.7222,-.483,-2.4284,.2439,-.483,-2.4284,-.2439,-.4645,-2.3351,-.7222,-.4281,-2.152,-1.1728,-.3752,-1.8863,-1.5783,-.3079,-1.548,-1.9232,-.2288,-1.1503,-2.1942,-.1409,-.7083,-2.3808,-.0476,-.483,2.452,-.0476,-.483,-2.452,-.2392,-2.4284,-.4877,-.2439,-2.476,0,-.0933,-.9475,2.3097,-.2253,-2.2875,-.9567,-.1355,-1.3756,2.0787,-.2028,-2.0587,-1.3889,-.1724,-1.7508,1.7678,-.1724,-1.7508,-1.7678,-.2028,-2.0587,1.3889,-.1355,-1.3756,-2.0787,-.2253,-2.2875,.9567,-.0933,-.9475,-2.3097,-.2392,-2.4284,.4877,-.2764,-.6672,2.3808,-.4488,-1.0835,2.1942,-.604,-1.4582,1.9232,-.736,-1.7768,1.5783,-.8397,-2.0272,1.1728,-.9111,-2.1996,.7222,-.9475,-2.2875,.2439,-.9475,-2.2875,-.2439,-.9111,-2.1996,-.7222,-.8397,-2.0272,-1.1728,-.736,-1.7768,-1.5783,-.604,-1.4582,-1.9232,-.4488,-1.0835,-2.1942,-.2764,-.6672,-2.3808,-.6005,-1.9796,1.3889,-.5107,-1.6835,1.7678,-.4012,-1.3227,-2.0787,-.5107,-1.6835,-1.7678,-.6672,-2.1996,.9567,-.2764,-.9111,-2.3097,-.7083,-2.3351,.4877,-.1409,-.4645,-2.452,-.7222,-2.3808,0,-.1409,-.4645,2.452,-.7083,-2.3351,-.4877,-.2764,-.9111,2.3097,-.6672,-2.1996,-.9567,-.4012,-1.3227,2.0787,-.6005,-1.9796,-1.3889,-.4012,-.6005,2.3808,-.6516,-.9752,2.1942,-.8769,-1.3123,1.9232,-1.0685,-1.5991,1.5783,-1.219,-1.8244,1.1728,-1.3227,-1.9796,.7222,-1.3756,-2.0587,.2439,-1.3756,-2.0587,-.2439,-1.3227,-1.9796,-.7222,-1.219,-1.8244,-1.1728,-1.0685,-1.5991,-1.5783,-.8769,-1.3123,-1.9232,-.6516,-.9752,-2.1942,-.4012,-.6005,-2.3808,-1.1503,-2.152,-.4877,-1.1728,-2.1942,0,-.4488,-.8397,2.3097,-.2288,-.4281,2.452,-1.0835,-2.0272,-.9567,-.6516,-1.219,2.0787,-.9752,-1.8244,-1.3889,-.8293,-1.5515,1.7678,-.8293,-1.5515,-1.7678,-.9752,-1.8244,1.3889,-.6516,-1.219,-2.0787,-1.0835,-2.0272,.9567,-.4488,-.8397,-2.3097,-1.1503,-2.152,.4877,-.2288,-.4281,-2.452,-.5107,-.5107,2.3808,-.8293,-.8293,2.1942,-1.1161,-1.1161,1.9232,-1.3599,-1.3599,1.5783,-1.5515,-1.5515,1.1728,-1.6835,-1.6835,.7222,-1.7508,-1.7508,.2439,-1.7508,-1.7508,-.2439,-1.6835,-1.6835,-.7222,-1.5515,-1.5515,-1.1728,-1.3599,-1.3599,-1.5783,-1.1161,-1.1161,-1.9232,-.8293,-.8293,-2.1942,-.5107,-.5107,-2.3808,-.8769,-1.0685,-2.0787,-1.1161,-1.3599,-1.7678,-1.4582,-1.7768,.9567,-1.3123,-1.5991,1.3889,-.604,-.736,-2.3097,-1.548,-1.8863,.4877,-.3079,-.3752,-2.452,-1.5783,-1.9232,0,-.3079,-.3752,2.452,-1.548,-1.8863,-.4877,-.604,-.736,2.3097,-1.4582,-1.7768,-.9567,-.8769,-1.0685,2.0787,-1.3123,-1.5991,-1.3889,-1.1161,-1.3599,1.7678,-.6005,-.4012,2.3808,-.9752,-.6516,2.1942,-1.3123,-.8769,1.9232,-1.5991,-1.0685,1.5783,-1.8244,-1.219,1.1728,-1.9796,-1.3227,.7222,-2.0587,-1.3756,.2439,-2.0587,-1.3756,-.2439,-1.9796,-1.3227,-.7222,-1.8244,-1.219,-1.1728,-1.5991,-1.0685,-1.5783,-1.3123,-.8769,-1.9232,-.9752,-.6516,-2.1942,-.6005,-.4012,-2.3808,-1.7768,-1.4582,-.9567,-1.8863,-1.548,-.4877,-1.0685,-.8769,2.0787,-.736,-.604,2.3097,-1.5991,-1.3123,-1.3889,-1.3599,-1.1161,1.7678,-1.3599,-1.1161,-1.7678,-1.5991,-1.3123,1.3889,-1.0685,-.8769,-2.0787,-1.7768,-1.4582,.9567,-.736,-.604,-2.3097,-1.8863,-1.548,.4877,-.3752,-.3079,-2.452,-1.9232,-1.5783,0,-.3752,-.3079,2.452,-.6672,-.2764,2.3808,-1.0835,-.4488,2.1942,-1.4582,-.604,1.9232,-1.7768,-.736,1.5783,-2.0272,-.8397,1.1728,-2.1996,-.9111,.7222,-2.2875,-.9475,.2439,-2.2875,-.9475,-.2439,-2.1996,-.9111,-.7222,-2.0272,-.8397,-1.1728,-1.7768,-.736,-1.5783,-1.4582,-.604,-1.9232,-1.0835,-.4488,-2.1942,-.6672,-.2764,-2.3808,-.8397,-.4488,-2.3097,-1.219,-.6516,-2.0787,-2.152,-1.1503,.4877,-2.0272,-1.0835,.9567,-.4281,-.2288,-2.452,-2.1942,-1.1728,0,-.4281,-.2288,2.452,-2.152,-1.1503,-.4877,-.8397,-.4488,2.3097,-2.0272,-1.0835,-.9567,-1.219,-.6516,2.0787,-1.8244,-.9752,-1.3889,-1.5515,-.8293,1.7678,-1.5515,-.8293,-1.7678,-1.8244,-.9752,1.3889,-.7083,-.1409,2.3808,-1.1503,-.2288,2.1942,-1.548,-.3079,1.9232,-1.8863,-.3752,1.5783,-2.152,-.4281,1.1728,-2.3351,-.4645,.7222,-2.4284,-.483,.2439,-2.4284,-.483,-.2439,-2.3351,-.4645,-.7222,-2.152,-.4281,-1.1728,-1.8863,-.3752,-1.5783,-1.548,-.3079,-1.9232,-1.1503,-.2288,-2.1942,-.7083,-.1409,-2.3808,-1.3227,-.4012,2.0787,-.9111,-.2764,2.3097,-1.9796,-.6005,-1.3889,-2.1996,-.6672,-.9567,-1.6835,-.5107,1.7678,-1.6835,-.5107,-1.7678,-1.9796,-.6005,1.3889,-1.3227,-.4012,-2.0787,-2.1996,-.6672,.9567,-.9111,-.2764,-2.3097,-2.3351,-.7083,.4877,-.4645,-.1409,-2.452,-2.3808,-.7222,0,-.4645,-.1409,2.452,-2.3351,-.7083,-.4877,-.7222,0,2.3808,-1.1728,0,2.1942,-1.5783,0,1.9232,-1.9232,0,1.5783,-2.1942,0,1.1728,-2.3808,0,.7222,-2.476,0,.2439,-2.476,0,-.2439,-2.3808,0,-.7222,-2.1942,0,-1.1728,-1.9232,0,-1.5783,-1.5783,0,-1.9232,-1.1728,0,-2.1942,-.7222,0,-2.3808,-2.4284,-.2392,.4877,-2.2875,-.2253,.9567,-.483,-.0476,-2.452,-.9475,-.0933,-2.3097,-2.476,-.2439,0,-.483,-.0476,2.452,-2.4284,-.2392,-.4877,-.9475,-.0933,2.3097,-2.2875,-.2253,-.9567,-1.3756,-.1355,2.0787,-2.0587,-.2028,-1.3889,-1.7508,-.1724,1.7678,-1.7508,-.1724,-1.7678,-2.0587,-.2028,1.3889,-1.3756,-.1355,-2.0787,-.7083,.1409,2.3808,-1.1503,.2288,2.1942,-1.548,.3079,1.9232,-1.8863,.3752,1.5783,-2.152,.4281,1.1728,-2.3351,.4645,.7222,-2.4284,.483,.2439,-2.4284,.483,-.2439,-2.3351,.4645,-.7222,-2.152,.4281,-1.1728,-1.8863,.3752,-1.5783,-1.548,.3079,-1.9232,-1.1503,.2288,-2.1942,-.7083,.1409,-2.3808,-2.0587,.2028,-1.3889,-2.2875,.2253,-.9567,-1.7508,.1724,1.7678,-1.3756,.1355,2.0787,-1.7508,.1724,-1.7678,-2.0587,.2028,1.3889,-1.3756,.1355,-2.0787,-2.2875,.2253,.9567,-.9475,.0933,-2.3097,-2.4284,.2392,.4877,-.483,.0476,-2.452,-2.476,.2439,0,-.483,.0476,2.452,-2.4284,.2392,-.4877,-.9475,.0933,2.3097,-.6672,.2764,2.3808,-1.0835,.4488,2.1942,-1.4582,.604,1.9232,-1.7768,.736,1.5783,-2.0272,.8397,1.1728,-2.1996,.9111,.7222,-2.2875,.9475,.2439,-2.2875,.9475,-.2439,-2.1996,.9111,-.7222,-2.0272,.8397,-1.1728,-1.7768,.736,-1.5783,-1.4582,.604,-1.9232,-1.0835,.4488,-2.1942,-.6672,.2764,-2.3808,-.4645,.1409,-2.452,-.9111,.2764,-2.3097,-2.3808,.7222,0,-2.3351,.7083,.4877,-.4645,.1409,2.452,-2.3351,.7083,-.4877,-.9111,.2764,2.3097,-2.1996,.6672,-.9567,-1.3227,.4012,2.0787,-1.9796,.6005,-1.3889,-1.6835,.5107,1.7678,-1.6835,.5107,-1.7678,-1.9796,.6005,1.3889,-1.3227,.4012,-2.0787,-2.1996,.6672,.9567,-.6005,.4012,2.3808,-.9752,.6516,2.1942,-1.3123,.8769,1.9232,-1.5991,1.0685,1.5783,-1.8244,1.219,1.1728,-1.9796,1.3227,.7222,-2.0587,1.3756,.2439,-2.0587,1.3756,-.2439,-1.9796,1.3227,-.7222,-1.8244,1.219,-1.1728,-1.5991,1.0685,-1.5783,-1.3123,.8769,-1.9232,-.9752,.6516,-2.1942,-.6005,.4012,-2.3808,-1.5515,.8293,1.7678,-1.219,.6516,2.0787,-1.5515,.8293,-1.7678,-1.8244,.9752,-1.3889,-1.8244,.9752,1.3889,-1.219,.6516,-2.0787,-2.0272,1.0835,.9567,-.8397,.4488,-2.3097,-2.152,1.1503,.4877,-.4281,.2288,-2.452,-2.1942,1.1728,0,-.4281,.2288,2.452,-2.152,1.1503,-.4877,-.8397,.4488,2.3097,-2.0272,1.0835,-.9567,-.5107,.5107,2.3808,-.8293,.8293,2.1942,-1.1161,1.1161,1.9232,-1.3599,1.3599,1.5783,-1.5515,1.5515,1.1728,-1.6835,1.6835,.7222,-1.7508,1.7508,.2439,-1.7508,1.7508,-.2439,-1.6835,1.6835,-.7222,-1.5515,1.5515,-1.1728,-1.3599,1.3599,-1.5783,-1.1161,1.1161,-1.9232,-.8293,.8293,-2.1942,-.5107,.5107,-2.3808,-1.9232,1.5783,0,-1.8863,1.548,.4877,-.3752,.3079,2.452,-.3752,.3079,-2.452,-1.8863,1.548,-.4877,-.736,.604,2.3097,-1.7768,1.4582,-.9567,-1.0685,.8769,2.0787,-1.5991,1.3123,-1.3889,-1.3599,1.1161,1.7678,-1.3599,1.1161,-1.7678,-1.5991,1.3123,1.3889,-1.0685,.8769,-2.0787,-1.7768,1.4582,.9567,-.736,.604,-2.3097,-.4012,.6005,2.3808,-.6516,.9752,2.1942,-.8769,1.3123,1.9232,-1.0685,1.5991,1.5783,-1.219,1.8244,1.1728,-1.3227,1.9796,.7222,-1.3756,2.0587,.2439,-1.3756,2.0587,-.2439,-1.3227,1.9796,-.7222,-1.219,1.8244,-1.1728,-1.0685,1.5991,-1.5783,-.8769,1.3123,-1.9232,-.6516,.9752,-2.1942,-.4012,.6005,-2.3808,-1.1161,1.3599,-1.7678,-1.3123,1.5991,-1.3889,-1.3123,1.5991,1.3889,-1.1161,1.3599,1.7678,-.8769,1.0685,-2.0787,-1.4582,1.7768,.9567,-.604,.736,-2.3097,-1.548,1.8863,.4877,-.3079,.3752,-2.452,-1.5783,1.9232,0,-.3079,.3752,2.452,-1.548,1.8863,-.4877,-.604,.736,2.3097,-1.4582,1.7768,-.9567,-.8769,1.0685,2.0787,-.2764,.6672,2.3808,-.4488,1.0835,2.1942,-.604,1.4582,1.9232,-.736,1.7768,1.5783,-.8397,2.0272,1.1728,-.9111,2.1996,.7222,-.9475,2.2875,.2439,-.9475,2.2875,-.2439,-.9111,2.1996,-.7222,-.8397,2.0272,-1.1728,-.736,1.7768,-1.5783,-.604,1.4582,-1.9232,-.4488,1.0835,-2.1942,-.2764,.6672,-2.3808,-.2288,.4281,-2.452,-1.1503,2.152,-.4877,-1.1728,2.1942,0,-.4488,.8397,2.3097,-.2288,.4281,2.452,-1.0835,2.0272,-.9567,-.6516,1.219,2.0787,-.9752,1.8244,-1.3889,-.8293,1.5515,1.7678,-.8293,1.5515,-1.7678,-.9752,1.8244,1.3889,-.6516,1.219,-2.0787,-1.0835,2.0272,.9567,-.4488,.8397,-2.3097,-1.1503,2.152,.4877,-.1409,.7083,2.3808,-.2288,1.1503,2.1942,-.3079,1.548,1.9232,-.3752,1.8863,1.5783,-.4281,2.152,1.1728,-.4645,2.3351,.7222,-.483,2.4284,.2439,-.483,2.4284,-.2439,-.4645,2.3351,-.7222,-.4281,2.152,-1.1728,-.3752,1.8863,-1.5783,-.3079,1.548,-1.9232,-.2288,1.1503,-2.1942,-.1409,.7083,-2.3808,-.4012,1.3227,-2.0787,-.5107,1.6835,-1.7678,-.6672,2.1996,.9567,-.6005,1.9796,1.3889,-.2764,.9111,-2.3097,-.7083,2.3351,.4877,-.1409,.4645,-2.452,-.7222,2.3808,0,-.1409,.4645,2.452,-.7083,2.3351,-.4877,-.2764,.9111,2.3097,-.6672,2.1996,-.9567,-.4012,1.3227,2.0787,-.6005,1.9796,-1.3889,-.5107,1.6835,1.7678,0,.7222,2.3808,0,1.5783,-1.9232,0,1.1728,-2.1942,0,.7222,-2.3808,-.0933,.9475,2.3097,-.0476,.483,2.452,-.2253,2.2875,-.9567,-.1724,1.7508,1.7678,-.1724,1.7508,-1.7678,-.1355,1.3756,-2.0787,-.2253,2.2875,.9567,-.0933,.9475,-2.3097,-.0476,.483,-2.452,0,.2439,2.476,0,1.1728,2.1942,0,1.5783,1.9232,0,1.9232,1.5783,0,2.1942,1.1728,0,2.3808,.7222,0,2.3808,-.7222,0,2.1942,-1.1728,0,1.9232,-1.5783,0,.2439,-2.476,.0476,.2392,2.476,.0476,.2392,-2.476,.0933,.9475,2.3097,.0476,.483,2.452,.2253,2.2875,-.9567,.1724,1.7508,1.7678,.1724,1.7508,-1.7678,.1355,1.3756,-2.0787,.2253,2.2875,.9567,.0933,.9475,-2.3097,.0476,.483,-2.452,.0933,.2253,2.476,.0933,.2253,-2.476,.1355,.2028,2.476,.1355,.2028,-2.476,.1724,.1724,2.476,.1724,.1724,-2.476,.2028,.1355,2.476,.2028,.1355,-2.476,.2253,.0933,2.476,.2253,.0933,-2.476,.2392,.0476,2.476,.2392,.0476,-2.476,.2439,-0,2.476,.2439,-0,-2.476,.2392,-.0476,2.476,.2392,-.0476,-2.476,.2253,-.0933,2.476,.2253,-.0933,-2.476,.2028,-.1355,2.476,.2028,-.1355,-2.476,.1724,-.1724,2.476,.1724,-.1724,-2.476,.1355,-.2028,2.476,.1355,-.2028,-2.476,.0933,-.2253,2.476,.0933,-.2253,-2.476,.0476,-.2392,2.476,.0476,-.2392,-2.476,-0,-.2439,2.476,-0,-.2439,-2.476,-.0476,-.2392,2.476,-.0476,-.2392,-2.476,-.0933,-.2253,2.476,-.0933,-.2253,-2.476,-.1355,-.2028,2.476,-.1355,-.2028,-2.476,-.1724,-.1724,2.476,-.1724,-.1724,-2.476,-.2028,-.1355,2.476,-.2028,-.1355,-2.476,-.2253,-.0933,2.476,-.2253,-.0933,-2.476,-.2392,-.0476,2.476,-.2392,-.0476,-2.476,-.2439,0,2.476,-.2439,0,-2.476,-.2392,.0476,2.476,-.2392,.0476,-2.476,-.2253,.0933,2.476,-.2253,.0933,-2.476,-.2028,.1355,2.476,-.2028,.1355,-2.476,-.1724,.1724,2.476,-.1724,.1724,-2.476,-.1355,.2028,2.476,-.1355,.2028,-2.476,-.0933,.2253,2.476,-.0933,.2253,-2.476,-.0476,.2392,2.476,-.0476,.2392,-2.476,-.2392,2.4284,-.4877,-.1355,1.3756,2.0787,-.2028,2.0587,-1.3889,-.2028,2.0587,1.3889,-.2392,2.4284,.4877,-.2439,2.476,0,-.2415,2.4522,-.2439,-.2415,2.4522,.2439,-.0704,.7153,-2.3808,-.2322,2.358,.7222,-.1144,1.1615,-2.1942,-.214,2.1731,1.1728,-.154,1.5632,-1.9232,-.1876,1.9047,1.5783,-.1876,1.9047,-1.5783,-.154,1.5632,1.9232,-.214,2.1731,-1.1728,-.1144,1.1615,2.1942,-.2322,2.358,-.7222,-.0704,.7153,2.3808,-.5556,1.8315,1.5783,-.5556,1.8315,-1.5783,-.456,1.5031,1.9232,-.6339,2.0896,-1.1728,-.3388,1.1169,2.1942,-.6878,2.2673,-.7222,-.2086,.6878,2.3808,-.7153,2.358,-.2439,-.7153,2.358,.2439,-.2086,.6878,-2.3808,-.6878,2.2673,.7222,-.3388,1.1169,-2.1942,-.6339,2.0896,1.1728,-.456,1.5031,-1.9232,-1.1615,2.1731,.2439,-.3388,.6339,-2.3808,-1.1169,2.0896,.7222,-.5502,1.0294,-2.1942,-1.0294,1.9258,1.1728,-.7404,1.3853,-1.9232,-.9022,1.688,1.5783,-.9022,1.688,-1.5783,-.7404,1.3853,1.9232,-1.0294,1.9258,-1.1728,-.5502,1.0294,2.1942,-1.1169,2.0896,-.7222,-.3388,.6339,2.3808,-1.1615,2.1731,-.2439,-.9965,1.2142,1.9232,-1.3853,1.688,-1.1728,-.7404,.9022,2.1942,-1.5031,1.8315,-.7222,-.456,.5556,2.3808,-1.5632,1.9047,-.2439,-1.5632,1.9047,.2439,-.456,.5556,-2.3808,-1.5031,1.8315,.7222,-.7404,.9022,-2.1942,-1.3853,1.688,1.1728,-.9965,1.2142,-1.9232,-1.2142,1.4795,1.5783,-1.2142,1.4795,-1.5783,-.5556,.456,-2.3808,-1.8315,1.5031,.7222,-.9022,.7404,-2.1942,-1.688,1.3853,1.1728,-1.2142,.9965,-1.9232,-1.4795,1.2142,1.5783,-1.4795,1.2142,-1.5783,-1.2142,.9965,1.9232,-1.688,1.3853,-1.1728,-.9022,.7404,2.1942,-1.8315,1.5031,-.7222,-.5556,.456,2.3808,-1.9047,1.5632,-.2439,-1.9047,1.5632,.2439,-1.9258,1.0294,-1.1728,-1.0294,.5502,2.1942,-2.0896,1.1169,-.7222,-.6339,.3388,2.3808,-2.1731,1.1615,-.2439,-2.1731,1.1615,.2439,-.6339,.3388,-2.3808,-2.0896,1.1169,.7222,-1.0294,.5502,-2.1942,-1.9258,1.0294,1.1728,-1.3853,.7404,-1.9232,-1.688,.9022,1.5783,-1.688,.9022,-1.5783,-1.3853,.7404,1.9232,-2.2673,.6878,.7222,-1.1169,.3388,-2.1942,-2.0896,.6339,1.1728,-1.5031,.456,-1.9232,-1.8315,.5556,1.5783,-1.8315,.5556,-1.5783,-1.5031,.456,1.9232,-2.0896,.6339,-1.1728,-1.1169,.3388,2.1942,-2.2673,.6878,-.7222,-.6878,.2086,2.3808,-2.358,.7153,-.2439,-2.358,.7153,.2439,-.6878,.2086,-2.3808,-1.1615,.1144,2.1942,-2.358,.2322,-.7222,-.7153,.0704,2.3808,-2.4522,.2415,-.2439,-2.4522,.2415,.2439,-.7153,.0704,-2.3808,-2.358,.2322,.7222,-1.1615,.1144,-2.1942,-2.1731,.214,1.1728,-1.5632,.154,-1.9232,-1.9047,.1876,1.5783,-1.9047,.1876,-1.5783,-1.5632,.154,1.9232,-2.1731,.214,-1.1728,-1.1615,-.1144,-2.1942,-2.1731,-.214,1.1728,-1.5632,-.154,-1.9232,-1.9047,-.1876,1.5783,-1.9047,-.1876,-1.5783,-1.5632,-.154,1.9232,-2.1731,-.214,-1.1728,-1.1615,-.1144,2.1942,-2.358,-.2322,-.7222,-.7153,-.0704,2.3808,-2.4522,-.2415,-.2439,-2.4522,-.2415,.2439,-.7153,-.0704,-2.3808,-2.358,-.2322,.7222,-2.2673,-.6878,-.7222,-.6878,-.2086,2.3808,-2.358,-.7153,-.2439,-2.358,-.7153,.2439,-.6878,-.2086,-2.3808,-2.2673,-.6878,.7222,-1.1169,-.3388,-2.1942,-2.0896,-.6339,1.1728,-1.5031,-.456,-1.9232,-1.8315,-.5556,1.5783,-1.8315,-.5556,-1.5783,-1.5031,-.456,1.9232,-2.0896,-.6339,-1.1728,-1.1169,-.3388,2.1942,-1.9258,-1.0294,1.1728,-1.3853,-.7404,-1.9232,-1.688,-.9022,1.5783,-1.688,-.9022,-1.5783,-1.3853,-.7404,1.9232,-1.9258,-1.0294,-1.1728,-1.0294,-.5502,2.1942,-2.0896,-1.1169,-.7222,-.6339,-.3388,2.3808,-2.1731,-1.1615,-.2439,-2.1731,-1.1615,.2439,-.6339,-.3388,-2.3808,-2.0896,-1.1169,.7222,-1.0294,-.5502,-2.1942,-.5556,-.456,2.3808,-1.9047,-1.5632,-.2439,-1.9047,-1.5632,.2439,-.5556,-.456,-2.3808,-1.8315,-1.5031,.7222,-.9022,-.7404,-2.1942,-1.688,-1.3853,1.1728,-1.2142,-.9965,-1.9232,-1.4795,-1.2142,1.5783,-1.4795,-1.2142,-1.5783,-1.2142,-.9965,1.9232,-1.688,-1.3853,-1.1728,-.9022,-.7404,2.1942,-1.8315,-1.5031,-.7222,-1.2142,-1.4795,1.5783,-1.2142,-1.4795,-1.5783,-.9965,-1.2142,1.9232,-1.3853,-1.688,-1.1728,-.7404,-.9022,2.1942,-1.5031,-1.8315,-.7222,-.456,-.5556,2.3808,-1.5632,-1.9047,-.2439,-1.5632,-1.9047,.2439,-.456,-.5556,-2.3808,-1.5031,-1.8315,.7222,-.7404,-.9022,-2.1942,-1.3853,-1.688,1.1728,-.9965,-1.2142,-1.9232,-1.1615,-2.1731,.2439,-.3388,-.6339,-2.3808,-1.1169,-2.0896,.7222,-.5502,-1.0294,-2.1942,-1.0294,-1.9258,1.1728,-.7404,-1.3853,-1.9232,-.9022,-1.688,1.5783,-.9022,-1.688,-1.5783,-.7404,-1.3853,1.9232,-1.0294,-1.9258,-1.1728,-.5502,-1.0294,2.1942,-1.1169,-2.0896,-.7222,-.3388,-.6339,2.3808,-1.1615,-2.1731,-.2439,-.5556,-1.8315,-1.5783,-.456,-1.5031,1.9232,-.6339,-2.0896,-1.1728,-.3388,-1.1169,2.1942,-.6878,-2.2673,-.7222,-.2086,-.6878,2.3808,-.7153,-2.358,-.2439,-.7153,-2.358,.2439,-.2086,-.6878,-2.3808,-.6878,-2.2673,.7222,-.3388,-1.1169,-2.1942,-.6339,-2.0896,1.1728,-.456,-1.5031,-1.9232,-.5556,-1.8315,1.5783,-.2415,-2.4522,.2439,-.0704,-.7153,-2.3808,-.2322,-2.358,.7222,-.1144,-1.1615,-2.1942,-.214,-2.1731,1.1728,-.154,-1.5632,-1.9232,-.1876,-1.9047,1.5783,-.1876,-1.9047,-1.5783,-.154,-1.5632,1.9232,-.214,-2.1731,-1.1728,-.1144,-1.1615,2.1942,-.2322,-2.358,-.7222,-.0704,-.7153,2.3808,-.2415,-2.4522,-.2439,.154,-1.5632,1.9232,.214,-2.1731,-1.1728,.1144,-1.1615,2.1942,.2322,-2.358,-.7222,.0704,-.7153,2.3808,.2415,-2.4522,-.2439,.2415,-2.4522,.2439,.0704,-.7153,-2.3808,.2322,-2.358,.7222,.1144,-1.1615,-2.1942,.214,-2.1731,1.1728,.154,-1.5632,-1.9232,.1876,-1.9047,1.5783,.1876,-1.9047,-1.5783,.2086,-.6878,-2.3808,.6878,-2.2673,.7222,.3388,-1.1169,-2.1942,.6339,-2.0896,1.1728,.456,-1.5031,-1.9232,.5556,-1.8315,1.5783,.5556,-1.8315,-1.5783,.456,-1.5031,1.9232,.6339,-2.0896,-1.1728,.3388,-1.1169,2.1942,.6878,-2.2673,-.7222,.2086,-.6878,2.3808,.7153,-2.358,-.2439,.7153,-2.358,.2439,1.0294,-1.9258,-1.1728,.5502,-1.0294,2.1942,1.1169,-2.0896,-.7222,.3388,-.6339,2.3808,1.1615,-2.1731,-.2439,1.1615,-2.1731,.2439,.3388,-.6339,-2.3808,1.1169,-2.0896,.7222,.5502,-1.0294,-2.1942,1.0294,-1.9258,1.1728,.7404,-1.3853,-1.9232,.9022,-1.688,1.5783,.9022,-1.688,-1.5783,.7404,-1.3853,1.9232,1.5031,-1.8315,.7222,.7404,-.9022,-2.1942,1.3853,-1.688,1.1728,.9965,-1.2142,-1.9232,1.2142,-1.4795,1.5783,1.2142,-1.4795,-1.5783,.9965,-1.2142,1.9232,1.3853,-1.688,-1.1728,.7404,-.9022,2.1942,1.5031,-1.8315,-.7222,.456,-.5556,2.3808,1.5632,-1.9047,-.2439,1.5632,-1.9047,.2439,.456,-.5556,-2.3808,.9022,-.7404,2.1942,1.8315,-1.5031,-.7222,.5556,-.456,2.3808,1.9047,-1.5632,-.2439,1.9047,-1.5632,.2439,.5556,-.456,-2.3808,1.8315,-1.5031,.7222,.9022,-.7404,-2.1942,1.688,-1.3853,1.1728,1.2142,-.9965,-1.9232,1.4795,-1.2142,1.5783,1.4795,-1.2142,-1.5783,1.2142,-.9965,1.9232,1.688,-1.3853,-1.1728,1.9258,-1.0294,1.1728,1.3853,-.7404,-1.9232,1.688,-.9022,1.5783,1.688,-.9022,-1.5783,1.3853,-.7404,1.9232,1.9258,-1.0294,-1.1728,1.0294,-.5502,2.1942,2.0896,-1.1169,-.7222,.6339,-.3388,2.3808,2.1731,-1.1615,-.2439,2.1731,-1.1615,.2439,.6339,-.3388,-2.3808,2.0896,-1.1169,.7222,1.0294,-.5502,-2.1942,.6878,-.2086,2.3808,2.358,-.7153,-.2439,2.358,-.7153,.2439,.6878,-.2086,-2.3808,2.2673,-.6878,.7222,1.1169,-.3388,-2.1942,2.0896,-.6339,1.1728,1.5031,-.456,-1.9232,1.8315,-.5556,1.5783,1.8315,-.5556,-1.5783,1.5031,-.456,1.9232,2.0896,-.6339,-1.1728,1.1169,-.3388,2.1942,2.2673,-.6878,-.7222,1.5632,-.154,-1.9232,1.9047,-.1876,1.5783,1.9047,-.1876,-1.5783,1.5632,-.154,1.9232,2.1731,-.214,-1.1728,1.1615,-.1144,2.1942,2.358,-.2322,-.7222,.7153,-.0704,2.3808,2.4522,-.2415,-.2439,2.4522,-.2415,.2439,.7153,-.0704,-2.3808,2.358,-.2322,.7222,1.1615,-.1144,-2.1942,2.1731,-.214,1.1728,2.4522,.2415,-.2439,2.4522,.2415,.2439,.7153,.0704,-2.3808,2.358,.2322,.7222,1.1615,.1144,-2.1942,2.1731,.214,1.1728,1.5632,.154,-1.9232,1.9047,.1876,1.5783,1.9047,.1876,-1.5783,1.5632,.154,1.9232,2.1731,.214,-1.1728,1.1615,.1144,2.1942,2.358,.2322,-.7222,.7153,.0704,2.3808,1.8315,.5556,1.5783,1.8315,.5556,-1.5783,1.5031,.456,1.9232,2.0896,.6339,-1.1728,1.1169,.3388,2.1942,2.2673,.6878,-.7222,.6878,.2086,2.3808,2.358,.7153,-.2439,2.358,.7153,.2439,.6878,.2086,-2.3808,2.2673,.6878,.7222,1.1169,.3388,-2.1942,2.0896,.6339,1.1728,1.5031,.456,-1.9232,2.1731,1.1615,.2439,.6339,.3388,-2.3808,2.0896,1.1169,.7222,1.0294,.5502,-2.1942,1.9258,1.0294,1.1728,1.3853,.7404,-1.9232,1.688,.9022,1.5783,1.688,.9022,-1.5783,1.3853,.7404,1.9232,1.9258,1.0294,-1.1728,1.0294,.5502,2.1942,2.0896,1.1169,-.7222,.6339,.3388,2.3808,2.1731,1.1615,-.2439,1.4795,1.2142,-1.5783,1.2142,.9965,1.9232,1.688,1.3853,-1.1728,.9022,.7404,2.1942,1.8315,1.5031,-.7222,.5556,.456,2.3808,1.9047,1.5632,-.2439,1.9047,1.5632,.2439,.5556,.456,-2.3808,1.8315,1.5031,.7222,.9022,.7404,-2.1942,1.688,1.3853,1.1728,1.2142,.9965,-1.9232,1.4795,1.2142,1.5783,1.5632,1.9047,.2439,.456,.5556,-2.3808,1.5031,1.8315,.7222,.7404,.9022,-2.1942,1.3853,1.688,1.1728,.9965,1.2142,-1.9232,1.2142,1.4795,1.5783,1.2142,1.4795,-1.5783,.9965,1.2142,1.9232,1.3853,1.688,-1.1728,.7404,.9022,2.1942,1.5031,1.8315,-.7222,.456,.5556,2.3808,1.5632,1.9047,-.2439,.7404,1.3853,1.9232,1.0294,1.9258,-1.1728,.5502,1.0294,2.1942,1.1169,2.0896,-.7222,.3388,.6339,2.3808,1.1615,2.1731,-.2439,1.1615,2.1731,.2439,.3388,.6339,-2.3808,1.1169,2.0896,.7222,.5502,1.0294,-2.1942,1.0294,1.9258,1.1728,.7404,1.3853,-1.9232,.9022,1.688,1.5783,.9022,1.688,-1.5783,.6878,2.2673,.7222,.3388,1.1169,-2.1942,.6339,2.0896,1.1728,.456,1.5031,-1.9232,.5556,1.8315,1.5783,.5556,1.8315,-1.5783,.456,1.5031,1.9232,.6339,2.0896,-1.1728,.3388,1.1169,2.1942,.6878,2.2673,-.7222,.2086,.6878,2.3808,.7153,2.358,-.2439,.7153,2.358,.2439,.2086,.6878,-2.3808,.2415,2.4522,.2439,.0704,.7153,-2.3808,.2322,2.358,.7222,.1144,1.1615,-2.1942,.214,2.1731,1.1728,.154,1.5632,-1.9232,.1876,1.9047,1.5783,.1876,1.9047,-1.5783,.154,1.5632,1.9232,.214,2.1731,-1.1728,.1144,1.1615,2.1942,.2322,2.358,-.7222,.0704,.7153,2.3808,.2415,2.4522,-.2439]};var su=Pu(Jc());var mn=Pu(Jc());var Pf={steps:16,pentatonic:[0,2,4,7,9],signatures:{jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},presets:{jungla:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:2113,arpegio:37444,pulso:22187,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",tempo:104,years:[{year:1988,value:21050,vital:{vit:92.7,div:97.9,est:55.8,pre:63,fever:0},masks:{bajo:2113,arpegio:18722,pulso:22187,canto:512},scaleSize:5,jitterMs:31,detuneCents:18,bioCutoffHz:4121,reverbWet:.176,anthroGain:.218,velocity:.964},{year:1989,value:17770,vital:{vit:90.8,div:96.2,est:61.4,pre:53.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:1024},scaleSize:5,jitterMs:27,detuneCents:15,bioCutoffHz:4809,reverbWet:.2,anthroGain:.16,velocity:.954},{year:1990,value:13730,vital:{vit:89.3,div:94.8,est:68.4,pre:42.8,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5806,reverbWet:.229,anthroGain:.101,velocity:.947},{year:1991,value:11030,vital:{vit:88.1,div:93.7,est:73,pre:35.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:19,detuneCents:11,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.94},{year:1992,value:13786,vital:{vit:86.6,div:92.4,est:68.3,pre:43,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5786,reverbWet:.228,anthroGain:.102,velocity:.933},{year:1993,value:14896,vital:{vit:85,div:90.9,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.925},{year:1994,value:14896,vital:{vit:83.4,div:89.4,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.917},{year:1995,value:29059,vital:{vit:80.2,div:86.5,est:42,pre:85,fever:0},masks:{bajo:2113,arpegio:18722,pulso:43348,canto:0},scaleSize:5,jitterMs:41,detuneCents:23,bioCutoffHz:2838,reverbWet:.119,anthroGain:.397,velocity:.901},{year:1996,value:18161,vital:{vit:78.2,div:84.8,est:60.8,pre:55,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:27,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.891},{year:1997,value:13227,vital:{vit:76.8,div:83.4,est:69.2,pre:41.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:22,detuneCents:12,bioCutoffHz:5945,reverbWet:.232,anthroGain:.094,velocity:.884},{year:1998,value:17383,vital:{vit:74.9,div:81.7,est:62.1,pre:52.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:4891,reverbWet:.202,anthroGain:.154,velocity:.875},{year:1999,value:17259,vital:{vit:73,div:80,est:62.3,pre:52.5,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4925,reverbWet:.204,anthroGain:.152,velocity:.865},{year:2e3,value:18226,vital:{vit:71,div:78.2,est:60.6,pre:55.2,fever:0},masks:{bajo:2049,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4704,reverbWet:.196,anthroGain:.168,velocity:.855},{year:2001,value:18165,vital:{vit:69.1,div:76.4,est:60.7,pre:55,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.845},{year:2002,value:21651,vital:{vit:66.7,div:74.3,est:54.7,pre:64.6,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:32,detuneCents:18,bioCutoffHz:4011,reverbWet:.172,anthroGain:.23,velocity:.834},{year:2003,value:25396,vital:{vit:64,div:71.8,est:48.3,pre:74.9,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:36,detuneCents:21,bioCutoffHz:3368,reverbWet:.145,anthroGain:.309,velocity:.82},{year:2004,value:27772,vital:{vit:60.9,div:69,est:44.2,pre:81.5,fever:0},masks:{bajo:2049,arpegio:2338,pulso:43348,canto:0},scaleSize:4,jitterMs:39,detuneCents:22,bioCutoffHz:3011,reverbWet:.128,anthroGain:.365,velocity:.805},{year:2005,value:19014,vital:{vit:58.9,div:67.2,est:59.3,pre:57.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.795},{year:2006,value:14286,vital:{vit:57.3,div:65.8,est:67.4,pre:44.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5660,reverbWet:.225,anthroGain:.108,velocity:.787},{year:2007,value:11651,vital:{vit:56.1,div:64.6,est:72,pre:37.1,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.781},{year:2008,value:12911,vital:{vit:54.7,div:63.3,est:69.8,pre:40.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.774},{year:2009,value:7464,vital:{vit:53.9,div:62.6,est:79.2,pre:25.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7786,reverbWet:.274,anthroGain:.036,velocity:.77},{year:2010,value:7e3,vital:{vit:53.1,div:61.9,est:80,pre:24.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7946,reverbWet:.277,anthroGain:.032,velocity:.766},{year:2011,value:6418,vital:{vit:52.4,div:61.3,est:81,pre:22.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8165,reverbWet:.281,anthroGain:.028,velocity:.762},{year:2012,value:4571,vital:{vit:51.9,div:60.8,est:84.1,pre:17.6,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:11,detuneCents:6,bioCutoffHz:8902,reverbWet:.294,anthroGain:.017,velocity:.76},{year:2013,value:5891,vital:{vit:51.3,div:60.2,est:81.9,pre:21.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8375,reverbWet:.285,anthroGain:.025,velocity:.757},{year:2014,value:5012,vital:{vit:50.7,div:59.7,est:83.4,pre:18.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:12,detuneCents:7,bioCutoffHz:8723,reverbWet:.291,anthroGain:.019,velocity:.754},{year:2015,value:6207,vital:{vit:50,div:59.1,est:81.3,pre:22.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.75},{year:2016,value:7893,vital:{vit:49.2,div:58.3,est:78.4,pre:26.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:9,bioCutoffHz:7629,reverbWet:.271,anthroGain:.039,velocity:.746},{year:2017,value:6947,vital:{vit:48.4,div:57.7,est:80,pre:24.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.742},{year:2018,value:7536,vital:{vit:47.6,div:56.9,est:79,pre:25.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7760,reverbWet:.273,anthroGain:.036,velocity:.738},{year:2019,value:10129,vital:{vit:46.5,div:55.9,est:74.6,pre:32.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:6867,reverbWet:.254,anthroGain:.06,velocity:.733},{year:2020,value:10851,vital:{vit:45.3,div:54.8,est:73.3,pre:34.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:6638,reverbWet:.249,anthroGain:.067,velocity:.726},{year:2021,value:13038,vital:{vit:43.9,div:53.6,est:69.6,pre:40.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5996,reverbWet:.234,anthroGain:.092,velocity:.72},{year:2022,value:11594,vital:{vit:42.7,div:52.4,est:72.1,pre:36.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6417,reverbWet:.244,anthroGain:.075,velocity:.714},{year:2023,value:9064,vital:{vit:41.7,div:51.5,est:76.4,pre:30,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:17,detuneCents:9,bioCutoffHz:7214,reverbWet:.262,anthroGain:.05,velocity:.709},{year:2024,value:6288,vital:{vit:41,div:50.9,est:81.2,pre:22.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8220,reverbWet:.282,anthroGain:.027,velocity:.705},{year:2025,value:5731,vital:{vit:40.4,div:50.3,est:82.1,pre:20.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8432,reverbWet:.286,anthroGain:.024,velocity:.702},{year:2026,value:3335,vital:{vit:40,div:50,est:86.3,pre:14.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:10,detuneCents:5,bioCutoffHz:9431,reverbWet:.303,anthroGain:.011,velocity:.7}]},hielo:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",tempo:52,years:[{year:1979,value:7.05,vital:{vit:92.7,div:97.9,est:93.8,pre:7.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:10495,reverbWet:.319,anthroGain:.003,velocity:.964},{year:1980,value:7.67,vital:{vit:95,div:100,est:80.5,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1981,value:7.14,vital:{vit:94,div:99.1,est:82.1,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1982,value:7.3,vital:{vit:95,div:100,est:91.3,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1983,value:7.39,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1984,value:6.81,vital:{vit:89.3,div:94.8,est:78.6,pre:12.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:9757,reverbWet:.308,anthroGain:.008,velocity:.947},{year:1985,value:6.7,vital:{vit:87.7,div:93.3,est:88.8,pre:14.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:8,detuneCents:4,bioCutoffHz:9447,reverbWet:.303,anthroGain:.011,velocity:.939},{year:1986,value:7.41,vital:{vit:95,div:100,est:78.4,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1987,value:7.28,vital:{vit:95,div:100,est:92,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1988,value:7.37,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1989,value:7.01,vital:{vit:92.1,div:97.4,est:85.2,pre:8.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:10371,reverbWet:.318,anthroGain:.004,velocity:.96},{year:1990,value:6.14,vital:{vit:79.7,div:86,est:67.1,pre:24.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:23,detuneCents:13,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.899},{year:1991,value:6.47,vital:{vit:84.4,div:90.3,est:82,pre:18.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:8812,reverbWet:.293,anthroGain:.018,velocity:.922},{year:1992,value:7.47,vital:{vit:95,div:100,est:71.7,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1993,value:6.4,vital:{vit:83.4,div:89.4,est:64.2,pre:19.5,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:512},scaleSize:5,jitterMs:25,detuneCents:14,bioCutoffHz:8620,reverbWet:.289,anthroGain:.021,velocity:.917},{year:1994,value:7.14,vital:{vit:94,div:99.1,est:77.2,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1995,value:6.08,vital:{vit:78.9,div:85.2,est:62.2,pre:25.2,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:5,jitterMs:26,detuneCents:15,bioCutoffHz:7826,reverbWet:.274,anthroGain:.035,velocity:.895},{year:1996,value:7.58,vital:{vit:95,div:100,est:60,pre:5,fever:0},masks:{bajo:257,arpegio:33808,pulso:37444,canto:256},scaleSize:5,jitterMs:28,detuneCents:16,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1997,value:6.69,vital:{vit:87.6,div:93.2,est:70.5,pre:14.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9415,reverbWet:.303,anthroGain:.011,velocity:.938},{year:1998,value:6.54,vital:{vit:85.4,div:91.2,est:86.7,pre:17,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:8994,reverbWet:.296,anthroGain:.016,velocity:.927},{year:1999,value:6.12,vital:{vit:79.4,div:85.7,est:77.4,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2e3,value:6.25,vital:{vit:81.3,div:87.4,est:85.1,pre:22.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.907},{year:2001,value:6.73,vital:{vit:88.1,div:93.7,est:80.4,pre:13.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:9528,reverbWet:.305,anthroGain:.01,velocity:.94},{year:2002,value:5.83,vital:{vit:75.3,div:82,est:64.2,pre:29.6,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:7263,reverbWet:.263,anthroGain:.048,velocity:.877},{year:2003,value:6.12,vital:{vit:79.4,div:85.7,est:80.5,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2004,value:5.98,vital:{vit:77.5,div:83.9,est:83,pre:26.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7603,reverbWet:.27,anthroGain:.04,velocity:.888},{year:2005,value:5.5,vital:{vit:70.6,div:77.6,est:71.6,pre:35.5,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6571,reverbWet:.248,anthroGain:.069,velocity:.853},{year:2006,value:5.86,vital:{vit:75.7,div:82.3,est:77,pre:29.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:7325,reverbWet:.264,anthroGain:.047,velocity:.879},{year:2007,value:4.27,vital:{vit:53.1,div:61.6,est:39,pre:57.4,fever:0},masks:{bajo:1,arpegio:256,pulso:0,canto:0},scaleSize:4,jitterMs:43,detuneCents:24,bioCutoffHz:4532,reverbWet:.191,anthroGain:.181,velocity:.766},{year:2008,value:4.69,vital:{vit:59.1,div:67.1,est:67.2,pre:49.9,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5147,reverbWet:.21,anthroGain:.137,velocity:.796},{year:2009,value:5.26,vital:{vit:67.2,div:74.5,est:67.8,pre:39.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:6109,reverbWet:.237,anthroGain:.087,velocity:.836},{year:2010,value:4.87,vital:{vit:61.6,div:69.4,est:69.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2011,value:4.56,vital:{vit:57.2,div:65.4,est:68.9,pre:52.2,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.786},{year:2012,value:3.57,vital:{vit:43.1,div:52.4,est:46,pre:69.9,fever:0},masks:{bajo:1,arpegio:520,pulso:0,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:3666,reverbWet:.158,anthroGain:.269,velocity:.716},{year:2013,value:5.21,vital:{vit:66.5,div:73.9,est:45.7,pre:40.6,fever:0},masks:{bajo:1,arpegio:16904,pulso:18722,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:6026,reverbWet:.234,anthroGain:.091,velocity:.833},{year:2014,value:5.22,vital:{vit:66.6,div:74,est:80.6,pre:40.5,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.833},{year:2015,value:4.62,vital:{vit:58.1,div:66.2,est:62.5,pre:51.2,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:5035,reverbWet:.207,anthroGain:.144,velocity:.791},{year:2016,value:4.53,vital:{vit:56.8,div:65,est:73.8,pre:52.8,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4900,reverbWet:.203,anthroGain:.153,velocity:.784},{year:2017,value:4.82,vital:{vit:60.9,div:68.8,est:71.2,pre:47.6,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5352,reverbWet:.216,anthroGain:.125,velocity:.805},{year:2018,value:4.79,vital:{vit:60.5,div:68.4,est:77,pre:48.1,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5306,reverbWet:.215,anthroGain:.127,velocity:.803},{year:2019,value:4.32,vital:{vit:53.8,div:62.2,est:63.4,pre:56.5,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4602,reverbWet:.193,anthroGain:.176,velocity:.769},{year:2020,value:3.92,vital:{vit:48.1,div:57,est:62.2,pre:63.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4079,reverbWet:.175,anthroGain:.222,velocity:.741},{year:2021,value:4.92,vital:{vit:62.4,div:70.1,est:55.3,pre:45.8,fever:0},masks:{bajo:1,arpegio:1040,pulso:18722,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.812},{year:2022,value:4.87,vital:{vit:61.6,div:69.4,est:77.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2023,value:4.37,vital:{vit:54.5,div:62.9,est:63.1,pre:55.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.773},{year:2024,value:4.38,vital:{vit:54.7,div:63,est:74.6,pre:55.4,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4688,reverbWet:.196,anthroGain:.169,velocity:.774},{year:2025,value:4.75,vital:{vit:59.9,div:67.9,est:68.8,pre:48.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5244,reverbWet:.213,anthroGain:.131,velocity:.8}]},gases:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",tempo:60,years:[{year:1959,value:315.98,vital:{vit:95,div:100,est:95,pre:24.8,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.975},{year:1960,value:316.91,vital:{vit:94.6,div:99.6,est:94.7,pre:24.8,fever:.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.973},{year:1961,value:317.64,vital:{vit:94.3,div:99.3,est:91.8,pre:20.5,fever:.7},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8475,reverbWet:.287,anthroGain:.023,velocity:.972},{year:1962,value:318.45,vital:{vit:94,div:99,est:93.2,pre:22.2,fever:1.1},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.97},{year:1963,value:318.99,vital:{vit:93.8,div:98.8,est:90.5,pre:16.5,fever:1.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:9070,reverbWet:.297,anthroGain:.015,velocity:.969},{year:1964,value:319.62,vital:{vit:93.5,div:98.5,est:92.7,pre:18.4,fever:1.6},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8782,reverbWet:.292,anthroGain:.019,velocity:.968},{year:1965,value:320.04,vital:{vit:93.4,div:98.4,est:90.9,pre:13.9,fever:1.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:4,bioCutoffHz:9479,reverbWet:.304,anthroGain:.011,velocity:.967},{year:1966,value:321.37,vital:{vit:92.8,div:97.8,est:81.2,pre:33.3,fever:2.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:8,bioCutoffHz:6821,reverbWet:.253,anthroGain:.061,velocity:.964},{year:1967,value:322.18,vital:{vit:92.5,div:97.5,est:86.1,pre:22.2,fever:2.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.963},{year:1968,value:323.05,vital:{vit:92.1,div:97.1,est:92,pre:23.5,fever:3.2},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8055,reverbWet:.279,anthroGain:.03,velocity:.96},{year:1969,value:324.62,vital:{vit:91.5,div:96.5,est:83,pre:38.4,fever:3.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.958},{year:1970,value:325.68,vital:{vit:91.1,div:96.1,est:85.2,pre:27.5,fever:4.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:7526,reverbWet:.269,anthroGain:.042,velocity:.956},{year:1971,value:326.32,vital:{vit:90.8,div:95.8,est:86.2,pre:18.6,fever:4.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8753,reverbWet:.292,anthroGain:.019,velocity:.954},{year:1972,value:327.46,vital:{vit:90.4,div:95.4,est:84.7,pre:29.2,fever:5.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.952},{year:1973,value:329.68,vital:{vit:89.5,div:94.5,est:76.3,pre:52.2,fever:6.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:17,detuneCents:9,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.948},{year:1974,value:330.19,vital:{vit:89.3,div:94.3,est:70.5,pre:15.8,fever:6.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9179,reverbWet:.299,anthroGain:.014,velocity:.947},{year:1975,value:331.13,vital:{vit:88.9,div:93.9,est:84.5,pre:25,fever:6.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7852,reverbWet:.275,anthroGain:.034,velocity:.945},{year:1976,value:332.03,vital:{vit:88.5,div:93.5,est:89.4,pre:24.1,fever:7.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.943},{year:1977,value:333.84,vital:{vit:87.8,div:92.8,est:77.3,pre:43.5,fever:8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.939},{year:1978,value:335.41,vital:{vit:87.1,div:92.1,est:85.7,pre:38.4,fever:8.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.936},{year:1979,value:336.84,vital:{vit:86.6,div:91.6,est:86.6,pre:35.4,fever:9.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.933},{year:1980,value:338.76,vital:{vit:85.8,div:90.8,est:81.3,pre:45.8,fever:10.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.929},{year:1981,value:340.12,vital:{vit:85.2,div:90.2,est:79.9,pre:33.9,fever:10.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.926},{year:1982,value:341.48,vital:{vit:84.7,div:89.7,est:87,pre:33.9,fever:11.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.924},{year:1983,value:343.15,vital:{vit:84,div:89,est:82.3,pre:40.5,fever:12.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.92},{year:1984,value:344.87,vital:{vit:83.3,div:88.3,est:85.3,pre:41.5,fever:13},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.917},{year:1985,value:346.35,vital:{vit:82.7,div:87.7,est:82.3,pre:36.4,fever:13.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6471,reverbWet:.245,anthroGain:.073,velocity:.914},{year:1986,value:347.61,vital:{vit:82.2,div:87.2,est:82.1,pre:31.8,fever:14.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:6997,reverbWet:.257,anthroGain:.056,velocity:.911},{year:1987,value:349.31,vital:{vit:81.5,div:86.5,est:78.7,pre:41.1,fever:15},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.908},{year:1988,value:351.69,vital:{vit:80.6,div:85.6,est:74.7,pre:55.6,fever:16},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:18,detuneCents:10,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.903},{year:1989,value:353.2,vital:{vit:80,div:85,est:71.7,pre:37.1,fever:16.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.9},{year:1990,value:354.45,vital:{vit:79.5,div:84.5,est:79.4,pre:31.6,fever:17.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.898},{year:1991,value:355.7,vital:{vit:79,div:84,est:82.5,pre:31.6,fever:17.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.895},{year:1992,value:356.54,vital:{vit:78.6,div:83.6,est:76.8,pre:22.8,fever:18.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:8151,reverbWet:.281,anthroGain:.029,velocity:.893},{year:1993,value:357.21,vital:{vit:78.3,div:83.3,est:79.8,pre:19.2,fever:18.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:8664,reverbWet:.29,anthroGain:.02,velocity:.892},{year:1994,value:358.96,vital:{vit:77.6,div:82.6,est:67.1,pre:42.2,fever:19.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.888},{year:1995,value:360.97,vital:{vit:76.8,div:81.8,est:77.4,pre:47.7,fever:20.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5343,reverbWet:.216,anthroGain:.125,velocity:.884},{year:1996,value:362.74,vital:{vit:76.1,div:81.1,est:77.1,pre:42.6,fever:21},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5825,reverbWet:.229,anthroGain:.1,velocity:.881},{year:1997,value:363.88,vital:{vit:75.6,div:80.6,est:71.5,pre:29.2,fever:21.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.878},{year:1998,value:366.84,vital:{vit:74.4,div:79.4,est:59,pre:67.9,fever:22.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:3792,reverbWet:.163,anthroGain:.254,velocity:.872},{year:1999,value:368.54,vital:{vit:73.8,div:78.8,est:61.7,pre:41.1,fever:23.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.869},{year:2e3,value:369.71,vital:{vit:73.3,div:78.3,est:71,pre:29.9,fever:24.1},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:7226,reverbWet:.262,anthroGain:.049,velocity:.867},{year:2001,value:371.32,vital:{vit:72.6,div:77.6,est:71.7,pre:39.2,fever:24.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6171,reverbWet:.238,anthroGain:.085,velocity:.863},{year:2002,value:373.45,vital:{vit:71.8,div:76.8,est:70,pre:50.3,fever:25.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5112,reverbWet:.209,anthroGain:.139,velocity:.859},{year:2003,value:375.98,vital:{vit:70.8,div:75.8,est:70.8,pre:58.8,fever:26.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:4426,reverbWet:.187,anthroGain:.19,velocity:.854},{year:2004,value:377.7,vital:{vit:70.1,div:75.1,est:64.8,pre:41.5,fever:27.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.851},{year:2005,value:379.98,vital:{vit:69.1,div:74.1,est:67.4,pre:53.4,fever:28.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4850,reverbWet:.201,anthroGain:.157,velocity:.845},{year:2006,value:382.09,vital:{vit:68.3,div:73.3,est:72,pre:49.8,fever:29.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5156,reverbWet:.211,anthroGain:.136,velocity:.841},{year:2007,value:384.02,vital:{vit:67.5,div:72.5,est:71.2,pre:46,fever:30.5},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.838},{year:2008,value:385.83,vital:{vit:66.8,div:71.8,est:71.4,pre:43.5,fever:31.4},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.834},{year:2009,value:387.64,vital:{vit:66,div:71,est:72.5,pre:43.5,fever:32.2},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.83},{year:2010,value:390.1,vital:{vit:65.1,div:70.1,est:63,pre:57.3,fever:33.3},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.825},{year:2011,value:391.85,vital:{vit:64.3,div:69.3,est:61.7,pre:42.2,fever:34.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.822},{year:2012,value:394.06,vital:{vit:63.5,div:68.5,est:64.3,pre:52,fever:35.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:4967,reverbWet:.205,anthroGain:.149,velocity:.818},{year:2013,value:396.74,vital:{vit:62.4,div:67.4,est:63.4,pre:61.9,fever:36.3},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4199,reverbWet:.179,anthroGain:.211,velocity:.812},{year:2014,value:398.81,vital:{vit:61.5,div:66.5,est:60.8,pre:49,fever:37.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:16,bioCutoffHz:5226,reverbWet:.213,anthroGain:.132,velocity:.808},{year:2015,value:401.01,vital:{vit:60.6,div:65.6,est:66.5,pre:51.7,fever:38.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.803},{year:2016,value:404.41,vital:{vit:59.3,div:64.3,est:51.2,pre:77.2,fever:39.7},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:34,detuneCents:20,bioCutoffHz:3239,reverbWet:.139,anthroGain:.328,velocity:.797},{year:2017,value:406.76,vital:{vit:58.3,div:63.3,est:52.5,pre:54.9,fever:40.8},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:33,detuneCents:19,bioCutoffHz:4728,reverbWet:.197,anthroGain:.166,velocity:.792},{year:2018,value:408.72,vital:{vit:57.5,div:62.5,est:60.7,pre:46.6,fever:41.6},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:5443,reverbWet:.219,anthroGain:.119,velocity:.788},{year:2019,value:411.65,vital:{vit:56.3,div:61.3,est:52,pre:67.3,fever:43},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:34,detuneCents:19,bioCutoffHz:3831,reverbWet:.165,anthroGain:.249,velocity:.782},{year:2020,value:414.21,vital:{vit:55.3,div:60.3,est:59.2,pre:59.4,fever:44.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:4381,reverbWet:.186,anthroGain:.194,velocity:.777},{year:2021,value:416.41,vital:{vit:54.4,div:59.4,est:58.6,pre:51.7,fever:45.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:17,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.772},{year:2022,value:418.53,vital:{vit:53.6,div:58.6,est:61.7,pre:50,fever:46},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5138,reverbWet:.21,anthroGain:.138,velocity:.768},{year:2023,value:421.08,vital:{vit:52.5,div:57.5,est:56.2,pre:59.2,fever:47.2},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:4396,reverbWet:.186,anthroGain:.193,velocity:.763},{year:2024,value:424.61,vital:{vit:51.1,div:56.1,est:47.8,pre:80,fever:48.8},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:37,detuneCents:21,bioCutoffHz:3089,reverbWet:.132,anthroGain:.352,velocity:.756},{year:2025,value:427.35,vital:{vit:50,div:55,est:49.5,pre:63.2,fever:50},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:35,detuneCents:20,bioCutoffHz:4107,reverbWet:.176,anthroGain:.22,velocity:.75}]}}};var Kg=mn.default.STEPS,Jg=mn.default.PENTA,ai=Pf.presets,Xt=["gases","hielo","jungla"],$a=class{constructor(){this.dash="hielo",this.idx=0,this.derived=null,this.reference=null,this.ctx=null,this.nodes=null,this.timer=null,this.playing=!1,this.step=0,this.bar=0,this.nextTime=0,this.arpIndex=0,this.level=.55,this.onStep=null,this.onBar=null,this._derive()}get preset(){return ai[this.dash]}get count(){return this.preset.years.length}get entry(){return this.idx===0?this.preset.reference:this.preset.years[this.idx-1]}_derive(){let e=this.preset.signature;this.derived=mn.default.derive(e,this.entry.vital),this.reference=mn.default.derive(e,mn.default.REFERENCE)}setDashboard(e){if(!ai[e])return;let t=e!==this.dash;this.dash=e,this.idx=0,this._derive(),this.ctx&&(this._continuous(!1),t&&this.playing&&this._restartClock())}setIndex(e){e=Math.max(0,Math.min(this.count,Math.round(e))),e!==this.idx&&(this.idx=e,this._derive(),this._continuous(!1))}setLevel(e){this.level=e,this.nodes&&this.nodes.master.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}async play(){this.ctx||this._init(),await this.ctx.resume(),!this.playing&&(this._restartClock(),this.timer=setInterval(()=>this._pump(),25),this._pump(),this.playing=!0)}async stop(){clearInterval(this.timer),this.timer=null,this.playing=!1,this.ctx&&await this.ctx.suspend()}tick(e=1800,t=.05){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=e,s.connect(r),r.connect(this.nodes.master),this._env(r,n,t,.001,.04),s.start(n),s.stop(n+.08)}energy(){if(!this.nodes)return 0;let e=this.nodes.wave;this.nodes.analyser.getFloatTimeDomainData(e);let t=0;for(let n=0;n<e.length;n+=4)t+=e[n]*e[n];return Math.min(1,Math.sqrt(t/(e.length/4))*4)}_init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e,n=t.createGain();n.gain.value=this.level;let s=t.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=6,s.ratio.value=12,s.attack.value=.003,s.release.value=.18;let r=t.createAnalyser();r.fftSize=2048,n.connect(s),s.connect(r),r.connect(t.destination);let a=t.createGain(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=12e3,o.Q.value=.3;let l=t.createConvolver();l.buffer=this._impulse(2.8);let c=t.createGain();c.gain.value=.3,a.connect(o),o.connect(n),o.connect(l),l.connect(c),c.connect(n);let u=this._noise(),h=t.createBufferSource();h.buffer=u,h.loop=!0;let f=t.createBiquadFilter(),p=t.createGain();p.gain.value=1e-4;let g=t.createOscillator();g.type="sine";let v=t.createGain();v.gain.value=0,g.connect(v),v.connect(p.gain),h.connect(f),f.connect(p),p.connect(n),h.start(),g.start();let m=t.createGain();m.gain.value=0,m.connect(n);let d=t.createOscillator();d.type="sawtooth",d.frequency.value=120;let y=t.createBiquadFilter();y.type="lowpass",y.frequency.value=480;let b=t.createGain();b.gain.value=.22,d.connect(y),y.connect(b),b.connect(m),d.start();let _=t.createBufferSource();_.buffer=u,_.loop=!0;let C=t.createBiquadFilter();C.type="bandpass",C.frequency.value=1500,C.Q.value=1.1;let A=t.createGain();A.gain.value=.5,_.connect(C),C.connect(A),A.connect(m),_.start();let w=t.createOscillator(),I=t.createOscillator(),S=t.createOscillator();w.type="sine",I.type="sine",S.type="triangle",w.frequency.value=55,I.frequency.value=55.4,S.frequency.value=110;let M=t.createGain();M.gain.value=.22;let R=t.createBiquadFilter();R.type="lowpass",R.frequency.value=220;let F=t.createGain();F.gain.value=0,w.connect(R),I.connect(R),S.connect(M),M.connect(R),R.connect(F),F.connect(n),w.start(),I.start(),S.start(),this.nodes={master:n,analyser:r,wave:new Float32Array(2048),bioIn:a,bioLP:o,wet:c,geoFilter:f,geoGain:p,swell:g,swellDepth:v,anthro:m,heat:F,heatA:w,heatB:I,heatC:S},this._continuous(!0)}_noise(){let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0),r=0,a=0,o=0;for(let l=0;l<t;l++){let c=Math.random()*2-1;r=.99765*r+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,s[l]=(r+a+o+c*.1848)*.22}return n}_impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){let a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}_continuous(e){let t=this.nodes;if(!t)return;let n=this.ctx.currentTime,s=e?.01:.25,r=this.derived,a=this.preset.signature,o=mn.default.SIGNATURES[a].geo;t.geoFilter.type=o.type,t.geoFilter.frequency.setTargetAtTime(o.hz,n,s),t.geoFilter.Q.setTargetAtTime(o.q,n,s),t.geoGain.gain.setTargetAtTime(o.gain,n,s),t.swell.frequency.setTargetAtTime(o.swellHz,n,s),t.swellDepth.gain.setTargetAtTime(o.gain*o.depth,n,s),t.bioLP.frequency.setTargetAtTime(r.bioCutoffHz,n,s),t.wet.gain.setTargetAtTime(r.reverbWet,n,s);let l=mn.default.pressureOf(a),c=l.type==="heat";t.anthro.gain.setTargetAtTime(c?0:r.anthroGain,n,s),t.heat.gain.setTargetAtTime(c?r.p*r.p:0,n,s),c&&(t.heatA.frequency.setTargetAtTime(l.hz,n,s),t.heatB.frequency.setTargetAtTime(l.hz+.4+3.5*r.p,n,s),t.heatC.frequency.setTargetAtTime(l.hz*2,n,s))}_env(e,t,n,s,r){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+s),e.gain.exponentialRampToValueAtTime(1e-4,t+s+r)}_tone(e,t,n,s){let r=this.ctx,a=r.createOscillator();a.type=e;let o=r.createGain(),l=r.createStereoPanner?r.createStereoPanner():null;return a.connect(o),l?(l.pan.value=s,o.connect(l),l.connect(this.nodes.bioIn)):o.connect(this.nodes.bioIn),a.start(t),a.stop(t+n+.05),{osc:a,g:o}}_tuned(e){let t=this.derived;return e*Math.pow(2,(t.feverCents+(Math.random()*2-1)*t.detuneCents)/1200)}_voice(e,t,n){let s=this.derived,r=this.preset.signature,a=s.velocity,o=this.ctx,l=t+Math.random()*(s.jitterMs/1e3);if(e.id==="bajo"){let c=r==="jungla"?.16:.5,{osc:u,g:h}=this._tone("sine",l,c,0),f=this._tuned(e.hz);u.frequency.setValueAtTime(f,l),u.frequency.exponentialRampToValueAtTime(f*.62,l+c),this._env(h,l,.5*a,.006,c)}else if(e.id==="arpegio"){let c=s.scaleSize,u=this.arpIndex++%(c*2-2||1),h=mn.default.melodyDegree(e,n,c),f=h>=0?h:u<c?u:c*2-2-u,p=this._tuned(mn.default.midiHz(e.rootMidi+Jg[f%5])),g=r==="jungla"?.14:r==="gases"?.42:.9,{osc:v,g:m}=this._tone(r==="jungla"?"triangle":"sine",l,g,f/4*1.2-.6);if(v.frequency.setValueAtTime(r==="jungla"?p*1.07:p,l),r==="jungla"&&v.frequency.exponentialRampToValueAtTime(p,l+.05),this._env(m,l,(r==="gases"?.22:.16)*a,r==="gases"?.02:.004,g),r==="gases"){let d=this._tone("sine",l,g*.7,-.2);d.osc.frequency.setValueAtTime(p*4,l),this._env(d.g,l,.035*a,.006,g*.7)}if(r==="hielo"){let d=this._tone("sine",l,g*.6,.3);d.osc.frequency.setValueAtTime(Math.min(p*2.76,9e3),l),this._env(d.g,l,.05*a,.003,g*.6)}}else if(e.id==="pulso"){let c=60/s.tempo/4,u=e.amHz?c*.85:.03,{osc:h,g:f}=this._tone("sine",l,u,mn.default.hash01(n+1,9)*1.6-.8);h.frequency.setValueAtTime(this._tuned(e.hz),l);let p=.05*a;if(e.amHz){f.gain.setValueAtTime(1e-4,l),f.gain.linearRampToValueAtTime(p,l+.01),f.gain.setValueAtTime(p,l+u-.02),f.gain.linearRampToValueAtTime(1e-4,l+u);let g=o.createOscillator(),v=o.createGain();g.frequency.value=e.amHz,v.gain.value=p*.8,g.connect(v),v.connect(f.gain),g.start(l),g.stop(l+u+.05)}else this._env(f,l,p*1.6,.002,u)}else if(e.id==="canto"){if(this.bar%2===1)return;let c=this.bar/2%2===0?-.7:.7,u=this._tuned(e.hz),h=r==="gases"?[[1,1.5,1.6],[1.5,1,1.6]]:r==="jungla"?[[1,1.33,.22],[1.33,1.5,.22],[1.5,1.12,.3]]:[[1,1.02,1.8],[1.2,1.18,1.6]],f=l;for(let[p,g,v]of h){let{osc:m,g:d}=this._tone("sine",f,v,c);m.frequency.setValueAtTime(u*p,f),m.frequency.exponentialRampToValueAtTime(u*g,f+v),d.gain.setValueAtTime(1e-4,f),d.gain.linearRampToValueAtTime(.14*a,f+v*.25),d.gain.exponentialRampToValueAtTime(1e-4,f+v),f+=v*.9}}}_machineTick(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=1500,t.connect(n),n.connect(this.nodes.anthro),this._env(n,e,.12,.001,.03),t.start(e),t.stop(e+.08)}_schedule(e,t){e===0&&this.onBar&&this.onBar(this.bar);let n=this.derived;for(let s of n.voices)s.active&&s.alive[e]&&this._voice(s,t,e);e%4===0&&n.p>.04&&mn.default.pressureOf(this.preset.signature).type==="machine"&&this._machineTick(t),this.onStep&&this.onStep(e,t,n,this.reference)}_pump(){for(;this.nextTime<this.ctx.currentTime+.12;)this._schedule(this.step,this.nextTime),this.nextTime+=60/this.derived.tempo/4,this.step=(this.step+1)%Kg,this.step===0&&this.bar++}_restartClock(){this.step=0,this.bar=0,this.arpIndex=0,this.nextTime=this.ctx.currentTime+.08}};var Za=class{constructor(){this.level=.6,this.maxAmp=.5,this.minAmp=.1,this.busyUntil={left:0,right:0},this.lastAt={left:0,right:0},this.lastTex={left:0,right:0},this.sources={left:null,right:null},this.fired=0}setSources(e){if(this.sources={left:null,right:null},!!e)for(let t of e.inputSources)(t.handedness==="left"||t.handedness==="right")&&(this.sources[t.handedness]=t)}actuator(e){if(!e)return null;let t=e.hapticActuators;return t&&t.length&&t[0]?t[0]:e.vibrationActuator||null}available(e){return!!this.actuator(this.sources[e]&&this.sources[e].gamepad)}describe(){let e=t=>this.sources[t]?this.available(t)?"vibra":"sin motor":"sin mando";return`Izq: ${e("left")} \xB7 Der: ${e("right")}`}pulse(e,t,n,s=!1){let r=this.sources[e],a=this.actuator(r&&r.gamepad);if(!a)return!1;let o=performance.now();if(!s&&o<this.busyUntil[e]||o-this.lastAt[e]<24)return!1;let l=Math.min(this.maxAmp,Math.max(0,t*this.level));if(l<.02)return!1;l=Math.max(this.minAmp,l);let c=Math.min(120,Math.max(8,n));this.busyUntil[e]=o+c+20,this.lastAt[e]=o;try{let u=null;if(a.pulse)u=a.pulse(l,c);else if(a.playEffect)u=a.playEffect("dual-rumble",{duration:c,strongMagnitude:l,weakMagnitude:l*.6});else return!1;return u&&u.catch&&u.catch(()=>{}),this.fired++,!0}catch{return!1}}texture(e,t){let n=performance.now();return n-this.lastTex[e]<70?!1:(this.lastTex[e]=n,this.pulse(e,t,10))}both(e,t,n=0){this.pulse("left",e,t,!0),this.pulse("right",e,t,!0),n&&setTimeout(()=>{this.pulse("left",e,t,!0),this.pulse("right",e,t,!0)},n)}};var Ht={gases:{num:"01",name:"Gases de efecto invernadero",short:"Gases",color:16726815,pressure:16726815,az:0,line:"La atm\xF3sfera respira. Un comp\xE1s es un a\xF1o: cada respiraci\xF3n empieza m\xE1s arriba."},hielo:{num:"02",name:"Hielo marino",short:"Hielo",color:3107839,pressure:16726815,az:55,line:"El \xC1rtico en septiembre. El grave que crece es la temperatura."},jungla:{num:"03",name:"Jungla",short:"Jungla",color:1026392,pressure:16726815,az:-55,line:"La Amazonia. Lo talado no vuelve: las voces que se apagan no regresan."}},Qc=4063130,eu={lobby:{file:"glb/lobby.glb",position:[0,0,0],rotationY:60,scale:1,hideProcedural:!1},gases:{file:"glb/gases.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},gases2:{file:"glb/gases2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},hielo:{file:"glb/hielo.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},hielo2:{file:"glb/hielo2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Deshielo",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},jungla:{file:"glb/jungla.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},jungla2:{file:"glb/jungla2.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_|^Tocones_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},fin:{file:"glb/fin.glb",position:[0,0,0],rotationY:0,scale:1,hideProcedural:!0}},Pt={variantAt:.5,introBars:2,sphereCenter:[0,1.38,-.7],sphereBelowEyes:.22,sphereRadius:.2,pauseBelowScale:.75,maxScale:2.2,maxYearsPerBar:4,comfort:.6};var Jt=Math.PI/180,_t=Math.PI*2,Ci=(i,e,t)=>new P(Math.sin(i*Jt)*e,t,-Math.cos(i*Jt)*e),tt=(i,e,t)=>i+(e-i)*t,jt=(i,e,t)=>Math.min(t,Math.max(e,i)),Qg=i=>"#"+i.toString(16).padStart(6,"0"),Lt=new Ea({antialias:!0});Lt.setPixelRatio(Math.min(window.devicePixelRatio,2));Lt.setSize(window.innerWidth,window.innerHeight);Lt.xr.enabled=!0;Lt.xr.setReferenceSpaceType("local-floor");document.body.appendChild(Lt.domElement);var _n=new Ta;_n.background=new Ee(526344);var vn=new Tt(70,window.innerWidth/window.innerHeight,.05,400);vn.position.set(0,1.6,0);vn.rotation.order="YXZ";_n.add(vn);_n.add(new Oa(16777215,2241348,1.2));var Hf=new Us(16777215,1.2);Hf.position.set(2,5,3);_n.add(Hf);var Te=new $a,yt=new Za;yt.level=Pt.comfort;var O={state:"inicio",info:!1,desc:!1,dash:"hielo",yearPos:0,scale:1,speed:1,scrubbing:!1,sensory:!1,uiAlpha:1,hover:null,xr:!1,beat:0};window.__nucleo={app:O,synth:Te,haptics:yt};var Gf=[];function In(i,e=1){return i.transparent=!0,i.userData.base=e,i.opacity=e,Gf.push(i),i}var Vf=[];function Fn(i,e,t){return i.userData.hoverId=e,i.userData.onSelect=t,Vf.push(i),i}function hu(i,e,t,n,s,r){let a="";for(let o of e.split(" ")){let l=a?a+" "+o:o;i.measureText(l).width>s&&a?(i.fillText(a,t,n),a=o,n+=r):a=l}return a&&i.fillText(a,t,n),n+r}var Wf=[];function Ri(i,e,t,n,s){let r=document.createElement("canvas");r.width=t,r.height=n;let a=r.getContext("2d"),o=new La(r);o.colorSpace=bt,o.anisotropy=4;let l=new Ke(new Is(i,e),In(new St({map:o,depthWrite:!1,side:Ft})));return l.redraw=()=>{a.clearRect(0,0,t,n),a.save(),a.shadowColor="rgba(0,0,0,.75)",a.shadowBlur=16,s(a,t,n),a.restore(),o.needsUpdate=!0},l.renderOrder=10,l.redraw(),Wf.push(l),l}var xt='"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif',pt={panel:"#141414",atmo1:"#131a21",atmo2:"#46525c",hairline:"#292929",track:"#262626",grey2:"#1f1f1f",tick:"#6e6e6e",ink:"#f5f5f5",muted:"#a8a8a8",signal:"#ff5a3c",orbit:"#5b8cff",live:"#3dff9a"},Ir=i=>({16726815:pt.signal,3107839:pt.orbit,1026392:pt.live})[i]||Qg(i),wi=(i,e)=>{try{i.letterSpacing=e+"px"}catch{}};function fu(i,e,t,n,s){i.save(),i.lineCap="round",i.strokeStyle=s,i.globalAlpha=.55,i.shadowColor=s,i.shadowBlur=14,i.lineWidth=10,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.globalAlpha=1,i.shadowBlur=0,i.lineWidth=4,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.restore()}var Cr=new ji(new xr(new Ds(7,3)),In(new an({color:7237230}),.06));Cr.position.y=1.2;_n.add(Cr);var du=new Ke(new _r(.35,.38,64),In(new St({color:16777215,side:Ft}),.35));du.rotation.x=-Math.PI/2;du.position.y=.01;_n.add(du);var Ji=new vt,xn=new vt,Pr=new vt;_n.add(Ji,xn,Pr);var Ws={lobby:[],fin:[],amb:[]},Xf={};for(let i of Xt){let e=Ht[i],t=ai[i],n=new Ke(new _r(.55,1.7,48,1,(90-e.az-25)*Jt,50*Jt),In(new St({color:e.color,side:Ft,depthWrite:!1}),.28));n.rotation.x=-Math.PI/2,n.position.y=.02;let s=Ri(1.7,1,1024,602,(a,o,l)=>{a.fillStyle=pt.muted,a.font=`600 30px ${xt}`,a.fillText(e.num,56,96),fu(a,56+a.measureText(e.num).width+22,86,28,Ir(e.color)),a.fillStyle=pt.ink,a.font=`700 ${e.name.length>14?68:104}px ${xt}`,wi(a,-2.5);let c=hu(a,e.name,52,e.name.length>14?196:216,o-104,76);wi(a,0),a.fillStyle=pt.muted,a.font=`500 26px ${xt}`,a.fillText(`${t.years[0].year}\u2013${t.years[t.years.length-1].year} \xB7 ${t.source}`,56,c+4)});s.position.copy(Ci(e.az,2.6,1.55)),s.lookAt(0,1.55,0);let r=()=>oi(i);Fn(n,i,r),Fn(s,i,r),Ji.add(n,s),Ws.lobby.push(s),Xf[i]={sec:n,pan:s}}var ks=Ri(1.5,.3,1024,205,(i,e,t)=>{i.textAlign="center",i.fillStyle=pt.ink,i.font=`700 72px ${xt}`,wi(i,-2),i.fillText("N\xFAcleo",e/2,88),wi(i,0),i.fillStyle=pt.muted,i.font=`500 28px ${xt}`,i.fillText("Elige un lugar",e/2,150),i.textAlign="left"});ks.position.copy(Ci(0,2.6,2.35));ks.lookAt(0,2,0);Ji.add(ks);Ws.lobby.push(ks);var jf={bajo:.5,pulso:.85,arpegio:1.2,canto:1.55},pu=3.4,Pn=[],ru=new vt;xn.add(ru);var Lf=new we,ev=new Ee,Fv=new P,Bv=new nn,kv=new P;function qf(i){let e=[];return i.forEach((t,n)=>t&&e.push(n)),e}function Yf(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=tt(e,t,h),p=Math.sin(f)*i,g=-Math.cos(f)*i,v=r?h*h:1;if(a.push(p,-n/2,g,p,n/2,g),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new dt;return c.setAttribute("position",new Je(a,3)),c.setAttribute("color",new Je(o,3)),c.setIndex(l),c}var tv=Yf(pu,-15*Jt,0,.012,15,!0),nv=Yf(pu,-1.4*Jt,.2*Jt,.028,3,!1),Df=()=>new St({color:0,vertexColors:!0,blending:pa,depthWrite:!1,transparent:!0,side:Ft});function iv(){for(let i of Pn)ru.remove(i.mesh,i.head),i.mesh.material.dispose(),i.head.material.dispose();Pn=[],Te.reference.voices.forEach((i,e)=>qf(i.pattern).forEach((t,n)=>{let s=new Ke(tv,Df()),r=new Ke(nv,Df());s.position.y=r.position.y=jf[i.id]??1,s.frustumCulled=r.frustumCulled=!1,ru.add(s,r),Pn.push({voice:i.id,vi:e,j:n,az:t/16*360,flash:0,alive:!0,mesh:s,head:r})}))}function io(){let i=0;for(let e of Pn)e.alive&&i++;return i}function $f(){let i=Te.derived;for(let e of Pn){let t=i.voices[e.vi],n=qf(t.pattern)[e.j];e.step=n,e.targetAz=n/16*360,e.alive=t.active&&t.alive[n]}}var Hv=new Ee(Qc),Gv=new Ee(3552822),tu=new Ee;function sv(i,e){tu.set(Ir(Ht[O.dash].color));for(let t of Pn){let n=(t.targetAz-t.az+540)%360-180;t.az+=n*Math.min(1,i*3),t.flash=Math.max(0,t.flash-i*1.8),t.mesh.rotation.y=t.head.rotation.y=-t.az*Jt,t.mesh.material.color.copy(tu).multiplyScalar((t.alive?.2+t.flash*1.1:.035)*e),t.head.visible=t.alive&&t.flash>.02,t.head.material.color.copy(tu).lerp(ev.set(16777215),.35).multiplyScalar(t.flash*1.5*e)}}var mu=(i,e,t,n)=>new Ls(new dt().setFromPoints(Array.from({length:128},(s,r)=>new P(Math.sin(r/128*_t)*i,e,-Math.cos(r/128*_t)*i))),In(new an({color:t}),n)),rv=Object.values(jf).map(i=>{let e=mu(pu,i,16777215,.07);return xn.add(e),e}),au=14,av=Array.from({length:au},(i,e)=>{let t=mu(4.2,2.3+e*.16+e%2*.04,16734780,0);return xn.add(t),t});[3,6,9].forEach((i,e)=>xn.add(mu(i,.014,16777215,[.08,.055,.035][e])));var Zf=new vt;xn.add(Zf);var Ka=i=>`${Math.round(jt(i,0,1)*100)} %`,qt=Ri(1.3,.62,1280,610,(i,e,t)=>{let n=Ht[O.dash],s=ai[O.dash],r=Te.entry,a=Te.derived,o=Ir(n.color),l=O.hover==="isla";i.fillStyle=pt.muted,i.font=`600 30px ${xt}`,i.fillText(`${n.num} \xB7 ${n.name}`,52,72),i.fillStyle=pt.ink,i.font=`700 150px ${xt}`,wi(i,-4.5),i.fillText(Te.idx===0?"Intacto":String(r.year),44,232),wi(i,0);let c=52,u=O.info?e-52:700,h=282,f=Te.idx/Te.count,p=tt(c,u,f);i.fillStyle="rgba(245,245,245,.22)",i.fillRect(c,h-1,u-c,2),i.fillStyle=pt.ink,i.fillRect(c,h-2,p-c,4),fu(i,Math.max(c,p-26),h,26,o);let g=(v,m)=>{i.fillStyle=l?pt.ink:pt.muted,i.font=`${l?700:600} 34px ${xt}`,i.fillText(v,52,m),i.fillRect(52,m+12,i.measureText(v).width,l?4:2)};if(!O.info){g("Ver el dato",362);return}i.fillStyle=pt.ink,i.font=`600 46px ${xt}`,i.fillText(Te.idx===0?"As\xED suena el lugar sano":`${Number(r.value).toLocaleString("es-MX")} ${s.unit}`,52,356),i.fillStyle=pt.muted,i.font=`500 32px ${xt}`,i.fillText(`${io()} de ${Pn.length} voces vivas`,52,410),i.fillText(`Vitalidad ${Ka(a.v)} \xB7 Diversidad ${Ka(a.d)} \xB7 Estabilidad ${Ka(a.s)} \xB7 Presi\xF3n ${Ka(a.p)}`,52,458),i.font=`500 26px ${xt}`,i.fillText(`${s.years[0].year}\u2013${s.years[s.years.length-1].year} \xB7 Fuente: ${s.source}`,52,504),g("Ocultar",568)});qt.position.copy(Ci(26,2.3,1.72));qt.lookAt(0,1.6,0);xn.add(qt);Fn(qt,"isla",()=>vu());var nu=i=>i.length<2?i.join(""):i.slice(0,-1).join(", ")+" y "+i[i.length-1];function gu(){if(O.state==="lobby"){let a=o=>Ht[o].az===0?"al centro":Ht[o].az>0?"a la derecha":"a la izquierda";return[`Lobby. Tres lugares frente a ti: ${nu(Xt.map(o=>`${Ht[o].name} ${a(o)}`))}.`,`Al frente: ${Ht[le.front].name}. Suena su firma.`,"Frota el borde del disco para girar. Toca su centro para entrar."]}let i=Ht[O.dash],e=ai[O.dash],t=Te.entry,n=Te.derived;if(O.state==="fin")return[`Fin del recorrido en ${i.name}.`,`Quedan ${io()} de ${Pn.length} voces.`,"Toca el centro del disco para volver al lobby."];let s=n.voices.filter(a=>a.active).map(a=>a.id),r=n.voices.filter(a=>!a.active).map(a=>a.id);return[Te.idx===0?`${i.name}, lugar intacto. As\xED suena sano.`:`${i.name}, a\xF1o ${t.year}: ${Number(t.value).toLocaleString("es-MX")} ${e.unit}.`,`Suenan ${nu(s)||"muy pocas voces"}${r.length?`. En silencio: ${nu(r)}`:""}. ${io()} de ${Pn.length} voces vivas.`,n.p<.33?"Sonido claro y estable.":n.p<.66?"El sonido se tensa: hay m\xE1s presi\xF3n.":"Sonido denso y \xE1spero: presi\xF3n alta.","Vibraci\xF3n: mano derecha, el a\xF1o que suena; mano izquierda, el lugar intacto. Gira la esfera para moverte en el tiempo."]}function eo(i){if(!(!O.desc||!window.speechSynthesis))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(i);e.lang="es-MX",e.rate=1.05,e.volume=.9,speechSynthesis.speak(e)}catch{}}var Hs=Ri(1.5,.55,1200,440,(i,e,t)=>{if(!O.desc)return;i.fillStyle=pt.muted,i.font=`600 26px ${xt}`,i.fillText("Descripci\xF3n",40,52),i.fillStyle=pt.ink,i.font=`500 32px ${xt}`;let n=106;for(let s of gu())n=hu(i,s,40,n,e-80,42)+8});Hs.position.copy(Ci(-30,2.2,.95));Hs.lookAt(0,1.5,0);Hs.visible=!1;_n.add(Hs);var Ii=Ri(.62,.11,900,160,(i,e,t)=>{let n=O.hover==="descripciones",s=O.desc?"Ocultar descripciones":"Ver descripciones";i.fillStyle=n?pt.ink:pt.muted,i.font=`${n?700:600} 54px ${xt}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});Ii.position.copy(Ci(30,2.2,.95));Ii.lookAt(0,1.5,0);Ii.visible=!1;_n.add(Ii);Fn(Ii,"descripciones",()=>Kf());function vu(){O.info=!O.info,qt.redraw(),O.info&&eo(gu()[0])}function Kf(){O.desc=!O.desc,ou="",Ii.redraw(),!O.desc&&window.speechSynthesis&&speechSynthesis.cancel()}var ou="",Nf="";function ov(){let i=O.state!=="inicio";if(Hs.visible=i&&O.desc,Ii.visible=i,qt.scale.setScalar(tt(qt.scale.x,O.info?1:.62,.2)),!i||!O.desc)return;let e=`${O.state}|${O.dash}|${Te.idx}|${le.front}`;if(e===ou)return;ou=e,Hs.redraw();let t=gu();O.state!==Nf?(Nf=O.state,eo(O.state==="ambiente"?`${t[0]} ${t[3]}`:t.join(" "))):O.state==="lobby"?eo(t[1]):O.state==="ambiente"&&Te.entry.year%10===0&&eo(`${t[0]} ${t[1]} ${t[2]}`)}var Kt=new vt;Kt.position.fromArray(Pt.sphereCenter);xn.add(Kt);var _u=new ji(new xr(new Ds(Pt.sphereRadius,1)),In(new an({color:16777215}),.85)),Jf=new Ke(new Ds(.05,2),In(new St({color:Qc}),.9)),ho=new Ke(new qi(Pt.sphereRadius*1.25,16,12),new St({transparent:!0,opacity:0,depthWrite:!1}));Kt.add(_u,Jf,ho);Ws.amb.push(_u);var je=(()=>{let i=Tr.points,e=i.length/3,t=Pt.sphereRadius/Tr.radius,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e*3),c=new P,u=new P,h=new P,f=new P(0,1,0);for(let m=0;m<e;m++)c.set(i[m*3],i[m*3+2],-i[m*3+1]).normalize(),u.crossVectors(f,c),u.lengthSq()<1e-6&&u.set(1,0,0),u.normalize(),h.crossVectors(c,u),n.set([c.x,c.y,c.z],m*3),s.set([u.x,u.y,u.z],m*3),r.set([h.x,h.y,h.z],m*3),a[m]=(Math.atan2(c.x,c.z)/_t+1)%1,o[m]=Math.sqrt(Math.max(0,1-c.y*c.y)),l[m*3+1]=.6,l[m*3+2]=.22;let p=new vr(.045*t,.062*t,.24*t,6);p.translate(0,.12*t,0),p.rotateX(Math.PI/2);let g=new Xi(p,new fn({color:16777215,roughness:.45,metalness:.05,flatShading:!0}),e);g.instanceMatrix.setUsage(gc),g.frustumCulled=!1,g.instanceColor=new ei(new Float32Array(e*3).fill(.22),3),g.instanceColor.setUsage(gc);let v=new Ke(new qi(Pt.sphereRadius*.93,32,20),new fn({color:789778,roughness:.6,metalness:.2}));return{n:e,k:t,N:n,R:s,U:r,fr:a,lat:o,st:l,mesh:g,core:v,val:null,pre:null,dash:null,crush:[null,null],lastTouch:[-1,-1],lastSound:0,expandDir:new P(0,0,1),expand:0}})();Kt.add(je.core,je.mesh);_u.visible=!1;Jf.visible=!1;window.__nucleo.KS=je;function Qf(i){let e=ai[i],t=e.years,n=t.map(h=>Number(h.value)),s=Math.min(...n),r=Math.max(...n),a=r-s||1,o=h=>.12+.88*jt((Number(h)-s)/a,0,1),l=(h,f)=>jt(((h.vital&&h.vital.pre)??f*100)/100,0,1),c=e.reference||t[0],u=o(c.value??t[0].value);je.val=new Float32Array(t.length+1),je.pre=new Float32Array(t.length+1),je.val[0]=u,je.pre[0]=l(c,.05),t.forEach((h,f)=>{je.val[f+1]=o(h.value),je.pre[f+1]=l(h,je.val[f+1])}),je.dash=i}var Gs=new P,Ja=[[.52,.36,.92],[1,.4,.34],[1,.8,.36]],lv=[0,2,4,7,9];function Ar(i,e,t=!1){if(!e){je.crush[i]=null,je.lastTouch[i]=-1;return}let n=Kt.worldToLocal(e.clone());je.crush[i]=t?n.normalize().multiplyScalar(Tr.radius):n.divideScalar(je.k)}function lu(i,e){let t=je.crush[i];if(!t||!je.val)return 0;let n=Math.min(Te.count,Math.round((Math.atan2(t.x,t.z)/_t+1)%1*Te.count)),s=je.val[n];if(n!==je.lastTouch[i]){je.lastTouch[i]=n;let r=performance.now();if(r-je.lastSound>90){je.lastSound=r;let a=Math.round(s*9);Te.tick(220*Math.pow(2,(lv[a%5]+12*Math.floor(a/5))/12),.022)}e&&yt.pulse(e,.2+.4*s,12,!0)}return s}function cv(i,e){je.dash!==O.dash&&Qf(O.dash);let{n:t,k:n,N:s,R:r,U:a,fr:o,lat:l,st:c,mesh:u,val:h,pre:f}=je,p=Tr.radius,g=u.instanceMatrix.array,v=u.instanceColor.array,m=Te.count,d=.418,y=2*d*1.25,b=.611,_=2*b*1.25;je.expand=tt(je.expand,jt((O.scale-1)/(Pt.maxScale-1),0,1),.12),Bs||(Kt.worldToLocal(vn.getWorldPosition(Gs)),je.expandDir.lerp(Gs.normalize(),.1).normalize());let C=je.expand,A=je.expandDir.x*p,w=je.expandDir.y*p,I=je.expandDir.z*p,S=je.crush[0],M=je.crush[1],R=Math.min(1,i*8),F=O.yearPos,B=O.beat;for(let G=0;G<t;G++){let X=G*3,W=s[X],J=s[X+1],V=s[X+2],ne=W*p,re=J*p,ge=V*p,De=o[G]*m,Ye=Math.floor(De),q=Math.min(m,Ye+1),Q=De-Ye,ve=tt(h[Ye],h[q],Q),ie=jt(.5*tt(f[Ye],f[q],Q)+.5*(ve-.12)/.88,0,1),Ae=De<=F+.5,Re=Math.abs(De-F),Oe=Re<.75?1-Re/.75:0,at=Ae?(.35+ve*2.4)*(.6+.4*l[G])*(1+Oe*(.15+B*.5)):.22,Ge=Ae?.85+ve*.3:.6,ut=0,L=1;if(S&&(L=Math.min(L,Math.hypot(S.x-ne,S.y-re,S.z-ge)/y)),M&&(L=Math.min(L,Math.hypot(M.x-ne,M.y-re,M.z-ge)/y)),L<1&&(ut-=.3*(1-L),Ge*=tt(.45,1,L),at*=tt(.4,1,L)),C>.002){let x=Math.min(1,Math.hypot(A-ne,w-re,I-ge)/_),z=1-x*x*(3-2*x);ut+=.8*b*z*C,Ge+=.25*(1-x)*C,at*=1+.6*z*C}c[X]=tt(c[X],ut,R),c[X+1]=tt(c[X+1],Ge,R),c[X+2]=tt(c[X+2],at,R);let Et=c[X+1],ke=c[X+2],He=(p*.94+c[X])*n,fe=G*16;g[fe]=r[X]*Et,g[fe+1]=r[X+1]*Et,g[fe+2]=r[X+2]*Et,g[fe+3]=0,g[fe+4]=a[X]*Et,g[fe+5]=a[X+1]*Et,g[fe+6]=a[X+2]*Et,g[fe+7]=0,g[fe+8]=W*ke,g[fe+9]=J*ke,g[fe+10]=V*ke,g[fe+11]=0,g[fe+12]=W*He,g[fe+13]=J*He,g[fe+14]=V*He,g[fe+15]=1;let st=.22,Se=.22,T=.24;if(Ae){let x=ie<.5?Ja[0]:Ja[1],z=ie<.5?Ja[1]:Ja[2],$=ie<.5?ie*2:(ie-.5)*2,K=Math.min(1,Oe*.35+(1-L)*.35);st=tt(tt(x[0],z[0],$),1,K),Se=tt(tt(x[1],z[1],$),1,K),T=tt(tt(x[2],z[2],$),1,K)}v[X]=tt(v[X],st,R),v[X+1]=tt(v[X+1],Se,R),v[X+2]=tt(v[X+2],T,R)}u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0}var Lr=Ri(1.7,.8,1280,602,(i,e,t)=>{let n=Ht[O.dash],s=ai[O.dash],r=Ir(n.color),a=s.years[s.years.length-1];i.fillStyle=pt.muted,i.font=`600 28px ${xt}`;let o=`${n.num} \xB7 ${n.name}`;i.fillText(o,56,84),fu(i,56+i.measureText(o).width+22,74,28,r),i.fillStyle=pt.ink,i.font=`700 124px ${xt}`,wi(i,-4),i.fillText(`${s.years[0].year} \u2192 ${a.year}`,50,236),wi(i,0),i.font=`600 40px ${xt}`,i.fillText(`Quedan ${io()} de ${Pn.length} voces.`,56,322),i.fillStyle=pt.muted,i.font=`500 30px ${xt}`,i.fillText("Lo que escuchaste es el dato. Nada fue grabado.",56,376),i.font=`500 24px ${xt}`,hu(i,`${Number(a.value).toLocaleString("es-MX")} ${s.unit} en ${a.year} \xB7 ${s.source}`,56,450,e-112,34)});Lr.position.copy(Ci(0,2.4,2.25));Lr.lookAt(0,1.6,0);Pr.add(Lr);Ws.fin.push(Lr);function ed(i,e,t,n){let s=Ri(.75,.24,640,205,(r,a,o)=>{let l=O.hover===t;r.fillStyle=l?pt.ink:"#d6d6d6",r.font=`${l?700:600} 54px ${xt}`,r.textAlign="center",r.fillText(i,a/2,112);let c=r.measureText(i).width;r.textAlign="left",r.fillStyle=l?pt.ink:"rgba(245,245,245,.28)",r.fillRect(a/2-c/2,146,c,l?4:2)});return s.position.copy(Ci(e,2.3,1.15)),s.lookAt(0,1.3,0),Pr.add(s),Ws.fin.push(s),Fn(s,t,n),s}var uv=ed("Repetir",-11,"repetir",()=>oi(O.dash)),hv=ed("Volver al lobby",11,"lobby",()=>Xs());document.fonts&&Promise.all([500,600,700].map(i=>document.fonts.load(`${i} 32px Manrope`))).then(()=>Wf.forEach(i=>i.redraw())).catch(()=>{});var fv=new qa,Rr={};window.__nucleo.glb=Rr;function so(i,e){let t=eu[i];fv.load(t.file,n=>{let s=n.scene;if(s.position.fromArray(t.position),s.rotation.y=t.rotationY*Jt,s.scale.setScalar(t.scale),s.scale.y*=t.scaleY??1,e.add(s),Rr[i]=s,t.scatter&&dv(s,t),t.hideProcedural)for(let r of Ws[i==="esfera"?"amb":i]||[])r.material.userData.base=0;s.traverse(r=>{if(!r.isMesh)return;let a=r.name.toLowerCase();for(let o of Xt)a.includes(o)&&i==="lobby"&&Fn(r,o,()=>oi(o));i==="fin"&&a.includes("repetir")&&Fn(r,"repetir",()=>oi(O.dash)),i==="fin"&&a.includes("lobby")&&Fn(r,"lobby",()=>Xs())}),console.info(`[N\xFAcleo] GLB cargado: ${t.file}`)},void 0,()=>console.info(`[N\xFAcleo] sin ${t.file}: se usa la escena generada`))}function dv(i,e){let t=(e.seed??1)>>>0,n=()=>{t=t+1831565813|0;let f=Math.imul(t^t>>>15,1|t);return f=f+Math.imul(f^f>>>7,61|f)^f,((f^f>>>14)>>>0)/4294967296},s=new P().fromArray(e.center||[0,0,0]),r=[...i.children],a=e.minDist??9,o=e.sectors??4,l=e.sectorScale??[.9,1.25],c=Array.from({length:o},(f,p)=>p===0?{a:0,s:1}:{a:p/o*_t+(n()-.5)*.5,s:tt(l[0],l[1],n())}),u=(f,p,g)=>{let v=new vt;v.position.copy(s),v.rotation.y=p,v.scale.set(g,1,g),i.add(v),v.add(f),f.position.sub(s)},h=c.map(f=>new we().makeTranslation(s.x,s.y,s.z).multiply(new we().makeRotationY(f.a)).multiply(new we().makeScale(f.s,1,f.s)).multiply(new we().makeTranslation(-s.x,-s.y,-s.z)));for(let f of e.scatter){let p=new RegExp(f.match);if(f.instanced){let g=new Map;for(let v of r){if(!p.test(v.name)||!v.isMesh)continue;v.updateMatrix();let m=v.geometry.uuid+v.material.uuid;g.has(m)||g.set(m,{geo:v.geometry,mat:v.material,ms:[]});for(let d=1;d<o;d++)n()<(f.keep??1)&&g.get(m).ms.push(new we().multiplyMatrices(h[d],v.matrix));f.thin&&n()<f.thin&&(v.visible=!1)}for(let v of g.values()){if(!v.ms.length)continue;let m=new Xi(v.geo,v.mat,v.ms.length);v.ms.forEach((d,y)=>m.setMatrixAt(y,d)),m.frustumCulled=!1,i.add(m)}continue}for(let g of r)if(p.test(g.name)){if(f.hide){g.visible=!1;continue}if(f.copy)for(let v=1;v<o;v++)u(g.clone(),c[v].a,c[v].s);if(f.distribute){let v=Math.floor(n()*o);v>0&&u(g,c[v].a,c[v].s)}if(f.move&&n()<f.move)for(let v=0;v<8;v++){let m=n()*_t,d=tt(f.r[0],f.r[1],n()),y=(g.position.x-s.x)*d,b=(g.position.z-s.z)*d,_=s.x+y*Math.cos(m)+b*Math.sin(m)+i.position.x,C=s.z-y*Math.sin(m)+b*Math.cos(m)+i.position.z;if(Math.hypot(_,C)>=a||v===7){u(g,m,d);break}}}}}var to={gases:new vt,hielo:new vt,jungla:new vt};for(let i of Xt)xn.add(to[i]),so(i,to[i]),eu[i+"2"]&&so(i+"2",to[i]);function pv(){let i=Te.count?O.yearPos/Te.count:0;for(let e of Xt){let t=Rr[e],n=Rr[e+"2"];if(t&&n){let s=i>=(Pt.variantAt??.5);t.visible=!s,n.visible=s}}}so("lobby",Ji);so("fin",Pr);function fo(){Ji.visible=O.state==="lobby",xn.visible=O.state==="ambiente"||O.state==="fin",Pr.visible=O.state==="fin",qt.visible=Kt.visible=O.state==="ambiente",Cr.visible=O.state==="lobby";for(let e of Xt)to[e].visible=e===O.dash;let i=Ht[O.dash];Cr.material.color.setHex(O.state==="lobby"?7237230:i.color);for(let e of rv)e.material.color.set(Ir(i.color))}function Xs(){O.state="lobby",O.hover=null,po(!1),ad(),Dr.redraw(),Te.setLevel(.35),fo()}function oi(i){O.dash=i,O.state="ambiente",O.yearPos=0,O.scale=1,O.speed=1,O.scrubbing=!1,cu=0,Te.setDashboard(i),Te.setLevel(.55),Te.play(),ad(),Qf(i),vn.getWorldPosition(Gs),Kt.position.y=jt(Gs.y-Pt.sphereBelowEyes,.7,1.5),iv(),$f(),qt.redraw(),Dr.redraw(),fo(),yt.both(.4,36)}function mv(){O.state="fin",po(!1),Te.setLevel(.3),Lr.redraw(),fo(),yt.both(.35,30,160)}function po(i){O.sensory=i,document.body.classList.toggle("sensorial",i)}function Vs(i,e){let t=Te.count;O.yearPos=jt(i,0,t);let n=Math.min(t,Math.floor(O.yearPos+1e-6));return n!==Te.idx&&(Te.setIndex(n),$f(),qt.redraw(),e)?(Te.tick(1500+900*(n/t),.035),!0):!1}function ro(i){O.scale=jt(i,.4,Pt.maxScale);let e=O.scale<Pt.pauseBelowScale?0:O.scale<=1?O.scale:1+(O.scale-1)/(Pt.maxScale-1)*(Pt.maxYearsPerBar-1),t=Math.round(e*10)/10;t!==O.speed&&(O.speed=t,qt.redraw())}var cu=0;Te.onBar=()=>{if(O.state==="ambiente"&&(cu++,!(cu<=Pt.introBars||O.scrubbing||O.speed===0))){if(Te.idx>=Te.count){setTimeout(mv,0);return}Vs(O.yearPos+O.speed,!1)}};Te.onStep=(i,e,t,n)=>{let s=Math.max(0,(e-Te.ctx.currentTime)*1e3);setTimeout(()=>{if(O.stepNow=i,O.stepAt=performance.now(),O.state==="lobby")return;for(let o of Pn)o.alive&&o.step===i&&(o.flash=1);let r=su.default.hapticForStep(t,i),a=su.default.hapticForStep(n,i);r&&yt.pulse("right",r.amp*.75,Math.min(r.ms,60)),a&&O.state==="ambiente"&&yt.pulse("left",a.amp*.6,Math.min(a.ms,60))},s)};var le={angle:0,vel:0,target:null,settled:0,front:"gases",lastField:0,lastNote:0,grab:!1,hand:null,touch:[null,null]},Zi=.17,td=[220,233.08,261.63,293.66,329.63,349.23,392,440],nd=146.83,iu={0:"gases",1:"hielo",7:"jungla"},ao=Math.min(...Xt.map(i=>Ht[i].az))*Jt,oo=Math.max(...Xt.map(i=>Ht[i].az))*Jt,Uf=(oo-ao)/2,Dt=new vt;Dt.position.set(0,.98,-.42);Dt.rotation.x=.5;Dt.visible=!1;_n.add(Dt);var $i={},id=i=>(i=(i+Math.PI)%_t,i<0&&(i+=_t),i-Math.PI);{let i=(s,r)=>Array.from({length:65},(a,o)=>new P(Math.sin(o/64*_t)*s,r,-Math.cos(o/64*_t)*s)),e=new Ke(new vr(Zi,Zi*.84,.024,64),new fn({color:1315860,roughness:.42,metalness:.65}));e.position.y=-.012,Dt.add(e),Dt.add(new Cn(new dt().setFromPoints(i(Zi,6e-4)),In(new an({color:16119285}),.3)));for(let s=0;s<8;s++){let r=s/8*_t,a=new Ke(new Da(.027,32),new fn({color:394758,roughness:.7,metalness:.3}));a.rotation.x=-Math.PI/2,a.position.set(Math.sin(r)*.108,.0012,-Math.cos(r)*.108),Dt.add(a);let o=new Cn(new dt().setFromPoints(i(.027,.0016)),In(new an({color:16119285}),.14));o.position.set(a.position.x,0,a.position.z),Dt.add(o),Fn(a,"campo-"+s,()=>sd(s,null))}let t=new Ke(new qi(.05,32,12,0,_t,0,Math.PI/2),new fn({color:2894892,roughness:.35,metalness:.7}));t.scale.y=.32,Dt.add(t),Fn(t,"centro",()=>rd(null)),Dt.add(new Cn(new dt().setFromPoints(i(.05,.0012)),In(new an({color:16119285}),.26)));let n=new Ke(new Mi(.003,.002,.018),new St({color:16119285}));n.position.set(0,.001,-(Zi+.016)),Dt.add(n);for(let s of Xt){let r=new Ke(new Mi(.036,.003,.005),new St({color:Ht[s].color}));Dt.add(r),$i[s]=r}}var Dr=Ri(.36,.045,720,90,(i,e,t)=>{i.textAlign="center",i.fillStyle=pt.muted,i.font=`600 30px ${xt}`,i.fillText(O.state==="lobby"?"Gira para elegir \xB7 Centro para entrar":"Centro para volver \xB7 Luces para cambiar de lugar",e/2,56),i.textAlign="left"});Dr.rotation.x=-Math.PI/2;Dr.position.set(0,.002,Zi+.04);Dt.add(Dr);function Qa(i,e){let t=Zi-.01;i.position.set(Math.sin(e)*t,.002,-Math.cos(e)*t),i.rotation.y=-e}function lo(i,e=.045){let t=Te.ctx;if(!t||t.state!=="running"||!Te.nodes)return;let n=t.currentTime,s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(e,n+.008),s.gain.exponentialRampToValueAtTime(1e-4,n+1.1),s.connect(Te.nodes.master);for(let[r,a]of[[1,1],[2,.42],[3,.18]]){let o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.value=i*r,l.gain.value=a,o.connect(l),l.connect(s),o.start(n),o.stop(n+1.15)}}function no(i){let e=null;for(let t of Xt){let n=id(i-Ht[t].az*Jt);(!e||Math.abs(n)<Math.abs(e.d))&&(e={id:t,d:n})}return{id:e.id,angle:i-e.d}}function uu(i){le.vel=0,le.target=no(jt(i,ao,oo)).angle,le.settled=null}function sd(i,e){lo(td[i]),e&&yt.pulse(e,.3,12,!0),O.state==="lobby"?e||uu(le.angle+i/8*_t):iu[i]&&(iu[i]!==O.dash||O.state==="fin")&&oi(iu[i])}function rd(i){lo(nd,.06),i&&yt.pulse(i,.6,30,!0),O.state==="lobby"?oi(le.front):O.state!=="inicio"&&Xs()}function ad(){vn.getWorldPosition(Gs),Dt.position.y=jt(Gs.y-.62,.5,1.2)}function gv(i,e,t,n){let s=Dt.worldToLocal(Ki.copy(t)),r=Math.hypot(s.x,s.z),a=le.touch[i];if(Dt.visible&&Math.abs(s.y)<.07&&r<Zi+.05){let o=Math.atan2(s.x,-s.z),l=r<.055?"c":(Math.round(o/(_t/8))%8+8)%8;if(!a){le.touch[i]={a:o,zone:l},l==="c"?rd(e):sd(l,e);return}if(l!=="c"&&a.zone!=="c"&&O.state==="lobby"){let c=id(o-a.a);le.angle-=c,le.vel=tt(le.vel,-c/Math.max(n,.008),.35),le.grab=!0,le.hand=e,le.target=null,le.settled=null}a.a=o,a.zone=l}else a&&(le.touch[i]=null,!le.touch[0]&&!le.touch[1]&&(le.grab=!1))}function vv(i){if(Dt.visible=O.state!=="inicio",O.state==="lobby"){if(!le.grab)if(Math.abs(le.vel)>.25)le.angle+=le.vel*i,le.vel*=Math.exp(-2.5*i),le.target=null,le.settled=null;else{le.vel=0,le.target===null&&(le.target=no(le.angle).angle);let t=le.target-le.angle;Math.abs(t)>.004?le.angle+=t*Math.min(1,i*7):le.settled!==le.target&&(le.angle=le.settled=le.target,le.front=no(le.angle).id,lo(nd*1.5,.05),le.hand?yt.pulse(le.hand,.6,30,!0):yt.both(.45,24),Te.setDashboard(le.front),Te.play(),le.hand=null)}(le.angle<ao-.12||le.angle>oo+.12)&&(le.angle=jt(le.angle,ao-.12,oo+.12),le.vel=0);let e=Math.round(le.angle/(_t/8));if(e!==le.lastField){le.lastField=e;let t=performance.now();t-le.lastNote>70&&(le.lastNote=t,lo(td[(e%8+8)%8],.028),le.hand&&yt.pulse(le.hand,.25,10,!0))}le.front=no(le.angle).id,Ji.rotation.y=le.angle,ks.position.copy(Ci(le.angle/Jt,2.6,2.35)),ks.lookAt(0,2,0);for(let t of Xt)Qa($i[t],Ht[t].az*Jt-le.angle),$i[t].scale.setScalar(t===le.front?1.25:.8)}else{Qa($i.gases,0),Qa($i.hielo,1/8*_t),Qa($i.jungla,7/8*_t);for(let e of Xt)$i[e].scale.setScalar(e===O.dash?1.25:.8)}}var Fs=new Ga,wr=[];for(let i=0;i<2;i++){let e=Lt.xr.getController(i),t={ctrl:e,hand:null,grip:!1,lastAngle:0,btn:[],hover:null},n=new Cn(new dt().setFromPoints([new P,new P(0,0,-1)]),In(new an({color:16777215}),.5));n.scale.z=3,e.add(n,new Ke(new qi(.02,12,8),new St({color:16777215}))),e.addEventListener("connected",s=>{t.hand=s.data.handedness,t.source=s.data,e.visible=!0,yt.setSources(Lt.xr.getSession())}),e.addEventListener("disconnected",()=>{t.hand=null,t.source=null,e.visible=!1}),e.addEventListener("selectstart",()=>{t.hover&&od(t.hover,t.hand)}),e.addEventListener("squeezestart",()=>{t.grip=!0,t.lastAngle=xu(t),Of()}),e.addEventListener("squeezeend",()=>{t.grip=!1,Of()}),e.visible=!1,_n.add(e),wr.push(t)}var zf=new P().fromArray(Pt.sphereCenter),Gt=new P,Ki=new P;function xu(i){return i.ctrl.getWorldPosition(Gt),Math.atan2(Gt.x-zf.x,-(Gt.z-zf.z))}var Bs=null;function Of(){let i=wr.filter(e=>e.grip);O.scrubbing=O.state==="ambiente"&&i.length===1,i.length===2?(i[0].ctrl.getWorldPosition(Gt),i[1].ctrl.getWorldPosition(Ki),Bs={d0:Math.max(.05,Gt.distanceTo(Ki)),s0:O.scale}):Bs=null;for(let e of i)e.lastAngle=xu(e);O.state==="ambiente"&&qt.redraw()}function Ff(i){let e=Te.entry&&Te.entry.year,t=e&&e%10===0;yt.pulse(i,t?.5:.28,t?18:10,!0)}function od(i,e){e&&yt.pulse(e,.5,24,!0),Te.tick(2200,.05),i.userData.onSelect()}function ld(i,e){i!==O.hover&&(O.hover=i,i&&(Te.tick(1200,.03),e&&yt.pulse(e,.25,10,!0)),O.state==="lobby"&&i&&ai[i]&&(Te.setDashboard(i),Te.play()),O.state==="fin"&&(uv.redraw(),hv.redraw()),O.state==="ambiente"&&qt.redraw(),Ii.redraw())}function yu(){return Vf.filter(i=>{let e=i;for(;e;){if(!e.visible)return!1;e=e.parent}return!0})}function _v(i){if(!Lt.xr.getSession())return;let t=null,n=null;for(let r of wr){if(!r.hand)continue;Lf.identity().extractRotation(r.ctrl.matrixWorld),Fs.ray.origin.setFromMatrixPosition(r.ctrl.matrixWorld),Fs.ray.direction.set(0,0,-1).applyMatrix4(Lf);let a=Fs.intersectObjects(yu(),!1)[0];r.hover=a?a.object:null,a&&!t&&(t=a.object.userData.hoverId,n=r.hand);let o=wr.indexOf(r);if(r.ctrl.getWorldPosition(Gt),gv(o,r.hand,Gt,i),O.state==="ambiente"){r.ctrl.getWorldPosition(Gt);let c=Kt.worldToLocal(Ki.copy(Gt)).length(),u=Pt.sphereRadius;if(c<u*2.2){Ar(o,Gt);let h=lu(o,r.hand);yt.texture(r.hand,(.12+.3*h)*jt(1.15-(c-u)/(u*1.2),.3,1))}else{let h=Fs.intersectObject(ho,!1)[0];Ar(o,h?h.point:null,!0),h&&lu(o,r.hand)}}else Ar(o,null);let l=r.source&&r.source.gamepad;if(l){let c=l.buttons[4]&&l.buttons[4].pressed,u=l.buttons[5]&&l.buttons[5].pressed;c&&!r.btn[4]&&O.state==="ambiente"&&(po(!O.sensory),yt.pulse(r.hand,.4,20,!0)),u&&!r.btn[5]&&O.state!=="lobby"&&Xs();let h=l.buttons[3]&&l.buttons[3].pressed;h&&!r.btn[3]&&O.state==="ambiente"&&vu(),r.btn[3]=h,r.btn[4]=c,r.btn[5]=u;let f=l.axes.length>=4?l.axes[2]:l.axes[0]||0;O.state==="lobby"&&Math.abs(f)>.25&&(le.vel=-f*2.4,le.target=null,le.settled=null,le.hand=r.hand),O.state==="ambiente"&&Math.abs(f)>.25&&Vs(O.yearPos+f*i*Te.count*.2,!0)&&Ff(r.hand)}}if(ld(t,n),O.state!=="ambiente")return;let s=wr.filter(r=>r.grip);if(s.length===1){let r=s[0],a=xu(r),o=a-r.lastAngle;o>Math.PI&&(o-=_t),o<-Math.PI&&(o+=_t),r.lastAngle=a,Vs(O.yearPos+o/_t*Te.count,!0)&&Ff(r.hand)}else if(s.length===2&&Bs){s[0].ctrl.getWorldPosition(Gt),s[1].ctrl.getWorldPosition(Ki);let r=O.speed;ro(Bs.s0*(Gt.distanceTo(Ki)/Bs.d0)),r!==O.speed&&yt.both(.25,10),Gt.add(Ki).multiplyScalar(.5),Kt.worldToLocal(Gt),Gt.lengthSq()>1e-8&&je.expandDir.lerp(Gt.normalize(),.2).normalize()}}var Bf=new Le,Rn=null,Mu=0,co=0;function uo(i,e){return Bf.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),Fs.setFromCamera(Bf,vn),Fs.intersectObjects(e,!1)[0]}Lt.domElement.addEventListener("pointerdown",i=>{if(O.xr||O.state==="inicio")return;let e=O.state==="ambiente"&&uo(i,[ho]);Ar(0,e?e.point:null,!0),Rn={x:i.clientX,y:i.clientY,moved:0,sphere:!!e},O.scrubbing=!!e,e&&qt.redraw(),Lt.domElement.setPointerCapture(i.pointerId)});Lt.domElement.addEventListener("pointermove",i=>{if(!(O.xr||O.state==="inicio"))if(Rn){let e=i.clientX-Rn.x,t=i.clientY-Rn.y;Rn.x=i.clientX,Rn.y=i.clientY,Rn.moved+=Math.abs(e)+Math.abs(t),Rn.sphere?Vs(O.yearPos+e/500*Te.count,!0):(Mu+=e*.004,co=jt(co+t*.004,-1.2,1.2))}else{let e=O.state==="ambiente"&&uo(i,[ho]);Ar(0,e?e.point:null,!0),e&&lu(0,null);let t=uo(i,yu());ld(t?t.object.userData.hoverId:null,null),Lt.domElement.style.cursor=t?"pointer":"grab"}});Lt.domElement.addEventListener("pointerup",i=>{if(!Rn)return;let e=Rn;if(Rn=null,e.sphere){O.scrubbing=!1,qt.redraw();return}if(e.moved<6){let t=uo(i,yu());t&&od(t.object,null)}});Lt.domElement.addEventListener("wheel",i=>{O.state==="ambiente"&&ro(O.scale-Math.sign(i.deltaY)*.1)},{passive:!0});window.addEventListener("keydown",i=>{if(O.state==="inicio")return;let e=i.key.toLowerCase();O.state==="ambiente"&&(e==="arrowright"&&Vs(Math.floor(O.yearPos)+1,!0),e==="arrowleft"&&Vs(Math.ceil(O.yearPos)-1,!0),e==="arrowup"&&ro(O.scale+.1),e==="arrowdown"&&ro(O.scale-.1),e==="s"&&po(!O.sensory),e==="r"&&oi(O.dash)),O.state==="lobby"&&(e==="arrowright"&&uu(le.angle+Uf),e==="arrowleft"&&uu(le.angle-Uf),e==="enter"&&oi(le.front)),e==="i"&&O.state==="ambiente"&&vu(),e==="d"&&Kf(),e==="l"&&O.state!=="lobby"&&Xs(),(e==="1"||e==="2"||e==="3")&&oi(Xt[Number(e)-1])});var gn=i=>document.getElementById(i);async function cd(i){if(O.desc=!!(gn("descripciones")&&gn("descripciones").checked),await Te.play(),i)try{let e=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});await Lt.xr.setSession(e),O.xr=!0,yt.setSources(e),e.addEventListener("inputsourceschange",()=>yt.setSources(e)),e.addEventListener("end",()=>{O.xr=!1,gn("inicio").hidden=!1,Te.stop(),O.state="inicio"})}catch(e){gn("estado").textContent="No se pudo entrar a VR: "+e.message,O.xr=!1}gn("inicio").hidden=!0,gn("ayuda").hidden=O.xr,Xs(),Mu=0,co=0}gn("pantalla").addEventListener("click",()=>cd(!1));gn("vr").addEventListener("click",()=>cd(!0));navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-vr").then(i=>{gn("vr").disabled=!i,gn("estado").textContent=i?"Visor detectado. Usa aud\xEDfonos.":"Sin visor en este navegador: puedes usar la versi\xF3n de pantalla."}).catch(()=>{}):(gn("vr").disabled=!0,gn("estado").textContent="Este navegador no tiene WebXR: usa la versi\xF3n de pantalla, o Wolvic en el visor.");window.addEventListener("resize",()=>{vn.aspect=window.innerWidth/window.innerHeight,vn.updateProjectionMatrix(),Lt.setSize(window.innerWidth,window.innerHeight)});var kf=new Ha;fo();Ji.visible=!1;xn.visible=!1;Lt.setAnimationLoop(()=>{let i=Math.min(.05,kf.getDelta()),e=kf.elapsedTime;O.xr||(vn.rotation.y=-Mu,vn.rotation.x=-co),_v(i),vv(i),ov(),O.uiAlpha=tt(O.uiAlpha,O.sensory?0:1,Math.min(1,i*2.2));for(let n of Gf)n.opacity=n.userData.base*O.uiAlpha;let t=Te.energy();if(O.beat=tt(O.beat,t,.3),Cr.rotation.y=e*.01,O.state==="lobby")for(let n of Xt){let s=Xf[n],r=O.hover===n||le.front===n;s.sec.material.userData.base=tt(s.sec.material.userData.base,Rr.lobby?r?.3:0:r?.75:.26,.15),s.pan.scale.setScalar(tt(s.pan.scale.x,r?1.06:1,.15))}if(xn.visible){let n=Te.derived;sv(i,tt(.12,1,O.uiAlpha)),pv();for(let a=0;a<au;a++){let o=av[a].material;o.userData.base=tt(o.userData.base,jt(n.p*au-a,0,1)*.32,.05)}let s=60/n.tempo/4,r=O.stepAt?Math.min(1,(performance.now()-O.stepAt)/1e3/s):0;Zf.rotation.y=-(((O.stepNow||0)+r)/16)*_t,Kt.scale.setScalar(tt(Kt.scale.x,.8+.5*jt((O.scale-.4)/(Pt.maxScale-.4),0,1),.2)),Kt.rotation.y=-(O.yearPos/Te.count)*_t,Kt.updateMatrixWorld(),cv(i,n)}Lt.render(_n,vn)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
