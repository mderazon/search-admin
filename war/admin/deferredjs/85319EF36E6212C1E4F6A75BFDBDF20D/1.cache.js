function yV(){}
function X0(){}
function zV(){zV=rmb;CY()}
function Y0(){Y0=rmb;zV();CY()}
function og(b,a){b.checked=a}
function qg(b,a){b.htmlFor=a}
function pg(b,a){b.defaultChecked=a}
function OE(a,b){YE(a.N,b,true)}
function uY(a){oY();tY.call(this);DY(this.a,a,true)}
function AV(a,b){J2(a.N,Bmb,b);J2(a.d,b,Hob);J2(a.c,b,Eob);qg(a.d,a.c.id)}
function Tf(a,b){return a.createElement("<INPUT type='RADIO' name='"+b+"'>")}
function Rm(a,b,c){var d;if(!!Nm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Om(c);!!a.K&&Wm(a.K,d)}}
function UE(a){var b,c;b=Ff(a,Kob);c=Fbb(b,Tbb(32));if(c>=0){return b.substr(0,c-0)}return b}
function $0(a,b){Y0();CV.call(this,Tf($doc,a));this.N[Kob]='gwt-RadioButton';Z0(this,1);Z0(this,8);Z0(this,4096);Z0(this,128);DY(this.b,b,false)}
function W6(a){var b,c;b=sq(a.a.Vc(Yqb),103);if(b==null){c=jq(kA,{91:1,100:1,103:1},1,['blue','red','yellow','green']);a.a.Wc(Yqb,c);return c}else{return b}}
function X6(a){var b,c;b=sq(a.a.Vc(Zqb),103);if(b==null){c=jq(kA,{91:1,100:1,103:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.a.Wc(Zqb,c);return c}else{return b}}
function BV(a,b){var c;!b&&(b=(uab(),sab));c=a.I?(uab(),a.c.checked?tab:sab):(uab(),a.c.defaultChecked?tab:sab);og(a.c,b.a);pg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function Z0(a,b){if(a.J==-1){eP(a.c,b|(a.c.__eventBits||0));eP(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?eP(a.c,b|(a.c.__eventBits||0)):a.J==-1?aP(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function CV(a){zV();var b;rV.call(this,Rf($doc,wpb));this.c=a;this.d=Rf($doc,Hob);vf(this.N,this.c);vf(this.N,this.d);b=eg($doc);this.c[Dpb]=b;qg(this.d,b);this.b=new EY(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function H9(a){var b,c,d,e,f,g,i;i=new f3;e3(i,new uY('<b>Select your favorite color:<\/b>'));c=W6(a.a);for(d=0;d<c.length;++d){b=c[d];e=new $0(Npb,b);AV(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,OE(e,UE(e.N)+'-disabled'));e3(i,e)}e3(i,new uY('<br><b>Select your favorite sport:<\/b>'));g=X6(a.a);for(d=0;d<g.length;++d){f=g[d];e=new $0('sport',f);AV(e,'cwRadioButton-sport-'+Ibb(f,Omb,Bmb));d==2&&BV(e,(uab(),uab(),tab));e3(i,e)}return i}
var Yqb='cwRadioButtonColors',Zqb='cwRadioButtonSports';_=yV.prototype=new qV;_.gC=function DV(){return wv};_.lc=function EV(){return this.c.tabIndex};_.Lb=function FV(){this.c.__listener=this};_.Mb=function GV(){this.c.__listener=null;BV(this,this.I?(uab(),this.c.checked?tab:sab):(uab(),this.c.defaultChecked?tab:sab))};_.mc=function HV(a){!!this.c&&Kf(this.c,a)};_.Nb=function IV(a){this.J==-1?eP(this.c,a|(this.c.__eventBits||0)):this.J==-1?aP(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.b=null;_.c=null;_.d=null;_=uY.prototype=jY.prototype;_=$0.prototype=X0.prototype=new yV;_.gC=function _0(){return Fw};_.Jb=function a1(a){var b;switch(bQ(a.type)){case 8:case 4096:case 128:this.a=this.I?(uab(),this.c.checked?tab:sab):(uab(),this.c.defaultChecked?tab:sab);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(uab(),this.c.checked?tab:sab):(uab(),this.c.defaultChecked?tab:sab);return}gF(this,a);Rm(this,this.a,this.I?(uab(),this.c.checked?tab:sab):(uab(),this.c.defaultChecked?tab:sab));return;}gF(this,a)};_.Nb=function b1(a){Z0(this,a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.a=null;_=L9.prototype;_.db=function P9(){S7(this.b,H9(this.a))};var wv=Gab(Lqb,'CheckBox'),Fw=Gab(Lqb,'RadioButton');tmb(Dd)(1);