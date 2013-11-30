Stellar::Application.routes.draw do
  resources :passengers

  resources :reservations

  resources :flights

  resources :planes
end
