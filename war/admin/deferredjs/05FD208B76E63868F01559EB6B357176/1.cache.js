function b1(){}
function B8(){}
function c1(){c1=fub;g4()}
function C8(){C8=fub;c1();g4()}
function Cg(b,a){b.checked=a}
function Eg(b,a){b.htmlFor=a}
function Dg(b,a){b.defaultChecked=a}
function UL(a,b){dM(a.O,b,true)}
function $3(a){U3();Z3.call(this);h4(this.b,a,true)}
function wjb(c,a,b){b=Cjb(b);return c.replace(RegExp(a,lEb),b)}
function d1(a,b){nab(a.O,qub,b);nab(a.e,b,kFb);nab(a.d,b,hFb);Eg(a.e,a.d.id)}
function en(a,b,c){var d;if(!!an&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new bn(c);!!a.L&&kn(a.L,d)}}
function ag(a,b){var c=a.createElement(pGb);c.type='radio';c.name=b;c.value='on';return c}
function _L(a){var b,c;b=Sf(a,oFb);c=tjb(b,Hjb(32));if(c>=0){return b.substr(0,c-0)}return b}
function E8(a,b){C8();f1.call(this,ag($doc,a));this.O[oFb]='gwt-RadioButton';D8(this,1);D8(this,8);D8(this,4096);D8(this,128);h4(this.c,b,false)}
function Cjb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+lvb+yjb(a,++b)):(a=a.substr(0,b-0)+yjb(a,++b))}return a}
function e1(a,b){var c;!b&&(b=(iib(),gib));c=a.J?(iib(),a.d.checked?hib:gib):(iib(),a.d.defaultChecked?hib:gib);Cg(a.d,b.b);Dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function D8(a,b){if(a.K==-1){EW(a.d,b|(a.d.__eventBits||0));EW(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?EW(a.d,b|(a.d.__eventBits||0)):a.K==-1?SX(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function Keb(a){var b,c;b=Ow(a.b.kd(IHb),105);if(b==null){c=Fw(wH,{93:1,102:1,105:1},1,['\u0627\u0632\u0631\u0642','\u0627\u062D\u0645\u0631','\u0627\u0635\u0641\u0631','\u0627\u062E\u0636\u0631']);a.b.ld(IHb,c);return c}else{return b}}
function f1(a){c1();var b;W0.call(this,$doc.createElement(eGb));this.d=a;this.e=$doc.createElement(kFb);If(this.O,this.d);If(this.O,this.e);b=tg($doc);this.d[lGb]=b;Eg(this.e,b);this.c=new i4(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Leb(a){var b,c;b=Ow(a.b.kd(JHb),105);if(b==null){c=Fw(wH,{93:1,102:1,105:1},1,['\u0627\u0644\u0628\u064A\u0633\u0628\u0648\u0644','\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629','\u0627\u0644\u0647\u0648\u0643\u064A','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645','\u0643\u0631\u0629 \u0627\u0644\u0645\u0627\u0621']);a.b.ld(JHb,c);return c}else{return b}}
function vhb(a){var b,c,d,e,f,g,i;i=new Lab;Kab(i,new $3('<b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0641\u0636\u0644 \u0644\u062F\u064A\u0643:<\/b>'));c=Keb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new E8(wGb,b);d1(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,UL(e,_L(e.O)+'-disabled'));Kab(i,e)}Kab(i,new $3('<br><b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643:<\/b>'));g=Leb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new E8('sport',f);d1(e,'cwRadioButton-sport-'+wjb(f,Cub,qub));d==2&&e1(e,(iib(),iib(),hib));Kab(i,e)}return i}
var IHb='cwRadioButtonColors',JHb='cwRadioButtonSports';_=b1.prototype=new V0;_.gC=function g1(){return HC};_.Fc=function h1(){return this.d.tabIndex};_.bc=function i1(){this.d.__listener=this};_.cc=function j1(){this.d.__listener=null;e1(this,this.J?(iib(),this.d.checked?hib:gib):(iib(),this.d.defaultChecked?hib:gib))};_.Gc=function k1(a){!!this.d&&Xf(this.d,a)};_.dc=function l1(a){this.K==-1?EW(this.d,a|(this.d.__eventBits||0)):this.K==-1?SX(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.c=null;_.d=null;_.e=null;_=$3.prototype=P3.prototype;_=E8.prototype=B8.prototype=new b1;_.gC=function F8(){return QD};_._b=function G8(a){var b;switch(AX(a.type)){case 8:case 4096:case 128:this.b=this.J?(iib(),this.d.checked?hib:gib):(iib(),this.d.defaultChecked?hib:gib);break;case 1:b=a.target;if(Yf(b)&&mg(this.e,b)){this.b=this.J?(iib(),this.d.checked?hib:gib):(iib(),this.d.defaultChecked?hib:gib);return}nM(this,a);en(this,this.b,this.J?(iib(),this.d.checked?hib:gib):(iib(),this.d.defaultChecked?hib:gib));return;}nM(this,a)};_.dc=function H8(a){D8(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_=zhb.prototype;_.ib=function Dhb(){Gfb(this.c,vhb(this.b))};var HC=uib(vHb,'CheckBox'),QD=uib(vHb,'RadioButton');hub(Qd)(1);