scope module: :api do
  constraints(subdomain: 'api') do
    namespace :v1 do
      resources :items, only: %i(index)
    end
  end
end
