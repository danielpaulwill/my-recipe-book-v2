
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

Recipe.create(photo: 'https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png', title: 'Dish One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis sollicitudin mauris, in accumsan eros venenatis vitae. Donec sed consectetur augue, quis varius enim. Duis eleifend eget lorem a varius. Vivamus justo libero, rutrum id vulputate in, condimentum in sapien.', ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Bake it', category: 'Baked Goods')


puts "✅ Done seeding"

