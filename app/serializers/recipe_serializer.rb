class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :description, :ingredients, :instructions, :category, :reviews

  has_many :reviews
  has_many :users, through: :reviews
end
