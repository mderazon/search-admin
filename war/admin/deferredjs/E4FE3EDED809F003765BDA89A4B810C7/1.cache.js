function EX(){}
function b3(){}
function FX(){FX=xob;I$()}
function c3(){c3=xob;FX();I$()}
function cg(b,a){b.checked=a}
function eg(b,a){b.htmlFor=a}
function dg(b,a){b.defaultChecked=a}
function iH(a,b){tH(a.O,b,true)}
function A$(a){u$();z$.call(this);J$(this.b,a,true)}
function Odb(c,a,b){b=Udb(b);return c.replace(RegExp(a,Ayb),b)}
function GX(a,b){P4(a.O,Hob,b);P4(a.e,b,zzb);P4(a.d,b,wzb);eg(a.e,a.d.id)}
function Qf(a,b){var c=a.createElement(BAb);c.type='radio';c.name=b;c.value='on';return c}
function pH(a){var b,c;b=Ff(a,Dzb);c=Ldb(b,Zdb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Gm(a,b,c){var d;if(!!Cm&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new Dm(c);!!a.L&&Lm(a.L,d)}}
function e3(a,b){c3();IX.call(this,Qf($doc,a));this.O[Dzb]='gwt-RadioButton';d3(this,1);d3(this,8);d3(this,4096);d3(this,128);J$(this.c,b,false)}
function Udb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+Cpb+Qdb(a,++b)):(a=a.substr(0,b-0)+Qdb(a,++b))}return a}
function a9(a){var b,c;b=Is(a.b.fd(UBb),104);if(b==null){c=zs(MC,{92:1,101:1,104:1},1,['bleu','rouge','jaune','vert']);a.b.gd(UBb,c);return c}else{return b}}
function b9(a){var b,c;b=Is(a.b.fd(VBb),104);if(b==null){c=zs(MC,{92:1,101:1,104:1},1,['Base-ball','Basket-ball','Football','Hockey','Soccer','Water-polo']);a.b.gd(VBb,c);return c}else{return b}}
function HX(a,b){var c;!b&&(b=(Acb(),ycb));c=a.J?(Acb(),a.d.checked?zcb:ycb):(Acb(),a.d.defaultChecked?zcb:ycb);cg(a.d,b.b);dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function d3(a,b){if(a.K==-1){lR(a.d,b|(a.d.__eventBits||0));lR(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?lR(a.d,b|(a.d.__eventBits||0)):a.K==-1?hR(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function IX(a){FX();var b;xX.call(this,$doc.createElement(pAb));this.d=a;this.e=$doc.createElement(zzb);vf(this.O,this.d);vf(this.O,this.e);b=Wf($doc);this.d[wAb]=b;eg(this.e,b);this.c=new K$(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function Nbb(a){var b,c,d,e,f,g,i;i=new l5;k5(i,new A$('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));c=a9(a.b);for(d=0;d<c.length;++d){b=c[d];e=new e3(IAb,b);GX(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,iH(e,pH(e.O)+'-disabled'));k5(i,e)}k5(i,new A$('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));g=b9(a.b);for(d=0;d<g.length;++d){f=g[d];e=new e3('sport',f);GX(e,'cwRadioButton-sport-'+Odb(f,Sob,Hob));d==2&&HX(e,(Acb(),Acb(),zcb));k5(i,e)}return i}
var UBb='cwRadioButtonColors',VBb='cwRadioButtonSports';_=EX.prototype=new wX;_.gC=function JX(){return Yx};_.yc=function KX(){return this.d.tabIndex};_.Zb=function LX(){this.d.__listener=this};_.$b=function MX(){this.d.__listener=null;HX(this,this.J?(Acb(),this.d.checked?zcb:ycb):(Acb(),this.d.defaultChecked?zcb:ycb))};_.zc=function NX(a){!!this.d&&Kf(this.d,a)};_._b=function OX(a){this.K==-1?lR(this.d,a|(this.d.__eventBits||0)):this.K==-1?hR(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.c=null;_.d=null;_.e=null;_=A$.prototype=p$.prototype;_=e3.prototype=b3.prototype=new EX;_.gC=function f3(){return fz};_.Xb=function g3(a){var b;switch(hS(a.type)){case 8:case 4096:case 128:this.b=this.J?(Acb(),this.d.checked?zcb:ycb):(Acb(),this.d.defaultChecked?zcb:ycb);break;case 1:b=a.target;if(Lf(b)&&Sf(this.e,b)){this.b=this.J?(Acb(),this.d.checked?zcb:ycb):(Acb(),this.d.defaultChecked?zcb:ycb);return}DH(this,a);Gm(this,this.b,this.J?(Acb(),this.d.checked?zcb:ycb):(Acb(),this.d.defaultChecked?zcb:ycb));return;}DH(this,a)};_._b=function h3(a){d3(this,a)};_.cM={32:1,38:1,63:1,70:1,73:1,76:1,78:1};_.b=null;_=Rbb.prototype;_.eb=function Vbb(){Y9(this.c,Nbb(this.b))};var Yx=Mcb(HBb,'CheckBox'),fz=Mcb(HBb,'RadioButton');zob(Dd)(1);