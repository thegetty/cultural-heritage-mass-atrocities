// Use this file to add custom JavaScript
//
// A number of JavaScript functions and libraries are included with Quire,
// to see which ones, check the files in themes/quire-starter-theme/source/js // and the list of dependencies in themes/quire-starter-theme/package.json

// Adds optional word break points into long URLs that appear in the text
(function() {
  // Get all links except those that are inside .quire-nav-button which include
  // SVG icons and will erronesously match the if statement below, as well as
  // any links/text explicitly marked as a .url-string, such as in the
  // Cite This Page partial
  const links = document.querySelectorAll('*:not(.quire-nav-button) > a, .url-string')

  Array.prototype.forEach.call(links, link => {

    // Check if text inside the link includes "http" and so is a URL.
    // The limitation of this method is that if there is more than just text
    // inside the link, like other html elements, and they include "http"
    // they'll match. Would be better to limit the innerHTML search to
    // childNodes that have a TEXT_NODE type.
    if(link.innerHTML.indexOf("http") !== -1) {

      // For links that are URLs, add word break html elements, <wbr>, in
      // appropriate places, as specified in Chicago Manual of Style 17, 14.18
      // https://www.chicagomanualofstyle.org/book/ed17/part3/ch14/psec018.html
      link.innerHTML = link.innerHTML.replace(/\//g,"<wbr>/")
                                     .replace(/\~/g,"<wbr>~")
                                     .replace(/\./g,"<wbr>.")
                                     .replace(/\,/g,"<wbr>,")
                                     .replace(/\-/g,"<wbr>-")
                                     .replace(/\_/g,"<wbr>_")
                                     .replace(/\?/g,"<wbr>?")
                                     .replace(/\#/g,"<wbr>#")
                                     .replace(/\%/g,"<wbr>%")
                                     .replace(/\=/g,"<wbr>=")
                                     .replace(/\&/g,"<wbr>&")
                                     .replace(/<wbr>\/<wbr>\//g,"//<wbr>")
                                     .replace(/\:/g,":<wbr>");
    }

  })
})();

// For the translations that appear at the top of each essay
// from https://inclusive-components.design/tabbed-interfaces/
(function() {
  // Get relevant elements and collections
  const tabbed = document.querySelector('.tabbed');
  const tablist = tabbed.querySelector('ul');
  const tabs = tablist.querySelectorAll('a');
  const panels = tabbed.querySelectorAll('[id^="lang"]');

  // The tab switching function
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }

  // Add the tablist role to the first <ul> in the .tabbed container
  tablist.setAttribute('role', 'tablist');

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Initially activate the third tab [English] and reveal the third tab panel
  tabs[2].removeAttribute('tabindex');
  tabs[2].setAttribute('aria-selected', 'true');
  panels[2].hidden = false;
})();
