class CashierController < ApplicationController
  def index
    @products = Product.all
    
  end

  def add_item
    @products = Product.all

    respond_to do |format|
      format.js {render layout: false}
    end

  end
end
