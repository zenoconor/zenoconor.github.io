if (!window.__offlineMapping) {
	window.__offlineMapping = {
		"https://zenoconor.wixsite.com/prototype": "prototype.html",
	};

	(function() {
		var swapLink = function(a) {
			var url = a.href,
				key = url.split("#")[0],
				hash = url.substr(key.length);
			if (__offlineMapping[key]) {
				a.setAttribute("data-offline-href", url);
				a.href = __offlineMapping[key] + hash;
			}
		};

		document.addEventListener("DOMContentLoaded", function() {
			[].forEach.call(document.querySelectorAll("a[href^=http]"), swapLink);
		});

		document.addEventListener("click", function(e) {
			var a = e.target;
			if (a.tagName !== "A" || a.protocol === "file:") return;
			swapLink(a);
		}, false);
	})();
}
