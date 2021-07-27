Rails.application.routes.draw do
  resources :products do
    collection do 
      get 'add_item', to: 'products#add_item' 
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'cajero', to: 'cashier#index'
  get 'add_items', to: 'cashier#add_item'
end
