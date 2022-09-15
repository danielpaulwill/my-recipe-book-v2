class ReviewsController < ApplicationController

  def create
    review = Review.create(user_id: params[:user_id], recipe_id: params[:recipe_id], review_text: params[:review_text])
    if review.valid?
      render json: review, except: [:created_at, :updated_at], status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: 1)
    @reviews
    user.reviews.each do |review|
      @reviews << {review, review.recipe}
    end
    # reviews = user.reviews.all
    # byebug
    render json: @reviews
  end

  def index
    reviews = Review.all
    render json: reviews
  end

end
