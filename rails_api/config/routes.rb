Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Auth routes
  resources :registrations, only: [:create, :update]

  resources :sessions, only: [:create] do
    delete :destroy, on: :collection
  end

  resources :invoices
end
