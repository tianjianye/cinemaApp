(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{r4go:function(i,t,o){"use strict";o.r(t),o.d(t,"FilmPageModule",function(){return u});var n=o("ofXK"),b=o("3Pt+"),r=o("TEn/"),e=o("tyNb"),c=o("fXoL"),s=o("jK6o"),l=o("H3s2");let d=(()=>{class i{constructor(){}getShowingById(i){return this.showing=l.c.filter(t=>t.id===i)[0],this.showing}getAllShowings(){return l.c}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=c.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function a(i,t){if(1&i&&(c.Mb(0,"ion-row"),c.Kb(1,"ion-col",9),c.Mb(2,"ion-col",10),c.Mb(3,"ion-card-subtitle"),c.ic(4),c.Lb(),c.Lb(),c.Lb()),2&i){const i=t.$implicit;c.zb(4),c.lc("",i.address," ",i.date," ",i.time,"")}}const f=[{path:"",component:(()=>{class i{constructor(i,t,o,n){this.filmService=i,this.showingService=t,this.route=o,this.router=n,this.film={},this.showings=[]}ngOnInit(){this.id=parseInt(this.route.snapshot.params.id),this.film=this.filmService.getFilmById(this.id);const i=this.showingService.getAllShowings();this.showings=i.filter(i=>i.fid===this.id)}}return i.\u0275fac=function(t){return new(t||i)(c.Jb(s.a),c.Jb(d),c.Jb(e.a),c.Jb(e.g))},i.\u0275cmp=c.Db({type:i,selectors:[["app-film"]],decls:43,vars:7,consts:[["slot","start"],["defaultHref","/tabs/home"],["fixed",""],["size-md","4","size-xs","12"],[3,"src"],["size-md","8","size-xs","12"],[1,"ion-text-center"],["size","12"],[4,"ngFor","ngForOf"],["size","3"],["size-md","9","size-xs","12"]],template:function(i,t){1&i&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",0),c.Kb(3,"ion-back-button",1),c.Lb(),c.Mb(4,"ion-title"),c.ic(5),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content"),c.Mb(7,"ion-grid",2),c.Mb(8,"ion-row"),c.Mb(9,"ion-col"),c.Mb(10,"ion-card"),c.Mb(11,"ion-card-content"),c.Mb(12,"ion-grid",2),c.Mb(13,"ion-row"),c.Mb(14,"ion-col",3),c.Kb(15,"ion-img",4),c.Lb(),c.Mb(16,"ion-col",5),c.Mb(17,"ion-card-title",6),c.ic(18),c.Lb(),c.Kb(19,"br"),c.Mb(20,"ion-card-title"),c.ic(21,"Overview"),c.Lb(),c.Mb(22,"ion-card-subtitle"),c.ic(23),c.Lb(),c.Kb(24,"br"),c.Mb(25,"ion-card-title"),c.ic(26,"Directors"),c.Lb(),c.Mb(27,"ion-card-subtitle"),c.ic(28),c.Lb(),c.Kb(29,"br"),c.Mb(30,"ion-card-title"),c.ic(31,"Producer"),c.Lb(),c.Mb(32,"ion-card-subtitle"),c.ic(33),c.Lb(),c.Kb(34,"br"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(35,"ion-card"),c.Mb(36,"ion-card-content"),c.Mb(37,"ion-grid",2),c.Mb(38,"ion-row"),c.Mb(39,"ion-col",7),c.Mb(40,"ion-card-title"),c.ic(41,"Showings"),c.Lb(),c.Lb(),c.Lb(),c.hc(42,a,5,3,"ion-row",8),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&i&&(c.zb(5),c.jc(t.film.title),c.zb(10),c.cc("src",t.film.img),c.zb(3),c.jc(t.film.title),c.zb(5),c.jc(t.film.overview),c.zb(5),c.jc(t.film.directors),c.zb(5),c.jc(t.film.producer),c.zb(9),c.bc("ngForOf",t.showings))},directives:[r.o,r.D,r.f,r.c,r.d,r.C,r.m,r.n,r.w,r.l,r.g,r.h,r.q,r.k,r.j,n.h],styles:[""]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({imports:[[e.i.forChild(f)],e.i]}),i})(),u=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({imports:[[n.b,b.b,r.E,h]]}),i})()}}]);