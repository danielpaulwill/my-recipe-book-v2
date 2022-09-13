class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :photo
      t.string :title
      t.string :description
      t.string :ingredients
      t.string :instructions
      t.string :category

      t.timestamps
    end
  end
end
