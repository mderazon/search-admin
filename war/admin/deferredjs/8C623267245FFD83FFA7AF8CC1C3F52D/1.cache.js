function kV(){}
function J0(){}
function lV(){lV=dmb;oY()}
function K0(){K0=dmb;lV();oY()}
function jg(b,a){b.htmlFor=a}
function hg(b,a){b.checked=a}
function ig(b,a){b.defaultChecked=a}
function HE(a,b){SE(a.N,b,true)}
function gY(a){aY();fY.call(this);pY(this.a,a,true)}
function ubb(c,a,b){b=Abb(b);return c.replace(RegExp(a,rnb),b)}
function mV(a,b){v2(a.N,nmb,b);v2(a.d,b,rob);v2(a.c,b,oob);jg(a.d,a.c.id)}
function Qf(a,b){var c=a.createElement(vpb);c.type='radio';c.name=b;c.value='on';return c}
function OE(a){var b,c;b=Ff(a,vob);c=rbb(b,Fbb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Km(a,b,c){var d;if(!!Gm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Hm(c);!!a.K&&Pm(a.K,d)}}
function M0(a,b){K0();oV.call(this,Qf($doc,a));this.N[vob]='gwt-RadioButton';L0(this,1);L0(this,8);L0(this,4096);L0(this,128);pY(this.b,b,false)}
function Abb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+'$'+wbb(a,++b)):(a=a.substr(0,b-0)+wbb(a,++b))}return a}
function I6(a){var b,c;b=lq(a.a.Vc(Nqb),103);if(b==null){c=cq(dA,{91:1,100:1,103:1},1,['blue','red','yellow','green']);a.a.Wc(Nqb,c);return c}else{return b}}
function J6(a){var b,c;b=lq(a.a.Vc(Oqb),103);if(b==null){c=cq(dA,{91:1,100:1,103:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.a.Wc(Oqb,c);return c}else{return b}}
function nV(a,b){var c;!b&&(b=(gab(),eab));c=a.I?(gab(),a.c.checked?fab:eab):(gab(),a.c.defaultChecked?fab:eab);hg(a.c,b.a);ig(a.c,b.a);if(!!c&&c.a==b.a){return}}
function L0(a,b){if(a.J==-1){MO(a.c,b|(a.c.__eventBits||0));MO(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?MO(a.c,b|(a.c.__eventBits||0)):a.J==-1?IO(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function oV(a){lV();var b;dV.call(this,$doc.createElement(kpb));this.c=a;this.d=$doc.createElement(rob);vf(this.N,this.c);vf(this.N,this.d);b=bg($doc);this.c[rpb]=b;jg(this.d,b);this.b=new qY(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function t9(a){var b,c,d,e,f,g,i;i=new T2;S2(i,new gY('<b>Select your favorite color:<\/b>'));c=I6(a.a);for(d=0;d<c.length;++d){b=c[d];e=new M0(Cpb,b);mV(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,HE(e,OE(e.N)+'-disabled'));S2(i,e)}S2(i,new gY('<br><b>Select your favorite sport:<\/b>'));g=J6(a.a);for(d=0;d<g.length;++d){f=g[d];e=new M0('sport',f);mV(e,'cwRadioButton-sport-'+ubb(f,Amb,nmb));d==2&&nV(e,(gab(),gab(),fab));S2(i,e)}return i}
var Nqb='cwRadioButtonColors',Oqb='cwRadioButtonSports';_=kV.prototype=new cV;_.gC=function pV(){return pv};_.lc=function qV(){return _f(this.c)};_.Lb=function rV(){this.c.__listener=this};_.Mb=function sV(){this.c.__listener=null;nV(this,this.I?(gab(),this.c.checked?fab:eab):(gab(),this.c.defaultChecked?fab:eab))};_.mc=function tV(a){!!this.c&&Kf(this.c,a)};_.Nb=function uV(a){this.J==-1?MO(this.c,a|(this.c.__eventBits||0)):this.J==-1?IO(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.b=null;_.c=null;_.d=null;_=gY.prototype=XX.prototype;_=M0.prototype=J0.prototype=new kV;_.gC=function N0(){return yw};_.Jb=function O0(a){var b;switch(JP(a.type)){case 8:case 4096:case 128:this.a=this.I?(gab(),this.c.checked?fab:eab):(gab(),this.c.defaultChecked?fab:eab);break;case 1:b=a.target;if(Lf(b)&&Uf(this.d,b)){this.a=this.I?(gab(),this.c.checked?fab:eab):(gab(),this.c.defaultChecked?fab:eab);return}aF(this,a);Km(this,this.a,this.I?(gab(),this.c.checked?fab:eab):(gab(),this.c.defaultChecked?fab:eab));return;}aF(this,a)};_.Nb=function P0(a){L0(this,a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.a=null;_=x9.prototype;_.db=function B9(){E7(this.b,t9(this.a))};var pv=sab(Aqb,'CheckBox'),yw=sab(Aqb,'RadioButton');fmb(Dd)(1);