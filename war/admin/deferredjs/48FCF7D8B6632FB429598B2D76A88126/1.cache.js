function mW(){}
function L1(){}
function nW(){nW=fnb;qZ()}
function M1(){M1=fnb;nW();qZ()}
function Og(b,a){b.checked=a}
function Qg(b,a){b.htmlFor=a}
function Pg(b,a){b.defaultChecked=a}
function PF(a,b){$F(a.O,b,true)}
function iZ(a){cZ();hZ.call(this);rZ(this.b,a,true)}
function wcb(c,a,b){b=Ccb(b);return c.replace(RegExp(a,Owb),b)}
function oW(a,b){x3(a.O,pnb,b);x3(a.e,b,Mxb);x3(a.d,b,Jxb);Qg(a.e,a.d.id)}
function vg(a,b){var c=a.createElement(Oyb);c.type='radio';c.name=b;c.value='on';return c}
function WF(a){var b,c;b=lg(a,Qxb);c=tcb(b,Hcb(32));if(c>=0){return b.substr(0,c-0)}return b}
function rn(a,b,c){var d;if(!!nn&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new on(c);!!a.L&&wn(a.L,d)}}
function O1(a,b){M1();qW.call(this,vg($doc,a));this.O[Qxb]='gwt-RadioButton';N1(this,1);N1(this,8);N1(this,4096);N1(this,128);rZ(this.c,b,false)}
function Ccb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+rob+ycb(a,++b)):(a=a.substr(0,b-0)+ycb(a,++b))}return a}
function pW(a,b){var c;!b&&(b=(ibb(),gbb));c=a.J?(ibb(),a.d.checked?hbb:gbb):(ibb(),a.d.defaultChecked?hbb:gbb);Og(a.d,b.b);Pg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function K7(a){var b,c;b=qr(a.b.bd(eAb),104);if(b==null){c=hr(rB,{92:1,101:1,104:1},1,['\u84DD','\u7EA2','\u9EC4','\u7EFF']);a.b.cd(eAb,c);return c}else{return b}}
function L7(a){var b,c;b=qr(a.b.bd(fAb),104);if(b==null){c=hr(rB,{92:1,101:1,104:1},1,['\u68D2\u7403','\u7BEE\u7403',gAb,'\u51B0\u7403',gAb,'\u6C34\u7403']);a.b.cd(fAb,c);return c}else{return b}}
function N1(a,b){if(a.K==-1){TP(a.d,b|(a.d.__eventBits||0));TP(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?TP(a.d,b|(a.d.__eventBits||0)):a.K==-1?PP(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function qW(a){nW();var b;fW.call(this,$doc.createElement(Cyb));this.d=a;this.e=$doc.createElement(Mxb);bg(this.O,this.d);bg(this.O,this.e);b=Ig($doc);this.d[Jyb]=b;Qg(this.e,b);this.c=new sZ(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function vab(a){var b,c,d,e,f,g,i;i=new V3;U3(i,new iZ('<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>'));c=K7(a.b);for(d=0;d<c.length;++d){b=c[d];e=new O1(Vyb,b);oW(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,PF(e,WF(e.O)+'-disabled'));U3(i,e)}U3(i,new iZ('<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>'));g=L7(a.b);for(d=0;d<g.length;++d){f=g[d];e=new O1('sport',f);oW(e,'cwRadioButton-sport-'+wcb(f,Enb,pnb));d==2&&pW(e,(ibb(),ibb(),hbb));U3(i,e)}return i}
var eAb='cwRadioButtonColors',fAb='cwRadioButtonSports',gAb='\u8DB3\u7403';_=mW.prototype=new eW;_.gC=function rW(){return Dw};_.uc=function sW(){return Bg(this.d)};_.Vb=function tW(){this.d.__listener=this};_.Wb=function uW(){this.d.__listener=null;pW(this,this.J?(ibb(),this.d.checked?hbb:gbb):(ibb(),this.d.defaultChecked?hbb:gbb))};_.vc=function vW(a){!!this.d&&qg(this.d,a)};_.Xb=function wW(a){this.K==-1?TP(this.d,a|(this.d.__eventBits||0)):this.K==-1?PP(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=iZ.prototype=ZY.prototype;_=O1.prototype=L1.prototype=new mW;_.gC=function P1(){return Mx};_.Tb=function Q1(a){var b;switch(PQ(a.type)){case 8:case 4096:case 128:this.b=this.J?(ibb(),this.d.checked?hbb:gbb):(ibb(),this.d.defaultChecked?hbb:gbb);break;case 1:b=a.target;if(rg(b)&&Cg(this.e,b)){this.b=this.J?(ibb(),this.d.checked?hbb:gbb):(ibb(),this.d.defaultChecked?hbb:gbb);return}iG(this,a);rn(this,this.b,this.J?(ibb(),this.d.checked?hbb:gbb):(ibb(),this.d.defaultChecked?hbb:gbb));return;}iG(this,a)};_.Xb=function R1(a){N1(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=zab.prototype;_.ib=function Dab(){G8(this.c,vab(this.b))};var Dw=ubb(Tzb,'CheckBox'),Mx=ubb(Tzb,'RadioButton');hnb(Rd)(1);