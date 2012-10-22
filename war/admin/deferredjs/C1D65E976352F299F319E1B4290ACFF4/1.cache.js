function _V(){}
function y1(){}
function aW(){aW=Umb;dZ()}
function z1(){z1=Umb;aW();dZ()}
function og(b,a){b.checked=a}
function qg(b,a){b.htmlFor=a}
function pg(b,a){b.defaultChecked=a}
function pF(a,b){zF(a.N,b,true)}
function XY(a){RY();WY.call(this);eZ(this.a,a,true)}
function bW(a,b){k3(a.N,cnb,b);k3(a.d,b,uxb);k3(a.c,b,rxb);qg(a.d,a.c.id)}
function Tf(a,b){return a.createElement("<INPUT type='RADIO' name='"+b+"'>")}
function Rm(a,b,c){var d;if(!!Nm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Om(c);!!a.K&&Wm(a.K,d)}}
function vF(a){var b,c;b=Ff(a,xxb);c=gcb(b,ucb(32));if(c>=0){return b.substr(0,c-0)}return b}
function B1(a,b){z1();dW.call(this,Tf($doc,a));this.N[xxb]='gwt-RadioButton';A1(this,1);A1(this,8);A1(this,4096);A1(this,128);eZ(this.b,b,false)}
function cW(a,b){var c;!b&&(b=(Xab(),Vab));c=a.I?(Xab(),a.c.checked?Wab:Vab):(Xab(),a.c.defaultChecked?Wab:Vab);og(a.c,b.a);pg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function x7(a){var b,c;b=Rq(a.a.Wc(Kzb),104);if(b==null){c=Iq(NA,{92:1,101:1,104:1},1,['\u84DD','\u7EA2','\u9EC4','\u7EFF']);a.a.Xc(Kzb,c);return c}else{return b}}
function y7(a){var b,c;b=Rq(a.a.Wc(Lzb),104);if(b==null){c=Iq(NA,{92:1,101:1,104:1},1,['\u68D2\u7403','\u7BEE\u7403',Mzb,'\u51B0\u7403',Mzb,'\u6C34\u7403']);a.a.Xc(Lzb,c);return c}else{return b}}
function A1(a,b){if(a.J==-1){HP(a.c,b|(a.c.__eventBits||0));HP(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?HP(a.c,b|(a.c.__eventBits||0)):a.J==-1?DP(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function dW(a){aW();var b;UV.call(this,Rf($doc,iyb));this.c=a;this.d=Rf($doc,uxb);vf(this.N,this.c);vf(this.N,this.d);b=eg($doc);this.c[pyb]=b;qg(this.d,b);this.b=new fZ(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function iab(a){var b,c,d,e,f,g,i;i=new I3;H3(i,new XY('<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>'));c=x7(a.a);for(d=0;d<c.length;++d){b=c[d];e=new B1(zyb,b);bW(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,pF(e,vF(e.N)+'-disabled'));H3(i,e)}H3(i,new XY('<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>'));g=y7(a.a);for(d=0;d<g.length;++d){f=g[d];e=new B1('sport',f);bW(e,'cwRadioButton-sport-'+jcb(f,pnb,cnb));d==2&&cW(e,(Xab(),Xab(),Wab));H3(i,e)}return i}
var Kzb='cwRadioButtonColors',Lzb='cwRadioButtonSports',Mzb='\u8DB3\u7403';_=_V.prototype=new TV;_.gC=function eW(){return Zv};_.mc=function fW(){return this.c.tabIndex};_.Nb=function gW(){this.c.__listener=this};_.Ob=function hW(){this.c.__listener=null;cW(this,this.I?(Xab(),this.c.checked?Wab:Vab):(Xab(),this.c.defaultChecked?Wab:Vab))};_.nc=function iW(a){!!this.c&&Kf(this.c,a)};_.Pb=function jW(a){this.J==-1?HP(this.c,a|(this.c.__eventBits||0)):this.J==-1?DP(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=XY.prototype=MY.prototype;_=B1.prototype=y1.prototype=new _V;_.gC=function C1(){return gx};_.Lb=function D1(a){var b;switch(EQ(a.type)){case 8:case 4096:case 128:this.a=this.I?(Xab(),this.c.checked?Wab:Vab):(Xab(),this.c.defaultChecked?Wab:Vab);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(Xab(),this.c.checked?Wab:Vab):(Xab(),this.c.defaultChecked?Wab:Vab);return}JF(this,a);Rm(this,this.a,this.I?(Xab(),this.c.checked?Wab:Vab):(Xab(),this.c.defaultChecked?Wab:Vab));return;}JF(this,a)};_.Pb=function E1(a){A1(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=mab.prototype;_.db=function qab(){t8(this.b,iab(this.a))};var Zv=hbb(xzb,'CheckBox'),gx=hbb(xzb,'RadioButton');Wmb(Dd)(1);