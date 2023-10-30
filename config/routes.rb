Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root 'static#index'
  
  # API endpoint for random greeting
  get '/random_greeting', to: 'greetings#random'
end
