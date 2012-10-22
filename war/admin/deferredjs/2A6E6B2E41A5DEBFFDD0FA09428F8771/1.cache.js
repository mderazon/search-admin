function v1(){}
function U8(){}
function w1(){w1=oub;z4()}
function V8(){V8=oub;w1();z4()}
function hg(b,a){b.checked=a}
function jg(b,a){b.htmlFor=a}
function ig(b,a){b.defaultChecked=a}
function SM(a,b){bN(a.N,b,true)}
function r4(a){l4();q4.call(this);A4(this.a,a,true)}
function Fjb(c,a,b){b=Ljb(b);return c.replace(RegExp(a,NEb),b)}
function x1(a,b){Gab(a.N,yub,b);Gab(a.d,b,MFb);Gab(a.c,b,JFb);jg(a.d,a.c.id)}
function Qf(a,b){var c=a.createElement(PGb);c.type='radio';c.name=b;c.value='on';return c}
function ZM(a){var b,c;b=Ff(a,QFb);c=Cjb(b,Qjb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Km(a,b,c){var d;if(!!Gm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Hm(c);!!a.K&&Pm(a.K,d)}}
function X8(a,b){V8();z1.call(this,Qf($doc,a));this.N[QFb]='gwt-RadioButton';W8(this,1);W8(this,8);W8(this,4096);W8(this,128);A4(this.b,b,false)}
function Ljb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+qvb+Hjb(a,++b)):(a=a.substr(0,b-0)+Hjb(a,++b))}return a}
function Teb(a){var b,c;b=Ix(a.a.gd(fIb),104);if(b==null){c=zx(oI,{92:1,101:1,104:1},1,['blue','red','yellow','green']);a.a.hd(fIb,c);return c}else{return b}}
function Ueb(a){var b,c;b=Ix(a.a.gd(gIb),104);if(b==null){c=zx(oI,{92:1,101:1,104:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.a.hd(gIb,c);return c}else{return b}}
function y1(a,b){var c;!b&&(b=(rib(),pib));c=a.I?(rib(),a.c.checked?qib:pib):(rib(),a.c.defaultChecked?qib:pib);hg(a.c,b.a);ig(a.c,b.a);if(!!c&&c.a==b.a){return}}
function W8(a,b){if(a.J==-1){XW(a.c,b|(a.c.__eventBits||0));XW(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?XW(a.c,b|(a.c.__eventBits||0)):a.J==-1?TW(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function z1(a){w1();var b;o1.call(this,$doc.createElement(EGb));this.c=a;this.d=$doc.createElement(MFb);vf(this.N,this.c);vf(this.N,this.d);b=bg($doc);this.c[LGb]=b;jg(this.d,b);this.b=new B4(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function Ehb(a){var b,c,d,e,f,g,i;i=new cbb;bbb(i,new r4('<b>Select your favorite color:<\/b>'));c=Teb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new X8(VGb,b);x1(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,SM(e,ZM(e.N)+'-disabled'));bbb(i,e)}bbb(i,new r4('<br><b>Select your favorite sport:<\/b>'));g=Ueb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new X8('sport',f);x1(e,'cwRadioButton-sport-'+Fjb(f,Lub,yub));d==2&&y1(e,(rib(),rib(),qib));bbb(i,e)}return i}
var fIb='cwRadioButtonColors',gIb='cwRadioButtonSports';_=v1.prototype=new n1;_.gC=function A1(){return AD};_.yc=function B1(){return _f(this.c)};_.Zb=function C1(){this.c.__listener=this};_.$b=function D1(){this.c.__listener=null;y1(this,this.I?(rib(),this.c.checked?qib:pib):(rib(),this.c.defaultChecked?qib:pib))};_.zc=function E1(a){!!this.c&&Kf(this.c,a)};_._b=function F1(a){this.J==-1?XW(this.c,a|(this.c.__eventBits||0)):this.J==-1?TW(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=r4.prototype=g4.prototype;_=X8.prototype=U8.prototype=new v1;_.gC=function Y8(){return JE};_.Xb=function Z8(a){var b;switch(UX(a.type)){case 8:case 4096:case 128:this.a=this.I?(rib(),this.c.checked?qib:pib):(rib(),this.c.defaultChecked?qib:pib);break;case 1:b=a.target;if(Lf(b)&&Uf(this.d,b)){this.a=this.I?(rib(),this.c.checked?qib:pib):(rib(),this.c.defaultChecked?qib:pib);return}lN(this,a);Km(this,this.a,this.I?(rib(),this.c.checked?qib:pib):(rib(),this.c.defaultChecked?qib:pib));return;}lN(this,a)};_._b=function $8(a){W8(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=Ihb.prototype;_.db=function Mhb(){Pfb(this.b,Ehb(this.a))};var AD=Dib(UHb,'CheckBox'),JE=Dib(UHb,'RadioButton');qub(Dd)(1);