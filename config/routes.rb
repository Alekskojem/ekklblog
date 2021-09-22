Rails.application.routes.draw do
  root 'posts#index'
  resources :posts
  devise_for :users
  get 'about', to: 'pages#about'
  #get 'sign_out' => 'users#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
