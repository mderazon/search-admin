function sV(){}
function R0(){}
function tV(){tV=lmb;wY()}
function S0(){S0=lmb;tV();wY()}
function cg(b,a){b.checked=a}
function eg(b,a){b.htmlFor=a}
function dg(b,a){b.defaultChecked=a}
function YE(a,b){hF(a.O,b,true)}
function oY(a){iY();nY.call(this);xY(this.b,a,true)}
function Cbb(c,a,b){b=Ibb(b);return c.replace(RegExp(a,Ovb),b)}
function uV(a,b){D2(a.O,vmb,b);D2(a.e,b,Owb);D2(a.d,b,Lwb);eg(a.e,a.d.id)}
function Qf(a,b){var c=a.createElement(Qxb);c.type='radio';c.name=b;c.value='on';return c}
function dF(a){var b,c;b=Ff(a,Swb);c=zbb(b,Nbb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Gm(a,b,c){var d;if(!!Cm&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new Dm(c);!!a.L&&Lm(a.L,d)}}
function U0(a,b){S0();wV.call(this,Qf($doc,a));this.O[Swb]='gwt-RadioButton';T0(this,1);T0(this,8);T0(this,4096);T0(this,128);xY(this.c,b,false)}
function Ibb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+qnb+Ebb(a,++b)):(a=a.substr(0,b-0)+Ebb(a,++b))}return a}
function vV(a,b){var c;!b&&(b=(oab(),mab));c=a.J?(oab(),a.d.checked?nab:mab):(oab(),a.d.defaultChecked?nab:mab);cg(a.d,b.b);dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function Q6(a){var b,c;b=Gq(a.b.Vc(gzb),104);if(b==null){c=xq(AA,{92:1,101:1,104:1},1,['\u84DD','\u7EA2','\u9EC4','\u7EFF']);a.b.Wc(gzb,c);return c}else{return b}}
function R6(a){var b,c;b=Gq(a.b.Vc(hzb),104);if(b==null){c=xq(AA,{92:1,101:1,104:1},1,['\u68D2\u7403','\u7BEE\u7403',izb,'\u51B0\u7403',izb,'\u6C34\u7403']);a.b.Wc(hzb,c);return c}else{return b}}
function T0(a,b){if(a.K==-1){_O(a.d,b|(a.d.__eventBits||0));_O(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?_O(a.d,b|(a.d.__eventBits||0)):a.K==-1?XO(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function wV(a){tV();var b;lV.call(this,$doc.createElement(Exb));this.d=a;this.e=$doc.createElement(Owb);vf(this.O,this.d);vf(this.O,this.e);b=Wf($doc);this.d[Lxb]=b;eg(this.e,b);this.c=new yY(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function B9(a){var b,c,d,e,f,g,i;i=new _2;$2(i,new oY('<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>'));c=Q6(a.b);for(d=0;d<c.length;++d){b=c[d];e=new U0(Xxb,b);uV(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,YE(e,dF(e.O)+'-disabled'));$2(i,e)}$2(i,new oY('<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>'));g=R6(a.b);for(d=0;d<g.length;++d){f=g[d];e=new U0('sport',f);uV(e,'cwRadioButton-sport-'+Cbb(f,Gmb,vmb));d==2&&vV(e,(oab(),oab(),nab));$2(i,e)}return i}
var gzb='cwRadioButtonColors',hzb='cwRadioButtonSports',izb='\u8DB3\u7403';_=sV.prototype=new kV;_.gC=function xV(){return Mv};_.mc=function yV(){return this.d.tabIndex};_.Nb=function zV(){this.d.__listener=this};_.Ob=function AV(){this.d.__listener=null;vV(this,this.J?(oab(),this.d.checked?nab:mab):(oab(),this.d.defaultChecked?nab:mab))};_.nc=function BV(a){!!this.d&&Kf(this.d,a)};_.Pb=function CV(a){this.K==-1?_O(this.d,a|(this.d.__eventBits||0)):this.K==-1?XO(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=oY.prototype=dY.prototype;_=U0.prototype=R0.prototype=new sV;_.gC=function V0(){return Vw};_.Lb=function W0(a){var b;switch(XP(a.type)){case 8:case 4096:case 128:this.b=this.J?(oab(),this.d.checked?nab:mab):(oab(),this.d.defaultChecked?nab:mab);break;case 1:b=a.target;if(Lf(b)&&Sf(this.e,b)){this.b=this.J?(oab(),this.d.checked?nab:mab):(oab(),this.d.defaultChecked?nab:mab);return}rF(this,a);Gm(this,this.b,this.J?(oab(),this.d.checked?nab:mab):(oab(),this.d.defaultChecked?nab:mab));return;}rF(this,a)};_.Pb=function X0(a){T0(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=F9.prototype;_.eb=function J9(){M7(this.c,B9(this.b))};var Mv=Aab(Vyb,'CheckBox'),Vw=Aab(Vyb,'RadioButton');nmb(Dd)(1);