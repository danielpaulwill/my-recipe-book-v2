class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :review_text, :recipe
end
