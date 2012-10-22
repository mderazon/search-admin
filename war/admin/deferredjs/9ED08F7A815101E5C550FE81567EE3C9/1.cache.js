function W1(){}
function t9(){}
function X1(){X1=Pub;$4()}
function u9(){u9=Pub;X1();$4()}
function Og(b,a){b.checked=a}
function Qg(b,a){b.htmlFor=a}
function Pg(b,a){b.defaultChecked=a}
function xN(a,b){IN(a.O,b,true)}
function S4(a){M4();R4.call(this);_4(this.b,a,true)}
function ekb(c,a,b){b=kkb(b);return c.replace(RegExp(a,vFb),b)}
function Y1(a,b){fbb(a.O,Zub,b);fbb(a.e,b,sGb);fbb(a.d,b,pGb);Qg(a.e,a.d.id)}
function rn(a,b,c){var d;if(!!nn&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new on(c);!!a.L&&wn(a.L,d)}}
function vg(a,b){var c=a.createElement(uHb);c.type='radio';c.name=b;c.value='on';return c}
function EN(a){var b,c;b=lg(a,wGb);c=bkb(b,pkb(32));if(c>=0){return b.substr(0,c-0)}return b}
function w9(a,b){u9();$1.call(this,vg($doc,a));this.O[wGb]='gwt-RadioButton';v9(this,1);v9(this,8);v9(this,4096);v9(this,128);_4(this.c,b,false)}
function kkb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+_vb+gkb(a,++b)):(a=a.substr(0,b-0)+gkb(a,++b))}return a}
function sfb(a){var b,c;b=oy(a.b.od(MIb),104);if(b==null){c=fy(_I,{92:1,101:1,104:1},1,['blue','red','yellow','green']);a.b.pd(MIb,c);return c}else{return b}}
function tfb(a){var b,c;b=oy(a.b.od(NIb),104);if(b==null){c=fy(_I,{92:1,101:1,104:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.pd(NIb,c);return c}else{return b}}
function Z1(a,b){var c;!b&&(b=(Sib(),Qib));c=a.J?(Sib(),a.d.checked?Rib:Qib):(Sib(),a.d.defaultChecked?Rib:Qib);Og(a.d,b.b);Pg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function v9(a,b){if(a.K==-1){BX(a.d,b|(a.d.__eventBits||0));BX(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?BX(a.d,b|(a.d.__eventBits||0)):a.K==-1?xX(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function $1(a){X1();var b;P1.call(this,$doc.createElement(iHb));this.d=a;this.e=$doc.createElement(sGb);bg(this.O,this.d);bg(this.O,this.e);b=Ig($doc);this.d[pHb]=b;Qg(this.e,b);this.c=new a5(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function dib(a){var b,c,d,e,f,g,i;i=new Dbb;Cbb(i,new S4('<b>Select your favorite color:<\/b>'));c=sfb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new w9(AHb,b);Y1(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,xN(e,EN(e.O)+'-disabled'));Cbb(i,e)}Cbb(i,new S4('<br><b>Select your favorite sport:<\/b>'));g=tfb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new w9('sport',f);Y1(e,'cwRadioButton-sport-'+ekb(f,mvb,Zub));d==2&&Z1(e,(Sib(),Sib(),Rib));Cbb(i,e)}return i}
var MIb='cwRadioButtonColors',NIb='cwRadioButtonSports';_=W1.prototype=new O1;_.gC=function _1(){return lE};_.Gc=function a2(){return Bg(this.d)};_.fc=function b2(){this.d.__listener=this};_.gc=function c2(){this.d.__listener=null;Z1(this,this.J?(Sib(),this.d.checked?Rib:Qib):(Sib(),this.d.defaultChecked?Rib:Qib))};_.Hc=function d2(a){!!this.d&&qg(this.d,a)};_.hc=function e2(a){this.K==-1?BX(this.d,a|(this.d.__eventBits||0)):this.K==-1?xX(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=S4.prototype=H4.prototype;_=w9.prototype=t9.prototype=new W1;_.gC=function x9(){return uF};_.dc=function y9(a){var b;switch(xY(a.type)){case 8:case 4096:case 128:this.b=this.J?(Sib(),this.d.checked?Rib:Qib):(Sib(),this.d.defaultChecked?Rib:Qib);break;case 1:b=a.target;if(rg(b)&&Cg(this.e,b)){this.b=this.J?(Sib(),this.d.checked?Rib:Qib):(Sib(),this.d.defaultChecked?Rib:Qib);return}SN(this,a);rn(this,this.b,this.J?(Sib(),this.d.checked?Rib:Qib):(Sib(),this.d.defaultChecked?Rib:Qib));return;}SN(this,a)};_.hc=function z9(a){v9(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=hib.prototype;_.ib=function lib(){ogb(this.c,dib(this.b))};var lE=cjb(zIb,'CheckBox'),uF=cjb(zIb,'RadioButton');Rub(Rd)(1);