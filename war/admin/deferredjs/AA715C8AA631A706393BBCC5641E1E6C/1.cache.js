function J1(){}
function g9(){}
function K1(){K1=Cub;N4()}
function h9(){h9=Cub;K1();N4()}
function og(b,a){b.checked=a}
function qg(b,a){b.htmlFor=a}
function pg(b,a){b.defaultChecked=a}
function ZM(a,b){hN(a.N,b,true)}
function F4(a){z4();E4.call(this);O4(this.a,a,true)}
function L1(a,b){Uab(a.N,Mub,b);Uab(a.d,b,aGb);Uab(a.c,b,ZFb);qg(a.d,a.c.id)}
function Tf(a,b){return a.createElement("<INPUT type='RADIO' name='"+b+"'>")}
function Rm(a,b,c){var d;if(!!Nm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Om(c);!!a.K&&Wm(a.K,d)}}
function dN(a){var b,c;b=Ff(a,dGb);c=Qjb(b,ckb(32));if(c>=0){return b.substr(0,c-0)}return b}
function j9(a,b){h9();N1.call(this,Tf($doc,a));this.N[dGb]='gwt-RadioButton';i9(this,1);i9(this,8);i9(this,4096);i9(this,128);O4(this.b,b,false)}
function ffb(a){var b,c;b=Px(a.a.gd(qIb),104);if(b==null){c=Gx(vI,{92:1,101:1,104:1},1,['blue','red','yellow','green']);a.a.hd(qIb,c);return c}else{return b}}
function gfb(a){var b,c;b=Px(a.a.gd(rIb),104);if(b==null){c=Gx(vI,{92:1,101:1,104:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.a.hd(rIb,c);return c}else{return b}}
function M1(a,b){var c;!b&&(b=(Fib(),Dib));c=a.I?(Fib(),a.c.checked?Eib:Dib):(Fib(),a.c.defaultChecked?Eib:Dib);og(a.c,b.a);pg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function i9(a,b){if(a.J==-1){pX(a.c,b|(a.c.__eventBits||0));pX(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?pX(a.c,b|(a.c.__eventBits||0)):a.J==-1?lX(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function N1(a){K1();var b;C1.call(this,Rf($doc,QGb));this.c=a;this.d=Rf($doc,aGb);vf(this.N,this.c);vf(this.N,this.d);b=eg($doc);this.c[XGb]=b;qg(this.d,b);this.b=new P4(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function Shb(a){var b,c,d,e,f,g,i;i=new qbb;pbb(i,new F4('<b>Select your favorite color:<\/b>'));c=ffb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new j9(eHb,b);L1(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,ZM(e,dN(e.N)+'-disabled'));pbb(i,e)}pbb(i,new F4('<br><b>Select your favorite sport:<\/b>'));g=gfb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new j9('sport',f);L1(e,'cwRadioButton-sport-'+Tjb(f,Zub,Mub));d==2&&M1(e,(Fib(),Fib(),Eib));pbb(i,e)}return i}
var qIb='cwRadioButtonColors',rIb='cwRadioButtonSports';_=J1.prototype=new B1;_.gC=function O1(){return HD};_.yc=function P1(){return this.c.tabIndex};_.Zb=function Q1(){this.c.__listener=this};_.$b=function R1(){this.c.__listener=null;M1(this,this.I?(Fib(),this.c.checked?Eib:Dib):(Fib(),this.c.defaultChecked?Eib:Dib))};_.zc=function S1(a){!!this.c&&Kf(this.c,a)};_._b=function T1(a){this.J==-1?pX(this.c,a|(this.c.__eventBits||0)):this.J==-1?lX(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=F4.prototype=u4.prototype;_=j9.prototype=g9.prototype=new J1;_.gC=function k9(){return QE};_.Xb=function l9(a){var b;switch(mY(a.type)){case 8:case 4096:case 128:this.a=this.I?(Fib(),this.c.checked?Eib:Dib):(Fib(),this.c.defaultChecked?Eib:Dib);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(Fib(),this.c.checked?Eib:Dib):(Fib(),this.c.defaultChecked?Eib:Dib);return}rN(this,a);Rm(this,this.a,this.I?(Fib(),this.c.checked?Eib:Dib):(Fib(),this.c.defaultChecked?Eib:Dib));return;}rN(this,a)};_._b=function m9(a){i9(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=Whb.prototype;_.db=function $hb(){bgb(this.b,Shb(this.a))};var HD=Rib(dIb,'CheckBox'),QE=Rib(dIb,'RadioButton');Eub(Dd)(1);