json.extract! product, :id, :name, :count, :price, :created_at, :updated_at
json.url product_url(product, format: :json)
