function ZX(){}
function w3(){}
function $X(){$X=Sob;b_()}
function x3(){x3=Sob;$X();b_()}
function hg(b,a){b.checked=a}
function jg(b,a){b.htmlFor=a}
function ig(b,a){b.defaultChecked=a}
function uH(a,b){FH(a.N,b,true)}
function V$(a){P$();U$.call(this);c_(this.a,a,true)}
function heb(c,a,b){b=neb(b);return c.replace(RegExp(a,Syb),b)}
function _X(a,b){i5(a.N,apb,b);i5(a.d,b,Rzb);i5(a.c,b,Ozb);jg(a.d,a.c.id)}
function Qf(a,b){var c=a.createElement(UAb);c.type='radio';c.name=b;c.value='on';return c}
function BH(a){var b,c;b=Ff(a,Vzb);c=eeb(b,seb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Km(a,b,c){var d;if(!!Gm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Hm(c);!!a.K&&Pm(a.K,d)}}
function z3(a,b){x3();bY.call(this,Qf($doc,a));this.N[Vzb]='gwt-RadioButton';y3(this,1);y3(this,8);y3(this,4096);y3(this,128);c_(this.b,b,false)}
function neb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Upb+jeb(a,++b)):(a=a.substr(0,b-0)+jeb(a,++b))}return a}
function v9(a){var b,c;b=Ms(a.a.gd(lCb),104);if(b==null){c=Ds(SC,{92:1,101:1,104:1},1,['bleu','rouge','jaune','vert']);a.a.hd(lCb,c);return c}else{return b}}
function w9(a){var b,c;b=Ms(a.a.gd(mCb),104);if(b==null){c=Ds(SC,{92:1,101:1,104:1},1,['Base-ball','Basket-ball','Football','Hockey','Soccer','Water-polo']);a.a.hd(mCb,c);return c}else{return b}}
function aY(a,b){var c;!b&&(b=(Vcb(),Tcb));c=a.I?(Vcb(),a.c.checked?Ucb:Tcb):(Vcb(),a.c.defaultChecked?Ucb:Tcb);hg(a.c,b.a);ig(a.c,b.a);if(!!c&&c.a==b.a){return}}
function y3(a,b){if(a.J==-1){zR(a.c,b|(a.c.__eventBits||0));zR(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?zR(a.c,b|(a.c.__eventBits||0)):a.J==-1?vR(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function bY(a){$X();var b;SX.call(this,$doc.createElement(JAb));this.c=a;this.d=$doc.createElement(Rzb);vf(this.N,this.c);vf(this.N,this.d);b=bg($doc);this.c[QAb]=b;jg(this.d,b);this.b=new d_(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function gcb(a){var b,c,d,e,f,g,i;i=new G5;F5(i,new V$('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=v9(a.a);for(d=0;d<c.length;++d){b=c[d];e=new z3(_Ab,b);_X(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,uH(e,BH(e.N)+'-disabled'));F5(i,e)}F5(i,new V$('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=w9(a.a);for(d=0;d<g.length;++d){f=g[d];e=new z3('sport',f);_X(e,'cwRadioButton-sport-'+heb(f,npb,apb));d==2&&aY(e,(Vcb(),Vcb(),Ucb));F5(i,e)}return i}
var lCb='cwRadioButtonColors',mCb='cwRadioButtonSports';_=ZX.prototype=new RX;_.gC=function cY(){return cy};_.yc=function dY(){return _f(this.c)};_.Zb=function eY(){this.c.__listener=this};_.$b=function fY(){this.c.__listener=null;aY(this,this.I?(Vcb(),this.c.checked?Ucb:Tcb):(Vcb(),this.c.defaultChecked?Ucb:Tcb))};_.zc=function gY(a){!!this.c&&Kf(this.c,a)};_._b=function hY(a){this.J==-1?zR(this.c,a|(this.c.__eventBits||0)):this.J==-1?vR(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=V$.prototype=K$.prototype;_=z3.prototype=w3.prototype=new ZX;_.gC=function A3(){return lz};_.Xb=function B3(a){var b;switch(wS(a.type)){case 8:case 4096:case 128:this.a=this.I?(Vcb(),this.c.checked?Ucb:Tcb):(Vcb(),this.c.defaultChecked?Ucb:Tcb);break;case 1:b=a.target;if(Lf(b)&&Uf(this.d,b)){this.a=this.I?(Vcb(),this.c.checked?Ucb:Tcb):(Vcb(),this.c.defaultChecked?Ucb:Tcb);return}PH(this,a);Km(this,this.a,this.I?(Vcb(),this.c.checked?Ucb:Tcb):(Vcb(),this.c.defaultChecked?Ucb:Tcb));return;}PH(this,a)};_._b=function C3(a){y3(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=kcb.prototype;_.db=function ocb(){rab(this.b,gcb(this.a))};var cy=fdb($Bb,'CheckBox'),lz=fdb($Bb,'RadioButton');Uob(Dd)(1);