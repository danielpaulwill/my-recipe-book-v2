class ReviewsController < ApplicationController

  def create
    review = Review.create(user_id: session[:user_id], recipe_id: params[:recipe_id], review_text: params[:review_text])
    if review.valid?
      render json: review, except: [:created_at, :updated_at], status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # def index
  #   reviews = Review.all
  #   render json: reviews
  # end

  # def show
  #   user = User.find_by(id: session[:user_id])
  #   user_reviews = user.reviews
  #   render json: user_reviews
  # end

  def update
    review = Review.find_by(id: params[:id])
    if review
      review.update(review_params)
      render json: review
    else
      render json: { error: review.errors.full_messages }
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    head :no_content
  end


  private

  def review_params
    params.permit(:review_text)
  end

end
