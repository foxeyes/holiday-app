HdState.applyScheme({
  ui: {
    loading: {
      // For application reliability, value type required:
      type: Boolean,
      // Initial value:
      value: false,
    },
    sidePanelActive: {
      type: Boolean,
      value: false,
    },
  },
  user: {
    authorized: {
      type: Boolean,
      value: false,
    },
    name: {
      type: String,
      value: null,
      // Value can be cached and restored after page reload:
      cache: true,
    },
  },
});
