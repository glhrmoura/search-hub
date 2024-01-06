const sort = (tree: any[]) => {
  return tree.sort((a: any, b: any) => a.type > b.type ? -1 : 1);
};

const parse = (tree: any[]) => {
  return sort(tree).reduce((acc, item) => {
    let current = acc;
    const path = item.path.split('/');

    path.forEach((segment: any, index: any) => {
      if (index === path.length - 1) {
        current[segment] = item;
      } else {
        current[segment] = current[segment] || {};
        current = current[segment];
      }
    });

    return acc;
  }, {});
};

export const TreeUtil = {
  sort,
  parse,
};