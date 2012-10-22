function A0(){}
function Z7(){}
function B0(){B0=ttb;E3()}
function $7(){$7=ttb;B0();E3()}
function Og(b,a){b.checked=a}
function Qg(b,a){b.htmlFor=a}
function Pg(b,a){b.defaultChecked=a}
function bM(a,b){mM(a.O,b,true)}
function w3(a){q3();v3.call(this);F3(this.b,a,true)}
function Kib(c,a,b){b=Qib(b);return c.replace(RegExp(a,EDb),b)}
function C0(a,b){L9(a.O,Dtb,b);L9(a.e,b,BEb);L9(a.d,b,yEb);Qg(a.e,a.d.id)}
function vg(a,b){var c=a.createElement(DFb);c.type='radio';c.name=b;c.value='on';return c}
function iM(a){var b,c;b=lg(a,FEb);c=Hib(b,Vib(32));if(c>=0){return b.substr(0,c-0)}return b}
function rn(a,b,c){var d;if(!!nn&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new on(c);!!a.L&&wn(a.L,d)}}
function a8(a,b){$7();E0.call(this,vg($doc,a));this.O[FEb]='gwt-RadioButton';_7(this,1);_7(this,8);_7(this,4096);_7(this,128);F3(this.c,b,false)}
function Qib(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Fub+Mib(a,++b)):(a=a.substr(0,b-0)+Mib(a,++b))}return a}
function D0(a,b){var c;!b&&(b=(whb(),uhb));c=a.J?(whb(),a.d.checked?vhb:uhb):(whb(),a.d.defaultChecked?vhb:uhb);Og(a.d,b.b);Pg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function _7(a,b){if(a.K==-1){fW(a.d,b|(a.d.__eventBits||0));fW(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?fW(a.d,b|(a.d.__eventBits||0)):a.K==-1?bW(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function Ydb(a){var b,c;b=$w(a.b.od(WGb),104);if(b==null){c=Rw(FH,{92:1,101:1,104:1},1,['\u0627\u0632\u0631\u0642','\u0627\u062D\u0645\u0631','\u0627\u0635\u0641\u0631','\u0627\u062E\u0636\u0631']);a.b.pd(WGb,c);return c}else{return b}}
function E0(a){B0();var b;t0.call(this,$doc.createElement(rFb));this.d=a;this.e=$doc.createElement(BEb);bg(this.O,this.d);bg(this.O,this.e);b=Ig($doc);this.d[yFb]=b;Qg(this.e,b);this.c=new G3(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Zdb(a){var b,c;b=$w(a.b.od(XGb),104);if(b==null){c=Rw(FH,{92:1,101:1,104:1},1,['\u0627\u0644\u0628\u064A\u0633\u0628\u0648\u0644','\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629','\u0627\u0644\u0647\u0648\u0643\u064A','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645','\u0643\u0631\u0629 \u0627\u0644\u0645\u0627\u0621']);a.b.pd(XGb,c);return c}else{return b}}
function Jgb(a){var b,c,d,e,f,g,i;i=new hab;gab(i,new w3('<b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0641\u0636\u0644 \u0644\u062F\u064A\u0643:<\/b>'));c=Ydb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new a8(KFb,b);C0(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,bM(e,iM(e.O)+'-disabled'));gab(i,e)}gab(i,new w3('<br><b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643:<\/b>'));g=Zdb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new a8('sport',f);C0(e,'cwRadioButton-sport-'+Kib(f,Stb,Dtb));d==2&&D0(e,(whb(),whb(),vhb));gab(i,e)}return i}
var WGb='cwRadioButtonColors',XGb='cwRadioButtonSports';_=A0.prototype=new s0;_.gC=function F0(){return RC};_.Gc=function G0(){return Bg(this.d)};_.fc=function H0(){this.d.__listener=this};_.gc=function I0(){this.d.__listener=null;D0(this,this.J?(whb(),this.d.checked?vhb:uhb):(whb(),this.d.defaultChecked?vhb:uhb))};_.Hc=function J0(a){!!this.d&&qg(this.d,a)};_.hc=function K0(a){this.K==-1?fW(this.d,a|(this.d.__eventBits||0)):this.K==-1?bW(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=w3.prototype=l3.prototype;_=a8.prototype=Z7.prototype=new A0;_.gC=function b8(){return $D};_.dc=function c8(a){var b;switch(bX(a.type)){case 8:case 4096:case 128:this.b=this.J?(whb(),this.d.checked?vhb:uhb):(whb(),this.d.defaultChecked?vhb:uhb);break;case 1:b=a.target;if(rg(b)&&Cg(this.e,b)){this.b=this.J?(whb(),this.d.checked?vhb:uhb):(whb(),this.d.defaultChecked?vhb:uhb);return}wM(this,a);rn(this,this.b,this.J?(whb(),this.d.checked?vhb:uhb):(whb(),this.d.defaultChecked?vhb:uhb));return;}wM(this,a)};_.hc=function d8(a){_7(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=Ngb.prototype;_.ib=function Rgb(){Ueb(this.c,Jgb(this.b))};var RC=Ihb(JGb,'CheckBox'),$D=Ihb(JGb,'RadioButton');vtb(Rd)(1);