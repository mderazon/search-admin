function LV(){}
function i1(){}
function MV(){MV=Emb;PY()}
function j1(){j1=Emb;MV();PY()}
function Og(b,a){b.checked=a}
function Qg(b,a){b.htmlFor=a}
function Pg(b,a){b.defaultChecked=a}
function mF(a,b){xF(a.O,b,true)}
function HY(a){BY();GY.call(this);QY(this.b,a,true)}
function Vbb(c,a,b){b=_bb(b);return c.replace(RegExp(a,_nb),b)}
function NV(a,b){W2(a.O,Omb,b);W2(a.e,b,Zob);W2(a.d,b,Wob);Qg(a.e,a.d.id)}
function vg(a,b){var c=a.createElement(aqb);c.type='radio';c.name=b;c.value='on';return c}
function tF(a){var b,c;b=lg(a,bpb);c=Sbb(b,ecb(32));if(c>=0){return b.substr(0,c-0)}return b}
function rn(a,b,c){var d;if(!!nn&&b!=c&&(!b||!(!!c&&c.b==b.b))){d=new on(c);!!a.L&&wn(a.L,d)}}
function l1(a,b){j1();PV.call(this,vg($doc,a));this.O[bpb]='gwt-RadioButton';k1(this,1);k1(this,8);k1(this,4096);k1(this,128);QY(this.c,b,false)}
function _bb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b-0)+'$'+Xbb(a,++b)):(a=a.substr(0,b-0)+Xbb(a,++b))}return a}
function h7(a){var b,c;b=Tq(a.b.ad(srb),103);if(b==null){c=Kq(QA,{91:1,100:1,103:1},1,['blue','red','yellow','green']);a.b.bd(srb,c);return c}else{return b}}
function i7(a){var b,c;b=Tq(a.b.ad(trb),103);if(b==null){c=Kq(QA,{91:1,100:1,103:1},1,['Baseball','Basketball','Football','Hockey','Soccer','Water Polo']);a.b.bd(trb,c);return c}else{return b}}
function OV(a,b){var c;!b&&(b=(Hab(),Fab));c=a.J?(Hab(),a.d.checked?Gab:Fab):(Hab(),a.d.defaultChecked?Gab:Fab);Og(a.d,b.b);Pg(a.d,b.b);if(!!c&&c.b==b.b){return}}
function k1(a,b){if(a.K==-1){qP(a.d,b|(a.d.__eventBits||0));qP(a.e,b|(a.e.__eventBits||0))}else{a.K==-1?qP(a.d,b|(a.d.__eventBits||0)):a.K==-1?mP(a.O,b|(a.O.__eventBits||0)):(a.K|=b)}}
function PV(a){MV();var b;EV.call(this,$doc.createElement(Qpb));this.d=a;this.e=$doc.createElement(Zob);bg(this.O,this.d);bg(this.O,this.e);b=Ig($doc);this.d[Xpb]=b;Qg(this.e,b);this.c=new RY(this.e);!!this.d&&(this.d.tabIndex=0,undefined)}
function U9(a){var b,c,d,e,f,g,i;i=new s3;r3(i,new HY('<b>Select your favorite color:<\/b>'));c=h7(a.b);for(d=0;d<c.length;++d){b=c[d];e=new l1(hqb,b);NV(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,mF(e,tF(e.O)+'-disabled'));r3(i,e)}r3(i,new HY('<br><b>Select your favorite sport:<\/b>'));g=i7(a.b);for(d=0;d<g.length;++d){f=g[d];e=new l1('sport',f);NV(e,'cwRadioButton-sport-'+Vbb(f,bnb,Omb));d==2&&OV(e,(Hab(),Hab(),Gab));r3(i,e)}return i}
var srb='cwRadioButtonColors',trb='cwRadioButtonSports';_=LV.prototype=new DV;_.gC=function QV(){return aw};_.tc=function RV(){return Bg(this.d)};_.Tb=function SV(){this.d.__listener=this};_.Ub=function TV(){this.d.__listener=null;OV(this,this.J?(Hab(),this.d.checked?Gab:Fab):(Hab(),this.d.defaultChecked?Gab:Fab))};_.uc=function UV(a){!!this.d&&qg(this.d,a)};_.Vb=function VV(a){this.K==-1?qP(this.d,a|(this.d.__eventBits||0)):this.K==-1?mP(this.O,a|(this.O.__eventBits||0)):(this.K|=a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.c=null;_.d=null;_.e=null;_=HY.prototype=wY.prototype;_=l1.prototype=i1.prototype=new LV;_.gC=function m1(){return jx};_.Rb=function n1(a){var b;switch(mQ(a.type)){case 8:case 4096:case 128:this.b=this.J?(Hab(),this.d.checked?Gab:Fab):(Hab(),this.d.defaultChecked?Gab:Fab);break;case 1:b=a.target;if(rg(b)&&Cg(this.e,b)){this.b=this.J?(Hab(),this.d.checked?Gab:Fab):(Hab(),this.d.defaultChecked?Gab:Fab);return}HF(this,a);rn(this,this.b,this.J?(Hab(),this.d.checked?Gab:Fab):(Hab(),this.d.defaultChecked?Gab:Fab));return;}HF(this,a)};_.Vb=function o1(a){k1(this,a)};_.cM={32:1,38:1,62:1,69:1,72:1,75:1,77:1};_.b=null;_=Y9.prototype;_.ib=function aab(){d8(this.c,U9(this.b))};var aw=Tab(frb,'CheckBox'),jx=Tab(frb,'RadioButton');Gmb(Rd)(1);