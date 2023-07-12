Rails.application.routes.draw do
  get '/random_message', to: 'message#random_message'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root "root#index"
end
