function lY(){}
function K3(){}
function mY(){mY=epb;p_()}
function L3(){L3=epb;mY();p_()}
function og(b,a){b.checked=a}
function qg(b,a){b.htmlFor=a}
function pg(b,a){b.defaultChecked=a}
function BH(a,b){LH(a.N,b,true)}
function h_(a){b_();g_.call(this);q_(this.a,a,true)}
function nY(a,b){w5(a.N,opb,b);w5(a.d,b,fAb);w5(a.c,b,cAb);qg(a.d,a.c.id)}
function Tf(a,b){return a.createElement("<INPUT type='RADIO' name='"+b+"'>")}
function Rm(a,b,c){var d;if(!!Nm&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new Om(c);!!a.K&&Wm(a.K,d)}}
function HH(a){var b,c;b=Ff(a,iAb);c=seb(b,Geb(32));if(c>=0){return b.substr(0,c-0)}return b}
function N3(a,b){L3();pY.call(this,Tf($doc,a));this.N[iAb]='gwt-RadioButton';M3(this,1);M3(this,8);M3(this,4096);M3(this,128);q_(this.b,b,false)}
function J9(a){var b,c;b=Ts(a.a.gd(wCb),104);if(b==null){c=Ks(ZC,{92:1,101:1,104:1},1,['bleu','rouge','jaune','vert']);a.a.hd(wCb,c);return c}else{return b}}
function K9(a){var b,c;b=Ts(a.a.gd(xCb),104);if(b==null){c=Ks(ZC,{92:1,101:1,104:1},1,['Base-ball','Basket-ball','Football','Hockey','Soccer','Water-polo']);a.a.hd(xCb,c);return c}else{return b}}
function oY(a,b){var c;!b&&(b=(hdb(),fdb));c=a.I?(hdb(),a.c.checked?gdb:fdb):(hdb(),a.c.defaultChecked?gdb:fdb);og(a.c,b.a);pg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function M3(a,b){if(a.J==-1){TR(a.c,b|(a.c.__eventBits||0));TR(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?TR(a.c,b|(a.c.__eventBits||0)):a.J==-1?PR(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function pY(a){mY();var b;eY.call(this,Rf($doc,VAb));this.c=a;this.d=Rf($doc,fAb);vf(this.N,this.c);vf(this.N,this.d);b=eg($doc);this.c[aBb]=b;qg(this.d,b);this.b=new r_(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function ucb(a){var b,c,d,e,f,g,i;i=new U5;T5(i,new h_('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=J9(a.a);for(d=0;d<c.length;++d){b=c[d];e=new N3(kBb,b);nY(e,'cwRadioButton-color-'+b);d==2&&(e.c.disabled=true,BH(e,HH(e.N)+'-disabled'));T5(i,e)}T5(i,new h_('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=K9(a.a);for(d=0;d<g.length;++d){f=g[d];e=new N3('sport',f);nY(e,'cwRadioButton-sport-'+veb(f,Bpb,opb));d==2&&oY(e,(hdb(),hdb(),gdb));T5(i,e)}return i}
var wCb='cwRadioButtonColors',xCb='cwRadioButtonSports';_=lY.prototype=new dY;_.gC=function qY(){return jy};_.yc=function rY(){return this.c.tabIndex};_.Zb=function sY(){this.c.__listener=this};_.$b=function tY(){this.c.__listener=null;oY(this,this.I?(hdb(),this.c.checked?gdb:fdb):(hdb(),this.c.defaultChecked?gdb:fdb))};_.zc=function uY(a){!!this.c&&Kf(this.c,a)};_._b=function vY(a){this.J==-1?TR(this.c,a|(this.c.__eventBits||0)):this.J==-1?PR(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_.c=null;_.d=null;_=h_.prototype=Y$.prototype;_=N3.prototype=K3.prototype=new lY;_.gC=function O3(){return sz};_.Xb=function P3(a){var b;switch(QS(a.type)){case 8:case 4096:case 128:this.a=this.I?(hdb(),this.c.checked?gdb:fdb):(hdb(),this.c.defaultChecked?gdb:fdb);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(hdb(),this.c.checked?gdb:fdb):(hdb(),this.c.defaultChecked?gdb:fdb);return}VH(this,a);Rm(this,this.a,this.I?(hdb(),this.c.checked?gdb:fdb):(hdb(),this.c.defaultChecked?gdb:fdb));return;}VH(this,a)};_._b=function Q3(a){M3(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.a=null;_=ycb.prototype;_.db=function Ccb(){Fab(this.b,ucb(this.a))};var jy=tdb(jCb,'CheckBox'),sz=tdb(jCb,'RadioButton');gpb(Dd)(1);