
puts "Seeding data..."

# 5.times do
#   bakedGoods = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Bake it', category: 'Baked Goods')
#   drinks = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Pour it', category: 'Drinks')
#   entrees = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Cook it', category: 'Entrees')
#   sides = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Cook it', category: 'Sides')
#   # rand(1..5).times do
#   #   recipe.reviews.create(
#   #     title: Faker::Lorem.sentence, 
#   #     content: Faker::Markdown.sandwich(sentences: rand(3..6), repeat: rand(2..5)),
#   #     minutes_to_read: rand(3..50)
#   #   )
#   # end
# end

user1 = User.create(username: 'Test1', password: 'Pass1')
user2 = User.create(username: 'Test2', password: 'Pass2')

recipe1 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Baked Good One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Bake it', category: 'Baked Goods', user_id: 1)
recipe1.reviews.create(user_id: 1, recipe_id: recipe1.id, review_text: "This recipe was bad")
recipe1.reviews.create(user_id: 2, recipe_id: recipe1.id, review_text: "This recipe was good")

recipe2 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Baked Good Two', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Bake it', category: 'Baked Goods', user_id: 1)
recipe3 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Baked Good Three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Bake it', category: 'Baked Goods', user_id: 2)
recipe4 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Drink One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Mix it', category: 'Drinks', user_id: 1)

recipe5 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Drink Two', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Mix it', category: 'Drinks', user_id: 2)
recipe5.reviews.create(user_id: 2, recipe_id: recipe5.id, review_text: "This recipe was bad")
recipe5.reviews.create(user_id: 1, recipe_id: recipe5.id, review_text: "This recipe was good")


recipe6 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Drink Three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Mix it', category: 'Drinks', user_id: 2)
recipe7 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Entree One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Cook it', category: 'Entrees', user_id: 2)
recipe8 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Entree Two', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Cook it', category: 'Entrees', user_id: 1)
recipe9 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Entree Three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three, Ingredient Four, Ingredient Five', instructions: 'Cook it', category: 'Entrees', user_id: 2)
recipe10 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Side One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Cook it', category: 'Sides', user_id: 1)
recipe11 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Side Two', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Cook it', category: 'Sides', user_id: 1)
recipe12 = Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Side Three', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: 'Ingredient One, Ingredient Two, Ingredient Three', instructions: 'Cook it', category: 'Sides', user_id: 2)


puts "the right seeds"

puts "??? Done seeding"

