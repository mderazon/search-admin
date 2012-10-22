function _Y(){}
function z4(){}
function aZ(){aZ=dqb;e0()}
function A4(){A4=dqb;aZ();e0()}
function Cg(b,a){b.checked=a}
function Eg(b,a){b.htmlFor=a}
function Dg(b,a){b.defaultChecked=a}
function SH(a,b){bI(a.O,b,true)}
function Y_(a){S_();X_.call(this);f0(this.b,a,true)}
function ufb(c,a,b){b=Afb(b);return c.replace(RegExp(a,hAb),b)}
function bZ(a,b){l6(a.O,oqb,b);l6(a.e,b,gBb);l6(a.d,b,dBb);Eg(a.e,a.d.id)}
function ag(a,b){var c=a.createElement(lCb);c.type='radio';c.name=b;c.value='on';return c}
function ZH(a){var b,c;b=Sf(a,kBb);c=rfb(b,Ffb(32));if(c>=0){return b.substr(0,c-0)}return b}
function en(a,b,c){var d;if(!!an&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new bn(c);!!a.L&&kn(a.L,d)}}
function C4(a,b){A4();dZ.call(this,ag($doc,a));this.O[kBb]='gwt-RadioButton';B4(this,1);B4(this,8);B4(this,4096);B4(this,128);f0(this.c,b,false)}
function Afb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+jrb+wfb(a,++b)):(a=a.substr(0,b-0)+wfb(a,++b))}return a}
function Iab(a){var b,c;b=gt(a.b.kd(EDb),105);if(b==null){c=Zs(uD,{93:1,102:1,105:1},1,['bleu','rouge','jaune','vert']);a.b.ld(EDb,c);return c}else{return b}}
function Jab(a){var b,c;b=gt(a.b.kd(FDb),105);if(b==null){c=Zs(uD,{93:1,102:1,105:1},1,['Base-ball','Basket-ball','Football','Hockey','Soccer','Water-polo']);a.b.ld(FDb,c);return c}else{return b}}
function cZ(a,b){var c;!b&&(b=(geb(),eeb));c=a.J?(geb(),a.d.checked?feb:eeb):(geb(),a.d.defaultChecked?feb:eeb);Cg(a.d,b.b);Dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function B4(a,b){if(a.K==-1){CS(a.d,b|(a.d.__eventBits||0));CS(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?CS(a.d,b|(a.d.__eventBits||0)):a.K==-1?QT(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function dZ(a){aZ();var b;UY.call(this,$doc.createElement(aCb));this.d=a;this.e=$doc.createElement(gBb);If(this.O,this.d);If(this.O,this.e);b=tg($doc);this.d[hCb]=b;Eg(this.e,b);this.c=new g0(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function tdb(a){var b,c,d,e,f,g,i;i=new J6;I6(i,new Y_('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=Iab(a.b);for(d=0;d<c.length;++d){b=c[d];e=new C4(sCb,b);bZ(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,SH(e,ZH(e.O)+'-disabled'));I6(i,e)}I6(i,new Y_('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=Jab(a.b);for(d=0;d<g.length;++d){f=g[d];e=new C4('sport',f);bZ(e,'cwRadioButton-sport-'+ufb(f,Aqb,oqb));d==2&&cZ(e,(geb(),geb(),feb));I6(i,e)}return i}
var EDb='cwRadioButtonColors',FDb='cwRadioButtonSports';_=_Y.prototype=new TY;_.gC=function eZ(){return Fy};_.Fc=function fZ(){return this.d.tabIndex};_.bc=function gZ(){this.d.__listener=this};_.cc=function hZ(){this.d.__listener=null;cZ(this,this.J?(geb(),this.d.checked?feb:eeb):(geb(),this.d.defaultChecked?feb:eeb))};_.Gc=function iZ(a){!!this.d&&Xf(this.d,a)};_.dc=function jZ(a){this.K==-1?CS(this.d,a|(this.d.__eventBits||0)):this.K==-1?QT(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.c=null;_.d=null;_.e=null;_=Y_.prototype=N_.prototype;_=C4.prototype=z4.prototype=new _Y;_.gC=function D4(){return Oz};_._b=function E4(a){var b;switch(yT(a.type)){case 8:case 4096:case 128:this.b=this.J?(geb(),this.d.checked?feb:eeb):(geb(),this.d.defaultChecked?feb:eeb);break;case 1:b=a.target;if(Yf(b)&&mg(this.e,b)){this.b=this.J?(geb(),this.d.checked?feb:eeb):(geb(),this.d.defaultChecked?feb:eeb);return}lI(this,a);en(this,this.b,this.J?(geb(),this.d.checked?feb:eeb):(geb(),this.d.defaultChecked?feb:eeb));return;}lI(this,a)};_.dc=function F4(a){B4(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_=xdb.prototype;_.ib=function Bdb(){Ebb(this.c,tdb(this.b))};var Fy=seb(rDb,'CheckBox'),Oz=seb(rDb,'RadioButton');fqb(Qd)(1);