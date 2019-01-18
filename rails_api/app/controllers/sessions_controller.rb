class SessionsController < ApplicationController
  before_action :authenticate_user!, only: :destroy

  def create
    user = User.find_by_email(session_params[:email])
    if(user && user.authenticate(session_params[:password]))
      render json: user.reload, status: :created
    else
      render json: { errors: ["Invalid email or password"] }, status: :unauthorized
    end
  end

  def destroy
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
