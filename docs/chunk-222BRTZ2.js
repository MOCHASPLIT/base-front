import{fa as a}from"./chunk-VKQCIXF6.js";var n=function(e){return e.Active="active",e.Inactive="inactive",e}(n||{});var c=function(e){return e.Edit="edit",e.Delete="delete",e.View="visibility",e}(c||{});var p={[n.Active]:{label:"Activo",class:"confirmed"},[n.Inactive]:{label:"Inactivo",class:"rejected"}},v=[{label:"Ver",name:c.View},{label:"Editar",name:c.Edit},{label:"Eliminar",name:c.Delete}];var I=(()=>{let t=class t{constructor(){}applyFilter(r,l){let i=r.target.value;console.log("\u{1F680} ~ TableFilterService ~ dataSource:",l),console.log("\u{1F680} ~ TableFilterService ~ filterValue:",i.trim().toLowerCase()),l.filter=i.trim().toLowerCase()}};t.\u0275fac=function(l){return new(l||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var h=(()=>{let t=class t{constructor(){}isAllSelected(r,l){let i=r.selected.length,o=l.data.length;return i===o}toggleAllRows(r,l){return this.isAllSelected(r,l)?r.clear():r.select(...l.data),r}checkboxLabel(r,l,i,o){return o?`${r.isSelected(o)?"deselect":"select"} row ${Number(o[i])+1}`:`${this.isAllSelected(r,l)?"deselect":"select"} all`}};t.\u0275fac=function(l){return new(l||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{n as a,p as b,v as c,I as d,h as e};