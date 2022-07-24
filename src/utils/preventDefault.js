export function preventDefault(cb) {
  return (e) => {
    e.preventDefault();
    cb();
  };
}
