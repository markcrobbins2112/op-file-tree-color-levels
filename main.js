const { Plugin } = require('obsidian');

module.exports = class FileTreeColorLevelsPlugin extends Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.observer = null;
    this.tooltipEl = null;
  }

  async onload() {
    console.log('%c[File Tree Levels]%c Initializing Folder Depth & Tooltip Engine...', 'color: #38ef7d; font-weight: bold;', 'color: default;');

    // 1. Inject the universal layout style sheets and tooltip positioning classes
    this.injectStyles();

    // 2. Initialize the single, shared global tooltip DOM element node layer
    this.createTooltipElement();

    // 3. Run an immediate initial sweep once the core workspace layouts are ready
    this.app.workspace.onLayoutReady(() => this.calculateFileTreeDepths());

    // 4. Re-evaluate depths whenever layout panels toggle or structural leaves shift
    this.registerEvent(
      this.app.workspace.on('layout-change', () => this.calculateFileTreeDepths())
    );

    // 5. Set up a MutationObserver to instantly capture expanding/collapsing folder trees
    this.initializeFileTreeObserver();

    // 6. Register high-performance global event delegation for the mouse hover tooltip tracking
    this.registerDomEvent(document.body, 'mouseover', (evt) => this.handleFileTreeHover(evt));
    this.registerDomEvent(document.body, 'mousemove', (evt) => this.moveTooltipPosition(evt));
    this.registerDomEvent(document.body, 'mouseout', (evt) => this.hideFileTreeTooltip(evt));
  }

  onunload() {
    console.log('%c[File Tree Levels]%c Stripping depth markers and restoring theme layouts...', 'color: #38ef7d; font-weight: bold;', 'color: default;');
    
    if (this.observer) this.observer.disconnect();
    if (this.tooltipEl) this.tooltipEl.remove();

    const styleEl = document.getElementById('obsidian-file-tree-color-levels');
    if (styleEl) styleEl.remove();

    // Wipe attributes to completely restore original theme behavior cleanly
    const stampedItems = document.querySelectorAll('[data-nav-depth]');
    stampedItems.forEach(item => item.removeAttribute('data-nav-depth'));
  }

  initializeFileTreeObserver() {
    this.observer = new MutationObserver((mutations) => {
      let shouldProcess = false;
      for (let i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          shouldProcess = true;
          break;
        }
      }
      if (shouldProcess) {
        this.calculateFileTreeDepths();
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  calculateFileTreeDepths() {
    const navFolders = document.querySelectorAll('.tree-item.nav-folder');
    
    navFolders.forEach((folder) => {
      let depth = 0;
      let currentParent = folder.parentElement;

      while (currentParent) {
        if (currentParent.classList.contains('nav-folder') && currentParent.classList.contains('tree-item')) {
          depth++;
        }
        if (currentParent.classList.contains('nav-files-container')) {
          break;
        }
        currentParent = currentParent.parentElement;
      }

      const depthString = String(depth);
      if (folder.getAttribute('data-nav-depth') !== depthString) {
        folder.setAttribute('data-nav-depth', depthString);
      }
    });
  }

  // Single instantiation factory for our hidden floating tooltip element
  createTooltipElement() {
    this.tooltipEl = document.createElement('span');
    this.tooltipEl.id = 'obsidian-file-tree-spectrum-tooltip';
    this.tooltipEl.className = 'file-tree-spectrum-tooltip-hidden';
    document.body.appendChild(this.tooltipEl);
  }

  // Event Delegation Interceptor: Runs when the mouse hits any item inside the file explorer sidebar panel
  handleFileTreeHover(evt) {
    const target = evt.target.closest('.tree-item-self');
    if (!target) return;

    const innerTitleEl = target.querySelector('.tree-item-inner, .nav-folder-title-content, .nav-file-title-content');
    if (!innerTitleEl) return;

    const breadcrumbs = [];
    let currentItem = target.closest('.tree-item');

    while (currentItem) {
      const selfTitleEl = currentItem.querySelector('.tree-item-self .tree-item-inner');
      if (selfTitleEl) {
        const textVal = selfTitleEl.textContent.trim();
        if (textVal) {
          breadcrumbs.unshift(textVal); // Push items to front to preserve root-to-child order
        }
      }
      
      const parentFolder = currentItem.parentElement.closest('.tree-item.nav-folder');
      if (!parentFolder || currentItem.parentElement.classList.contains('nav-files-container')) {
        break;
      }
      currentItem = parentFolder;
    }

    if (breadcrumbs.length > 0) {
      this.tooltipEl.textContent = breadcrumbs.join(' ➔ ');
      this.tooltipEl.className = 'file-tree-spectrum-tooltip-visible';
    }
  }

  moveTooltipPosition(evt) {
    if (this.tooltipEl && this.tooltipEl.className === 'file-tree-spectrum-tooltip-visible') {
      this.tooltipEl.style.left = (evt.clientX + 15) + 'px';
      this.tooltipEl.style.top = (evt.clientY + 15) + 'px';
    }
  }

  hideFileTreeTooltip(evt) {
    const target = evt.target.closest('.tree-item-self');
    if (target && this.tooltipEl) {
      this.tooltipEl.className = 'file-tree-spectrum-tooltip-hidden';
    }
  }

  injectStyles() {
    if (document.getElementById('obsidian-file-tree-color-levels')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'obsidian-file-tree-color-levels';

    // Core layout schemes built using a 10% lower resting lightness baseline profile.
    // Full color values seamlessly activate on mouse hover states.
    const colorsMap = {
      "0": { rest: "hsl(0, 75%, 35%)",   hover: "hsl(0, 75%, 45%)" },    // Red
      "1": { rest: "hsl(280, 70%, 35%)", hover: "hsl(280, 70%, 45%)" },  // Purple
      "2": { rest: "hsl(210, 75%, 35%)", hover: "hsl(210, 75%, 45%)" },  // Blue
      "3": { rest: "hsl(120, 65%, 30%)", hover: "hsl(120, 65%, 40%)" },  // Green
      "4": { rest: "hsl(50, 80%, 30%)",  hover: "hsl(50, 80%, 40%)" },   // Yellow
      "5": { rest: "hsl(25, 80%, 35%)",  hover: "hsl(25, 80%, 45%)" }    // Orange
    };

    let cssRules = `
      .tree-item.nav-folder {
        box-sizing: border-box !important;
        transition: border-color 0.25s ease, border-image 0.25s ease, margin 0.25s ease !important;
        margin-top: 2px !important;
        margin-bottom: 2px !important;
      }
      .tree-item-children {
        padding-inline-start: unset !important;
        margin-inline-start: var(--nav-item-children-margin-start, var(--nav-item-children-margin-left)) !important;
        border-inline-start: none !important;
      }

      #obsidian-file-tree-spectrum-tooltip {
        position: fixed !important;
        z-index: 99999 !important;
        pointer-events: none !important;
        padding: 6px 10px !important;
        background-color: var(--background-floating, #2a2a2a) !important;
        color: var(--text-normal, #ffffff) !important;
        font-size: 11px !important;
        font-family: var(--font-interface, sans-serif) !important;
        border: 1px solid var(--background-modifier-border, #444444) !important;
        border-radius: 4px !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
        white-space: nowrap !important;
      }
      
      .file-tree-spectrum-tooltip-hidden {
        display: none !important;
        visibility: hidden !important;
      }
      
      .file-tree-spectrum-tooltip-visible {
        display: inline-block !important;
        visibility: visible !important;
      }
    `;

    Object.keys(colorsMap).forEach((depthKey) => {
      const colors = colorsMap[depthKey];

      cssRules += `
        /* Resting State: 10% Darker borders */
        .tree-item.nav-folder[data-nav-depth="${depthKey}"],
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 6}"],
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 12}"] {
          border-left: 2px solid ${colors.rest} !important;
          border-bottom: 1px solid transparent !important;
          border-image: linear-gradient(to right, ${colors.rest}, transparent) 1 !important;
        }

        /* Hover State: Bring up to normal vibrant full-spectrum hue lightness levels */
        .tree-item.nav-folder[data-nav-depth="${depthKey}"]:hover,
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 6}"]:hover,
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 12}"]:hover {
          border-left: 2px solid ${colors.hover} !important;
          border-image: linear-gradient(to right, ${colors.hover}, transparent) 1 !important;
        }
      `;
    });

    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
  }
};
