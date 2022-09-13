
puts "Seeding data..."

5.times do
  bakedGoods = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Bake it', category: 'Baked Goods')
  drinks = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Pour it', category: 'Drinks')
  entrees = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Cook it', category: 'Entrees')
  sides = Recipe.create(photo: Faker::LoremFlickr.image, title: Faker::Food.dish, description: Faker::Food.description, ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient], instructions: 'Cook it', category: 'Sides')
  # rand(1..5).times do
  #   recipe.reviews.create(
  #     title: Faker::Lorem.sentence, 
  #     content: Faker::Markdown.sandwich(sentences: rand(3..6), repeat: rand(2..5)),
  #     minutes_to_read: rand(3..50)
  #   )
  # end
end


puts "✅ Done seeding"

