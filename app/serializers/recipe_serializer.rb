class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :description, :ingredients, :instructions, :category, :reviews
end
