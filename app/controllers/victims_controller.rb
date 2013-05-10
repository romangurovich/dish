class VictimsController < ApplicationController
  respond_to :json

  def index
    @victims = current_user.victims
    render json: @victims
  end
end