(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ak9z:function(i,n,o){"use strict";o.r(n),o.d(n,"GroupsPageModule",function(){return p});var e=o("TEn/"),t=o("ofXK"),c=o("3Pt+"),r=o("tyNb"),s=o("fXoL"),b=o("ohih");function u(i,n){if(1&i){const i=s.Nb();s.Mb(0,"ion-col",3),s.Mb(1,"ion-card",4),s.Ub("click",function(){s.ec(i);const o=n.$implicit;return s.Wb().goToGroupPage(o.id)}),s.Mb(2,"ion-card-content"),s.Mb(3,"ion-grid"),s.Mb(4,"ion-row",5),s.Mb(5,"ion-col",6),s.Mb(6,"ion-avatar"),s.Kb(7,"img",7),s.Lb(),s.Lb(),s.Mb(8,"ion-col",8),s.Mb(9,"ion-card-title",9),s.ic(10),s.Lb(),s.Mb(11,"ion-card-subtitle"),s.ic(12),s.Lb(),s.Mb(13,"ion-card-subtitle"),s.ic(14),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&i){const i=n.$implicit;s.zb(7),s.cc("src",i.img,s.fc),s.zb(3),s.jc(i.name),s.zb(2),s.kc("",i.members.length," Members"),s.zb(2),s.kc("",i.events.length," Events")}}const a=[{path:"",component:(()=>{class i{constructor(i,n){this.groupService=i,this.router=n}ionViewDidEnter(){this.groups=this.groupService.getAllGroups()}ngOnInit(){this.ionViewDidEnter()}goToGroupPage(i){this.router.navigate(["group",i])}}return i.\u0275fac=function(n){return new(n||i)(s.Jb(b.a),s.Jb(r.g))},i.\u0275cmp=s.Db({type:i,selectors:[["app-groups"]],decls:6,vars:2,consts:[[3,"fullscreen"],["fixed",""],["size-xs","12",4,"ngFor","ngForOf"],["size-xs","12"],[3,"click"],[1,"ion-align-items-center"],["size-xs","2","size-md","1"],[3,"src"],["size-xs","9","offset-xs","1","size-md","10","offset-md","1"],[1,"ion-text-center"]],template:function(i,n){1&i&&(s.Mb(0,"ion-content",0),s.Mb(1,"ion-list"),s.Mb(2,"ion-grid",1),s.Mb(3,"ion-row"),s.Kb(4,"ion-searchbar"),s.hc(5,u,15,4,"ion-col",2),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&i&&(s.bc("fullscreen",!0),s.zb(5),s.bc("ngForOf",n.groups))},directives:[e.m,e.u,e.n,e.w,e.x,e.G,t.h,e.l,e.g,e.h,e.b,e.k,e.j],styles:[""]}),i})()}];let l=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({imports:[[r.i.forChild(a)],r.i]}),i})(),p=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=s.Hb({type:i}),i.\u0275inj=s.Gb({imports:[[e.E,t.b,c.b,l]]}),i})()}}]);