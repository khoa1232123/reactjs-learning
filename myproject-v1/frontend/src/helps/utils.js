export const convertCats = (categories, parentId = null) => {
  const categoryList = [];
  let cats;
  if (parentId && parentId !== null) {
    cats = categories.filter((cat) => cat.parentId === parentId);
  } else {
    cats = categories.filter(
      (cat) => cat.parentId === null || cat.parentId === undefined
    );
  }
  for (let cat of cats) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      parentId: cat.parentId,
      description: cat.description,
      children: convertCats(categories, cat._id),
    });
  }
  return categoryList;
};
