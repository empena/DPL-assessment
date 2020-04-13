class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: {}
  end
end

  private

  def item_params
    params.require(:item).permit(:name, :image, :description, :image)
  end
end