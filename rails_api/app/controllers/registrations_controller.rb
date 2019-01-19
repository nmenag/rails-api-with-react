class RegistrationsController < ApplicationController
  before_action :authenticate_user!, only: :update

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def update
    user = current_user
    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
