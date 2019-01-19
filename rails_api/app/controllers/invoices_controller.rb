class InvoicesController < ApplicationController
  before_action :authenticate_user!
  before_action :invoices_data, except: :create

  def index
    render json: @invoices.order_by_date
  end

  def show
    invoice = @invoices.find_by(id: params[:id])
    if invoice.present?
      render json: invoice, status: :ok
    else
      render json: { errors: '404 not found'}, status: :not_found
    end
  end

  def create
    invoice = current_user.invoices.new(invoices_params)
    if invoice.save
      render json: invoice, status: :ok
    else
      render json: { errors: invoice.errors.full_messages }, status: :bad_request
    end
  end

  def update
    invoice = @invoices.find_by(id: params[:id])

    if invoice.present? && invoice.update(invoices_params)
      render json: invoice, status: :ok
    else
      render json: { errors: invoice.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    invoice = invoices_data.find(params[:id])
    invoice.destroy
    head :no_content
  end

  private

  def invoices_params
    params.require(:invoices).permit(:number, :invoice_date)
  end

  def invoices_data
    @invoices = current_user.invoices
  end
end
