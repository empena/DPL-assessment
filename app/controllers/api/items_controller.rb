class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status :unprocessable_entity
  end

  private

  def item_params
    params.require(:item).permit(:name, :image, :description, :image)
  end
end