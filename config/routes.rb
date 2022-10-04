Rails.application.routes.draw do
  
  resources :reviews, only: [:create, :index, :update, :destroy]
  resources :recipes, only: [:create, :index, :show]
  resources :users, only: [:create, :index, :show]
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/sort', to: 'recipes#sort'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
