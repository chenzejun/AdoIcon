// ==UserScript==
// @name         AdoIcon
// @namespace    xiba
// @version      0.1
// @description  Make ado tabs more distinguishable
// @author       zejunchen
// @match        https://*.visualstudio.com/*
// @match        https://*.azure.com/*
// @grant        window.onurlchange
// @license MIT
// ==/UserScript==

(function () {
    function getDisplayed() {
      var displayed = document.querySelectorAll("div.displayed-container")
      if(displayed.length >= 1){
          var img = displayed[0].querySelector("img")
          if(img)return img.src
      }
      return "https://cdn.vsassets.io/content/icons/favicon.ico";
    }
  
    function changePageIcon() {
      var icon = getDisplayed();
      document.getElementById("page-icon").href = icon;
    }
  
    changePageIcon();
    if (window.onurlchange === null) {
      // feature is supported
      window.addEventListener("urlchange", changePageIcon);
    }
  })();
  