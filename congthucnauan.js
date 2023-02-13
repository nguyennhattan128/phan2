var recipe = {
    'title': 'suon sao chua ngot',
    'servings': 2,
    'ingredients': ['400 g suon', '4 lit nuoc mam']
};
console.log('ten mon an' + recipe.title);
console.log(' khau phan an' + recipe.servings);
console.log('khau phan an: ');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log('-' + recipe.ingredients[i]);
}
;
