function a1(){}
function z8(){}
function b1(){b1=Vtb;e4()}
function A8(){A8=Vtb;b1();e4()}
function cg(b,a){b.checked=a}
function eg(b,a){b.htmlFor=a}
function dg(b,a){b.defaultChecked=a}
function GM(a,b){RM(a.O,b,true)}
function Y3(a){S3();X3.call(this);f4(this.b,a,true)}
function kjb(c,a,b){b=qjb(b);return c.replace(RegExp(a,vEb),b)}
function c1(a,b){lab(a.O,dub,b);lab(a.e,b,uFb);lab(a.d,b,rFb);eg(a.e,a.d.id)}
function Qf(a,b){var c=a.createElement(wGb);c.type='radio';c.name=b;c.value='on';return c}
function NM(a){var b,c;b=Ff(a,yFb);c=hjb(b,vjb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Gm(a,b,c){var d;if(!!Cm&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new Dm(c);!!a.L&&Lm(a.L,d)}}
function C8(a,b){A8();e1.call(this,Qf($doc,a));this.O[yFb]='gwt-RadioButton';B8(this,1);B8(this,8);B8(this,4096);B8(this,128);f4(this.c,b,false)}
function qjb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+$ub+mjb(a,++b)):(a=a.substr(0,b-0)+mjb(a,++b))}return a}
function yeb(a){var b,c;b=Ex(a.b.fd(OHb),104);if(b==null){c=vx(iI,{92:1,101:1,104:1},1,['blue','red','yellow','green']);a.b.gd(OHb,c);return c}else{return b}}
function zeb(a){var b,c;b=Ex(a.b.fd(PHb),104);if(b==null){c=vx(iI,{92:1,101:1,104:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.gd(PHb,c);return c}else{return b}}
function d1(a,b){var c;!b&&(b=(Yhb(),Whb));c=a.J?(Yhb(),a.d.checked?Xhb:Whb):(Yhb(),a.d.defaultChecked?Xhb:Whb);cg(a.d,b.b);dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function B8(a,b){if(a.K==-1){JW(a.d,b|(a.d.__eventBits||0));JW(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?JW(a.d,b|(a.d.__eventBits||0)):a.K==-1?FW(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function e1(a){b1();var b;V0.call(this,$doc.createElement(kGb));this.d=a;this.e=$doc.createElement(uFb);vf(this.O,this.d);vf(this.O,this.e);b=Wf($doc);this.d[rGb]=b;eg(this.e,b);this.c=new g4(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function jhb(a){var b,c,d,e,f,g,i;i=new Jab;Iab(i,new Y3('<b>Select your favorite color:<\/b>'));c=yeb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new C8(CGb,b);c1(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,GM(e,NM(e.O)+'-disabled'));Iab(i,e)}Iab(i,new Y3('<br><b>Select your favorite sport:<\/b>'));g=zeb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new C8('sport',f);c1(e,'cwRadioButton-sport-'+kjb(f,oub,dub));d==2&&d1(e,(Yhb(),Yhb(),Xhb));Iab(i,e)}return i}
var OHb='cwRadioButtonColors',PHb='cwRadioButtonSports';_=a1.prototype=new U0;_.gC=function f1(){return uD};_.yc=function g1(){return this.d.tabIndex};_.Zb=function h1(){this.d.__listener=this};_.$b=function i1(){this.d.__listener=null;d1(this,this.J?(Yhb(),this.d.checked?Xhb:Whb):(Yhb(),this.d.defaultChecked?Xhb:Whb))};_.zc=function j1(a){!!this.d&&Kf(this.d,a)};_._b=function k1(a){this.K==-1?JW(this.d,a|(this.d.__eventBits||0)):this.K==-1?FW(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=Y3.prototype=N3.prototype;_=C8.prototype=z8.prototype=new a1;_.gC=function D8(){return DE};_.Xb=function E8(a){var b;switch(FX(a.type)){case 8:case 4096:case 128:this.b=this.J?(Yhb(),this.d.checked?Xhb:Whb):(Yhb(),this.d.defaultChecked?Xhb:Whb);break;case 1:b=a.target;if(Lf(b)&&Sf(this.e,b)){this.b=this.J?(Yhb(),this.d.checked?Xhb:Whb):(Yhb(),this.d.defaultChecked?Xhb:Whb);return}_M(this,a);Gm(this,this.b,this.J?(Yhb(),this.d.checked?Xhb:Whb):(Yhb(),this.d.defaultChecked?Xhb:Whb));return;}_M(this,a)};_._b=function F8(a){B8(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=nhb.prototype;_.eb=function rhb(){ufb(this.c,jhb(this.b))};var uD=iib(BHb,'CheckBox'),DE=iib(BHb,'RadioButton');Xtb(Dd)(1);