module.exports = function sortCategories (categories) {
  const parentCategories = categories.filter((category) => category.parent_id === null);
  const nonParentCategories = categories.filter((category) => category.parent_id !== null);
  const sortedCategories = parentCategories;
  
  for (const category of sortedCategories) {
    for (const [index, childCategory] of nonParentCategories.entries()) {
      // If child categories found, push them in response and remove from input categories
      if (childCategory.parent_id === category.id) {
        sortedCategories.push(childCategory);
        nonParentCategories.splice(index, 1);
      }
    }
  }

  return sortedCategories;
}