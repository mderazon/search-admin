function n0(){}
function M7(){}
function o0(){o0=gtb;r3()}
function N7(){N7=gtb;o0();r3()}
function DL(a,b){NL(a.N,b,true)}
function og(b,a){b.checked=a}
function qg(b,a){b.htmlFor=a}
function pg(b,a){b.defaultChecked=a}
function j3(a){d3();i3.call(this);s3(this.a,a,true)}
function p0(a,b){y9(a.N,qtb,b);y9(a.d,b,jEb);y9(a.c,b,gEb);qg(a.d,a.c.id)}
function Tf(a,b){return a.createElement("<INPUT type='RADIO' name='"+b+"'>")}
function Rm(a,b,c){var d;if(!!Nm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Om(c);!!a.K&&Wm(a.K,d)}}
function JL(a){var b,c;b=Ff(a,mEb);c=uib(b,Iib(32));if(c>=0){return b.substr(0,c-0)}return b}
function P7(a,b){N7();r0.call(this,Tf($doc,a));this.N[mEb]='gwt-RadioButton';O7(this,1);O7(this,8);O7(this,4096);O7(this,128);s3(this.b,b,false)}
function q0(a,b){var c;!b&&(b=(jhb(),hhb));c=a.I?(jhb(),a.c.checked?ihb:hhb):(jhb(),a.c.defaultChecked?ihb:hhb);og(a.c,b.a);pg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function O7(a,b){if(a.J==-1){VV(a.c,b|(a.c.__eventBits||0));VV(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?VV(a.c,b|(a.c.__eventBits||0)):a.J==-1?RV(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function r0(a){o0();var b;g0.call(this,Rf($doc,ZEb));this.c=a;this.d=Rf($doc,jEb);vf(this.N,this.c);vf(this.N,this.d);b=eg($doc);this.c[eFb]=b;qg(this.d,b);this.b=new t3(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function Ldb(a){var b,c;b=zw(a.a.gd(AGb),104);if(b==null){c=qw(_G,{92:1,101:1,104:1},1,['\u0627\u0632\u0631\u0642','\u0627\u062D\u0645\u0631','\u0627\u0635\u0641\u0631','\u0627\u062E\u0636\u0631']);a.a.hd(AGb,c);return c}else{return b}}
function Mdb(a){var b,c;b=zw(a.a.gd(BGb),104);if(b==null){c=qw(_G,{92:1,101:1,104:1},1,['\u0627\u0644\u0628\u064A\u0633\u0628\u0648\u0644','\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629','\u0627\u0644\u0647\u0648\u0643\u064A','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645','\u0643\u0631\u0629 \u0627\u0644\u0645\u0627\u0621']);a.a.hd(BGb,c);return c}else{return b}}
function wgb(a){var b,c,d,e,f,g,i;i=new W9;V9(i,new j3('<b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0641\u0636\u0644 \u0644\u062F\u064A\u0643:<\/b>'));c=Ldb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new P7(oFb,b);p0(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,DL(e,JL(e.N)+'-disabled'));V9(i,e)}V9(i,new j3('<br><b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643:<\/b>'));g=Mdb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new P7('sport',f);p0(e,'cwRadioButton-sport-'+xib(f,Dtb,qtb));d==2&&q0(e,(jhb(),jhb(),ihb));V9(i,e)}return i}
var AGb='cwRadioButtonColors',BGb='cwRadioButtonSports';_=n0.prototype=new f0;_.gC=function s0(){return lC};_.yc=function t0(){return this.c.tabIndex};_.Zb=function u0(){this.c.__listener=this};_.$b=function v0(){this.c.__listener=null;q0(this,this.I?(jhb(),this.c.checked?ihb:hhb):(jhb(),this.c.defaultChecked?ihb:hhb))};_.zc=function w0(a){!!this.c&&Kf(this.c,a)};_._b=function x0(a){this.J==-1?VV(this.c,a|(this.c.__eventBits||0)):this.J==-1?RV(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=j3.prototype=$2.prototype;_=P7.prototype=M7.prototype=new n0;_.gC=function Q7(){return uD};_.Xb=function R7(a){var b;switch(SW(a.type)){case 8:case 4096:case 128:this.a=this.I?(jhb(),this.c.checked?ihb:hhb):(jhb(),this.c.defaultChecked?ihb:hhb);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(jhb(),this.c.checked?ihb:hhb):(jhb(),this.c.defaultChecked?ihb:hhb);return}XL(this,a);Rm(this,this.a,this.I?(jhb(),this.c.checked?ihb:hhb):(jhb(),this.c.defaultChecked?ihb:hhb));return;}XL(this,a)};_._b=function S7(a){O7(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=Agb.prototype;_.db=function Egb(){Heb(this.b,wgb(this.a))};var lC=vhb(nGb,'CheckBox'),uD=vhb(nGb,'RadioButton');itb(Dd)(1);