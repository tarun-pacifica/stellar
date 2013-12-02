Stellar::Application.routes.draw do
  root :to => 'planes#index'

  resources :passengers

  resources :reservations

  resources :flights

  resources :planes
end
