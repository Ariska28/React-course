export const normolize = (items) => ({
  entities: items.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: items.map(({ id }) => id),
});
