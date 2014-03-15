Stellar::Application.routes.draw do
  root :to => 'planes#index'

  resources :passengers

  resources :reservations

  get 'flights/search' => 'flights#search'

  get 'flights/seats/:id' => 'flights#seats'

  resources :flights

  resources :planes

end
