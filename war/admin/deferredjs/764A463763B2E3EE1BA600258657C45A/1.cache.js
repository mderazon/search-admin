function PW(){}
function n2(){}
function QW(){QW=Tnb;UZ()}
function o2(){o2=Tnb;QW();UZ()}
function Cg(b,a){b.checked=a}
function Eg(b,a){b.htmlFor=a}
function Dg(b,a){b.defaultChecked=a}
function GF(a,b){RF(a.O,b,true)}
function MZ(a){GZ();LZ.call(this);VZ(this.b,a,true)}
function idb(c,a,b){b=odb(b);return c.replace(RegExp(a,vxb),b)}
function RW(a,b){_3(a.O,cob,b);_3(a.e,b,vyb);_3(a.d,b,syb);Eg(a.e,a.d.id)}
function ag(a,b){var c=a.createElement(Azb);c.type='radio';c.name=b;c.value='on';return c}
function NF(a){var b,c;b=Sf(a,zyb);c=fdb(b,tdb(32));if(c>=0){return b.substr(0,c-0)}return b}
function en(a,b,c){var d;if(!!an&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new bn(c);!!a.L&&kn(a.L,d)}}
function q2(a,b){o2();TW.call(this,ag($doc,a));this.O[zyb]='gwt-RadioButton';p2(this,1);p2(this,8);p2(this,4096);p2(this,128);VZ(this.c,b,false)}
function odb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Zob+kdb(a,++b)):(a=a.substr(0,b-0)+kdb(a,++b))}return a}
function SW(a,b){var c;!b&&(b=(Wbb(),Ubb));c=a.J?(Wbb(),a.d.checked?Vbb:Ubb):(Wbb(),a.d.defaultChecked?Vbb:Ubb);Cg(a.d,b.b);Dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function w8(a){var b,c;b=er(a.b.Zc(SAb),105);if(b==null){c=Xq(iB,{93:1,102:1,105:1},1,['\u84DD','\u7EA2','\u9EC4','\u7EFF']);a.b.$c(SAb,c);return c}else{return b}}
function x8(a){var b,c;b=er(a.b.Zc(TAb),105);if(b==null){c=Xq(iB,{93:1,102:1,105:1},1,['\u68D2\u7403','\u7BEE\u7403',UAb,'\u51B0\u7403',UAb,'\u6C34\u7403']);a.b.$c(TAb,c);return c}else{return b}}
function p2(a,b){if(a.K==-1){qQ(a.d,b|(a.d.__eventBits||0));qQ(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?qQ(a.d,b|(a.d.__eventBits||0)):a.K==-1?ER(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function TW(a){QW();var b;IW.call(this,$doc.createElement(pzb));this.d=a;this.e=$doc.createElement(vyb);If(this.O,this.d);If(this.O,this.e);b=tg($doc);this.d[wzb]=b;Eg(this.e,b);this.c=new WZ(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function hbb(a){var b,c,d,e,f,g,i;i=new x4;w4(i,new MZ('<b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u989C\u8272:<\/b>'));c=w8(a.b);for(d=0;d<c.length;++d){b=c[d];e=new q2(Hzb,b);RW(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,GF(e,NF(e.O)+'-disabled'));w4(i,e)}w4(i,new MZ('<br><b>\u9009\u62E9\u60A8\u559C\u6B22\u7684\u8FD0\u52A8:<\/b>'));g=x8(a.b);for(d=0;d<g.length;++d){f=g[d];e=new q2('sport',f);RW(e,'cwRadioButton-sport-'+idb(f,oob,cob));d==2&&SW(e,(Wbb(),Wbb(),Vbb));w4(i,e)}return i}
var SAb='cwRadioButtonColors',TAb='cwRadioButtonSports',UAb='\u8DB3\u7403';_=PW.prototype=new HW;_.gC=function UW(){return tw};_.tc=function VW(){return this.d.tabIndex};_.Rb=function WW(){this.d.__listener=this};_.Sb=function XW(){this.d.__listener=null;SW(this,this.J?(Wbb(),this.d.checked?Vbb:Ubb):(Wbb(),this.d.defaultChecked?Vbb:Ubb))};_.uc=function YW(a){!!this.d&&Xf(this.d,a)};_.Tb=function ZW(a){this.K==-1?qQ(this.d,a|(this.d.__eventBits||0)):this.K==-1?ER(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.c=null;_.d=null;_.e=null;_=MZ.prototype=BZ.prototype;_=q2.prototype=n2.prototype=new PW;_.gC=function r2(){return Cx};_.Pb=function s2(a){var b;switch(mR(a.type)){case 8:case 4096:case 128:this.b=this.J?(Wbb(),this.d.checked?Vbb:Ubb):(Wbb(),this.d.defaultChecked?Vbb:Ubb);break;case 1:b=a.target;if(Yf(b)&&mg(this.e,b)){this.b=this.J?(Wbb(),this.d.checked?Vbb:Ubb):(Wbb(),this.d.defaultChecked?Vbb:Ubb);return}_F(this,a);en(this,this.b,this.J?(Wbb(),this.d.checked?Vbb:Ubb):(Wbb(),this.d.defaultChecked?Vbb:Ubb));return;}_F(this,a)};_.Tb=function t2(a){p2(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_=lbb.prototype;_.ib=function pbb(){s9(this.c,hbb(this.b))};var tw=gcb(FAb,'CheckBox'),Cx=gcb(FAb,'RadioButton');Vnb(Qd)(1);