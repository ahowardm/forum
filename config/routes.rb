Rails.application.routes.draw do
  devise_for :users, controllers: { :omniauth_callbacks => 'callbacks' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  get '/home' => 'static_pages#home'
  get '/about' => 'static_pages#about', as: 'about'

  resources :users
end
