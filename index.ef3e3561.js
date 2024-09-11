document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var l=document.createElement("label");l.className="field-label",l.htmlFor=e.id;var r=e.name.replace(/([a-z])([A-Z])/g,"$1 $2"),t=r.charAt(0).toUpperCase()+r.slice(1);l.textContent=t,e.placeholder=t,e.parentNode.insertBefore(l,e)})});
//# sourceMappingURL=index.ef3e3561.js.map
