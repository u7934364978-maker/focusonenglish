const getText = (children) => {
  if (!children) return '';
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getText).join('');
  if (children?.props?.children) return getText(children.props.children);
  return '';
};

// Simulate some weird children
console.log('Result 1:', getText("Hello"));
console.log('Result 2:', getText(["Hello ", "World"]));
console.log('Result 3:', getText({ props: { children: "Nested" } }));
console.log('Result 4:', getText(undefined));
console.log('Result 5:', getText(null));
console.log('Result 6:', getText({}));

const text = getText(undefined) || '';
console.log('ID:', text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'));
