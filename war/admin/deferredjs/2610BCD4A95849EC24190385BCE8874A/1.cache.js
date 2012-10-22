function e3(){}
function Dab(){}
function f3(){f3=xwb;i6()}
function Eab(){Eab=xwb;f3();i6()}
function Bg(b,a){b.checked=a}
function Dg(b,a){b.htmlFor=a}
function Cg(b,a){b.defaultChecked=a}
function VN(a,b){dO(a.N,b,true)}
function Tf(a,b){return a.createElement(o5b+b+p5b)}
function a6(a){W5();_5.call(this);j6(this.a,a,true)}
function g3(a,b){vcb(a.N,Vwb,b);vcb(a.d,b,yMb);vcb(a.c,b,uMb);Dg(a.d,a.c.id)}
function _N(a){var b,c;b=Ff(a,JMb);c=Llb(b,Zlb(32));if(c>=0){return b.substr(0,c-0)}return b}
function dn(a,b,c){var d;if(!!_m&&b!=c&&(!b||!(!!c&&c.a==b.a))){d=new an(c);!!a.K&&jn(a.K,d)}}
function Gab(a,b){Eab();i3.call(this,Tf($doc,a));this.N[JMb]=q5b;Fab(this,1);Fab(this,8);Fab(this,4096);Fab(this,128);j6(this.b,b,false)}
function Xgb(a){var b,c;b=by(a.a.qd(r5b),105);if(b==null){c=Ux(SI,{93:1,102:1,105:1},1,[s5b,t5b,u5b,v5b]);a.a.rd(r5b,c);return c}else{return b}}
function Ygb(a){var b,c;b=by(a.a.qd(w5b),105);if(b==null){c=Ux(SI,{93:1,102:1,105:1},1,[x5b,y5b,z5b,A5b,B5b,C5b]);a.a.rd(w5b,c);return c}else{return b}}
function h3(a,b){var c;!b&&(b=(zkb(),xkb));c=a.I?(zkb(),a.c.checked?ykb:xkb):(zkb(),a.c.defaultChecked?ykb:xkb);Bg(a.c,b.a);Cg(a.c,b.a);if(!!c&&c.a==b.a){return}}
function Fab(a,b){if(a.J==-1){yY(a.c,b|(a.c.__eventBits||0));yY(a.d,b|(a.d.__eventBits||0))}else{a.J==-1?yY(a.c,b|(a.c.__eventBits||0)):a.J==-1?uY(a.N,b|(a.N.__eventBits||0)):(a.J|=b)}}
function i3(a){f3();var b;Z2.call(this,Rf($doc,EQb));this.c=a;this.d=Rf($doc,yMb);vf(this.N,this.c);vf(this.N,this.d);b=jg($doc);this.c[eRb]=b;Dg(this.d,b);this.b=new k6(this.d);!!this.c&&(this.c.tabIndex=0,undefined)}
function Mjb(a){var b,c,d,e,f,g,i;i=new Tcb;Scb(i,new a6(D5b));c=Xgb(a.a);for(d=0;d<c.length;++d){b=c[d];e=new Gab(kTb,b);g3(e,E5b+b);d==2&&(e.c.disabled=true,VN(e,_N(e.N)+F5b));Scb(i,e)}Scb(i,new a6(G5b));g=Ygb(a.a);for(d=0;d<g.length;++d){f=g[d];e=new Gab(H5b,f);g3(e,I5b+Olb(f,vxb,Vwb));d==2&&h3(e,(zkb(),zkb(),ykb));Scb(i,e)}return i}
var p5b="'>",F5b='-disabled',o5b="<INPUT type='RADIO' name='",D5b='<b>Select your favorite color:<\/b>',G5b='<br><b>Select your favorite sport:<\/b>',x5b='Baseball',y5b='Basketball',J5b='CheckBox',z5b='Football',A5b='Hockey',K5b='RadioButton',B5b='Soccer',C5b='Water Polo',s5b='blue',E5b='cwRadioButton-color-',I5b='cwRadioButton-sport-',r5b='cwRadioButtonColors',w5b='cwRadioButtonSports',v5b='green',q5b='gwt-RadioButton',t5b='red',H5b='sport',u5b='yellow';_=e3.prototype=new Y2;_.gC=function j3(){return ZD};_.Hc=function k3(){return this.c.tabIndex};_.dc=function l3(){this.c.__listener=this};_.ec=function m3(){this.c.__listener=null;h3(this,this.I?(zkb(),this.c.checked?ykb:xkb):(zkb(),this.c.defaultChecked?ykb:xkb))};_.Ic=function n3(a){!!this.c&&Kf(this.c,a)};_.fc=function o3(a){this.J==-1?yY(this.c,a|(this.c.__eventBits||0)):this.J==-1?uY(this.N,a|(this.N.__eventBits||0)):(this.J|=a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.b=null;_.c=null;_.d=null;_=a6.prototype=R5.prototype;_=Gab.prototype=Dab.prototype=new e3;_.gC=function Hab(){return gF};_.bc=function Iab(a){var b;switch(wZ(a.type)){case 8:case 4096:case 128:this.a=this.I?(zkb(),this.c.checked?ykb:xkb):(zkb(),this.c.defaultChecked?ykb:xkb);break;case 1:b=a.srcElement;if(Lf(b)&&Zf(this.d,b)){this.a=this.I?(zkb(),this.c.checked?ykb:xkb):(zkb(),this.c.defaultChecked?ykb:xkb);return}nO(this,a);dn(this,this.a,this.I?(zkb(),this.c.checked?ykb:xkb):(zkb(),this.c.defaultChecked?ykb:xkb));return;}nO(this,a)};_.fc=function Jab(a){Fab(this,a)};_.cM={32:1,38:1,64:1,71:1,74:1,77:1,79:1};_.a=null;_=Qjb.prototype;_.fb=function Ujb(){Xhb(this.b,Mjb(this.a))};var ZD=Lkb(D$b,J5b),gF=Lkb(D$b,K5b);zwb(Dd)(1);