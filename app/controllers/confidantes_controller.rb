class ConfidantesController < ApplicationController
  respond_to :json

  def index
    @confidantes = current_user.trusted_people
    render json: @confidantes
  end
end