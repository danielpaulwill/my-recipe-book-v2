class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :review_text, :user except: [:password, :password_digest, :created_at, :updated_at]
end
