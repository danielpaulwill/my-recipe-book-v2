class RecipesController < ApplicationController

  def create
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
    user_recipes = user.recipes
    
    render json: user_recipes
  end

end
