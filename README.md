ASSUMPTIONS & APPROACH
==
* browser-ready: avoided usage of task runners, builders, transpilers
* browsers support: tested on last version of Chrome, Safari, Firefox. Surely won't work well on old browsers (IE8) due to usage of some CSS3 attributes
* dependencies: jQuery and fonts imported from CDN
  * They could be imported at compile time via NPM/Bower but without knowing the deploy system of our client, I'd rather prefer to wait for further requirements
* For this reason files are not merged, minified and uglified. This is something we can easily do later, after the approval of the UX and UI  
* old browsers compatibility
* header with a background opacit to avoid unreadable text while scrolling with white content behind it
* made for desktops, it is responsive but does not handle mobile devices

IMPROVEMENTS
==
* use of SASS/LESS could improve readability of CSSs and let use variables instead of repeating concepts N times in CSS
* code re-use could be still improved, e.g. list in frame_2 could be detached from that frame, so that could be re-used on other lists
* handle how it should be on mobile devices