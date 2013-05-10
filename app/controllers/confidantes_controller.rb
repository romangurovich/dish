class ConfidantesController < ApplicationController
  respond_to :json

  def index
    @confidantes = current_user.confidantes
    render json: @confidantes
  end
end