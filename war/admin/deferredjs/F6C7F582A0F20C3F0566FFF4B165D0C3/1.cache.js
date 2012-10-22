function RU(){}
function o0(){}
function SU(){SU=Klb;VX()}
function p0(){p0=Klb;SU();VX()}
function cg(b,a){b.checked=a}
function eg(b,a){b.htmlFor=a}
function dg(b,a){b.defaultChecked=a}
function vE(a,b){GE(a.O,b,true)}
function NX(a){HX();MX.call(this);WX(this.b,a,true)}
function _ab(c,a,b){b=fbb(b);return c.replace(RegExp(a,_mb),b)}
function TU(a,b){a2(a.O,Ulb,b);a2(a.e,b,_nb);a2(a.d,b,Ynb);eg(a.e,a.d.id)}
function Qf(a,b){var c=a.createElement(cpb);c.type='radio';c.name=b;c.value='on';return c}
function CE(a){var b,c;b=Ff(a,dob);c=Yab(b,kbb(32));if(c>=0){return b.substr(0,c-0)}return b}
function Gm(a,b,c){var d;if(!!Cm&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new Dm(c);!!a.L&&Lm(a.L,d)}}
function r0(a,b){p0();VU.call(this,Qf($doc,a));this.O[dob]='gwt-RadioButton';q0(this,1);q0(this,8);q0(this,4096);q0(this,128);WX(this.c,b,false)}
function UU(a,b){var c;!b&&(b=(N9(),L9));c=a.J?(N9(),a.d.checked?M9:L9):(N9(),a.d.defaultChecked?M9:L9);cg(a.d,b.b);dg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function fbb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+'$'+bbb(a,++b)):(a=a.substr(0,b-0)+bbb(a,++b))}return a}
function n6(a){var b,c;b=hq(a.b.Uc(uqb),103);if(b==null){c=$p(Zz,{91:1,100:1,103:1},1,['blue','red','yellow','green']);a.b.Vc(uqb,c);return c}else{return b}}
function o6(a){var b,c;b=hq(a.b.Uc(vqb),103);if(b==null){c=$p(Zz,{91:1,100:1,103:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.Vc(vqb,c);return c}else{return b}}
function q0(a,b){if(a.K==-1){yO(a.d,b|(a.d.__eventBits||0));yO(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?yO(a.d,b|(a.d.__eventBits||0)):a.K==-1?uO(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function VU(a){SU();var b;KU.call(this,$doc.createElement(Sob));this.d=a;this.e=$doc.createElement(_nb);vf(this.O,this.d);vf(this.O,this.e);b=Wf($doc);this.d[Zob]=b;eg(this.e,b);this.c=new XX(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function $8(a){var b,c,d,e,f,g,i;i=new y2;x2(i,new NX('<b>Select your favorite color:<\/b>'));c=n6(a.b);for(d=0;d<c.length;++d){b=c[d];e=new r0(jpb,b);TU(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,vE(e,CE(e.O)+'-disabled'));x2(i,e)}x2(i,new NX('<br><b>Select your favorite sport:<\/b>'));g=o6(a.b);for(d=0;d<g.length;++d){f=g[d];e=new r0('sport',f);TU(e,'cwRadioButton-sport-'+_ab(f,dmb,Ulb));d==2&&UU(e,(N9(),N9(),M9));x2(i,e)}return i}
var uqb='cwRadioButtonColors',vqb='cwRadioButtonSports';_=RU.prototype=new JU;_.gC=function WU(){return jv};_.lc=function XU(){return this.d.tabIndex};_.Lb=function YU(){this.d.__listener=this};_.Mb=function ZU(){this.d.__listener=null;UU(this,this.J?(N9(),this.d.checked?M9:L9):(N9(),this.d.defaultChecked?M9:L9))};_.mc=function $U(a){!!this.d&&Kf(this.d,a)};_.Nb=function _U(a){this.K==-1?yO(this.d,a|(this.d.__eventBits||0)):this.K==-1?uO(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.c=null;_.d=null;_.e=null;_=NX.prototype=CX.prototype;_=r0.prototype=o0.prototype=new RU;_.gC=function s0(){return sw};_.Jb=function t0(a){var b;switch(uP(a.type)){case 8:case 4096:case 128:this.b=this.J?(N9(),this.d.checked?M9:L9):(N9(),this.d.defaultChecked?M9:L9);break;case 1:b=a.target;if(Lf(b)&&Sf(this.e,b)){this.b=this.J?(N9(),this.d.checked?M9:L9):(N9(),this.d.defaultChecked?M9:L9);return}QE(this,a);Gm(this,this.b,this.J?(N9(),this.d.checked?M9:L9):(N9(),this.d.defaultChecked?M9:L9));return;}QE(this,a)};_.Nb=function u0(a){q0(this,a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.b=null;_=c9.prototype;_.eb=function g9(){j7(this.c,$8(this.b))};var jv=Z9(hqb,'CheckBox'),sw=Z9(hqb,'RadioButton');Mlb(Dd)(1);