class CashierController < ApplicationController
  def index
    @products = Product.all
    
  end

  def add_item
    @products = Product.all
    # @product = Product.where(params[:barcode])
    p 'lo que viene de alla'
    @valor2 = params[:product][:name]
    p @valor2
    @valor = '5451515'
    respond_to do |format|
      format.js 
    end

  end
end
