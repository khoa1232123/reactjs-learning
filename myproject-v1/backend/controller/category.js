const Category = require('../models/category');
const slugify = require('slugify');

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      description: cate.description,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.createCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
    description: req.body.description,
  };

  // if (req.file) {
  //   categoryObj.categoryImage = `${process.env.APP_API}public/${req.file.filename}`;
  // }

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      // const categoryList = createCategories(categories);
      return res.status(200).json({ categoryList: categories });
    }
  });
};

exports.updateCategory = async (req, res) => {
  console.log(req.body);
  const { _id, name, parentId, description } = req.body;
  const category = {
    name,
    slug: slugify(name),
    description,
  };
  if (parentId !== '') {
    category.parentId = parentId;
  }
  const updatedCategory = await Category.findOneAndUpdate(
    { _id: _id },
    category,
    {
      new: true,
    }
  );
  res.status(201).json({ updatedCategory });
};

exports.deleteCategory = async (req, res) => {
  console.log(req.body);
  const deleteCat = await Category.findOneAndDelete({ _id: req.body.id });
  if (deleteCat) {
    res.status(201).json({ message: 'Categories removed' });
  } else {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
