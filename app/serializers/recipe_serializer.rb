class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :description, :ingredients, :instructions, :category, :reviews [include: => { :users }]

  # def users
  #   self.reviews.collect do |review|
  #     { :user => review.user }
  #   end
  # end

end
