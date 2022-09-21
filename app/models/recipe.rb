class Recipe < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  belongs_to :user

  validates :photo, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :category, presence: true

end
