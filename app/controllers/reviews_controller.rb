class ReviewsController < ApplicationController

  def create
    review = Review.create(user_id: params[:user_id], recipe_id: params[:recipe_id], review_text: params[:review_text])
    if review.valid?
      render json: review, except: [:created_at, :updated_at], status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

end
