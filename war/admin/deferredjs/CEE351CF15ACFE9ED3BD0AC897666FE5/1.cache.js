function G_(){}
function d7(){}
function H_(){H_=zsb;K2()}
function e7(){e7=zsb;H_();K2()}
function eg(b,a){b.htmlFor=a}
function cg(b,a){b.checked=a}
function dg(b,a){b.defaultChecked=a}
function kL(a,b){vL(a.O,b,true)}
function C2(a){w2();B2.call(this);L2(this.b,a,true)}
function Qhb(c,a,b){b=Whb(b);return c.replace(RegExp(a,ECb),b)}
function I_(a,b){R8(a.O,Jsb,b);R8(a.e,b,DDb);R8(a.d,b,ADb);eg(a.e,a.d.id)}
function Qf(a,b){var c=a.createElement(FEb);c.type='radio';c.name=b;c.value='on';return c}
function rL(a){var b,c;b=Ff(a,HDb);c=Nhb(b,_hb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Gm(a,b,c){var d;if(!!Cm&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new Dm(c);!!a.L&&Lm(a.L,d)}}
function g7(a,b){e7();K_.call(this,Qf($doc,a));this.O[HDb]='gwt-RadioButton';f7(this,1);f7(this,8);f7(this,4096);f7(this,128);L2(this.c,b,false)}
function Whb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Etb+Shb(a,++b)):(a=a.substr(0,b-0)+Shb(a,++b))}return a}
function J_(a,b){var c;!b&&(b=(Cgb(),Agb));c=a.J?(Cgb(),a.d.checked?Bgb:Agb):(Cgb(),a.d.defaultChecked?Bgb:Agb);cg(a.d,b.b);dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function f7(a,b){if(a.K==-1){nV(a.d,b|(a.d.__eventBits||0));nV(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?nV(a.d,b|(a.d.__eventBits||0)):a.K==-1?jV(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function cdb(a){var b,c;b=ow(a.b.fd(YFb),104);if(b==null){c=fw(OG,{92:1,101:1,104:1},1,['\u0627\u0632\u0631\u0642','\u0627\u062D\u0645\u0631','\u0627\u0635\u0641\u0631','\u0627\u062E\u0636\u0631']);a.b.gd(YFb,c);return c}else{return b}}
function K_(a){H_();var b;z_.call(this,$doc.createElement(tEb));this.d=a;this.e=$doc.createElement(DDb);vf(this.O,this.d);vf(this.O,this.e);b=Wf($doc);this.d[AEb]=b;eg(this.e,b);this.c=new M2(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function ddb(a){var b,c;b=ow(a.b.fd(ZFb),104);if(b==null){c=fw(OG,{92:1,101:1,104:1},1,['\u0627\u0644\u0628\u064A\u0633\u0628\u0648\u0644','\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0627\u0645\u0631\u064A\u0643\u064A\u0629','\u0627\u0644\u0647\u0648\u0643\u064A','\u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645','\u0643\u0631\u0629 \u0627\u0644\u0645\u0627\u0621']);a.b.gd(ZFb,c);return c}else{return b}}
function Pfb(a){var b,c,d,e,f,g,i;i=new n9;m9(i,new C2('<b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0645\u0641\u0636\u0644 \u0644\u062F\u064A\u0643:<\/b>'));c=cdb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new g7(MEb,b);I_(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,kL(e,rL(e.O)+'-disabled'));m9(i,e)}m9(i,new C2('<br><b>\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643:<\/b>'));g=ddb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new g7('sport',f);I_(e,'cwRadioButton-sport-'+Qhb(f,Usb,Jsb));d==2&&J_(e,(Cgb(),Cgb(),Bgb));m9(i,e)}return i}
var YFb='cwRadioButtonColors',ZFb='cwRadioButtonSports';_=G_.prototype=new y_;_.gC=function L_(){return $B};_.yc=function M_(){return this.d.tabIndex};_.Zb=function N_(){this.d.__listener=this};_.$b=function O_(){this.d.__listener=null;J_(this,this.J?(Cgb(),this.d.checked?Bgb:Agb):(Cgb(),this.d.defaultChecked?Bgb:Agb))};_.zc=function P_(a){!!this.d&&Kf(this.d,a)};_._b=function Q_(a){this.K==-1?nV(this.d,a|(this.d.__eventBits||0)):this.K==-1?jV(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=C2.prototype=r2.prototype;_=g7.prototype=d7.prototype=new G_;_.gC=function h7(){return hD};_.Xb=function i7(a){var b;switch(jW(a.type)){case 8:case 4096:case 128:this.b=this.J?(Cgb(),this.d.checked?Bgb:Agb):(Cgb(),this.d.defaultChecked?Bgb:Agb);break;case 1:b=a.target;if(Lf(b)&&Sf(this.e,b)){this.b=this.J?(Cgb(),this.d.checked?Bgb:Agb):(Cgb(),this.d.defaultChecked?Bgb:Agb);return}FL(this,a);Gm(this,this.b,this.J?(Cgb(),this.d.checked?Bgb:Agb):(Cgb(),this.d.defaultChecked?Bgb:Agb));return;}FL(this,a)};_._b=function j7(a){f7(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=Tfb.prototype;_.eb=function Xfb(){$db(this.c,Pfb(this.b))};var $B=Ogb(LFb,'CheckBox'),hD=Ogb(LFb,'RadioButton');Bsb(Dd)(1);