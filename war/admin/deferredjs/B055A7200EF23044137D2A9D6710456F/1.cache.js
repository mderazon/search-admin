function VW(){}
function s2(){}
function WW(){WW=mob;ZZ()}
function t2(){t2=mob;WW();ZZ()}
function Bg(b,a){b.checked=a}
function Dg(b,a){b.htmlFor=a}
function Cg(b,a){b.defaultChecked=a}
function KF(a,b){UF(a.N,b,true)}
function Tf(a,b){return a.createElement(JPb+b+KPb)}
function RZ(a){LZ();QZ.call(this);$Z(this.a,a,true)}
function XW(a,b){k4(a.N,Kob,b);k4(a.d,b,dvb);k4(a.c,b,_ub);Dg(a.d,a.c.id)}
function dn(a,b,c){var d;if(!!_m&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new an(c);!!a.K&&jn(a.K,d)}}
function QF(a){var b,c;b=Ff(a,ovb);c=Adb(b,Odb(32));if(c>=0){return b.substr(0,c-0)}return b}
function M8(a){var b,c;b=Gq(a.a.cd(MPb),104);if(b==null){c=xq(HA,{92:1,101:1,104:1},1,[NPb,OPb,PPb,QPb]);a.a.dd(MPb,c);return c}else{return b}}
function N8(a){var b,c;b=Gq(a.a.cd(RPb),104);if(b==null){c=xq(HA,{92:1,101:1,104:1},1,[SPb,TPb,UPb,VPb,WPb,XPb]);a.a.dd(RPb,c);return c}else{return b}}
function v2(a,b){t2();ZW.call(this,Tf($doc,a));this.N[ovb]=LPb;u2(this,1);u2(this,8);u2(this,4096);u2(this,128);$Z(this.b,b,false)}
function YW(a,b){var c;!b&&(b=(ocb(),mcb));c=a.I?(ocb(),a.c.checked?ncb:mcb):(ocb(),a.c.defaultChecked?ncb:mcb);Bg(a.c,b.a);Cg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function u2(a,b){if(a.J==-1){nQ(a.c,b|(a.c.__eventBits||0));nQ(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?nQ(a.c,b|(a.c.__eventBits||0)):a.J==-1?jQ(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function ZW(a){WW();var b;OW.call(this,Rf($doc,lzb));this.c=a;this.d=Rf($doc,dvb);vf(this.N,this.c);vf(this.N,this.d);b=jg($doc);this.c[Nzb]=b;Dg(this.d,b);this.b=new _Z(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function Bbb(a){var b,c,d,e,f,g,i;i=new I4;H4(i,new RZ(YPb));c=M8(a.a);for(d=0;d<c.length;++d){b=c[d];e=new v2(sCb,b);XW(e,ZPb+b);d==2&&(e.c.disabled=true,KF(e,QF(e.N)+$Pb));H4(i,e)}H4(i,new RZ(_Pb));g=N8(a.a);for(d=0;d<g.length;++d){f=g[d];e=new v2(aQb,f);XW(e,bQb+Ddb(f,kpb,Kob));d==2&&YW(e,(ocb(),ocb(),ncb));H4(i,e)}return i}
var KPb="'>",$Pb='-disabled',JPb="<INPUT type='RADIO' name='",YPb='<b>Select your favorite color:<\/b>',_Pb='<br><b>Select your favorite sport:<\/b>',SPb='Baseball',TPb='Basketball',cQb='CheckBox',UPb='Football',VPb='Hockey',dQb='RadioButton',WPb='Soccer',XPb='Water Polo',NPb='blue',ZPb='cwRadioButton-color-',bQb='cwRadioButton-sport-',MPb='cwRadioButtonColors',RPb='cwRadioButtonSports',QPb='green',LPb='gwt-RadioButton',OPb='red',aQb='sport',PPb='yellow';_=VW.prototype=new NW;_.gC=function $W(){return Ov};_.uc=function _W(){return this.c.tabIndex};_.Rb=function aX(){this.c.__listener=this};_.Sb=function bX(){this.c.__listener=null;YW(this,this.I?(ocb(),this.c.checked?ncb:mcb):(ocb(),this.c.defaultChecked?ncb:mcb))};_.vc=function cX(a){!!this.c&&Kf(this.c,a)};_.Tb=function dX(a){this.J==-1?nQ(this.c,a|(this.c.__eventBits||0)):this.J==-1?jQ(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=RZ.prototype=GZ.prototype;_=v2.prototype=s2.prototype=new VW;_.gC=function w2(){return Xw};_.Pb=function x2(a){var b;switch(lR(a.type)){case 8:case 4096:case 128:this.a=this.I?(ocb(),this.c.checked?ncb:mcb):(ocb(),this.c.defaultChecked?ncb:mcb);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(ocb(),this.c.checked?ncb:mcb):(ocb(),this.c.defaultChecked?ncb:mcb);return}cG(this,a);dn(this,this.a,this.I?(ocb(),this.c.checked?ncb:mcb):(ocb(),this.c.defaultChecked?ncb:mcb));return;}cG(this,a)};_.Tb=function y2(a){u2(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=Fbb.prototype;_.fb=function Jbb(){M9(this.b,Bbb(this.a))};var Ov=Acb(YIb,cQb),Xw=Acb(YIb,dQb);oob(Dd)(1);