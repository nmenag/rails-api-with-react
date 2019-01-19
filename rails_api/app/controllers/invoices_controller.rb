class InvoicesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.invoices.order_by_date
  end
end
