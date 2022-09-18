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
    render json: recipes, include: :reviews, status: :ok
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    reviews = recipe.reviews
    # byebug
    # nested = recipe.reviews.each do |review|
    #   recipe, review
    # end
    # reviews = recipe.reviews.all
    # results = recipe + reviews

    # if recipe
    render json: recipe, include: :reviews
  end

end
