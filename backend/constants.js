export const LIMIT = {
  all: 6,
  skinCare: 5,
  bodyCare: 5,
};

export const CATEGORY_NAME = {
  all: "all",
  skinCare: "스킨케어",
  bodyCare: "바디케어",
};

export const SORT_BY = {
  new: `p.created_at DESC`,
  alphabet: `binary(p.name)`,
  lowPrice: `p.price ASC`,
  highPrice: `p.price DESC`,
};
