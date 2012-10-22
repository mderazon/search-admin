function x2(){}
function X9(){}
function y2(){y2=Bvb;C5()}
function Y9(){Y9=Bvb;y2();C5()}
function Cg(b,a){b.checked=a}
function Eg(b,a){b.htmlFor=a}
function Dg(b,a){b.defaultChecked=a}
function oN(a,b){zN(a.O,b,true)}
function u5(a){o5();t5.call(this);D5(this.b,a,true)}
function Skb(c,a,b){b=Ykb(b);return c.replace(RegExp(a,cGb),b)}
function z2(a,b){Jbb(a.O,Mvb,b);Jbb(a.e,b,bHb);Jbb(a.d,b,$Gb);Eg(a.e,a.d.id)}
function en(a,b,c){var d;if(!!an&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new bn(c);!!a.L&&kn(a.L,d)}}
function ag(a,b){var c=a.createElement(gIb);c.type='radio';c.name=b;c.value='on';return c}
function vN(a){var b,c;b=Sf(a,fHb);c=Pkb(b,blb(32));if(c>=0){return b.substr(0,c-0)}return b}
function $9(a,b){Y9();B2.call(this,ag($doc,a));this.O[fHb]='gwt-RadioButton';Z9(this,1);Z9(this,8);Z9(this,4096);Z9(this,128);D5(this.c,b,false)}
function Ykb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Hwb+Ukb(a,++b)):(a=a.substr(0,b-0)+Ukb(a,++b))}return a}
function egb(a){var b,c;b=cy(a.b.kd(yJb),105);if(b==null){c=Vx(SI,{93:1,102:1,105:1},1,['blue','red','yellow','green']);a.b.ld(yJb,c);return c}else{return b}}
function fgb(a){var b,c;b=cy(a.b.kd(zJb),105);if(b==null){c=Vx(SI,{93:1,102:1,105:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.ld(zJb,c);return c}else{return b}}
function A2(a,b){var c;!b&&(b=(Ejb(),Cjb));c=a.J?(Ejb(),a.d.checked?Djb:Cjb):(Ejb(),a.d.defaultChecked?Djb:Cjb);Cg(a.d,b.b);Dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function Z9(a,b){if(a.K==-1){$X(a.d,b|(a.d.__eventBits||0));$X(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?$X(a.d,b|(a.d.__eventBits||0)):a.K==-1?mZ(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function B2(a){y2();var b;q2.call(this,$doc.createElement(XHb));this.d=a;this.e=$doc.createElement(bHb);If(this.O,this.d);If(this.O,this.e);b=tg($doc);this.d[cIb]=b;Eg(this.e,b);this.c=new E5(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Rib(a){var b,c,d,e,f,g,i;i=new fcb;ecb(i,new u5('<b>Select your favorite color:<\/b>'));c=egb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new $9(mIb,b);z2(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,oN(e,vN(e.O)+'-disabled'));ecb(i,e)}ecb(i,new u5('<br><b>Select your favorite sport:<\/b>'));g=fgb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new $9('sport',f);z2(e,'cwRadioButton-sport-'+Skb(f,Yvb,Mvb));d==2&&A2(e,(Ejb(),Ejb(),Djb));ecb(i,e)}return i}
var yJb='cwRadioButtonColors',zJb='cwRadioButtonSports';_=x2.prototype=new p2;_.gC=function C2(){return bE};_.Fc=function D2(){return this.d.tabIndex};_.bc=function E2(){this.d.__listener=this};_.cc=function F2(){this.d.__listener=null;A2(this,this.J?(Ejb(),this.d.checked?Djb:Cjb):(Ejb(),this.d.defaultChecked?Djb:Cjb))};_.Gc=function G2(a){!!this.d&&Xf(this.d,a)};_.dc=function H2(a){this.K==-1?$X(this.d,a|(this.d.__eventBits||0)):this.K==-1?mZ(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.c=null;_.d=null;_.e=null;_=u5.prototype=j5.prototype;_=$9.prototype=X9.prototype=new x2;_.gC=function _9(){return kF};_._b=function aab(a){var b;switch(WY(a.type)){case 8:case 4096:case 128:this.b=this.J?(Ejb(),this.d.checked?Djb:Cjb):(Ejb(),this.d.defaultChecked?Djb:Cjb);break;case 1:b=a.target;if(Yf(b)&&mg(this.e,b)){this.b=this.J?(Ejb(),this.d.checked?Djb:Cjb):(Ejb(),this.d.defaultChecked?Djb:Cjb);return}JN(this,a);en(this,this.b,this.J?(Ejb(),this.d.checked?Djb:Cjb):(Ejb(),this.d.defaultChecked?Djb:Cjb));return;}JN(this,a)};_.dc=function bab(a){Z9(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_=Vib.prototype;_.ib=function Zib(){ahb(this.c,Rib(this.b))};var bE=Qjb(lJb,'CheckBox'),kF=Qjb(lJb,'RadioButton');Dvb(Qd)(1);