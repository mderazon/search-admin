function NV(){}
function k1(){}
function OV(){OV=Gmb;RY()}
function l1(){l1=Gmb;OV();RY()}
function hg(b,a){b.checked=a}
function jg(b,a){b.htmlFor=a}
function ig(b,a){b.defaultChecked=a}
function iF(a,b){tF(a.N,b,true)}
function JY(a){DY();IY.call(this);SY(this.a,a,true)}
function Xbb(c,a,b){b=bcb(b);return c.replace(RegExp(a,ewb),b)}
function PV(a,b){Y2(a.N,Qmb,b);Y2(a.d,b,exb);Y2(a.c,b,bxb);jg(a.d,a.c.id)}
function Qf(a,b){var c=a.createElement(hyb);c.type='radio';c.name=b;c.value='on';return c}
function pF(a){var b,c;b=Ff(a,ixb);c=Ubb(b,gcb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Km(a,b,c){var d;if(!!Gm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Hm(c);!!a.K&&Pm(a.K,d)}}
function n1(a,b){l1();RV.call(this,Qf($doc,a));this.N[ixb]='gwt-RadioButton';m1(this,1);m1(this,8);m1(this,4096);m1(this,128);SY(this.b,b,false)}
function bcb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Inb+Zbb(a,++b)):(a=a.substr(0,b-0)+Zbb(a,++b))}return a}
function QV(a,b){var c;!b&&(b=(Jab(),Hab));c=a.I?(Jab(),a.c.checked?Iab:Hab):(Jab(),a.c.defaultChecked?Iab:Hab);hg(a.c,b.a);ig(a.c,b.a);if(!!c&&c.a==b.a){return}}
function j7(a){var b,c;b=Kq(a.a.Wc(zzb),104);if(b==null){c=Bq(GA,{92:1,101:1,104:1},1,['\u84DD','\u7EA2','\u9EC4','\u7EFF']);a.a.Xc(zzb,c);return c}else{return b}}
function k7(a){var b,c;b=Kq(a.a.Wc(Azb),104);if(b==null){c=Bq(GA,{92:1,101:1,104:1},1,['\u68D2\u7403','\u7BEE\u7403',Bzb,'\u51B0\u7403',Bzb,'\u6C34\u7403']);a.a.Xc(Azb,c);return c}else{return b}}
function m1(a,b){if(a.J==-1){nP(a.c,b|(a.c.__eventBits||0));nP(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?nP(a.c,b|(a.c.__eventBits||0)):a.J==-1?jP(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function RV(a){OV();var b;GV.call(this,$doc.createElement(Yxb));this.c=a;this.d=$doc.createElement(exb);vf(this.N,this.c);vf(this.N,this.d);b=bg($doc);this.c[dyb]=b;jg(this.d,b);this.b=new TY(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function W9(a){var b,c,d,e,f,g,i;i=new u3;t3(i,new JY('<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>'));c=j7(a.a);for(d=0;d<c.length;++d){b=c[d];e=new n1(oyb,b);PV(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,iF(e,pF(e.N)+'-disabled'));t3(i,e)}t3(i,new JY('<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>'));g=k7(a.a);for(d=0;d<g.length;++d){f=g[d];e=new n1('sport',f);PV(e,'cwRadioButton-sport-'+Xbb(f,bnb,Qmb));d==2&&QV(e,(Jab(),Jab(),Iab));t3(i,e)}return i}
var zzb='cwRadioButtonColors',Azb='cwRadioButtonSports',Bzb='\u8DB3\u7403';_=NV.prototype=new FV;_.gC=function SV(){return Sv};_.mc=function TV(){return _f(this.c)};_.Nb=function UV(){this.c.__listener=this};_.Ob=function VV(){this.c.__listener=null;QV(this,this.I?(Jab(),this.c.checked?Iab:Hab):(Jab(),this.c.defaultChecked?Iab:Hab))};_.nc=function WV(a){!!this.c&&Kf(this.c,a)};_.Pb=function XV(a){this.J==-1?nP(this.c,a|(this.c.__eventBits||0)):this.J==-1?jP(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=JY.prototype=yY.prototype;_=n1.prototype=k1.prototype=new NV;_.gC=function o1(){return _w};_.Lb=function p1(a){var b;switch(kQ(a.type)){case 8:case 4096:case 128:this.a=this.I?(Jab(),this.c.checked?Iab:Hab):(Jab(),this.c.defaultChecked?Iab:Hab);break;case 1:b=a.target;if(Lf(b)&&Uf(this.d,b)){this.a=this.I?(Jab(),this.c.checked?Iab:Hab):(Jab(),this.c.defaultChecked?Iab:Hab);return}DF(this,a);Km(this,this.a,this.I?(Jab(),this.c.checked?Iab:Hab):(Jab(),this.c.defaultChecked?Iab:Hab));return;}DF(this,a)};_.Pb=function q1(a){m1(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=$9.prototype;_.db=function cab(){f8(this.b,W9(this.a))};var Sv=Vab(mzb,'CheckBox'),_w=Vab(mzb,'RadioButton');Imb(Dd)(1);