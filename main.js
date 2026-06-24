const { Plugin } = require('obsidian');

module.exports = class FileTreeColorLevelsPlugin extends Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.observer = null;
  }

  async onload() {
    console.log('%c[File Tree Levels]%c Initializing 6-Step Folder Depth Color Engine...', 'color: #38ef7d; font-weight: bold;', 'color: default;');

    // 1. Inject the universal layout style sheets into the document head context
    this.injectStyles();

    // 2. Run an immediate initial sweep once the core workspace layouts are ready
    this.app.workspace.onLayoutReady(() => this.calculateFileTreeDepths());

    // 3. Re-evaluate depths whenever layout panels toggle or structural leaves shift
    this.registerEvent(
      this.app.workspace.on('layout-change', () => this.calculateFileTreeDepths())
    );

    // 4. Set up a MutationObserver to instantly capture expanding/collapsing folder trees
    this.initializeFileTreeObserver();
  }

  onunload() {
    console.log('%c[File Tree Levels]%c Stripping depth markers and restoring theme layouts...', 'color: #38ef7d; font-weight: bold;', 'color: default;');
    
    if (this.observer) this.observer.disconnect();

    const styleEl = document.getElementById('obsidian-file-tree-color-levels');
    if (styleEl) styleEl.remove();

    // Wipe attributes to completely restore original theme behavior cleanly
    const stampedItems = document.querySelectorAll('[data-nav-depth]');
    stampedItems.forEach(item => item.removeAttribute('data-nav-depth'));
  }

  initializeFileTreeObserver() {
    // Intercepts newly rendered file rows right as a human expands directory trees
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
    // Target precisely the structural navigation folder tree elements requested
    const navFolders = document.querySelectorAll('.tree-item.nav-folder');
    
    navFolders.forEach((folder) => {
      let depth = 0;
      let currentParent = folder.parentElement;

      // Climb up the DOM tree, counting parent folders to evaluate accurate depth parameters
      while (currentParent) {
        if (currentParent.classList.contains('nav-folder') && currentParent.classList.contains('tree-item')) {
          depth++;
        }
        if (currentParent.classList.contains('nav-files-container')) {
          break;
        }
        currentParent = currentParent.parentElement;
      }

      // Stamp the calculated level parameter string attribute (0-indexed based on container wrapping)
      const depthString = String(depth);
      if (folder.getAttribute('data-nav-depth') !== depthString) {
        folder.setAttribute('data-nav-depth', depthString);
      }
    });
  }

  injectStyles() {
    if (document.getElementById('obsidian-file-tree-color-levels')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'obsidian-file-tree-color-levels';

    const colorsMap = {
      "0": "hsl(0, 75%, 45%)",    // Level 0: Red
      "1": "hsl(280, 70%, 45%)",  // Level 1: Purple
      "2": "hsl(210, 75%, 45%)",  // Level 2: Blue
      "3": "hsl(120, 65%, 40%)",  // Level 3: Green
      "4": "hsl(50, 80%, 40%)",   // Level 4: Yellow
      "5": "hsl(25, 80%, 45%)"    // Level 5: Orange
    };

    let cssRules = `
      /* Apply resets and transitions exclusively onto structural folder blocks */
      .tree-item.nav-folder {
        box-sizing: border-box !important;
        transition: border 0.25s ease !important;
        margin-top: 2px !important;
        margin-bottom: 2px !important;
      }
    `;

    // Map out the 6 strict color steps sequentially. 
    // Uses a modulo pattern fallback to wrap back smoothly to Red if folders exceed 6 layers deep.
    Object.keys(colorsMap).forEach((depthKey) => {
      const targetColor = colorsMap[depthKey];

      cssRules += `
        /* Matches exact level depth, and loops infinitely down using CSS attribute matching strings */
        .tree-item.nav-folder[data-nav-depth="${depthKey}"],
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 6}"],
        .tree-item.nav-folder[data-nav-depth$="${parseInt(depthKey) + 12}"] {
          border-left: 3px solid ${targetColor} !important;
          border-bottom: 2px solid transparent !important;
          border-image: linear-gradient(to right, ${targetColor}, transparent) 1 !important;
        }
      `;
    });

    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
    console.log('[File Tree Levels] 6-Step custom folder spectrum rules appended successfully.');
  }
};
