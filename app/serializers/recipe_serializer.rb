class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :description, :ingredients, :instructions, :category, :reviews, :user_id

  has_many :reviews
end
