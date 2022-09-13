class RecipesController < ApplicationController

  def create
    recipe = Recipe.create(name: params[:name], avatar: params[:avatar], health: params[:health], evil: params[:evil], strength: params[:strength], defense: params[:defense], luck: params[:luck], user_id: session[:user_id])
    if character.valid?
      render json: character, status: :created
    else
      render json: { errors: character.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    recipes = Recipe.all
    render json: recipes
  end

end