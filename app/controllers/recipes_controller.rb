class RecipesController < ApplicationController

  def create
    recipe = Recipe.create(photo: params[:photo], title: params[:title], description: params[:description], ingredients: params[:ingredients], instructions: params[:instructions], category: params[:category])
    if recipe.valid?
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
