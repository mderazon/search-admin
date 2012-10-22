function yY(){}
function X3(){}
function zY(){zY=rpb;C_()}
function Y3(){Y3=rpb;zY();C_()}
function Og(b,a){b.checked=a}
function Qg(b,a){b.htmlFor=a}
function Pg(b,a){b.defaultChecked=a}
function _H(a,b){kI(a.O,b,true)}
function u_(a){o_();t_.call(this);D_(this.b,a,true)}
function Ieb(c,a,b){b=Oeb(b);return c.replace(RegExp(a,Azb),b)}
function AY(a,b){J5(a.O,Bpb,b);J5(a.e,b,xAb);J5(a.d,b,uAb);Qg(a.e,a.d.id)}
function vg(a,b){var c=a.createElement(zBb);c.type='radio';c.name=b;c.value='on';return c}
function gI(a){var b,c;b=lg(a,BAb);c=Feb(b,Teb(32));if(c>=0){return b.substr(0,c-0)}return b}
function rn(a,b,c){var d;if(!!nn&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new on(c);!!a.L&&wn(a.L,d)}}
function $3(a,b){Y3();CY.call(this,vg($doc,a));this.O[BAb]='gwt-RadioButton';Z3(this,1);Z3(this,8);Z3(this,4096);Z3(this,128);D_(this.c,b,false)}
function Oeb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Dqb+Keb(a,++b)):(a=a.substr(0,b-0)+Keb(a,++b))}return a}
function W9(a){var b,c;b=st(a.b.od(SCb),104);if(b==null){c=jt(DD,{92:1,101:1,104:1},1,['bleu','rouge','jaune','vert']);a.b.pd(SCb,c);return c}else{return b}}
function X9(a){var b,c;b=st(a.b.od(TCb),104);if(b==null){c=jt(DD,{92:1,101:1,104:1},1,['Base-ball','Basket-ball','Football','Hockey','Soccer','Water-polo']);a.b.pd(TCb,c);return c}else{return b}}
function BY(a,b){var c;!b&&(b=(udb(),sdb));c=a.J?(udb(),a.d.checked?tdb:sdb):(udb(),a.d.defaultChecked?tdb:sdb);Og(a.d,b.b);Pg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function Z3(a,b){if(a.K==-1){dS(a.d,b|(a.d.__eventBits||0));dS(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?dS(a.d,b|(a.d.__eventBits||0)):a.K==-1?_R(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function CY(a){zY();var b;rY.call(this,$doc.createElement(nBb));this.d=a;this.e=$doc.createElement(xAb);bg(this.O,this.d);bg(this.O,this.e);b=Ig($doc);this.d[uBb]=b;Qg(this.e,b);this.c=new E_(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Hcb(a){var b,c,d,e,f,g,i;i=new f6;e6(i,new u_('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=W9(a.b);for(d=0;d<c.length;++d){b=c[d];e=new $3(GBb,b);AY(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,_H(e,gI(e.O)+'-disabled'));e6(i,e)}e6(i,new u_('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=X9(a.b);for(d=0;d<g.length;++d){f=g[d];e=new $3('sport',f);AY(e,'cwRadioButton-sport-'+Ieb(f,Qpb,Bpb));d==2&&BY(e,(udb(),udb(),tdb));e6(i,e)}return i}
var SCb='cwRadioButtonColors',TCb='cwRadioButtonSports';_=yY.prototype=new qY;_.gC=function DY(){return Py};_.Gc=function EY(){return Bg(this.d)};_.fc=function FY(){this.d.__listener=this};_.gc=function GY(){this.d.__listener=null;BY(this,this.J?(udb(),this.d.checked?tdb:sdb):(udb(),this.d.defaultChecked?tdb:sdb))};_.Hc=function HY(a){!!this.d&&qg(this.d,a)};_.hc=function IY(a){this.K==-1?dS(this.d,a|(this.d.__eventBits||0)):this.K==-1?_R(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=u_.prototype=j_.prototype;_=$3.prototype=X3.prototype=new yY;_.gC=function _3(){return Yz};_.dc=function a4(a){var b;switch(_S(a.type)){case 8:case 4096:case 128:this.b=this.J?(udb(),this.d.checked?tdb:sdb):(udb(),this.d.defaultChecked?tdb:sdb);break;case 1:b=a.target;if(rg(b)&&Cg(this.e,b)){this.b=this.J?(udb(),this.d.checked?tdb:sdb):(udb(),this.d.defaultChecked?tdb:sdb);return}uI(this,a);rn(this,this.b,this.J?(udb(),this.d.checked?tdb:sdb):(udb(),this.d.defaultChecked?tdb:sdb));return;}uI(this,a)};_.hc=function b4(a){Z3(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=Lcb.prototype;_.ib=function Pcb(){Sab(this.c,Hcb(this.b))};var Py=Gdb(FCb,'CheckBox'),Yz=Gdb(FCb,'RadioButton');tpb(Rd)(1);