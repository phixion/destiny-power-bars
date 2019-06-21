(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={membershipSelect:"MembershipSelect_membershipSelect__3GbZz",membership:"MembershipSelect_membership__3vKKK",platform_blizzard:"MembershipSelect_platform_blizzard__1zLDb",platform_psn:"MembershipSelect_platform_psn__2ASN8",platform_xbox:"MembershipSelect_platform_xbox__1EgLN"}},2:function(e,t,a){e.exports={characterDisplay:"CharacterDisplay_characterDisplay__20O9A",header:"CharacterDisplay_header__2fx5d",emblemBackground:"CharacterDisplay_emblemBackground__2pAjE",name:"CharacterDisplay_name__2j8PA",power:"CharacterDisplay_power__1p583",powerBars:"CharacterDisplay_powerBars__3t0B5",powerRange:"CharacterDisplay_powerRange__1d86z",rangeLine:"CharacterDisplay_rangeLine__358zP",powerLabel:"CharacterDisplay_powerLabel__3EDmr",indicator:"CharacterDisplay_indicator__3CaQK",barWrapper:"CharacterDisplay_barWrapper__2x1f3",iconWrapper:"CharacterDisplay_iconWrapper__3hOkU",icon:"CharacterDisplay_icon__1e0L7",barContainer:"CharacterDisplay_barContainer__1OnNQ",barLine:"CharacterDisplay_barLine__2qulu",filledBar:"CharacterDisplay_filledBar__3UpB_"}},20:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n,r,c,i,s=a(0),o=a.n(s),u=a(18),l=a.n(u),p=a(1),m=a.n(p),f=a(3),h=a(5),d=a(19),b=a(14),v=a(11),g=function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=I(),n={"x-api-key":S},a&&(n.Authorization="Bearer ".concat(a)),r="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map(function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(n))}):""),e.next=7,fetch(r,{headers:n});case 7:return c=e.sent,e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),_=["DestinyInventoryItemDefinition"],y=function(){var e=Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(b.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.version,console.log("Fetching fresh manifest data"),e.next=4,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log("Pruning manifest data"),Object.keys(r).forEach(function(e){_.includes(e)||delete r[e]}),console.log("Storing manifest data in IDB"),e.next=13,Object(b.b)("MANIFEST_DATA",r);case 13:return localStorage.setItem("MANIFEST_VERSION",a),e.abrupt("return",r);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=Object(f.a)(m.a.mark(function e(){var t,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.getDestinyManifest)(g);case 2:if(t=e.sent,a=localStorage.getItem("MANIFEST_VERSION"),!t||!t.Response||t.Response.version!==a||window.location.search.includes("updateManifest")){e.next=10;break}if(n){e.next=9;break}return e.next=8,y();case 8:n=e.sent;case 9:return e.abrupt("return",n);case 10:return n=void 0,e.next=13,w(t.Response);case 13:return r=e.sent,n=r,e.abrupt("return",r);case 16:case"end":return e.stop()}},e)}))()),e.abrupt("return",r);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(e,t){return Object(v.getProfile)(g,{components:[200,201,205,102,300],destinyMembershipId:t,membershipType:e})},S="d94be1e34632448fafdaf77c7afbb501",j=function(){localStorage.removeItem("bungieAccessToken"),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMemberships"),localStorage.removeItem("destinyMembership")},E=function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n,r,c,i,s,o,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u.length>1&&void 0!==u[1]&&u[1],console.log("handleTokenResponse"),j(),200!==t.status){e.next=23;break}return e.next=6,t.json();case 6:return a=e.sent,n=a.access_token,r=a.expires_in,c=Date.now()+1e3*r,i=a.membership_id,localStorage.setItem("bungieAccessToken",n),localStorage.setItem("bungieAccessTokenExpiryTime",c.toString()),localStorage.setItem("bungieMembershipId",i),e.next=16,Object(d.getMembershipDataById)(g,{membershipId:i,membershipType:254});case 16:return s=e.sent,o=s.Response.destinyMemberships,localStorage.setItem("destinyMemberships",JSON.stringify(o)),1===o.length&&M(o[0]),e.abrupt("return",{accessToken:n});case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),j(),e.next=4,fetch("https://www.bungie.net/platform/app/oauth/token/",{body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213"),cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",redirect:"follow",referrer:"no-referrer"});case 4:return a=e.sent,e.next=7,E(a);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){return localStorage.getItem("bungieAccessToken")},D=function(){var e=I(),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),a=localStorage.getItem("bungieMembershipId");return!(!e||Date.now()>=t||!a)},N=function(){var e=localStorage.getItem("destinyMemberships");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny memberships",t.message)}},C=function(){var e=localStorage.getItem("destinyMembership");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny membership",t.message)}},M=function(e){localStorage.setItem("destinyMembership",JSON.stringify(e))},R=function(){var e=Object(f.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(a=t.get("code"))||D()){e.next=6;break}return console.log("Fetching access token with auth code"),e.next=6,k(a);case 6:if(a&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname)),!D()||!N()){e.next=9;break}return e.abrupt("return",!0);case 9:console.log("Redirecting to fresh authentication for missing or expired access token, or missing destiny memberships"),j(),console.log("Redirect to auth"),j(),window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"));case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=a(13),A=a(4),B=a(7),L=a(10),P=a.n(L),W=(c={},Object(A.a)(c,"kinetic",1498876634),Object(A.a)(c,"energy",2465295065),Object(A.a)(c,"power",953998645),Object(A.a)(c,"head",3448274439),Object(A.a)(c,"gloves",3551918588),Object(A.a)(c,"chest",14239492),Object(A.a)(c,"legs",20886954),Object(A.a)(c,"classItem",1585787867),c),z=Object.entries(W).reduce(function(e,t){var a=Object(h.a)(t,2),n=a[0],r=a[1];return Object(B.a)({},e,Object(A.a)({},r,n))},{}),q=[].concat(["kinetic","energy","power"],["head","gloves","chest","legs","classItem"]),F=2,V=3,U=["titan","hunter","warlock"],H=a(2),J=a.n(H),K=function(e){var t=e.min,a=e.max,n=e.value,r=e.avgValue,c=e.label,i=e.icon,s=a-t,u=Math.floor((n-t)/s*1e3)/10,l=Math.floor((r-t)/s*1e3)/10;return o.a.createElement("div",{className:J.a.barWrapper},o.a.createElement("div",{className:J.a.iconWrapper},i&&o.a.createElement("img",{className:J.a.icon,src:"https://www.bungie.net".concat(i),alt:c})),o.a.createElement("div",{className:J.a.barContainer},o.a.createElement("div",{className:J.a.filledBar,style:{width:"".concat(u,"%")}},o.a.createElement("span",null,c)),o.a.createElement("div",{className:J.a.barLine,style:{left:"".concat(l,"%")}})))},Q=function(e){var t,a=e.data,n={chest:"Chest Armor",classItem:{hunter:"Hunter Cloak",titan:"Titan Mark",warlock:"Warlock Bond"}[a.className],energy:"Energy Weapon",gloves:"Gauntlets",head:"Helmet",kinetic:"Kinetic Weapon",legs:"Leg Armor",power:"Power Weapon"},r=q.reduce(function(e,t){return Object(B.a)({},e,Object(A.a)({},t,a.topItemBySlot?a.topItemBySlot[t].instanceData.primaryStat.value:a.overallPower))},{}),c=Math.min.apply(Math,Object(T.a)(Object.values(r))),i=Math.max(50*Math.floor(c/50)-50,0),s=Math.max.apply(Math,Object(T.a)(Object.values(r))),u=Math.min(50*Math.ceil(s/50),750),l=Math.floor(a.overallPower),p=u-i,m=Math.floor((l-i)/p*1e3)/10;return o.a.createElement("div",{className:P()(J.a.characterDisplay,J.a["class_".concat(a.className)]),style:{backgroundColor:function(e){var t=e.red,a=e.green,n=e.blue;return"rgb(".concat(t,",").concat(a,",").concat(n,")")}(a.character.emblemColor)}},o.a.createElement("div",{className:J.a.header},o.a.createElement("img",{className:J.a.emblemBackground,src:"https://www.bungie.net".concat(a.character.emblemBackgroundPath),alt:""}),o.a.createElement("div",{className:J.a.name},(t=a.className).substr(0,1).toUpperCase()+t.substr(1)),o.a.createElement("div",{className:J.a.power},l)),o.a.createElement("div",{className:J.a.powerBars},o.a.createElement("div",{className:J.a.powerRange},o.a.createElement("div",{className:J.a.minPower},i),o.a.createElement("div",{className:J.a.rangeLine}),o.a.createElement("div",{className:J.a.maxPower},u)),o.a.createElement("div",{className:J.a.bars},Object.entries(r).map(function(e){var t=Object(h.a)(e,2),r=t[0],c=t[1],s=a.topItemBySlot&&a.topItemBySlot[r];return o.a.createElement(K,{key:"".concat(a.id,"_").concat(r),min:i,max:u,value:c,avgValue:l,label:"".concat(c," ").concat(n[r]||r),icon:s&&s.itemDefinition&&s.itemDefinition.displayProperties.icon})})),o.a.createElement("div",{className:J.a.powerLabel},o.a.createElement("div",{className:J.a.indicator,style:{left:"".concat(m,"%")}},l))))},G=a(8),Z=a.n(G),$=function(e){var t=e.status;return o.a.createElement("div",{className:Z.a.loadingSpinnerContainer},o.a.createElement("div",{className:Z.a.anchor},o.a.createElement("div",{className:Z.a.spinnerLarge}),o.a.createElement("div",{className:Z.a.spinnerSmall}),o.a.createElement("div",{className:Z.a.status},t)))},X=a(12),Y=a.n(X),ee=function(e){var t=e.onMembershipSelect,a=N();if(!a)return null;if(0===a.length)return o.a.createElement("div",null,"No destiny memberships!");var n={1:"xbox",2:"psn",4:"blizzard"};return o.a.createElement("div",{className:Y.a.membershipSelect},a.map(function(e){return o.a.createElement("div",{key:e.membershipId,className:P()(Y.a.membership,Y.a["platform_".concat(n[e.membershipType])]),onClick:function(){return t(e)}},e.displayName)}))},te=a(6),ae=a.n(te),ne=function(e){return ae.a.mapValues(e,function(e){return e.instanceData.primaryStat.value})},re=function(e){return Object.values(e).reduce(function(e,t){return e+t},0)/Object.keys(W).length},ce=function(e){return Object.values(e).reduce(function(e,t){return e.concat(t.items)},[])},ie=function(e,t){return!!e.instanceData&&(!!e.instanceData.canEquip||(16===e.instanceData.cannotEquipReason||!(e.instanceData.equipRequiredLevel>t.baseCharacterLevel)))},se=function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n,r,c,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if((a=e.sent)&&a.Response&&a.Response.characters){e.next=5;break}return e.abrupt("return");case 5:if(!(n=a.Response.characters.data)){e.next=11;break}return r=function(e){var t=n[e];return{character:t,className:U[t.classType],id:e,overallPower:t.light}},c=Object.keys(n),i=c.map(function(e){return r(e)}),e.abrupt("return",i);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(f.a)(m.a.mark(function e(t,a){var n,r,c,i,s,o,u,l,p,h,d,b,_,y,w,S,j,E,k=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.length>2&&void 0!==k[2]&&k[2],e.prev=1,e.next=4,R();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:if(r=O(),a(!0),c=C()){e.next=12;break}return e.abrupt("return");case 12:return s=!0,n&&(I=c.membershipType,D=c.membershipId,(i=Object(v.getProfile)(g,{components:[200,205],destinyMembershipId:D,membershipType:I})).catch(function(){}),o=se(i).catch(function(e){}),Object(f.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o;case 2:(a=e.sent)&&s&&t(a);case 4:case"end":return e.stop()}},e)}))()),e.next=16,x(c.membershipType,c.membershipId);case 16:if(u=e.sent,a(!1),u&&u.Response&&u.Response.characters&&u.Response.characters.data&&u.Response.characterEquipment&&u.Response.characterEquipment.data&&u.Response.characterInventories&&u.Response.characterInventories.data&&u.Response.profileInventory&&u.Response.profileInventory.data&&u.Response.itemComponents&&u.Response.itemComponents.instances&&u.Response.itemComponents.instances.data){e.next=20;break}return e.abrupt("return");case 20:return l=u.Response.characters.data,p=u.Response.characterEquipment.data,h=u.Response.characterInventories.data,d=u.Response.profileInventory.data,b=u.Response.itemComponents.instances.data,e.next=27,r;case 27:if(_=e.sent){e.next=30;break}return e.abrupt("return");case 30:y=ce(h).concat(ce(p)).concat(d.items),w=y.filter(function(e){var t=e.itemHash&&_.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===V}),S=function(e){var t=l[e],a=U[t.classType],n=function(e){return e.map(function(e){var t=e.itemInstanceId?b[e.itemInstanceId]:void 0,a=_.DestinyInventoryItemDefinition[e.itemHash];return Object(B.a)({},e,{instanceData:t,itemDefinition:a})}).filter(function(e){return e.instanceData&&e.itemDefinition&&[F,V].includes(e.itemDefinition.itemType)}).map(function(e){return Object(B.a)({},e,{instanceData:e.instanceData,itemDefinition:e.itemDefinition})}).map(function(e){return Object(B.a)({},e,{slotName:z[e.itemDefinition.inventory.bucketTypeHash]})}).filter(function(e){return ie(e,t)})},r=n(h[e].items.concat(p[e].items).concat(w)),c=n(d.items).filter(function(e){return e.itemDefinition&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType)}),i=r.concat(c),s=function(e){var t=e.instanceData.primaryStat.value;return e.instanceData.isEquipped&&(t+=.1),1===e.location&&(t+=.05),t},o=function(e){return e.itemDefinition.equippingBlock.uniqueLabel},u=ae.a.groupBy(i,function(e){return e.slotName}),m=ae.a.mapValues(u,function(e){return ae.a.maxBy(e,s)}),f=ae.a.groupBy(Object.values(m).filter(o),o);ae.a.forIn(f,function(e){if(!(e.length<=1)){var t=[];if(e.forEach(function(a){var n=e.filter(function(e){return e!==a}),r=!0,c=Object(B.a)({},m);n.forEach(function(e){var t=u[e.slotName].filter(function(e){return!o(e)});t.length>0?c[e.slotName]=ae.a.maxBy(t,s):r=!1}),r&&t.push(c)}),t.length>0){var a=ae.a.maxBy(t,function(e){return ae.a.sumBy(Object.values(e),s)});m=a}}});var v=ne(m),g=re(v);return{character:t,className:a,id:e,overallPower:g,topItemBySlot:m}},j=Object.keys(l),E=j.map(function(e){return S(e)}),s=!1,t(E),e.next=44;break;case 39:return e.prev=39,e.t0=e.catch(1),console.error("Error fetching manifest and character data",e.t0),a(!1),e.abrupt("return");case 44:case"end":return e.stop()}var I,D},e,null,[[1,39]])}));return function(t,a){return e.apply(this,arguments)}}(),ue=(a(31),a(9)),le=a.n(ue),pe=function(){var e=Object(s.useState)(D()),t=Object(h.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)(function(){a||function(){var e=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:e.sent&&n(!0);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()});var r=Object(s.useState)(!!C()),c=Object(h.a)(r,2),u=c[0],l=c[1],p=Object(s.useState)(!1),d=Object(h.a)(p,2),b=d[0],v=d[1];Object(s.useEffect)(function(){Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:v(!0);case 3:case"end":return e.stop()}},e)}))()});var g=Object(s.useState)(!1),_=Object(h.a)(g,2),y=_[0],w=_[1],x=Object(s.useState)(void 0),S=Object(h.a)(x,2),j=S[0],E=S[1];Object(s.useEffect)(function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return oe(E,w,e)};a&&u&&!y&&(i||(i=setInterval(e,1e4),e(!0)))},[a,u,b,y]);var k=function(e){M(e),l(!0)},I="";return a?u?b?j&&0!==j.length||(I=y?"Fetching character data...":"No character data"):I="Fetching Destiny item manifest...":I="Waiting for Destiny platform selection...":I="Authenticating...",window.characterData=j,j&&j.length>0?o.a.createElement("div",{className:le.a.App},o.a.createElement(ee,{onMembershipSelect:k}),o.a.createElement("div",{className:le.a.charactersContainer},o.a.createElement("div",{className:le.a.characters},j.map(function(e){return o.a.createElement(Q,{key:e.id,data:e})}))),I&&o.a.createElement($,{status:I})):o.a.createElement("div",{className:le.a.App},o.a.createElement($,{status:I}),o.a.createElement(ee,{onMembershipSelect:k}))};a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={anchor:"LoadingSpinner_anchor__78Pnm",spinner:"LoadingSpinner_spinner__32tWn",spin:"LoadingSpinner_spin__3FVoi",loadingSpinnerContainer:"LoadingSpinner_loadingSpinnerContainer__2QV5S",spinnerLarge:"LoadingSpinner_spinnerLarge__KooL0",spinnerSmall:"LoadingSpinner_spinnerSmall__27lWl",status:"LoadingSpinner_status__3sgCR"}},9:function(e,t,a){e.exports={App:"App_App__15LM-",loadingContainer:"App_loadingContainer__1Pa9s",charactersContainer:"App_charactersContainer__1RSU_",characters:"App_characters__1GhrS",loadingStatus:"App_loadingStatus__3QEhd"}}},[[20,1,2]]]);
//# sourceMappingURL=main.95367554.chunk.js.map