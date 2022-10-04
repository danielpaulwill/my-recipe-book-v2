class RecipesController < ApplicationController

  def create
    return render json: { errors: "Not authorized, log in to create a recipe" }, status: :unauthorized unless session.include? :user_id
    recipe = Recipe.create(photo: params[:photo], title: params[:title], description: params[:description], ingredients: params[:ingredients], instructions: params[:instructions], category: params[:category], user_id: session[:user_id])
    if recipe.valid?
      render json: recipe, status: :created
    else
      render json: { errors: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    recipes = Recipe.all
    render json: recipes, status: :ok
  end

  def show
    user = User.find_by(id: params[:id])
    user_reviews = user.reviews
    @recipes = []
    for i in user_reviews do
      @recipes << i.recipe
     end
    render json: @recipes
  end

end
