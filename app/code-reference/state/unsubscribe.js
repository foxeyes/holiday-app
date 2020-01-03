let subscription = HdState.subscribe('ui.loading', (val) => {
  console.log(val);
});

window.setTimeout(() => {
  // Unsubscribe:
  subscription.remove();
}, 10000);
