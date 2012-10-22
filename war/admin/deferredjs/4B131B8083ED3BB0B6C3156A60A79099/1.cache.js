function mW(){}
function M1(){}
function nW(){nW=qnb;rZ()}
function N1(){N1=qnb;nW();rZ()}
function Cg(b,a){b.checked=a}
function Eg(b,a){b.htmlFor=a}
function Dg(b,a){b.defaultChecked=a}
function dF(a,b){oF(a.O,b,true)}
function jZ(a){dZ();iZ.call(this);sZ(this.b,a,true)}
function Hcb(c,a,b){b=Ncb(b);return c.replace(RegExp(a,Iob),b)}
function oW(a,b){y3(a.O,Bnb,b);y3(a.e,b,Ipb);y3(a.d,b,Fpb);Eg(a.e,a.d.id)}
function ag(a,b){var c=a.createElement(Oqb);c.type='radio';c.name=b;c.value='on';return c}
function kF(a){var b,c;b=Sf(a,Mpb);c=Ecb(b,Scb(32));if(c>=0){return b.substr(0,c-0)}return b}
function en(a,b,c){var d;if(!!an&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new bn(c);!!a.L&&kn(a.L,d)}}
function P1(a,b){N1();qW.call(this,ag($doc,a));this.O[Mpb]='gwt-RadioButton';O1(this,1);O1(this,8);O1(this,4096);O1(this,128);sZ(this.c,b,false)}
function Ncb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+'$'+Jcb(a,++b)):(a=a.substr(0,b-0)+Jcb(a,++b))}return a}
function V7(a){var b,c;b=Hq(a.b.Yc(esb),104);if(b==null){c=yq(HA,{92:1,101:1,104:1},1,['blue','red','yellow','green']);a.b.Zc(esb,c);return c}else{return b}}
function W7(a){var b,c;b=Hq(a.b.Yc(fsb),104);if(b==null){c=yq(HA,{92:1,101:1,104:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.Zc(fsb,c);return c}else{return b}}
function pW(a,b){var c;!b&&(b=(tbb(),rbb));c=a.J?(tbb(),a.d.checked?sbb:rbb):(tbb(),a.d.defaultChecked?sbb:rbb);Cg(a.d,b.b);Dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function O1(a,b){if(a.K==-1){PP(a.d,b|(a.d.__eventBits||0));PP(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?PP(a.d,b|(a.d.__eventBits||0)):a.K==-1?bR(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function qW(a){nW();var b;fW.call(this,$doc.createElement(Dqb));this.d=a;this.e=$doc.createElement(Ipb);If(this.O,this.d);If(this.O,this.e);b=tg($doc);this.d[Kqb]=b;Eg(this.e,b);this.c=new tZ(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Gab(a){var b,c,d,e,f,g,i;i=new W3;V3(i,new jZ('<b>Select your favorite color:<\/b>'));c=V7(a.b);for(d=0;d<c.length;++d){b=c[d];e=new P1(Vqb,b);oW(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,dF(e,kF(e.O)+'-disabled'));V3(i,e)}V3(i,new jZ('<br><b>Select your favorite sport:<\/b>'));g=W7(a.b);for(d=0;d<g.length;++d){f=g[d];e=new P1('sport',f);oW(e,'cwRadioButton-sport-'+Hcb(f,Nnb,Bnb));d==2&&pW(e,(tbb(),tbb(),sbb));V3(i,e)}return i}
var esb='cwRadioButtonColors',fsb='cwRadioButtonSports';_=mW.prototype=new eW;_.gC=function rW(){return Sv};_.sc=function sW(){return this.d.tabIndex};_.Pb=function tW(){this.d.__listener=this};_.Qb=function uW(){this.d.__listener=null;pW(this,this.J?(tbb(),this.d.checked?sbb:rbb):(tbb(),this.d.defaultChecked?sbb:rbb))};_.tc=function vW(a){!!this.d&&Xf(this.d,a)};_.Rb=function wW(a){this.K==-1?PP(this.d,a|(this.d.__eventBits||0)):this.K==-1?bR(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=jZ.prototype=$Y.prototype;_=P1.prototype=M1.prototype=new mW;_.gC=function Q1(){return _w};_.Nb=function R1(a){var b;switch(LQ(a.type)){case 8:case 4096:case 128:this.b=this.J?(tbb(),this.d.checked?sbb:rbb):(tbb(),this.d.defaultChecked?sbb:rbb);break;case 1:b=a.target;if(Yf(b)&&mg(this.e,b)){this.b=this.J?(tbb(),this.d.checked?sbb:rbb):(tbb(),this.d.defaultChecked?sbb:rbb);return}yF(this,a);en(this,this.b,this.J?(tbb(),this.d.checked?sbb:rbb):(tbb(),this.d.defaultChecked?sbb:rbb));return;}yF(this,a)};_.Rb=function S1(a){O1(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=Kab.prototype;_.ib=function Oab(){R8(this.c,Gab(this.b))};var Sv=Fbb(Trb,'CheckBox'),_w=Fbb(Trb,'RadioButton');snb(Qd)(1);