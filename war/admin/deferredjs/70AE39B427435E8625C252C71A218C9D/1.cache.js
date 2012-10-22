function wX(){}
function V2(){}
function xX(){xX=Pob;A$()}
function W2(){W2=Pob;xX();A$()}
function Bg(b,a){b.checked=a}
function Dg(b,a){b.htmlFor=a}
function Cg(b,a){b.defaultChecked=a}
function lG(a,b){vG(a.N,b,true)}
function Tf(a,b){return a.createElement(CYb+b+DYb)}
function s$(a){m$();r$.call(this);B$(this.a,a,true)}
function yX(a,b){N4(a.N,lpb,b);N4(a.d,b,YDb);N4(a.c,b,UDb);Dg(a.d,a.c.id)}
function dn(a,b,c){var d;if(!!_m&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new an(c);!!a.K&&jn(a.K,d)}}
function rG(a){var b,c;b=Ff(a,hEb);c=beb(b,peb(32));if(c>=0){return b.substr(0,c-0)}return b}
function n9(a){var b,c;b=dr(a.a.dd(FYb),105);if(b==null){c=Wq(iB,{93:1,102:1,105:1},1,[GYb,HYb,IYb,JYb]);a.a.ed(FYb,c);return c}else{return b}}
function o9(a){var b,c;b=dr(a.a.dd(KYb),105);if(b==null){c=Wq(iB,{93:1,102:1,105:1},1,[LYb,MYb,NYb,OYb,NYb,PYb]);a.a.ed(KYb,c);return c}else{return b}}
function Y2(a,b){W2();AX.call(this,Tf($doc,a));this.N[hEb]=EYb;X2(this,1);X2(this,8);X2(this,4096);X2(this,128);B$(this.b,b,false)}
function zX(a,b){var c;!b&&(b=(Rcb(),Pcb));c=a.I?(Rcb(),a.c.checked?Qcb:Pcb):(Rcb(),a.c.defaultChecked?Qcb:Pcb);Bg(a.c,b.a);Cg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function X2(a,b){if(a.J==-1){QQ(a.c,b|(a.c.__eventBits||0));QQ(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?QQ(a.c,b|(a.c.__eventBits||0)):a.J==-1?MQ(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function AX(a){xX();var b;pX.call(this,Rf($doc,cIb));this.c=a;this.d=Rf($doc,YDb);vf(this.N,this.c);vf(this.N,this.d);b=jg($doc);this.c[EIb]=b;Dg(this.d,b);this.b=new C$(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function ccb(a){var b,c,d,e,f,g,i;i=new j5;i5(i,new s$(QYb));c=n9(a.a);for(d=0;d<c.length;++d){b=c[d];e=new Y2(iLb,b);yX(e,RYb+b);d==2&&(e.c.disabled=true,lG(e,rG(e.N)+SYb));i5(i,e)}i5(i,new s$(TYb));g=o9(a.a);for(d=0;d<g.length;++d){f=g[d];e=new Y2(UYb,f);yX(e,VYb+eeb(f,Npb,lpb));d==2&&zX(e,(Rcb(),Rcb(),Qcb));i5(i,e)}return i}
var DYb="'>",SYb='-disabled',CYb="<INPUT type='RADIO' name='",QYb='<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>',TYb='<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>',WYb='CheckBox',XYb='RadioButton',RYb='cwRadioButton-color-',VYb='cwRadioButton-sport-',FYb='cwRadioButtonColors',KYb='cwRadioButtonSports',EYb='gwt-RadioButton',UYb='sport',OYb='\u51B0\u7403',LYb='\u68D2\u7403',PYb='\u6C34\u7403',MYb='\u7BEE\u7403',HYb='\u7EA2',JYb='\u7EFF',GYb='\u84DD',NYb='\u8DB3\u7403',IYb='\u9EC4';_=wX.prototype=new oX;_.gC=function BX(){return pw};_.vc=function CX(){return this.c.tabIndex};_.Tb=function DX(){this.c.__listener=this};_.Ub=function EX(){this.c.__listener=null;zX(this,this.I?(Rcb(),this.c.checked?Qcb:Pcb):(Rcb(),this.c.defaultChecked?Qcb:Pcb))};_.wc=function FX(a){!!this.c&&Kf(this.c,a)};_.Vb=function GX(a){this.J==-1?QQ(this.c,a|(this.c.__eventBits||0)):this.J==-1?MQ(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_.c=null;_.d=null;_=s$.prototype=h$.prototype;_=Y2.prototype=V2.prototype=new wX;_.gC=function Z2(){return yx};_.Rb=function $2(a){var b;switch(OR(a.type)){case 8:case 4096:case 128:this.a=this.I?(Rcb(),this.c.checked?Qcb:Pcb):(Rcb(),this.c.defaultChecked?Qcb:Pcb);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(Rcb(),this.c.checked?Qcb:Pcb):(Rcb(),this.c.defaultChecked?Qcb:Pcb);return}FG(this,a);dn(this,this.a,this.I?(Rcb(),this.c.checked?Qcb:Pcb):(Rcb(),this.c.defaultChecked?Qcb:Pcb));return;}FG(this,a)};_.Vb=function _2(a){X2(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.a=null;_=gcb.prototype;_.fb=function kcb(){nab(this.b,ccb(this.a))};var pw=bdb(RRb,WYb),yx=bdb(RRb,XYb);Rob(Dd)(1);